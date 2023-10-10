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
        <div className="w-full bg-black border-primary-background border-[1px] border-brand bg-opacity-30 p-6 rounded-3xl flex flex-row">
            <div className="w-1/3 flex justify-center flex-col space-y-8 items-center">
                <Image
                    src={LuckyDrawImage}
                    alt="lucky-draw"
                    width={300}
                    height={600}
                />
                <Button className="w-2/5 hover:bg-brand transform active:scale-75 transition-transform hover:scale-110 duration-500 ease-out cursor-pointer flex flex-row justify-center items-center bg-brand text-black">
                    <Image
                        src={GiftBox}
                        alt="gift-box"
                        width={40}
                        height={40}
                    />
                    <p className="text-base font-semibold">My reward</p>
                </Button>
            </div>

            <div className="w-3/5 text-white flex flex-col items-center justify-between">
                <div className="h-full flex flex-col items-center">
                    <p className="text-start animate-pulse font-semibold text-6xl drop-shadow-primary text-slate-200 mb-6">
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
                                <p className="text-7xl animate-pulse m-0 drop-shadow-blue text-center w-1/4 font-semibold mb-2">
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
