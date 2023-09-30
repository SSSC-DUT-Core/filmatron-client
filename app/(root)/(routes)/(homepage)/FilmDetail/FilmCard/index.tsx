import React from 'react';
import Image from 'next/image';

interface FilmData {
  posterSrc: string;
  title: string;
  logoSrc?: string;
  description: string;
  rating: number;
  duration: number;
  releaseDate: string;
  genres: string[];
  stars: string;
  director: string;
}

interface FilmCardProps {
  posterSrc: string;
  title: string;
  rating: number;
  duration: number;
}
export type RatingProps = {
    rating: number; // Giá trị rating trong khoảng từ 0 đến 10
  };

const RatingStars = ({ rating }: RatingProps) => {
    const totalStars = 5; // Tổng số ngôi sao cố định
    const filledStars = Math.floor(rating/2); // Số ngôi sao se được tô màu
    // const hasHalfStar = (rating/2 - filledStars) >= 0.5; // 
  
    return (
      <div className="flex items-center"
        style={{
          gap: '4px',
          marginRight: '8px',
        }}
      >
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
              width="20"
              height="18"
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

export const FilmCard: React.FC<FilmCardProps> = ({ posterSrc, title, rating, duration }) => {
  return (
    <div>
      <div>
        <Image src={posterSrc} width={"240"} height={"240"}  alt="filmcard"/>
      </div>
      <div>
        <p>{title}</p>
        <div>
          <div className='flex justify-center' style={{ marginBottom: '16px' }}>
            <div className='flex' style={{ marginRight: '16px' }}>
              <RatingStars rating={rating}/>
              <p className='text-white font-thin text-16 opacity-80'>{rating}/10</p>
            </div>
            <div className='flex'>
              <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
              <p className='text-white font-thin text-16 ' style={{ opacity: '0.8' }}>
                Duration: {duration} mins
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

