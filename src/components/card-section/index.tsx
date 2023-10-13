"use client";

import { Search } from "@/public/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    useGetSolanaAddressLazyQuery,
} from "@/graphql/generated";
import { getAssetsByOwner } from "@/src/lib";
import { CNFT } from "@/src/types/types";
import { Input } from "../ui/input";
import { NftCard } from "./nft-card";

export interface ICardSectionProps {}

const descriptions = [
    "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
    `The Sunlit Man is the latest feature film from director Timothy Linh Bùi and producers Anh Trần (Happy Canvas) and Irene Trịnh. Timothy Linh Bùi is also the producer of several notable Vietnamese films such as Chị Chị Em Em (2019), Cô Hầu Gái (2016), and Âm Mưu Giày Gót Nhọn (2013). Producer Irene Trịnh is also the producer of several acclaimed domestic films such as Song Lang (2019), Hương Ga (2014), and Để Mai Tính (2010). Director Timothy Linh Bùi said that the idea of making a vampire film like The Sunlit Man came from his thoughts about human aspirations. "Everywhere in the world, there are people who live in the shadows, because they fear what will happen if they let themselves come into the light. We all try to live as our true selves, but it is not easy when we are under pressure from our families, communities, and society." In the film, a young man named Nam (played by Trần Ngọc Vàng) is bitten by a vampire and begins to transform into a creature of the night. He struggles to come to terms with his new identity, while also trying to protect the people he loves from harm.The Sunlit Man is a story about the power of love and acceptance. It is a reminder that we should never judge someone based on their appearance or who they are.`,
];

export const CardSection = (props: ICardSectionProps) => {
   const [listCnft, setListCnft] = useState<CNFT[]>([]);

   const [getSolanaAddress] = useGetSolanaAddressLazyQuery({
       onCompleted: data => {
           getAssetsByOwner(data.getSolanaAddress.address).then(data => {
               setListCnft(
                   data?.items.map((item: any, index: number) => ({
                       id: item.id,
                       name: item.content.metadata.name,
                       description: descriptions[index],
                       symbol: item.content.metadata.symbol,
                       image: item.content.json_uri,
                       author: item.authorities?.[0].address,
                   }))
               );
           });
       },
   });

   useEffect(() => {
       const accessToken = localStorage?.getItem("access_token");

       getSolanaAddress({
           context: {
               headers: {
                   Authorization: accessToken,
               },
           },
       });
   }, []);
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

            {listCnft.map((item) => (
                <NftCard cNFT={item} />
            ))}
        </div>
    );
};
