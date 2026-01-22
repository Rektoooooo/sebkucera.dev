import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Habit Owl - Build Habits That Actually Stick",
  description: "Track your daily habits, sync with Apple Health, and watch your streaks grow. The beautiful iOS habit tracking app with your personal owl companion.",
  keywords: ["habit tracker", "iOS app", "habit tracking", "Apple Health", "productivity", "daily habits", "streak tracking"],
  authors: [{ name: "Sebastian Kucera" }],
  openGraph: {
    title: "Habit Owl - Build Habits That Actually Stick",
    description: "Track your daily habits, sync with Apple Health, and watch your streaks grow.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habit Owl - Build Habits That Actually Stick",
    description: "Track your daily habits, sync with Apple Health, and watch your streaks grow.",
  },
  icons: {
    icon: "/images/HabitFlow_AppIcon.jpg",
    apple: "/images/HabitFlow_AppIcon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
