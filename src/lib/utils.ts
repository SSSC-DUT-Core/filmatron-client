import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {GetFilmsQuery, FilmEntity, GetCompressedNfTsOfFilmQuery, FilmCompressedNftEntity} from "@/graphql/generated";
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});
export const getFilmRoute = (id: string) => {
    return `film/${id}`
}
export function mapFilmsFromGraphQLResponse(data: GetFilmsQuery): FilmEntity[] {
    if (!data || !data.getFilms || !data.getFilms.edges) {
      return [];
    }
  
    return data.getFilms.edges.map((filmEdge) => filmEdge.node);
}

export function mapFilmNftsFromGraphQLResponse(data?: GetCompressedNfTsOfFilmQuery): FilmCompressedNftEntity[] {
    if (!data || !data.getCompressedNFTsOfFilm || !data.getCompressedNFTsOfFilm.edges) {
      return [];
    }
  
    return data.getCompressedNFTsOfFilm.edges.map((filmEdge) => filmEdge.node);
}

export const getAssetsByOwner = async (ownerAddress: string) => {
    const url = `https://devnet.helius-rpc.com/?api-key=ea771cf6-1e92-4e45-a2fc-e8bd8f6ae6a0`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: "my-id",
            method: "getAssetsByOwner",
            params: {
                ownerAddress,
                page: 1,
                limit: 1000,
            },
        }),
    });
    const { result } = await response.json();
    return result;
};