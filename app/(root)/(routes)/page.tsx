"use client";

import { useEffect } from "react";
import { Role, useSignInWithSocialMutation } from "@/graphql/generated";
import { HomePage } from './(homepage)/index';





const Home = () => {

    const [signInWithSocialMutation, { data, loading, error }] = useSignInWithSocialMutation();
    useEffect(() => {
        if (sessionStorage.getItem("access_token")) {
            signInWithSocialMutation(
                {
                    variables: {
                        input: { 
                            publicKey: "",
                            role: Role.User
                         },
                    },
                    context: {
                        headers: {
                            Authorization: sessionStorage.getItem("access_token"),
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
