"use client";

import { Inter } from "next/font/google";

import { ModalProvider } from "@/src/providers/modal-provider";
import { ToastProvider } from "@/src/providers/toast-provider";
import { ThemeProvider } from "@/src/providers/theme-provider";
import { TourProvider } from "@reactour/tour";
import "./globals.css";
import { ApolloWrapper } from "@/src/config/apollo-wrapper";
import { steps } from "@/src/components/steps";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { Adapter, WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useCallback, useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import type {
    SolanaSignInInput,
    SolanaSignInOutput,
} from "@solana/wallet-standard-features";
import { createSignInData } from "@/src/lib/createSignInData";
import { verifySignIn } from "@solana/wallet-standard-util";
import { useRouter } from "next/navigation";


require("@solana/wallet-adapter-react-ui/styles.css");

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    // eslint-disable-next-line no-undef
    children: React.ReactNode;
}) {
  const router = useRouter();

  const onCloseTour = () => {
    sessionStorage.setItem("guild_tour_status", "done");
  };

  const network = WalletAdapterNetwork.Devnet;

   // You can also provide a custom RPC endpoint
   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

   const wallets = useMemo(
       () => [
           /**
            * Wallets that implement either of these standards will be available automatically.
            *
            *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
            *     (https://github.com/solana-mobile/mobile-wallet-adapter)
            *   - Solana Wallet Standard
            *     (https://github.com/solana-labs/wallet-standard)
            *
            * If you wish to support a wallet that supports neither of those standards,
            * instantiate its legacy wallet adapter here. Common legacy adapters can be found
            * in the npm package `@solana/wallet-adapter-wallets`.
            */
           new UnsafeBurnerWalletAdapter(),
       ],
       // eslint-disable-next-line react-hooks/exhaustive-deps
       [network]
   );

  const autoSignIn = useCallback(async (adapter: Adapter) => {
    if (!('signIn' in adapter)) return true;

    // Fetch the signInInput from the backend
    /*
    const createResponse = await fetch("/backend/createSignInData");
    const input: SolanaSignInInput = await createResponse.json();
    */
    const input: SolanaSignInInput = await createSignInData();

    // Send the signInInput to the wallet and trigger a sign-in request
    const output = await adapter.signIn(input);
    const constructPayload = JSON.stringify({input, output});

    // Verify the sign-in output against the generated input server-side
    /*
    const verifyResponse = await fetch("/backend/verifySIWS", {
      method: "POST",
      body: strPayload,
    });
    const success = await verifyResponse.json();
    */

    /* ------------------------------------ BACKEND ------------------------------------ */
    // "/backend/verifySIWS" endpoint, `constructPayload` receieved
    const deconstructPayload: { input: SolanaSignInInput; output: SolanaSignInOutput } = JSON.parse(constructPayload);
    const backendInput = deconstructPayload.input;
    const backendOutput: SolanaSignInOutput = {
      account: {
        ...output.account,
        publicKey: new Uint8Array(output.account.publicKey),
      },
      signature: new Uint8Array(output.signature),
      signedMessage: new Uint8Array(output.signedMessage),
    };

    if (!verifySignIn(backendInput, backendOutput)) {
      // eslint-disable-next-line no-console
      console.error('Sign In verification failed!')
      throw new Error('Sign In verification failed!');
    }
    /* ------------------------------------ BACKEND ------------------------------------ */
    console.log('Sign In successful!');
    router.push("/");
    return false;
  }, []);

   const autoConnect = useCallback(
       async (adapter: Adapter) => {
           adapter.autoConnect().catch(() => {
               return autoSignIn(adapter);
           });
           return false;
       },
       [autoSignIn]
   );

    return (
        <>
            <html lang="en">
                <body className={inter.className}>
                    <ConnectionProvider endpoint={endpoint}>
                        <WalletProvider
                            wallets={wallets}
                            autoConnect={autoConnect}
                        >
                            <WalletModalProvider>
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
                            </WalletModalProvider>
                        </WalletProvider>
                    </ConnectionProvider>
                </body>
            </html>
        </>
    );
}
