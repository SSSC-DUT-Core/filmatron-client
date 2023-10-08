"use client";

import React from "react";

import {films,  NFT} from '../../data';
import './NFTCard.css'

type Props = {
  NFTs: NFT[];
};

export const NFTsDisplay = (NFTs: Props) => {
    return (
        <>
            <div className='w-full h-full'
              style={{
                
              }}
            >
              <div className=""
                style={{
                  paddingLeft: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  // position: 'absolute',
                  
                }}
              >
                {/* list of NFT card */}
                <div className="NFTCard-BG"
                  style={{
                    width: '372px',
                    height: '462px',
                    zIndex: '3',
                  }}
                >
                  <div className='NFTCard'>
                    <img src="./assets/NFTs/NFT2.png" alt="NFT1" 
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}/>
                  </div>
                </div>

                <div className="NFTCard-BG"
                  style={{
                    width: '330px',
                    height: '410px',
                    zIndex: '2',
                  }}
                >
                  <div className='NFTCard'>
                    <img src="./assets/NFTs/NFT2.png" alt="NFT1" 
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}/>
                  </div>
                </div>

                <div className="NFTCard-BG"
                  style={{
                    width: '272px',
                    height: '332px',
                    zIndex: '1',
                  }}
                >
                  <div className='NFTCard'>
                    <img src="./assets/NFTs/NFT2.png" alt="NFT1" 
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}/>
                  </div>
                </div>

              
              </div>

            </div>
        </>
    );
};
