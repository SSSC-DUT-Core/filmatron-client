'use client'
import React, { useState } from 'react';
import PrizeTicketHomePageModal from './PrizeTicketHomePageModal'; 

export type PrizeTicketType = {
    title: string;
    ticketLogo: string;
    announcementDate: string;
    ticketEvent: string;
    prizeImg: string;
    walletCreatorAddress: string;
    dateCreated: string;
    // width:, height 
}

export const PrizeTicketHomePage = ({ title, ticketLogo, announcementDate, ticketEvent, prizeImg, walletCreatorAddress, dateCreated } : PrizeTicketType) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleToggle = () => {
    // onClick(data.filmId.toString());
    setModalOpen(!isModalOpen);
  }
  
  const ticketBG = './assets/ticket/ticket-bg.png';
    const ticketShadowBlur = './assets/ticket/ticket-shadow-blur.png';

    const ticketBGStyle = {
        backgroundImage: `url(${ticketBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',   
      };  

    const prizeImgStyle = {
    
      backgroundImage: `url(${prizeImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',   
    };  

    const ticketShadowBlurStyle = {
        backgroundImage: `url(${ticketShadowBlur})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',   
      };

    const shortenAddress = (walletCreatorAddress: string) => {
        const prefix = walletCreatorAddress.slice(0, 4);
        const suffix = walletCreatorAddress.slice(-4);
        return `${prefix}...${suffix}`;
    }

    // thêm "th", "st", "nd", "rd" cho ngày
    const getDaySuffix = (day: number) => {
        if (day >= 11 && day <= 13) {
          return 'th';
        }
      
        switch (day % 10) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      }

    const formatDate = (announcementDate: string) => {
      const monthsAbbreviation = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      
        const dateParts = announcementDate.split('-');
        const year = parseInt(dateParts[0]);
        const monthIndex = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[2]);
      
        const monthName = monthsAbbreviation[monthIndex];
        const formattedDate = `${monthName} ${day}${getDaySuffix(day)}`;
      
        return formattedDate;
      }

      const calculateDaysAgo = (dateCreated: string) => {
        const inputDate = new Date(dateCreated);
        const currentDate = new Date();
      
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(inputDate.getTime()) || inputDate > currentDate) {
  
          return 'Invalid date';
        }
      
        
        const timeDifference = currentDate.getTime() - inputDate.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      
        return `${daysDifference} days ago`;
      };
      
      
    
    return (
        <div className="flex items-end w-[22rem] h-[14rem]  mt-[-32px] mx-[-20px] p-[32px] "
            style={ticketBGStyle}
            onClick={handleToggle}
        >
            <div className='col w-full pb-[1rem] pl-[1.25rem] cursor-pointer'>
                <div className='flex justify-between items-center pl-2.5 pr-1 row w-[12rem] h-[6rem] rounded-sm'>
                    {/* prizeImg */}
                    <div className='col relative'>
                        {/* prize prizeImg */}
                        <div className='w-[3.5rem] h-[4.25rem] rounded-sm transform rotate-12'
                            style={prizeImgStyle}/>
                        <div/>

                        {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent filter blur-[10px]"></div> */}
                        <div className="absolute top-18 -left-3 w-[4.25rem] h-[0.25rem] bg-gradient-to-t from-white to-transparent filter brightness-110 blur-[8px]"></div>
                        {/* top-80 left-[-8px]  */}
                    </div>

                    {/* title and winner announceDate */}
                    <div className='col w-28 gap-2.5'>
                        <div className="text-white font-inter font-semibold text-[0.85rem] leading-6">
                            {title}
                        </div>

                        <div className="text-[#C0C0CF] font-inter font-normal text-[0.75rem] leading-6 text-left rounded-[0.5rem]">
                            End in:
                            {formatDate(announcementDate)}
                        </div>
                    </div>
                    
                </div>

                {/* black zone, TicketLogo, ticket Event Column and author wallet, how many date ago */}
                <div className='w-[11.5rem] h-[2.5rem] rounded bg-[#151425] p-1.5 flex justify-between'
                    style={{
                        // border:"1px solid red",
                    }}
                >
                    <div className='col'>
                        {/* ticketLogo */}
                        <img className="w-[4.25rem] h-3.5" 
                        src={ticketLogo} 
                        alt="" />

                        {/* ticket title */}
                        <div className='text-[#f0aa2c] font-poppins text-[10px] leading-4 text-right round float-left leading-5'>
                          {ticketEvent}
                        </div>
                        
                    </div>

                    <div className='col flex flex-col'>
                        {/* walletCreator */}
                        <div className='text-gray-400 font-poppins text-[10px] leading-3 text-right round float-left leading-4'>
                            by 
                            <span className='text-white'>
                                {' ' + shortenAddress(walletCreatorAddress)}
                            </span>
                        </div>

                        {/* create How long  */}
                        <div className='text-gray-400 font-poppins text-[10px] leading-4 text-right round float-left leading-4'>
                            {calculateDaysAgo(dateCreated)}
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
              <PrizeTicketHomePageModal
                isOpen={isModalOpen}
                onClose={handleToggle}
                TicketData={{ title, ticketLogo, announcementDate, ticketEvent, prizeImg, walletCreatorAddress, dateCreated }}
              />
            )}
        </div>
    )
}

