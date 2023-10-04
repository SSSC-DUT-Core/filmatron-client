'client only  '

import { FilmDetails } from "./(homepage)/FilmDetail/index"
import { FilmRow } from "./(homepage)/FilmRow/index"
import { LiveFilmSection } from "./(homepage)/LiveFilmSection/index"
import { SectionFilmRowsPopularOfWeek, listOfSectionFilmRows, sectionFilmRow } from "./(homepage)/data"
// import HomePage from "./(homepage)/index"
import { HomePage } from "./(homepage)/index"



const defaultPage = ()=> {
    return (
      // <>
      //   <FilmDetails/>
      //   {
      //     SectionFilmRowsPopularOfWeek.map((sectionFilmRow: sectionFilmRow) => (
      //       <FilmRow
      //         // title={sectionFilmRow.title}
      //         filmRowTitle={sectionFilmRow.filmRowTitle}
      //         filmRow={sectionFilmRow.filmRow}
      //       />
      //     ))
      //   }

      //   <LiveFilmSection
        
      //   />

      //   <>
      //     high light
      //   </>

      //   {
      //     listOfSectionFilmRows.map((sectionFilmRow: sectionFilmRow) => (
      //       <FilmRow
      //         // title={sectionFilmRow.title}
      //         filmRowTitle={sectionFilmRow.filmRowTitle}
      //         filmRow={sectionFilmRow.filmRow}
      //       />
      //     ))
      //   }
      // </>
      // <HomePage></HomePage>
    
      <HomePage></HomePage>
        
    
    )
}
export default defaultPage