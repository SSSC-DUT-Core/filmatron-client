"use client";

import filmImage from "@/public/assets/images/film-image.jpeg";
import Image from "next/image";
import avatar from "@/images/avatar.png";
import authorAvatar from "@/public/assets/images/Avatar-client.png";

export interface INftCardProps {}

export const NftCard = (props: INftCardProps) => {
    return (
        <div className="w-full bg-slate-300 bg-opacity-20 p-6 rounded-3xl flex flex-col">
            <div className="flex flex-row justify-between mb-6">
                <div className="flex flex-row h-fit space-x-4">
                    <Image
                        src={avatar}
                        width={64}
                        height={64}
                        alt="icon-copy"
                    />
                    <div className="flex flex-col w-full justify-between">
                        <p className="text-xl text-white font-semibold">
                            Wednesday
                        </p>
                        <div className="flex flex-row space-x-4">
                            <p className="font-light text-yellow-600">
                                Director:{" "}
                            </p>
                            <p className="font-light text-white">
                                Simon McQuoid
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-slate-200 text-base flex justify-between flex-col">
                    <div className="flex flex-row space-x-4">
                        <p className="font-light">Release date:</p>
                        <p className="font-semibold">Seb 13 2023</p>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <p className="font-light text-yellow-600">Star</p>
                        <p className="font-light">Lewis TanJessica</p>
                        <p className="font-light">McNameeJosh Lawson</p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-300 w-full h-[1px]" />

            <div className="flex flex-row mt-6">
                <div className="text-slate-100 text-base w-3/5">
                    <p className="text-2xl mb-2 font-semibold">
                        Cherry Blossom Girl 037
                    </p>
                    <p className="text-sm my-2">Minted on Sep 30, 2022</p>
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
                        <p className="text-base font-light">Animakid</p>
                    </div>
                    <p className="text-base font-extralight">
                        {`Wednesday Addams, a teenager who possesses psychic
                        powers.Wednesday's cold, emotionless personality and her
                        defiant nature make it difficult for her to connect with
                        her schoolmates and cause her to run afoul of the
                        school's principal Larissa Weems. However, she discovers
                        she has inherited her mother's psychic abilities which
                        allow her to solve a local murder mystery.`}
                    </p>
                </div>

                <div className="w-1/5" />

                <div className="w-1/5">
                    <Image
                        src={filmImage}
                        width={220}
                        height={250}
                        alt="icon-copy"
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};
