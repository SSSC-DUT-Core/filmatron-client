"use client";

import { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { FilmDetails } from "./(homepage)/FilmDetail/index";
import { FilmRow } from "./(homepage)/FilmRow/index";
import { LiveFilmSection } from "./(homepage)/LiveFilmSection/index";
import {
    SectionFilmRowsPopularOfWeek,
    listOfSectionFilmRows,
    sectionFilmRow,
} from "./(homepage)/data";

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
        <>
            <FilmDetails />
            {SectionFilmRowsPopularOfWeek.map(
                (sectionFilmRow: sectionFilmRow) => (
                    <FilmRow
                        key={`title${sectionFilmRow.filmRowTitle}`}
                        filmRowTitle={sectionFilmRow.filmRowTitle}
                        filmRow={sectionFilmRow.filmRow}
                    />
                )
            )}

            <LiveFilmSection />

            {listOfSectionFilmRows.map((sectionFilmRow: sectionFilmRow) => (
                <FilmRow
                    key={`title${sectionFilmRow.filmRowTitle}`}
                    filmRowTitle={sectionFilmRow.filmRowTitle}
                    filmRow={sectionFilmRow.filmRow}
                />
            ))}
        </>
    );
};
export default Home;
