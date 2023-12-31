'use client'

import React from 'react';
import { NFT } from '@/src/types/types';
import './NFTCard.css';

interface NFTsDisplayProps {
  NFTs: NFT[];
}

export const NFTsDisplay = ({ NFTs }: NFTsDisplayProps) => {
  const numberOfNFTs = NFTs.length;

  return (
    <>
      <div className='w-full h-full' style={{}}>
        <div
          className=""
          style={{
            display: 'flex',
            alignItems: 'center',
            // position: 'absolute',
          }}
        >
          {/* list of NFT card */}
          {numberOfNFTs < 3 || NFTs === null ? (
            <span className='text-[42px] text-white m-auto '>Coming Soon...</span>
          ) : (
            <>
              <div
                className="NFTCard-BG"
                style={{
                  width: '342px',
                  height: '475px',
                  zIndex: '3',
                }}
              >
                <div className='NFTCard'>
                  <img
                    src={NFTs[0].imageUrl}
                    alt="NFT1"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}
                  />
                </div>
              </div>

              <div
                className="NFTCard-BG"
                style={{
                  width: '318px',
                  height: '435px',
                  zIndex: '2',
                }}
              >
                <div className='NFTCard'>
                  <img
                    src={NFTs[1].imageUrl}
                    alt="NFT1"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}
                  />
                </div>
              </div>

              <div
                className="NFTCard-BG"
                style={{
                  width: '278px',
                  height: '386px',
                  zIndex: '1',
                }}
              >
                <div className='NFTCard'>
                  <img
                    src={NFTs[2].imageUrl}
                    alt="NFT1"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
