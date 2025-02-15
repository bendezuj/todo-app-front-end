import type { Metadata } from "next";
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Todo List",
  description: "A simple todo list app with Next.js, TypeScript, and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray=-100">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
