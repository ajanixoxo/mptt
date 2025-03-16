// scripts/create-admin.ts
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs' // Changed from bcrypt to bcryptjs

const prisma = new PrismaClient()

async function main() {
  try {
    // Create user with hashed password
    const hashedPassword = await hash('mypath2tech_admin', 10)
    
    const user = await prisma.user.create({
      data: {
        email: 'tech@mypath2tech.ca',
        password: hashedPassword,
      },
    })
    
    // Create admin linked to user
    const admin = await prisma.admin.create({
      data: {
        userId: user.id,
        name: 'Saka Moshood',
        email: 'tech@mypath2tech.ca',
        role: 'super_admin',
      },
    })
    
    console.log('Super admin created successfully:', admin)
  } catch (error) {
    console.error('Error creating super admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()