"use client"

import React, { useState, useRef } from 'react';
import { Modal } from './RedBandTrailerModal'; // Update the path accordingly
import './RedBandTrailer.css';


// extract youtube video id from url 
const getYouTubeVideoId = (url: string | undefined): string | undefined => {
  const match = url?.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match?.[1];
}

interface RedBandTrailerProps {
  data: {
    filmId: number;
    redBandTrailerImg: string;
    redBandTrailerVideoUrl: string;
  };
  onClick: (id: string) => void;
}

export const RedBandTrailer: React.FC<RedBandTrailerProps> = ({ data, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    onClick(data.filmId.toString());
    setIsModalOpen(!isModalOpen);
  };

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const onClose = () => {
    if (iframeRef.current) {
      iframeRef.current.setAttribute('src', '');
    }
    setIsModalOpen(false); // Updated to directly set modal state
  };

  // create embed url from youtube video id
  const embedUrl = `https://www.youtube.com/embed/${getYouTubeVideoId(data?.redBandTrailerVideoUrl)}`;

  return (
    <div
      className="relative w-[22rem] h-[14rem] mt-[-32px] mx-[-20px] p-[32px]"
      onClick={handleToggle}
    >
      <div
        className="
          w-[18.5rem] h-[10rem] rounded-[11.75px] border-[1.5px] border-solid border-white bg-cover 
          bg-center bg-no-repeat relative flex justify-center items-center
          cursor-pointer trailer-content"
        style={{
          backgroundImage: `url(${data?.redBandTrailerImg})`,
        }}
      >
        <button className="playBut h-[4rem] w-[4rem]">
          <a href="#trailer" className="">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="3.75rem"
              height="3.75rem"
              viewBox="0 0 213.7 213.7"
              enableBackground="new 0 0 213.7 213.7"
              xmlSpace="preserve"
            >
              <polygon
                className="triangle"
                id="XMLID_18_"
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="73.5,62.5 148.5,105.8 73.5,149.1 "
              />

              <circle
                className="circle"
                id="XMLID_17_"
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                cx="106.8"
                cy="106.8"
                r="103.3"
              />
            </svg>
          </a>
        </button>
      </div>

      {/* <Modal isOpen={isModalOpen} onClose={onClose}>
          <iframe ref={iframeRef} width="100%" height="536px" title="trailer" src={embedUrl}></iframe>
      </Modal> */}
    </div>
  );
};


