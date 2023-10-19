'use client'

import React, { useState, useEffect } from 'react';

import { FilmEntity } from '@/graphql/generated';
import { FilmCardInCol } from '@/src/components/Film/FilmCol';
import { NFT, Collection } from '@/src/types/types';
import { NFTsDisplay } from '../NFTsDisplay';

const listOfcollections: Collection[] = [
  {
    name: "NGUOI MAT TROI",
    nfts: [
      {
          name: "NFT 1",
          description: "This is NFT 1",
          imageUrl: "/assets/NFTs/nguoi-mat-troi/nguoi-mat-troi-nft-1.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 1", "Attribute 2"],
      },
      {
          name: "NFT 2",
          description: "This is NFT 2",
          imageUrl: "/assets/NFTs/nguoi-mat-troi/nguoi-mat-troi-nft-2.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 3", "Attribute 4"],
      },
      {
          name: "NFT 3",
          description: "This is NFT 3",
          imageUrl: "/assets/NFTs/nguoi-mat-troi/nguoi-mat-troi-nft-3.png",
          collectionName: "Collection 2",
          filmName: "NGƯỜI VỢ CUỐI CÙNG",
          attributes: ["Attribute 5", "Attribute 6"],
      },
    ],
  },

  {
    name: "NGUOI VO CUOI CUNG",
    nfts: [
      {
          name: "NFT 1",
          description: "This is NFT 1",
          imageUrl: "/assets/NFTs/nguoi-vo-cuoi-cung/nguoi-vo-cuoi-cung-nft-3.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 1", "Attribute 2"],
      },
      {
          name: "NFT 2",
          description: "This is NFT 2",
          imageUrl: "/assets/NFTs/nguoi-vo-cuoi-cung/nguoi-vo-cuoi-cung-nft-2.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 3", "Attribute 4"],
      },
      {
          name: "NFT 3",
          description: "This is NFT 3",
          imageUrl: "/assets/NFTs/nguoi-vo-cuoi-cung/nguoi-vo-cuoi-cung-nft-1.png",
          collectionName: "Collection 2",
          filmName: "NGƯỜI VỢ CUỐI CÙNG",
          attributes: ["Attribute 5", "Attribute 6"],
      },
    ],
  },

  {
    name: "CO HAU GAI",
    nfts: [
      {
          name: "NFT 1",
          description: "This is NFT 1",
          imageUrl: "/assets/NFTs/co-hau-gai/co-hau-gai-nft-1.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 1", "Attribute 2"],
      },
      {
          name: "NFT 2",
          description: "This is NFT 2",
          imageUrl: "/assets/NFTs/co-hau-gai/co-hau-gai-nft-2.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 3", "Attribute 4"],
      },
      {
          name: "NFT 3",
          description: "This is NFT 3",
          imageUrl: "/assets/NFTs/co-hau-gai/co-hau-gai-nft-3.png",
          collectionName: "Collection 2",
          filmName: "NGƯỜI VỢ CUỐI CÙNG",
          attributes: ["Attribute 5", "Attribute 6"],
      },
    ],
  },

  {
    name: "CHI CHI EM EM",
    nfts: [
      {
          name: "NFT 1",
          description: "This is NFT 1",
          imageUrl: "/assets/NFTs/chi-chi-em-em/chi-chi-em-em-nft-1.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 1", "Attribute 2"],
      },
      {
          name: "NFT 2",
          description: "This is NFT 2",
          imageUrl: "/assets/NFTs/chi-chi-em-em/chi-chi-em-em-nft-2.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 3", "Attribute 4"],
      },
      {
          name: "NFT 3",
          description: "This is NFT 3",
          imageUrl: "/assets/NFTs/chi-chi-em-em/chi-chi-em-em-nft-3.png",
          collectionName: "Collection 2",
          filmName: "NGƯỜI VỢ CUỐI CÙNG",
          attributes: ["Attribute 5", "Attribute 6"],
      },
    ],
  },

  {
    name: "CO HAU GAI",
    nfts: [
      {
          name: "NFT 1",
          description: "This is NFT 1",
          imageUrl: "/assets/NFTs/co-hau-gai/co-hau-gai-nft-1.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 1", "Attribute 2"],
      },
      {
          name: "NFT 2",
          description: "This is NFT 2",
          imageUrl: "/assets/NFTs/co-hau-gai/co-hau-gai-nft-2.png",
          collectionName: "Collection 1",
          filmName: "Wednesday",
          attributes: ["Attribute 3", "Attribute 4"],
      },
      {
          name: "NFT 3",
          description: "This is NFT 3",
          imageUrl: "/assets/NFTs/co-hau-gai/co-hau-gai-nft-3.png",
          collectionName: "Collection 2",
          filmName: "NGƯỜI VỢ CUỐI CÙNG",
          attributes: ["Attribute 5", "Attribute 6"],
      },
    ],
  },
]


const getFilmNfts = (filmName: string): NFT[] => {
  const collection = listOfcollections.find((collection: Collection) => collection.name === filmName);
  return collection ? collection.nfts : [];
};

interface LiveFilmSectionProps  {
  films: FilmEntity[];
}

export const LiveFilmSection = ({ films }: LiveFilmSectionProps) => {
    const [selectedFilm, setSelectedFilm] = useState<FilmEntity | null>(null);
    const [previousFilmIndex, setPreviousFilmIndex] = useState<number>(0);

    useEffect(() => {
      // Kiểm tra xem films có phần tử không và selectedFilm có giá trị không
      if (films && films.length > 0 && !selectedFilm) {
        setSelectedFilm(films.slice().reverse()[0]);
      }
    }, [films, selectedFilm]);

    return (
      <div className="w-full h-full flex sm:space-y-0 space-y-6 sm:flex-row flex-col justify-between items-center"
          style={{
            // border: '8px solid green',
          }}
        >
        {/* list of film cards */}
        <div className="relative sm:w-1/3 w-full"
             style={{
              height: '560px',
              overflow: 'hidden',
  
            }}
          >

           
            <div className="w-full h-full flex flex-col items-center"
              style={{
            
              }}
            >
              {/* title of live flims */}
              <div className='w-full flex-start mb-[16px] gap-[16px]'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {/* <svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="green" /></svg> */}
                
                <div className="w-[16px] h-[16px]  rounded-full p-3 bg-[#00C5A3] leading-9">
                </div>
                
                <h3 className='text-white'
                  style={{
                    fontWeight: '600',
                    fontSize: '30px',
                    lineHeight: '36px',
                    flex: 'start',
               
                  }}
                >
                  Most popular collectibles
                </h3>
              </div>
              
              {/* list of film cards */}
              <div className="relative flex-end w-full h-640 overflow-y-scroll scrollbar-track-gray-300 overflow-x-hidden">
                {/* Film Cards Col */}
                {films?.slice().reverse().map((film: FilmEntity, index: number) => (
                  <div key={index} onClick={() => {}}>
                    <FilmCardInCol 
                      genre={film.genres}
                      posterSrc={film.avatar} 
                      title={film.name} 
                      duration={film.duration} 
                      mostClaimRank={index + 1}
                      isSelected={previousFilmIndex === index} 
                      onClick={() => {
                        setPreviousFilmIndex(index);
                        setSelectedFilm(film);
                      }}  
                    />              
                  </div>
                ))}
              </div>
            </div>


        </div>

        {/* NFT Dissplay section */}
        <div className="px-[12px] sm:ml-6 ml-0 sm:w-2/3 w-full pt-[20px]"
            style={{
              height: '560px',
              backgroundColor: '#131020', 
              borderRadius: '32px',
              // border: "1px solid red",
              // overflow: 'hidden',
              boxShadow: '0px 4px 50px 0px rgba(106, 45, 206, 0.65), 0px 4px 30px 0px rgba(243, 200, 121, 1)', 
            }}
          >
            <div className='px-[12px] leading-6 mb-[20px] text-[24px] text-white font-semibold'>
              Exclusive Collectibles
            </div>
            {selectedFilm && (
              <div className='w-full h-full pl-[8px]' style={{
                // border: '1px solid green',
              }}>
                 <NFTsDisplay
                  NFTs={getFilmNfts(selectedFilm.name)}
              />
              </div>
            )}
          </div>
        
  
        {/* NFT display BG */}
      </div>
    );
};