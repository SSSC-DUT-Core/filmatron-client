import { formatDate, mapFilmNftsFromGraphQLResponse, mapFilmsFromGraphQLResponse } from "@/src/lib/index";
import { useEffect, useState } from "react";
import { FilmPosterDetail } from "@/src/components/Film/filmPosterDetail";
import {
    useGetFilmsQuery,
    FilmEntity,
    useGetCompressedNfTsOfFilmQuery
} from "@/graphql/generated/index";
import { PrizeTicketHomePage } from "@/src/components/PrizeTicketHomePage";
import { FilmRow } from "@/src/components/Film/FilmRow";

import { LiveFilmSection } from "./component/LiveFilmSection";
import { RedBandTrailer } from "../../../../src/components/RedBandTrailer";
import { useTour } from "@reactour/tour";


const filmPosterDetailData = {
    posterSrc: "/assets/images/film1.png",
    title: "Wednesday",
    logoSrc: "/assets/images/Logo-Wednesday.png",
    description:
        "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
    rating: 8.2,
    duration: 130,
    releaseDate: "Sep 23 2023",
    genres: ["Drama", "Adventure"],

    stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
    director: "Simon McQuoid",

    NFTClaimImg: "./assets/NFTs/NFT4.png",
    NFTEventName: "Wednesday",

    expirationDate: "2023-10-18T12:30:00",

    trailerVideo: "https://www.youtube.com/watch?v=qdURq3NXQ0U",
    trailerImg: "/assets/images/film1.png",

    eventImg: "./assets/filmDetail/gallery/galleryImg1.png",
};

const ticketIconUrl = "./assets/icons/ticket-icon.svg";
const cinemaIconUrl = "./assets/icons/cinema-icon.svg";

const prizeList = [
    {
        title: "Free Ticket",
        ticketLogo: "./assets/ticket/ticket-logo.png",
        announcementDate: "2023-10-18T15:45:00",
        ticketEvent: "Người Mặt Trời",
        prizeImg: "./assets/ticket/ticket-prize-free.png",
        walletCreatorAddress: "4Y4s28YSYCuhomMEpa9wXwUotssQ5EN7EAzvUs3ZMZ9j",
        dateCreated: "2023-10-05T15:45:00.000Z",
    },
    {
        title: "Vip Ticket",
        announcementDate: "2023-10-18T15:45:00",
        ticketLogo: "./assets/ticket/ticket-logo.png",
        ticketEvent: "Người Mặt Trời",
        prizeImg: "./assets/ticket/ticket-prize-vip.png",
        walletCreatorAddress: "4Y4s28YSYCuhomMEpa9wXwUotssQ5EN7EAzvUs3ZMZ9j",
        dateCreated: "2023-10-05T15:45:00.000Z",
    },
    {
        title: "10 free takes to the film",
        announcementDate: "2023-10-18T15:45:00",
        ticketLogo: "./assets/ticket/ticket-logo.png",
        ticketEvent: "Người Mặt Trời",
        prizeImg: "./assets/filmDetail/gallery/galleryImg1.png",
        walletCreatorAddress: "4Y4s28YSYCuhomMEpa9wXwUotssQ5EN7EAzvUs3ZMZ9j",
        dateCreated: "2023-10-05T15:45:00.000Z",
    },
];

const redBandTrailersFetching = [
    {
        filmId: 1,
        redBandTrailerImg: '/assets/redBandTrailer/nguoi-mat-troi-redband-trailer-1.png',
        redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
        filmId: 2,
        redBandTrailerImg: '/assets/redBandTrailer/nguoi-mat-troi-redband-trailer-2.png',
        redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
        filmId: 3,
        redBandTrailerImg: '/assets/redBandTrailer/nguoi-mat-troi-redband-trailer-3.png',
        redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
        filmId: 4,
        redBandTrailerImg: '/assets/redBandTrailer/nguoi-mat-troi-redband-trailer-4.png',
        redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
        filmId: 5,
        redBandTrailerImg: '/assets/images/film1.png',
        redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
        filmId: 6,
        redBandTrailerImg: '/assets/images/film1.png',
        redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
        filmId: 7,
        redBandTrailerImg: '/assets/images/film1.png',
        redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
];

export const HomePage = () => {
    const {
        data: film,
        loading,
        refetch,
        error,
    } = useGetFilmsQuery({
        variables: {},
        fetchPolicy: "network-only", // Force a network request
        onCompleted: data => {
            setFilmList(mapFilmsFromGraphQLResponse(data));
        },
    });

    const [filmList, setFilmList] = useState<FilmEntity[]>([]);
    const firstFilm = filmList?.[filmList.length - 1];
    const { data: filmsNftsData } = useGetCompressedNfTsOfFilmQuery(
        {
            variables: {
                filmId: firstFilm?.id
            },
            fetchPolicy: 'network-only',
        }
    )

    const { setIsOpen } = useTour();
    useEffect(() => {
        const guildTourStatus = sessionStorage.getItem("guild_tour_status");

        if (guildTourStatus !== "done") setIsOpen(true);
    });


    return (
        <div
            className=""
            style={{
                padding: "0px 80px",
                marginBottom: "24px",
            }}
        >
            {firstFilm && (
                <FilmPosterDetail
                    posterSrc={firstFilm.background}
                    title={firstFilm?.name}
                    // logoSrc={firstFilm.name ?? "vc"}
                    refetch={() => refetch}
                    duration={firstFilm.duration}
                    releaseDate={formatDate(firstFilm.releaseDate)}
                    genres={firstFilm.genres}
                    stars={firstFilm.stars}
                    director={firstFilm.directors}

                    NFTClaimImg={filmPosterDetailData.NFTClaimImg}
                    NFTEventName={firstFilm?.name}

                    expirationDate={firstFilm.endDateSubscriber}
                    trailerVideo={filmPosterDetailData.trailerVideo}
                    trailerImg={firstFilm.avatar}
                    eventImg={filmPosterDetailData.eventImg}
                    filmId={firstFilm.id}
                    listCnft={mapFilmNftsFromGraphQLResponse(filmsNftsData)}
                />
            )}
            {/* Popular film */}
            <FilmRow
                key="Popular film"
                filmRowTitle="Popular film"
                filmRow={filmList}
            />
            {/* prizeticket and redBandTrailer */}
            <div className="flex justify-between w-full pb-16">
                {/* prizeticketHomePage */}
                <div className="lg:w-1/2 sm:w-full">
                    {/* FilmRow header title */}
                    <div className="w-full flex-start flex items-center gap-4 items-center pb-6">
                        <img
                            src={ticketIconUrl}
                            alt="Prize Ticket"
                            className="w-10 h-10" // Adjust the size as needed
                        />

                        <h3
                            className="text-white"
                            style={{
                                fontWeight: "600",
                                fontSize: "30px",
                                lineHeight: "36px",
                                flex: "start",
                                // marginBottom: '8px',
                            }}
                        >
                            Win free prizes
                        </h3>
                    </div>

                    <div className="flex flex-row flex-wrap justify-around">
                        {prizeList.slice(0, 2).map((prize, index) => (
                            <PrizeTicketHomePage key={index} {...prize} />
                        ))}
                    </div>
                </div>

                {/* redbandTrailerHomePage */}
                <div className="lg:w-1/2 sm:w-full">
                    {/* FilmRow header title */}
                    <div className="w-full flex-start flex items-center gap-4 items-center pb-6">
                        <img
                            src={cinemaIconUrl}
                            alt="Prize Ticket"
                            className="w-10 h-10" // Adjust the size as needed
                        />

                        <h3
                            className="text-white"
                            style={{
                                fontWeight: "600",
                                fontSize: "30px",
                                lineHeight: "36px",
                                flex: "start",
                                // marginBottom: '8px',
                            }}
                        >
                            Red band trailer
                        </h3>
                    </div>

                    <div className="flex flex-row flex-wrap justify-around">
                        {/* {prizeList.slice(0, 2).map((prize, index) => (
                    <PrizeTicketHomePage key={index} {...prize} />
                ))} */}

                        {redBandTrailersFetching.slice(0, 2)?.map((trailer, index) => (
                            <RedBandTrailer
                                key={index}
                                data={trailer}
                                onClick={(id: string) => {
                                    console.log("RedBandTrailer: clicked: ", id);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <LiveFilmSection films={filmList} />

            {/* <homepageDetailPoster/> */}
            {/* <MediaRow/> */}
        </div>
    );
};
