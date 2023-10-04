// import ClientOnly from '#/components/ClientOnly';

// import { FilmDetails } from './FilmDetail/index.jsx';

import { FilmDetails } from './FilmDetail/index';

import { FilmRow } from './FilmRow';

import {LiveFilmSection} from './LiveFilmSection';

import {LiveFilms, films,  FilmData, FilmCardInRowProps, sectionFilmRow, listOfSectionFilmRows, SectionFilmRowsPopularOfWeek} from './data';

export const HomePage = ()=> {
    return (
      <div className=""
        style={{
          padding: '0px 80px',
          // border: '2px solid black',
        }}
      >
        <FilmDetails/>
        {
          SectionFilmRowsPopularOfWeek.map((sectionFilmRow: sectionFilmRow) => (
            <FilmRow
              // key={sectionFilmRow.title}
              filmRowTitle={sectionFilmRow.filmRowTitle}
              filmRow={sectionFilmRow.filmRow}
            />
          ))
        }

        <LiveFilmSection
         
        />

        {
          listOfSectionFilmRows.map((sectionFilmRow: sectionFilmRow) => (
            <FilmRow
              // key={sectionFilmRow.title}
              filmRowTitle={sectionFilmRow.filmRowTitle}
              filmRow={sectionFilmRow.filmRow}
            />
          ))
        }
        
        {/* <FilmRow 
        /> */}

        
        {/* <homepageDetailPoster/> */}
        {/* <MediaRow/> */}
      </div>
    )
}