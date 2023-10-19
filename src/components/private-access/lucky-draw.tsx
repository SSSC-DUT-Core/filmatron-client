"use client";

import { LuckyDrawLayout } from "@/public/assets";
import Image from "next/image";
import LuckyDrawImage from "@/images/lucky-draw.png";
import GiftBox from "@/images/giftbox.png";
import { Button } from "../ui/button";

export interface ILuckyDrawProps {
    luckyNumber: [number, number, number, number];
    address: string;
}

export const LuckyDraw = ({ luckyNumber, address }: ILuckyDrawProps) => {
    return (
        <div className="w-full bg-black border-primary-background border-[1px] border-brand bg-opacity-30 p-6 rounded-3xl flex sm:flex-row flex-col-reverse">
            <div className="sm:w-1/3 mt-5 sm:mt-0 w-full flex justify-center flex-col space-y-8 items-center">
                <Image
                    src={LuckyDrawImage}
                    alt="lucky-draw"
                    width={300}
                    height={600}
                />
                <Button className="sm:w-2/5 w-4/5 hover:bg-brand transform active:scale-75 transition-transform hover:scale-110 space-x-2 duration-500 ease-out cursor-pointer flex flex-row justify-center items-center bg-brand text-black">
                    <Image
                        src={GiftBox}
                        alt="gift-box"
                        width={40}
                        height={40}
                    />
                    <p className="text-base font-semibold">My reward</p>
                </Button>
            </div>

            <div className="sm:w-3/5 w-full text-white flex flex-col items-center justify-between">
                <div className="h-full flex flex-col items-center">
                    <p className="text-start animate-pulse font-semibold sm:text-6xl text-3xl drop-shadow-primary text-slate-200 mb-6">
                        Lucky number
                    </p>

                    <p className="text-base font-light mb-3">
                        Open from May 26th 2023 at 12:00 PM to June 14th 2023 at
                        12:00 PM
                    </p>

                    <p className="text-base font-light mb-6">
                        Khi bạn sở hữu NFT bạn sẽ nhận được lượt quay
                    </p>
                    <div className="flex flex-col justify-center items-center mb-5 relative">
                        <div className="flex absolute flex-row w-full justify-center items-center">
                            {luckyNumber.map(number => (
                                <p className="sm:text-7xl text-5xl animate-pulse m-0 drop-shadow-blue text-center w-1/4 font-semibold sm:mb-2 mb-0">
                                    {number}
                                </p>
                            ))}
                        </div>
                        <Image
                            src={LuckyDrawLayout}
                            className="animate-pulse"
                            alt="lucky-draw"
                            width={1200}
                            height={300}
                        />
                    </div>

                    <div className="flex flex-row space-x-2 justify-center items-center w-full">
                        <p className="text-2xl font-semibold text-brand">
                            {address}
                        </p>
                        <p className="text-2xl font-semibold text-slate-300">
                            Joined
                        </p>
                    </div>
                </div>

                <Button className="w-4/5 hover:bg-secondary-light cursor-not-allowed flex flex-row justify-center items-center text-lg bg-secondary-light text-slate-600">
                    You are getted number
                </Button>
            </div>
        </div>
    );
};
