import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { compare } from "bcryptjs"
import type { JWT } from "next-auth/jwt"
import type { Session } from "next-auth"

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<{ id: string; email: string; name: string; role: string } | null> {
        if (!credentials?.email || !credentials?.password) return null

        // Find user by email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user) return null

        // Check if user is an admin
        const admin = await prisma.admin.findFirst({
          where: { userId: user.id },
        })

        if (!admin) return null

        // Check password
        const isPasswordValid = await compare(credentials.password, user.password)
        if (!isPasswordValid) return null

        return {
          id: user.id,
          email: user.email,
          name: admin.name,
          role: admin.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        token.id = user.id
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }): Promise<Session> {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          role: token.role as string,
        },
      }
    },
  },
}
