import { FilmRow } from "./FilmRow";

import { LiveFilmSection } from "./LiveFilmSection";

import {
    sectionFilmRow,
    listOfSectionFilmRows,
} from "./data";

import { FilmPosterDetail } from './filmPosterDetail';

import { PrizeTicketHomePage } from './PrizeTicketHomePage';
import { useGetFilmsQuery } from '../../../../graphql/generated/index';





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


const ticketIconUrl = './assets/icons/ticket-icon.svg';
const cinemaIconUrl = './assets/icons/cinema-icon.svg';

const prizeList = [
  {
    title: '10 free takes to the film',
    ticketLogo: './assets/ticket/ticket-logo.png',
    announcementDate: '2023-10-18T15:45:00',
    typeOfPrize: 'Ticket Event',
    prizeImg: './assets/filmDetail/gallery/galleryImg1.png',
    walletCreatorAddress: '4Y4s28YSYCuhomMEpa9wXwUotssQ5EN7EAzvUs3ZMZ9j',
    dateCreated: '2023-10-05T15:45:00.000Z', 
  },
  {
    title: '10 free takes to the film',
    announcementDate: '2023-10-18T15:45:00',
    ticketLogo: './assets/ticket/ticket-logo.png',
    typeOfPrize: 'Ticket Event',
    prizeImg: './assets/filmDetail/gallery/galleryImg1.png',
    walletCreatorAddress: '4Y4s28YSYCuhomMEpa9wXwUotssQ5EN7EAzvUs3ZMZ9j',
    dateCreated: '2023-10-05T15:45:00.000Z', 
  },
  {
    title: '10 free takes to the film',
    announcementDate: '2023-10-18T15:45:00',
    ticketLogo: './assets/ticket/ticket-logo.png',
    typeOfPrize: 'Ticket Event',
    prizeImg: './assets/filmDetail/gallery/galleryImg1.png',
    walletCreatorAddress: '4Y4s28YSYCuhomMEpa9wXwUotssQ5EN7EAzvUs3ZMZ9j',
    dateCreated: '2023-10-05T15:45:00.000Z', 
  },
]


export const HomePage = () => {
  const {data,loading,error} = useGetFilmsQuery();
    return (
      <div className=""
        style={{
          padding: '0px 80px',
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

        {/* prizeticket and redBandTrailer */}
     <div className="flex justify-between w-full pb-16">
            {/* prizeticketHomePage */}
            <div className='w-1/2'>
               {/* FilmRow header title */}
              <div className='w-full flex-start flex items-center gap-4 items-center'>
                <img
                  src={ticketIconUrl}
                  alt="Prize Ticket"
                  className="w-10 h-10" // Adjust the size as needed
                /> 
                
                <h3 className='text-white'
                  style={{
                    fontWeight: '600',
                    fontSize: '30px',
                    lineHeight: '36px',
                    flex: 'start',
                    // marginBottom: '8px',
                  }}
                >
                  
                  Win free prizes
                </h3>

              </div>
              
              <div className='flex flex-row lt-md:flex-wrap justify-around'>
                {prizeList.slice(0, 2).map((prize, index) => (
                    <PrizeTicketHomePage key={index} {...prize} />
                ))}
              </div>  
            </div>

            {/* redbandTrailerHomePage */}
            <div className='w-1/2'>
               {/* FilmRow header title */}
              <div className='w-full flex-start flex items-center gap-4 items-center'>
                <img
                  src={cinemaIconUrl}
                  alt="Prize Ticket"
                  className="w-10 h-10" // Adjust the size as needed
                /> 
                
                <h3 className='text-white'
                  style={{
                    fontWeight: '600',
                    fontSize: '30px',
                    lineHeight: '36px',
                    flex: 'start',
                    // marginBottom: '8px',
                  }}
                >
                  Red band trailer
                </h3>

              </div>
              
              <div className='flex flex-row flex-wrap justify-around'>
                {/* {prizeList.slice(0, 2).map((prize, index) => (
                    <PrizeTicketHomePage key={index} {...prize} />
                ))} */}
              </div>  
            </div>
            

           
        </div>
        <LiveFilmSection/>

        {/* Popular film */}
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