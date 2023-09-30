import { FilmDetails } from "./FilmDetail/index.jsx";
import { FilmRow } from "./FilmRow";

import { LiveFilmSection } from "./LiveFilmSection";

import {
    LiveFilms,
    films,
    FilmData,
    FilmCardInRowProps,
    sectionFilmRow,
    listOfSectionFilmRows,
    SectionFilmRowsPopularOfWeek,
} from "./data";

// import { MediaRow } from './mediaRow.tsx';

export const HomePage = () => {
    return (
        <>
            <FilmDetails />
            {SectionFilmRowsPopularOfWeek.map(
                (sectionFilmRow: sectionFilmRow) => (
                    <FilmRow
                        key={`filmrow+${sectionFilmRow.filmRow}`}
                        filmRowTitle={sectionFilmRow.filmRowTitle}
                        filmRow={sectionFilmRow.filmRow}
                    />
                )
            )}

            <LiveFilmSection />

            {listOfSectionFilmRows.map((sectionFilmRow: sectionFilmRow) => (
                <FilmRow
                    key={`listOfSectionFilmRows+${sectionFilmRow.filmRow}`}
                    filmRowTitle={sectionFilmRow.filmRowTitle}
                    filmRow={sectionFilmRow.filmRow}
                />
            ))}

            {/* <FilmRow 
        /> */}
            {/* <MediaRow/> */}
        </>
    );
};
