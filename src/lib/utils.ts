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