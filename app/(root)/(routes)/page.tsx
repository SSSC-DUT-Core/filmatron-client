'client only  '

import { FilmDetails } from "./(homepage)/FilmDetail/index"
import { FilmRow } from "./(homepage)/FilmRow/index"
import { LiveFilmSection } from "./(homepage)/LiveFilmSection/index"
import { SectionFilmRowsPopularOfWeek, listOfSectionFilmRows, sectionFilmRow } from "./(homepage)/data"




const Home = ()=> {
    return (
      <>
      <FilmDetails/>
      {
        SectionFilmRowsPopularOfWeek.map((sectionFilmRow: sectionFilmRow) => (
          <FilmRow
            key={"title"+sectionFilmRow.title}
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
            key={"title"+sectionFilmRow.title}
            filmRowTitle={sectionFilmRow.filmRowTitle}
            filmRow={sectionFilmRow.filmRow}
          />
        ))
      }
      </>
    )
}
export default Home