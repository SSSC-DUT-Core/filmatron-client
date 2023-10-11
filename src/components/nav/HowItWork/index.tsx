import React from 'react';

const sealQuestionIconUrl = "/assets/icons/seal-question-icon.svg";

export const HowItWork = () => {
  return (
    
    <div className="w-full border-gradient py-[1px]">
        <div className='w-full h-full  py-[16px] flex flex-wrap justify-start items-center gap-[12px] px-[92px] bg-[rgb(6,9,30)]'>
          <div className='flex gap-2 items-center'>
            <img
              src={sealQuestionIconUrl}
              alt=""
              className="w-8 h-8" // Adjust the size as needed
            />

            <h3
              className="text-white"
              style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "28px",
                  
              }}
            >
                How it work:
            </h3>
          </div>

          <div className='flex gap-2 items-center'>
            <div className="w-[32px] h-[32px]  rounded-full p-3 bg-[rgba(253,217,73,1)] flex items-center justify-center">
              <span className="text-black text-sm">1</span>
            </div>
            <h3
              className="text-white"
              style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "28px",
                  
              }}
            >
                Connect your wallet
            </h3>
          </div>

          

          <div className='flex gap-2 items-center'>
            <span className="inline-block w-[24px] h-[2px] bg-[rgba(253,217,73,1)]">
            </span>
            
            <div className="w-[32px] h-[32px]  rounded-full p-3 bg-[rgba(253,217,73,1)] flex items-center justify-center">
              <span className="text-black text-sm">2</span>
            </div>

            <h3
              className="text-white"
              style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "28px",
                  
              }}
            >
                Find films you love
            </h3>
          </div>

         

          <div className='flex gap-2 items-center'>
            <span className="inline-block w-[35px] h-[2px] bg-[rgba(253,217,73,1)]">
            </span>

            <div className="w-[32px] h-[32px]  rounded-full p-3 bg-[rgba(253,217,73,1)] flex items-center justify-center">
              <span className="text-black text-sm">3</span>
            </div>
            
            <h3
              className="text-white"
              style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "28px",
                  
              }}
            >
                Get your collectible and claim cool rewards
            </h3>
          </div>
        </div>
    </div>
  );
};

