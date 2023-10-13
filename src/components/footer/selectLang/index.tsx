import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  // onChange: (value: string) => void;
}

const SelectLang: React.FC<SelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const defaultOption = options[0];

  return (
    <div className='relative flex flex-col items-center w-[148px] h-[44px] rounded'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`bg-[#41414d] font-medium text-sm py-2.5 px-4 w-full flex items-center justify-between  rounded-[20px] tracking-wider border-4 border-transparent active:border-white cursor-pointer`}
      >
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
            />
        </svg>
        {selectedOption.label}
        <div className='flex items-center justify-between'>
          <svg 
            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="white" viewBox="0 0 140 140" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40 L120 40 L70 90 z"/>
            </svg>
        </div>
      </button>
      {isOpen && (
        <div className='absolute w-[180px] bg-[#41414d] top-[2.8rem] flex flex-col items-start rounded-lg p-2 '>
          {options.map((option, index) => (
            <div
              className='flex w-full p-4 justify-between hover:bg-black-400 cursor-pointer rounded-r-lg border-l border-l-transparent hover:border-l-white border-l-full transition duration-300'
              key={index}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              <span className='font-medium text-sm'>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectLang;
