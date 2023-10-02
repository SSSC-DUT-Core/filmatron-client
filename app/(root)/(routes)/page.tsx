"use client";

import { useEffect } from "react";
import { FilmDetails } from "./(homepage)/FilmDetail/index";
import { FilmRow } from "./(homepage)/FilmRow/index";
import { LiveFilmSection } from "./(homepage)/LiveFilmSection/index";
import {
    SectionFilmRowsPopularOfWeek,
    listOfSectionFilmRows,
    sectionFilmRow,
} from "./(homepage)/data";

const Home = () => {
    useEffect(() => {
        if (sessionStorage.getItem("access_token")) {
            const url = "https://filmatron-jwks.kylan.so/api/user";
            const body = JSON.stringify({});
            fetch(url, {
                method: "GET",
                // body,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: sessionStorage.getItem("access_token") ?? "",
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    const dataFake = {
                        _id: "6514fc9e8ee40a22defddc33",
                        name: "Kiem Tran",
                        email: "kiemtran.dev@gmail.com",
                        image: "https://lh3.googleusercontent.com/a/ACg8ocLTT45XT8F4WTzFDECLti2RTGWq4GAxihao79QUMxBre8o=s96-c",
                        emailVerified: null,
                    };
                    console.log("data: ", data);
                })
                .catch(error => {
                    console.error("Fetch error:", error);
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
