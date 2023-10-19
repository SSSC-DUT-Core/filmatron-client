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


export const CardSection = (props: ICardSectionProps) => {
   const [listCnft, setListCnft] = useState<CNFT[]>([]);

   const [getSolanaAddress] = useGetSolanaAddressLazyQuery({
       onCompleted: data => {
           getAssetsByOwner(data.getSolanaAddress.address).then(data => {
               setListCnft(
                   data?.items.map((item: any, index: number) => ({
                       id: item.id,
                       name: item.content.metadata.name,
                       description: '',
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
        <div className="w-full bg-slate-500 bg-opacity-20 sm:p-6 p-0 rounded-b-3xl flex flex-col justify-center items-center space-y-8">
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
