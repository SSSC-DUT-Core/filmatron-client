"use client";

import { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { HomePage } from './(homepage)/index';


const mutation = gql`
    mutation SignIn($input: SignInDto!) {
        signIn(input: $input) {
            accessToken
            refreshToken
            person {
                id
                name
                email
            }
        }
    }
`;

const Home = () => {
    const [loginWithToken, { data, loading, error }] = useMutation(mutation);

    useEffect(() => {
        if (sessionStorage.getItem("access_token")) {
            loginWithToken({
                variables: {
                    input: { publicKey: "your_public_key_here" },
                },
                context: {
                    headers: {
                        Authorization: sessionStorage.getItem("access_token"),
                    },
                },
            });
        }
    }, []);

    return (
         <HomePage />
    );
};
export default Home;
