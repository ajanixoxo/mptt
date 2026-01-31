import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
// import { ThemeProvider } from "next-themes";
export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="">
    
        <div className="flex-grow">{children}</div>
        <Analytics />
      </body>
    </html>
 
  );
}
