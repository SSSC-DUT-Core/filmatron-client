"use client";

import { Inter } from "next/font/google";

import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apollo-client";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <html lang="en">
                <body className={inter.className}>
                    <ApolloProvider client={client}>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                        >
                            <ToastProvider />
                            <ModalProvider />
                            {children}
                        </ThemeProvider>
                    </ApolloProvider>
                </body>
            </html>
        </>
    );
}
