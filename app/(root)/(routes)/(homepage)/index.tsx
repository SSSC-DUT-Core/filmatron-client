import { FilmDetails } from "./FilmDetail/index";
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
import { FilmPosterDetail } from "./filmPosterDetail/index.jsx";


const filmPosterDetailData = {
  posterSrc: '/assets/images/film1.png',
  title: 'Wednesday',
  logoSrc: '/assets/images/Logo-Wednesday.png',
  description: "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
  rating: 8.2,
  duration: 130,
  releaseDate: 'Sep 23 2023',
  genres: ['Drama', 'Adventure'], 

  stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
  director: 'Simon McQuoid',

  NFTClaimImg: './assets/NFTs/NFT4.png',
  NFTEventName: 'Wednesday',

  expirationDate: '2023-10-18T12:30:00',

  trailerVideo: 'link vid from youtube',
  trailerImg: '/assets/images/film1.png',

  eventImg: './assets/filmDetail/gallery/galleryImg1.png',
}

export const HomePage = () => {
    return (
      <div className=""
        style={{
          padding: '0px 80px',
          // border: '2px solid black',
        }}
      >
     

        <FilmPosterDetail
          posterSrc={filmPosterDetailData.posterSrc}
          title={filmPosterDetailData.title}
          logoSrc={filmPosterDetailData.logoSrc}
         
         
          duration={filmPosterDetailData.duration} 
          releaseDate={filmPosterDetailData.releaseDate}
          genres={filmPosterDetailData.genres}
          stars={filmPosterDetailData.stars}
          director={filmPosterDetailData.director}

          NFTClaimImg={filmPosterDetailData.NFTClaimImg}
          NFTEventName={filmPosterDetailData.NFTEventName}
          expirationDate={filmPosterDetailData.expirationDate}

          trailerVideo={filmPosterDetailData.trailerVideo}
          trailerImg={filmPosterDetailData.trailerImg}
          eventImg={filmPosterDetailData.eventImg}

        />

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

        
        {/* <homepageDetailPoster/> */}
        {/* <MediaRow/> */}
      </div>
    )
}