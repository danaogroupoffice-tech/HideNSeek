import type { Metadata } from "next";
import "./globals.css";
import FormspreeProviderWrapper from "@/components/FormspreeProviderWrapper";

export const metadata: Metadata = {
  title: "Hide N Seek Child Care",
  description: "A fun, safe and nurturing space where little minds grow, play, and explore.",
  keywords: ["childcare", "early learning", "preschool", "education"],
  authors: [{ name: "Hide N Seek Child Care" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Hide N Seek Child Care",
    description: "A fun, safe and nurturing space where little minds grow, play, and explore.",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <FormspreeProviderWrapper>
          {children}
        </FormspreeProviderWrapper>
      </body>
    </html>
  );
}
