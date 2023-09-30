'use client'
import { useState } from 'react';
import React from 'react';

import {FilmCol} from './FilmCol';
import { title } from 'process';
import { LiveFilms } from '../data';

export const LiveFilmSection = () => {
    // const [selectedFilm, setSelectedFilm] = useState<FilmData | null>(films[0]);
    // const [previousFilmIndex, setPreviousFilmIndex] = useState<number>(0);
  
  
    return (
      <div className="w-full h-full flex flex-row justify-between items-center"
          style={{
            // border: '8px solid green',
          }}
        >
        {/* list of film cards */}
        <div className="relative"
             style={{
              // border: '8px solid black',
              width: '28%', 
              height: '560px',
        
              border: "1px solid blue",
  
              // padding: '0 18px',
  
              overflow: 'hidden',
  
              // overflowY: 'auto',
            }}
          >
            <FilmCol
                filmColTitle='Live' 
                filmCol={LiveFilms}
            />

            {/* Film Cards */}
            {/* {films.map((film, index) => (
              <div key={index} onClick={() => {
               
              }}>
                <FilmCol 
                 
                }}
                />              
              </div>
            ))} */}

            {/* <LiveFilmCol/
                films = {films}
            > */}
        </div>
  
        {/* NFT display BG */}
        <div className=""
            style={{
              height: '560px',
              // width: '1010px',
              width: '76%',
              backgroundColor: '#131020', 

  
              // border: '8px solid blue',
              borderRadius: '32px',
  
              border: "1px solid red",
  
              overflow: 'hidden',
              
              boxShadow: '0px 4px 50px 0px rgba(106, 45, 206, 0.65), 0px 4px 30px 0px rgba(243, 200, 121, 1)',
            
              padding: '38px 16px ',
            }}
          >
         
            {/* NFT Card */}
        
        </div>
  
         
  
      </div>
    );
};