"use client";

import Image from "next/image";
import authorAvatar from "@/public/assets/images/Avatar-client.png";
import { CNFT } from "@/src/types/types";
import { useState } from "react";
import { useGetFilmByCompressedNftQuery } from "@/graphql/generated";
import dayjs from "dayjs";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { QRCode } from "./qr-code";

export interface INftCardProps {
  cNFT: CNFT;
}

export const NftCard = ({ cNFT }: INftCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetFilmByCompressedNftQuery({
      variables: {
          name: cNFT.name,
      },
  });

  const filmDetail = data?.getFilmByCompressedNFT;

  const onClose = () => {
    setIsOpen(false);
  }

  const onOpen = () => {
      setIsOpen(true);
  };
  
    return (
        <>
            <Modal
                title="Your QR code:"
                description="Share the movie with everyone."
                isOpen={isOpen}
                onClose={onClose}
            >
                <div className="pt-6 flex flex-col justify-center space-x-2 items-center w-full">
                    <QRCode
                        url={`https://filmatron.vercel.app/film/${
                            filmDetail?.id ?? ""
                        }`}
                    />
                    <Button
                        onClick={onClose}
                        className="w-60 mt-8 hover:bg-brand rounded-full transform active:scale-75 transition-transform hover:scale-110 duration-500 ease-out cursor-pointer flex flex-row justify-center items-center bg-brand text-black"
                    >
                        <p className="text-lg font-semibold">Close</p>
                    </Button>
                </div>
            </Modal>

            <div className="w-full bg-slate-300 bg-opacity-20 p-6 rounded-3xl flex flex-col">
                <div className="flex flex-row justify-between mb-6">
                    <div className="flex flex-row h-fit space-x-4">
                        <Image
                            src={filmDetail?.background ?? cNFT.image}
                            width={64}
                            height={64}
                            alt="icon-copy"
                        />
                        <div className="flex flex-col w-full justify-between">
                            <p className="text-xl text-white font-semibold">
                                {filmDetail?.name ?? ""}
                            </p>
                            <div className="flex flex-row space-x-4">
                                <p className="font-semibold text-yellow-600">
                                    Director:{" "}
                                </p>
                                <p className="font-light text-white">
                                    {filmDetail?.directors?.[0]}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-slate-200 text-base flex justify-between flex-col">
                        <div className="flex flex-row space-x-4">
                            <p className="font-light">Release date:</p>
                            <p className="font-semibold">
                                {dayjs(filmDetail?.releaseDate ?? "").format(
                                    "MMM DD YYYY"
                                )}
                            </p>
                        </div>
                        <div className="flex flex-row space-x-3">
                            <p className="font-semibold text-yellow-600">Star</p>
                            {filmDetail?.stars?.map(star => (
                                <p className="font-light">{star}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-300 w-full h-[1px]" />

                <div className="flex flex-row mt-6">
                    <div className="text-slate-100 text-base w-3/5">
                        <p className="text-2xl mb-2 font-semibold">
                            {filmDetail?.name ?? cNFT.name}
                        </p>
                        <p className="text-sm my-2">
                            Minted on{" "}
                            {dayjs(filmDetail?.endDateSubscriber).format(
                                "MMM DD YYYY"
                            ) ?? "Sep 30, 2022"}
                        </p>
                        <div className="flex flex-row items-center my-2 space-x-2">
                            <div className="w-5 h-5">
                                <Image
                                    src={authorAvatar}
                                    width={40}
                                    height={40}
                                    alt="icon-copy"
                                    className="rounded-full"
                                />
                            </div>
                            <p className="text-base font-light">
                                {filmDetail?.directors?.[0]}
                            </p>
                        </div>

                        <div className="flex flex-row space-x-4">
                            <p className="font-semibold text-yellow-600">
                                Genres:{" "}
                            </p>
                            <p className="font-light text-white">
                                {filmDetail?.genres?.join(", ")}
                            </p>
                        </div>

                        <div className="flex flex-row mb-1 space-x-4">
                            <p className="font-semibold text-yellow-600">
                                Duration:{" "}
                            </p>
                            <p className="font-light text-white">
                                {filmDetail?.duration}
                            </p>
                        </div>

                        <p className="text-base font-extralight">
                            {filmDetail?.description ?? ""}
                        </p>

                        <Button
                            onClick={onOpen}
                            className="w-60 mt-8 hover:bg-brand rounded-full transform active:scale-75 transition-transform hover:scale-110 duration-500 ease-out cursor-pointer flex flex-row justify-center items-center bg-brand text-black"
                        >
                            <p className="text-lg font-semibold">
                                Share the movie
                            </p>
                        </Button>
                    </div>

                    <div className="w-1/5" />

                    <div className="w-1/5">
                        <Image
                            src={cNFT.image}
                            width={220}
                            height={250}
                            alt="icon-copy"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
