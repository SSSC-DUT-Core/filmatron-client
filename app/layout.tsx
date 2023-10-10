"use client";

import { Inter } from "next/font/google";

import { ModalProvider } from "@/src/providers/modal-provider";
import { ToastProvider } from "@/src/providers/toast-provider";
import { ThemeProvider } from "@/src/providers/theme-provider";

import "./globals.css";
import { ApolloWrapper } from "@/src/config/apollo-wrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
                            <ToastProvider />
                            <ModalProvider />
                            {children}
                        </ThemeProvider>
                    </ApolloWrapper>
                </body>
            </html>
        </>
    );
}
