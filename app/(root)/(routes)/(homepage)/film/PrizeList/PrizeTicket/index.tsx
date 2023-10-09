'use client'
import React from 'react';


export type PrizeTicketType = {
    title: string;
    ticketLogo: string;
    announcementDate: string;
    typeOfPrize: string;
    prizeImg: string;
    walletCreatorAddress: string;
    dateCreated: string;

    // width:, height 
  }

export const PrizeTicket = ({ title, ticketLogo, announcementDate, typeOfPrize, prizeImg, walletCreatorAddress, dateCreated } : PrizeTicketType) => {
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

    //thêm "th", "st", "nd", "rd" cho ngày
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
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const dateParts = announcementDate.split('-');
        const year = parseInt(dateParts[0]);
        const monthIndex = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[2]);
      
        const monthName = months[monthIndex];
        const formattedDate = `${monthName} ${day}${getDaySuffix(day)}, ${year}`;
      
        return formattedDate;
      }

      const calculateDaysAgo = (dateCreated: string) => {
        const inputDate = new Date(dateCreated);
        const currentDate = new Date();
      
        if (isNaN(inputDate.getTime()) || inputDate > currentDate) {
  
          return 'Invalid date';
        }
      
        
        const timeDifference = currentDate.getTime() - inputDate.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      
        return `${daysDifference} days ago`;
      };
      
      
    
    return (
        <div className="flex items-end w-[28rem] h-[15.5rem]"
            style={ticketBGStyle}
        >
            {/* <img src={prizeImg} alt={title} /> */}
            {/* <div className="prize-details">
                <h3>{title}</h3>
                <p>Announcement Date: {announcementDate}</p>
                <p>Type of Prize: {typeOfPrize}</p>
                <p>Wallet Creator Address: {walletCreatorAddress}</p>
                <p>Date Created: {new Date(dateCreated).toLocaleString()}</p>
            </div> */}
            <div className='col w-full pb-12 pl-[5rem] '>
                <div className='flex justify-between pl-4 row w-52 h-[6.5rem] rounded-sm'>
                    {/* prizeImg */}
                    <div className='col relative'>
                        {/* prize prizeImg */}
                        <div className='w-14 h-20 rounded-sm transform rotate-12'
                            style={prizeImgStyle}/>
                        <div/>

                        {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent filter blur-[10px]"></div> */}
                        <div className="absolute top-20 -left-3 w-[4.5rem] h-[0.5rem] bg-gradient-to-t from-white to-transparent filter brightness-110 blur-[8px]"></div>
                        {/* top-80 left-[-8px]  */}
                    </div>

                    {/* title and winner announceDate */}
                    <div className='col w-28 gap-2.5'>
                        <div className="text-white font-inter font-semibold text-[0.925rem] leading-6">
                            {title}
                        </div>

                        <div className="text-[#C0C0CF] font-inter font-normal text-[0.629rem] leading-6 text-left rounded-[0.5rem]">
                            Winners announced:
                            <br />
                            {formatDate(announcementDate)}
                        </div>
                    </div>
                    
                </div>

                {/* black zone, TicketLogo, ticket Event Column and author wallet, how many date ago */}
                <div className='w-[14.5rem] h-12 rounded bg-[black] p-2 flex justify-between'
                    style={{
                        // border:"1px solid red",
                    }}
                >
                    <div className='col'>
                        {/* ticketLogo */}
                        <img className="w-[5rem] h-4 " 
                        src={ticketLogo} 
                        alt="" />

                        {/* ticket title */}
                        <div className='text-gray-400 font-poppins font-normal text-xs leading-tight text-right round float-left leading-5'>
                            {typeOfPrize}
                        </div>
                        
                    </div>

                    <div className='col flex flex-col'>
                        {/* walletCreator */}
                        <div className='text-gray-400 font-poppins font-normal text-xs leading-tight text-right round float-right leading-4'>
                            by 
                            <span className='text-white'>
                                {' ' + shortenAddress(walletCreatorAddress)}
                            </span>
                        </div>

                        {/* create How long  */}
                        <div className='text-gray-400 font-poppins font-normal text-xs leading-tight text-right round float-right leading-5'>
                            {calculateDaysAgo(dateCreated)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

