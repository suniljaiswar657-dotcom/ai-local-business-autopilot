import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autopilot — Local Business OS",
  description: "One workspace for customer support, leads, content, follow-ups, and business insights.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
