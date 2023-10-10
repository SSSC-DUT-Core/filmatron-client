"use client";

import { Search } from "@/public/assets";
import Image from "next/image";
import { Input } from "../ui/input";
import { NftCard } from "./nft-card";

export interface ICardSectionProps {}

export const CardSection = (props: ICardSectionProps) => {
    return (
        <div className="w-full bg-slate-500 bg-opacity-20 p-6 rounded-b-3xl flex flex-col justify-center items-center space-y-8">
            <div className="flex flex-row relative">
                <Input
                    className="rounded-full pr-32 pl-4 text-white"
                    placeholder="Search Movies, NFTs..."
                />
                <Image
                    className="absolute top-3 right-5"
                    src={Search}
                    alt="icon-copy"
                />
            </div>

            <NftCard />
            <NftCard />
        </div>
    );
};
