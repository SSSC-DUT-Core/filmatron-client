import React from 'react';

import { PrizeTicketLarge } from './PrizeTicketLarge';


interface PrizeTicketHomePageModalProps {
  isOpen: true;
  onClose: () => void;
  TicketData : {
    title: string;
    ticketLogo: string;
    announcementDate: string;
    typeOfPrize: string;
    prizeImg: string;
    walletCreatorAddress: string;
    dateCreated: string;
    // width:, height 
  }
}

const PrizeTicketHomePageModal: React.FC<PrizeTicketHomePageModalProps> = ({ isOpen, onClose, TicketData }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-10">
      <div className="
        p-8 rounded-lg w-full h-full bg-[rgba(0, 0, 0, 0.9)] p-4 relative
        flex justify-center items-center
      ">
        <button className="absolute top-0 right-0 m-[-8px] p-4 cursor-pointer" onClick={handleClose}>
          ❌
        </button>

        <PrizeTicketLarge {...TicketData}/>
       
      </div>
    </div>
  );
};

export default PrizeTicketHomePageModal;
