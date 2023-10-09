import React from 'react';
import { PrizeTicket, PrizeTicketType } from './PrizeTicket';
import './PrizeList.css';


type PrizeListProps = {
  prizeList: PrizeTicketType[];
};

export const PrizeList = ({ prizeList }: PrizeListProps) => {
  return (
    <div  className="w-full  rounded-[32px] border border-solid border-[1px] py-[16px] border-yellow-300">
        {/* title */}
        <div className="text-shadow-yellow font-inter font-semibold text-white text-5xl leading-12 text-center mb-4 ">
            You’ve been entered to win  
        </div>

        <div className='flex flex-row flex-wrap justify-around'>
            {/* prize list */}
            {prizeList.map((prize, index) => (
                <PrizeTicket key={index} {...prize} />
            ))}
        </div>
        
    </div>
  );
};
