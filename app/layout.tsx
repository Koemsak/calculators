import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import styles from "@/components/styles";
import { Inter } from "next/font/google";

import { ScrollArea } from "@/components/ui/scroll-area";
import NavBar from "@/components/nav-bar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculator Tool",
  description: "A collection of useful calculator tools",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} m-0 p-0 flex flex-col h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <ScrollArea className="flex-1 w-full border-t dark:border-gray-800 border-gray-100 overflow-y-auto">
            {children}
            <div className="footer_gradient">
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
