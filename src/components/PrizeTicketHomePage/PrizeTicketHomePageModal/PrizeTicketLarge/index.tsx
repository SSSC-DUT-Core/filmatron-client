'use client'
import React from 'react';

export type PrizeTicketLargeProps = {
    title: string;
    ticketLogo: string;
    announcementDate: string;
    typeOfPrize: string;
    prizeImg: string;
    walletCreatorAddress: string;
    dateCreated: string;
    // width:, height 
}

export const PrizeTicketLarge = ({ title, ticketLogo, announcementDate, typeOfPrize, prizeImg, walletCreatorAddress, dateCreated } : PrizeTicketLargeProps) => {

  
  const ticketBGLarge = './assets/ticket/ticket-bg-large.png';
    const ticketShadowBlur = './assets/ticket/ticket-shadow-blur.png';

    const ticketBGStyle = {
        backgroundImage: `url(${ticketBGLarge})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',   

        // border:"1px solid red",
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
        <div className="flex items-end w-[55rem] h-[32rem]  mt-[-32px] "
            style={ticketBGStyle}
        >
            <div className='col w-full pb-[5.5rem] pl-[8.5rem] cursor-pointer'>
                <div className='flex justify-between items-center pl-[1.5rem] row w-[29.5rem] h-[16.5rem] rounded-lg'>
                    {/* prizeImg */}
                    <div className='col relative'>
                        {/* prize prizeImg */}
                        <div className='w-[8.4rem] h-[10.2rem] rounded-sm transform rotate-12'
                            style={prizeImgStyle}/>
                        <div/>

                        {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent filter blur-[10px]"></div> */}
                        <div className="absolute top-18 -left-6 w-[10rem] h-[1.25rem] bg-gradient-to-t from-white to-transparent filter brightness-110 blur-[16px]"></div>
                        {/* top-80 left-[-8px]  */}
                    </div>

                    {/* title and winner announceDate */}
                    <div className='col w-[17.5rem] gap-6'>
                        <div className="text-white font-inter font-semibold text-[36px] leading-[4rem]">
                            {title}
                        </div>

                        <div className="text-[#C0C0CF] font-inter font-normal text-[32px] leading-[4rem] text-left rounded-[1.5rem]">
          
                            {"End in: " + formatDate(announcementDate)}
                        </div>
                    </div>
                    
                </div>

                {/* black zone, TicketLogo, ticket Event Column and author wallet, how many date ago */}
                <div className='w-[29.5rem] h-[7rem] rounded bg-[#151425] p-[12px] flex justify-between '
                    style={{
                        // border:"1px solid red",
                    }}
                >
                    <div className='col'>
                        {/* ticketLogo */}
                        <img className="w-[11.5rem] h-[2.5rem]" 
                        src={ticketLogo} 
                        alt="" />

                        {/* ticket title */}
                        <div className='text-gray-400 font-poppins text-[24px] leading-[3rem] text-right round float-left leading-[3.75rem]'>
                            {typeOfPrize}
                        </div>
                        
                    </div>

                    <div className='col flex flex-col'>
                        {/* walletCreator */}
                        <div className='text-gray-400 font-poppins text-[24px] leading-[3rem] text-right round float-left '>
                            by 
                            <span className='text-white'>
                                {' ' + shortenAddress(walletCreatorAddress)}
                            </span>
                        </div>

                        {/* create How long  */}
                        <div className='text-gray-400 font-poppins text-[24px] leading-[3rem] text-right round float-left'>
                            {calculateDaysAgo(dateCreated)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

