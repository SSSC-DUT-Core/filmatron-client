"use client";

import { useState } from "react";
// import playIcon from './public/assets/icons/playIcon.svg';
// import  PlayIcon2  from './assets/icons/playIcon2.svg';

import "./filmDetail.css";
import "./filmCard.css";
import { FilmPosterDetail } from "../filmPosterDetail";
// import { Box, Card, Text, Flex } from '@radix-ui/themes';

export type FilmData = {
    posterSrc: string;
    title: string;
    logoSrc?: string;
    description: string;

    rating: number;
    duration: number;

    // example: '2023-09-13'
    releaseDate: string;

    genres: string[];
    // name of actors
    stars: string;

    director: string;
};

export type FilmCardProps = {
    posterSrc: string;
    title: string;
    rating: number;
    duration: number;
    isSelected: boolean;
    onClick: () => void;
};

export type FilmPosterProps = {
    posterSrc: string;

    logoSrc?: string;
    title: string;

    description: string;
    rating: number;
    duration: number;
    // example: '2023-09-13'
    releaseDate: string;
    genres: string[];

    stars: string;
    director: string;
};

// dispaly genres [[], [],...]
const displayGenres = (genres: string[]) => {
    const genreChunks = [];

    // Chia mảng genres thành các phần tử con chứa 5 thể loại mỗi phần
    for (let i = 0; i < genres.length; i += 5) {
        genreChunks.push(genres.slice(i, i + 5));
    }

    return (
        <div>
            {genreChunks.map((chunk, index) => (
                <div
                    key={index}
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    {chunk.map((genre, genreIndex) => (
                        <div
                            key={genreIndex}
                            style={{
                                background: "rgba(255, 255, 255, 0.2)",
                                backdropFilter: "blur(30px)",
                                borderRadius: "40px",
                                padding: "2px 8px 2px 8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                border: "2px solid rgba(255, 255, 255, 0.2)",
                                marginRight: "16px",
                                marginBottom: "16px",
                            }}
                        >
                            <p
                                className="font-bold text-16"
                                style={{ color: "#00FFEE" }}
                            >
                                {genre}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

// display number of star
export type RatingProps = {
    rating: number; // Giá trị rating trong khoảng từ 0 đến 10
};

const RatingStars = ({ rating }: RatingProps) => {
    const totalStars = 5; // Tổng số ngôi sao cố định
    const filledStars = Math.floor(rating / 2); // Số ngôi sao se được tô màu
    // const hasHalfStar = (rating/2 - filledStars) >= 0.5; //

    return (
        <div
            className="flex items-center"
            style={{
                gap: "4px",
                marginRight: "8px",
            }}
        >
            {Array.from({ length: totalStars }, (_, index) => {
                let starColor = "gray"; // Mặc định màu xám cho ngôi sao
                if (index < filledStars) {
                    starColor = "#f9d03a"; // Tô màu vàng cho các ngôi sao đã đánh giá
                }
                // else if (index === filledStars && hasHalfStar) {
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
                            fill="#f9d03a"
                        />
                    </svg>
                );
            })}
        </div>
    );
};

// logoSrc, genres, stars, director, releaseDate, duration

const FilmPoster = ({
    posterSrc,
    logoSrc,
    title,
    description,
    rating,
    duration,
    releaseDate,
    genres,
    stars,
    director,
}: FilmPosterProps) => {
    const posterStyle = {
        // border: '10px solid red',
        backgroundImage: `url(${posterSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "40rem",
        width: "100%",
        padding: "68px 98px",
    };

    return (
        <div className="relative" style={posterStyle}>
            {/* poster */}
            <div
                className=""
                style={{
                    border: "1px solid green",
                    justifyContent: "center",
                    flexDirection: "column",
                    // padding: '10px 0 10px 0',
                    // top: '6%',
                    // display: 'block',
                }}
            >
                {/* logo tile of film */}
                <div
                    className="flex items-center justify-center mb-[16px]"
                    style={
                        {
                            // border: '1px solid red',
                        }
                    }
                >
                    {logoSrc ? (
                        <img className="" src={logoSrc} alt="" />
                    ) : (
                        <h1
                            className="text-white font-bold"
                            style={{
                                fontSize: "32px",
                                lineHeight: "48px",
                            }}
                        >
                            {title}
                        </h1>
                    )}
                </div>

                {/* poster description */}
                <div className="">
                    <p
                        className="text-white font-thin text-16"
                        style={{
                            textAlign: "center",
                            marginBottom: "32px",
                            opacity: "0.8",
                        }}
                    >
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-center flex-col">
                    {/* rating, duration */}
                    <div
                        className="flex justify-center"
                        style={{
                            marginBottom: "16px",
                        }}
                    >
                        {/* rating */}
                        <div
                            className="flex"
                            style={{
                                marginRight: "16px",
                            }}
                        >
                            <RatingStars rating={rating} />
                            <p
                                className="text-white font-thin text-16 opacity-80"
                                style={{
                                    opacity: "0.8",
                                }}
                            >
                                {rating}/10
                            </p>
                        </div>

                        {/* duration */}
                        <div className="flex">
                            <svg
                                style={{
                                    marginRight: "8px",
                                }}
                                width="24"
                                height="24"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z"
                                    fill="white"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p
                                className="text-white font-thin text-16 "
                                style={{
                                    opacity: "0.8",
                                }}
                            >
                                Duration: {duration} mins
                            </p>
                        </div>
                    </div>

                    {/*  Release date: */}
                    <div
                        className="flex"
                        style={{
                            marginBottom: "16px",
                        }}
                    >
                        <p
                            className="text-white font-bold text-16"
                            style={{
                                marginRight: "16px",
                                opacity: "0.8",
                            }}
                        >
                            Release date:
                        </p>
                        <p
                            className="text-white font-thin text-16"
                            style={{
                                opacity: "0.8",
                            }}
                        >
                            {releaseDate}
                        </p>
                    </div>

                    {/* genre */}
                    <div className="flex">
                        <p
                            className="text-white font-bold text-16"
                            style={{
                                marginRight: "16px",
                                opacity: "0.8",
                                lineHeight: "28px",
                            }}
                        >
                            Genre:
                        </p>

                        <div className="flex ]">{displayGenres(genres)}</div>
                    </div>

                    {/* stars */}
                    <div
                        className="flex"
                        style={{
                            marginBottom: "16px",
                        }}
                    >
                        <p
                            className="font-bold text-16"
                            style={{
                                marginRight: "16px",
                                // lineHeight: '28px',
                                color: "#F3C879",
                            }}
                        >
                            Star:
                        </p>
                        <p
                            className="text-white font-thin text-16"
                            style={{
                                opacity: "0.9",
                            }}
                        >
                            {stars}
                        </p>
                    </div>

                    {/* director */}
                    <div className="flex">
                        <p
                            className="font-bold text-16"
                            style={{
                                marginRight: "16px",
                                // lineHeight: '28px',
                                color: "#F3C879",
                            }}
                        >
                            Director:
                        </p>

                        <p
                            className="text-white font-thin text-16"
                            style={{
                                opacity: "0.9",
                            }}
                        >
                            {director}
                        </p>
                    </div>

                    {/* 2 button
            // onClick={handleWatchButton} 
            // onClick={handleMoreInfoButton}  */}
                    <div
                        className="flex"
                        style={{
                            gap: "16px",
                            marginTop: "16px",
                        }}
                    >
                        <button className="filmButton watch-button">
                            <div style={{ marginRight: "8px" }}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            Watch Trailer
                        </button>

                        <button className="filmButton info-button">
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FilmCard = ({
    posterSrc,
    title,
    rating,
    duration,
    isSelected,
    onClick,
}: FilmCardProps) => {
    const imageCardStyle = {
        // border: '10px solid red',
        backgroundImage: `url(${posterSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        width: "60px",
        height: "80px",

        borderRadius: "8px",
    };

    return (
        <div
            className={`filmCard-BG ${isSelected ? "selectedFilmCard-BG" : ""}`}
            onClick={onClick}
        >
            <div
                className="filmCard"
                style={{
                    // width: '240px',
                    // height: '96px',

                    // padding: '8px',
                    display: "flex",

                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "16px",

                    backgroundColor: isSelected ? "#0f0f29" : "",
                }}
            >
                {/* film image */}
                <div style={imageCardStyle} />

                {/* film info */}
                <div
                    style={{
                        width: "148px",
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    {/* film title */}
                    {/* font-inter text-base font-normal leading-6 */}
                    <h4
                        className="text-white font-thin text-16"
                        style={{
                            // // fontSize: '16px',
                            // fontWeight: 'bold',
                            lineHeight: "24px",
                        }}
                    >
                        {title}
                    </h4>

                    {/* film rating */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        {/* rating */}
                        <div
                            style={{
                                display: "flex",
                                marginRight: "16px",
                                alignItems: "center",
                                flexDirection: "row",
                                gap: "8px",
                            }}
                        >
                            {/* RatingStars component */}
                            {/* <RatingStars rating={rating}/> */}

                            {/* star icon */}
                            <svg
                                width="20"
                                height="18"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.96470 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.7050 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.8030 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171Z"
                                    fill="#f9d03a"
                                />
                            </svg>

                            <p className="text-white font-thin text-16 opacity-80">
                                {rating}
                            </p>
                        </div>

                        {/* duration */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <p
                                className="text-white font-thin text-16 opacity-80"
                                style={{
                                    opacity: "0.8",
                                }}
                            >
                                {duration} mins
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FilmDetails = () => {
    const films: FilmData[] = [
        {
            posterSrc: "/assets/images/film1.png",
            title: "Wednesday",
            logoSrc: "/assets/images/Logo-Wednesday.png",
            description:
                "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
            rating: 8.2,
            duration: 130,
            releaseDate: "Sep 23 2023",
            genres: ["DramaAdventure"],

            stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
            director: "Simon McQuoid",
        },

        {
            title: "NGƯỜI VỢ CUỐI CÙNG",
            posterSrc: "/assets/images/film1.png",
            description: "test description",
            rating: 9.0,
            duration: 130,
            releaseDate: "Sep 23 2023",
            genres: ["DramaAdventure"],

            stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
            director: "Simon McQuoid",
        },

        {
            posterSrc: "/assets/images/film1.png",
            title: "ÂM MƯU GÓT DÀY NHỌN",
            description: "test description",
            rating: 9.0,
            duration: 130,
            releaseDate: "Sep 23 2023",
            genres: ["Drama", "Adventure"],
            stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
            director: "Simon McQuoid",
        },

        {
            posterSrc: "/assets/images/film1.png",
            title: "CÔ HẦU GÁI",
            description: "test description",
            rating: 9.0,
            duration: 130,
            releaseDate: "Sep 23 2023",
            genres: ["Drama", "Adventure"],
            stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
            director: "Simon McQuoid",
        },

        {
            posterSrc: "/assets/images/film1.png",
            title: "Chị Chị Em Em",
            description: "test description",
            rating: 9.0,
            duration: 130,
            releaseDate: "Sep 23 2023",
            genres: ["Drama", "Adventure"],
            stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
            director: "Simon McQuoid",
        },

        {
            posterSrc: "/assets/images/film1.png",
            title: "Chị Chị Em Em 2",
            description: "test description",
            rating: 9.0,
            duration: 130,
            releaseDate: "Sep 23 2023",
            genres: ["Drama", "Adventure"],
            stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
            director: "Simon McQuoid",
        },
        // Add more films here
        // Define the film data
    ];

    const [selectedFilm, setSelectedFilm] = useState<FilmData | null>(films[0]);
    const [previousFilmIndex, setPreviousFilmIndex] = useState<number>(0);

    return (
        <div
            className="w-full h-full flex flex-row justify-between items-center"
            style={{
                // border: '8px solid green',
                padding: "0 4px",
            }}
        >
            {/* Film poster */}
            <div
                className="w-full"
                style={{
                    height: "640px",
                    // width: '1010px',

                    // border: '8px solid blue',
                    borderRadius: "32px",

            // border: "1px solid red",

                    overflow: "hidden",
                }}
            >
                {/* Film Poster */}
                {selectedFilm && (
                    <FilmPosterDetail
                        posterSrc={selectedFilm.posterSrc}
                        title={selectedFilm.title}
                        logoSrc={selectedFilm.logoSrc}
                        description={selectedFilm.description}
                        rating={selectedFilm.rating}
                        duration={selectedFilm.duration}
                        releaseDate={selectedFilm.releaseDate}
                        genres={selectedFilm.genres}
                        stars={selectedFilm.stars}
                        director={selectedFilm.director}
                    />
                )}
            </div>

        </div>
    );
};
