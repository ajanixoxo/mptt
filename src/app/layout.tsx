import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="svg" href="/favicon.svg" />
      </head>
      <body className={` text-white`}>
        <div className="">
          <div className="flex-grow">{children}</div>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
