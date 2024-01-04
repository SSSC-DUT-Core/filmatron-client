"use client";

import { Inter } from "next/font/google";

import { ModalProvider } from "@/src/providers/modal-provider";
import { ToastProvider } from "@/src/providers/toast-provider";
import { ThemeProvider } from "@/src/providers/theme-provider";
import { TourProvider } from "@reactour/tour";
import "./globals.css";
import { ApolloWrapper } from "@/src/config/apollo-wrapper";
import { steps } from "@/src/components/steps";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  const onCloseTour = () => {
    localStorage?.setItem("guild_tour_status", "done");
  };
    return (
        <>
            <html lang="en">
                <body className={inter.className}>
                    <ApolloWrapper>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                        >
                            <TourProvider
                                steps={steps}
                                beforeClose={onCloseTour}
                            >
                                <ToastProvider />
                                <ModalProvider />
                                {children}
                            </TourProvider>
                        </ThemeProvider>
                    </ApolloWrapper>
                </body>
            </html>
        </>
    );
}
