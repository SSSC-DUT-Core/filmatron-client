"use client";

import { useCallback, useEffect } from "react";
import { Role, useSignInWithSocialMutation } from "@/graphql/generated";
import { useWallet } from "@solana/wallet-adapter-react";
import { HomePage } from './(homepage)/index';





const Home = () => {
  const { wallet, publicKey, connect, disconnect, signMessage, signIn } =
      useWallet();
  
  const message =
      "To avoid digital dognappers, sign below to authenticate with Filmatron.";

  const handleSignMessage = useCallback(async () => {
      if (!publicKey || !wallet) return;

      try {
          const encodedMessage = new TextEncoder().encode(message);
          const signature = await signMessage?.(encodedMessage);
          console.log(
              `Message signed with signature: ${JSON.stringify(signature)}`
          );
      } catch (error) {
          console.error({
              status: "error",
              method: "signMessage",
          });
      }
  }, [publicKey, signMessage, wallet]);

  useEffect(() => {
    if (!publicKey || !wallet) return;

    handleSignMessage();

  }, [publicKey, wallet]);

    const [signInWithSocialMutation, { data, loading, error }] = useSignInWithSocialMutation();
    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            signInWithSocialMutation(
                {
                    variables: {
                        input: { 
                            publicKey: "test",
                            role: Role.User
                         },
                    },
                    context: {
                        headers: {
                            Authorization: localStorage.getItem("access_token"),
                        },
                    },
                }
             
            )
        }
    }, []);

    return (
         <HomePage />
    );
};
export default Home;
