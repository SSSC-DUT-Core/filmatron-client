'use client'
import { useState } from 'react';



export type FilmData = {
  posterSrc: string;
  logoSrc?: string;
  description: string;

  rating: number;
  duration: number;

  // releaseDate: string;
  
  // name of actors
  // stars: string;
  
  // genres: string[];
  // director: string;
  // title: string;
};

export type FilmCardProps = {
  title: string;
  rating: number;
  duration: number;
};

export type FilmPosterProps = {
  posterSrc: string;
  logoSrc?: string;
  description: string;
  rating: number;
  duration: number;

  // stars: string;

  // releaseDate: string;

  // genres: string[];
  // director: string;
};

export type RatingProps = {
  rating: number; // Giá trị rating trong khoảng từ 0 đến 10
};

const RatingStars = ({ rating }: RatingProps) => {
  const totalStars = 5; // Tổng số ngôi sao cố định
  const filledStars = Math.floor(rating/2); // Số ngôi sao se được tô màu
  // const hasHalfStar = (rating/2 - filledStars) >= 0.5; // 

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => {
        let starColor = "gray"; // Mặc định màu xám cho ngôi sao
        if (index < filledStars) {
          starColor = "#f9d03a"; // Tô màu vàng cho các ngôi sao đã đánh giá
        } 
        //else if (index === filledStars && hasHalfStar) {
        //   starColor = "#f9d03a"; // Tô màu vàng cho nửa ngôi sao cuối cùng
        // }

        return (
          <svg
            key={index}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.96470 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.7050 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.8030 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171Z"
              fill={starColor}
            ></path>
          </svg>
        );
      })}
    </div>
  );
};

//logoSrc, genres, stars, director, releaseDate, duration 

const FilmPoster = ({ posterSrc, logoSrc, description, rating, duration }: FilmPosterProps) => {
  const posterStyle = {
    // border: '10px solid red',
    backgroundImage: `url(${posterSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "40rem", 
    width: "63.125rem",
    padding: "68px 98px",
  };  

  return (
    <div className="relative h-96 background" style={posterStyle}>
      {/* absolute left-1/2 transform -translate-x-1/2 */}
      <div className=''
        style={{
          border: '1px solid green',
          justifyContent: 'center',
          flexDirection: 'column',
          // padding: '10px 0 10px 0',
          // top: '6%',
          // display: 'block',
        }}
      >
        <div className='flex items-center justify-center mb-[16px]'
          style={{
            // border: '1px solid red',
          }}
        >
          <img className="" src={logoSrc} alt="" 
            style={{

            }}
          />
        </div>
        
        <div className="mb-[16px] ">
          <p className="text-white font-thin text-16"
            style={{
              textAlign: "center",
            }}
          >
            {description}
          </p>
        </div>

        <div className='flex items-center justify-center flex-col'>
          <div className='flex mr-4'>
            <div>
              Rating: <RatingStars rating={rating}/>
            </div>  
            
            <div>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              Duration: {duration} min
            </div>
            {/* <p className="mb-1">{genres.join(', ')}</p>
            <p className="mb-1">Stars: {stars}</p>
            <p className="mb-1">Director: {director}</p>
            <p className="mb-1">Release Date: {releaseDate}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const FilmCard = ({ title, rating, duration }: FilmCardProps) => {
  return (
    <div className="relative h-96 rounded-2xl bg-gray-200 flex flex-col px-4 box-border items-start justify-start">
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <h2 className="relative leading-[24px] inline-block w-[148px]">{title}</h2>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img className="relative w-[15px] h-[15.85px]" alt="" src="/vector.svg" />
          <div className="relative leading-[24px]">{rating}</div>
          <div className="relative rounded-[50%] bg-gainsboro-200 w-[3px] h-[3px]" />
          <div className="relative leading-[24px]">{duration}</div>
        </div>
      </div>
    </div>
  );
};

export const FilmDetails = () => {
  const films: FilmData[] = [
    {
      posterSrc: '/assets/images/film1.png',
      logoSrc: '/assets/images/Logo-Wednesday.png',
      description: "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
      rating: 8.2,
      duration: 130,

      // genres: ['Drama', 'Adventure'],
      // title: 'Wednesday',
      // releaseDate: 'Sep 13, 2023',
      // stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
      // director: 'Simon McQuoid',
    },

    {
      posterSrc: '/assets/images/film1.png',
      description: "test description",
      rating: 9.0,
      duration: 130,
      
      // title: 'DEAD EVIL',
      // releaseDate: 'Sep 13, 2023',
      // genres: ['Drama', 'Adventure'],
      // stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
      // director: 'Simon McQuoid',
    },
    // Add more films here
  ];
  const [selectedFilm, setSelectedFilm] = useState<FilmData | null>(films[0]);

  // Define the film data


  return (
      <div className="w-full h-full flex bg-secondary-foreground"
        style={{
          
          // border: '8px solid green',
        }}
      >

      {/* absolute flex flex-row items-start justify-start gap-[18px] text-base */}


        {/* relative flex-shrink-0 w-2/3 h-96  */}
        <div className=""
          style={{
            height: '640px',
            // width: '1010px',
            width: '66.666667%',

            // border: '8px solid blue',
            borderRadius: '32px',
          }}
        >
          {/* Film Poster */}
          {selectedFilm && (
            <FilmPoster
              posterSrc={selectedFilm.posterSrc}
              logoSrc={selectedFilm.logoSrc}
              description={selectedFilm.description}
              duration={selectedFilm.duration} 
              rating={selectedFilm.rating}
              // releaseDate={selectedFilm.releaseDate}
              // genres={selectedFilm.genres}
              // stars={selectedFilm.stars}
              // director={selectedFilm.director}

            />
          )}
        </div>

        <div className="relative"
           style={{
            // border: '8px solid black',
            width: '33.333333%', 
          }}
        >
          {/* Film Cards */}
          {films.map((film, index) => (
            <div key={index} onClick={() => setSelectedFilm(film)}>
              {/* <FilmCard title={film.title} rating={film.rating} duration={film.duration} /> */}
            </div>
          ))}
        </div>

    </div>
  );
};
