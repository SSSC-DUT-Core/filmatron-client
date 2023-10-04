"use client";
import React from 'react';
// import { Select, Flex } from '@radix-ui/themes';

import {SelectDemo} from './selectLang/index';


const Footer = () => {
  
  return (
    <footer className=" text-white p-8"
      style={{
        backgroundColor: 'rgb(19,16,32)',
        padding: '80px',
      }}    
    >

      <div className=" mx-auto flex flex-col md:flex-row justify-between"
      >
        
        <div className="mb-4 md:mb-0 col">
          <div className="flex items-center mb-4"
            style={{
              width: '450px',
              flexDirection: 'row',
              // gap: '24px',
            }}
          >
            <img
                src="/assets/images/logoSoul.png"
                alt="Logo"
                className="w-30 h-8 mr-2"
              />
          </div>
        
          <div style={{
            paddingBottom: '24px',
          }}>
            <span className=""
              style={{
                fontSize: '20px',
                marginBottom: '24px',
              }}
            >
              Our platform is trusted by millions & features 
              <br/>
              the best updated movies from around the world.
            </span>
          </div>
                   
         

          <div>
            <span className="text-thin"
              style={{
                fontSize: '14px',
                marginBottom: '24px',
                // fontWeight: '400d',
                color: '#8A8F98',
              }}
            >
              Subscribe to our newsletter
            </span>

            <div className="relative">
              <div className="absolute  left-5 transform -translate-y-1/2 w-6 h-6"
                style={{
                  top: '55%',
                  opacity: '0.5',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{color: 'black',}}
                >
                  <path
                    d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>

              <input
                type="email"
                placeholder="your email"
                className="bg-white p-4 pl-12 focus:outline-none w-[444px] h-[80px]"
                style={{
                  color: 'black',
                  borderRadius: '16px',
                  fontSize: '16px',
                }}
                />

              <button
                className="absolute text-white p-4 rounded-r-md hover:bg-blue-600 focus:outline-none w-[40px] h-[30px]"
                style={{
                  top: '8px',
                  right: '24px',
                  backgroundColor: '#f3c678',
                  borderRadius: '16px',
                }}
              >
                <svg style={{color:'black',}} width="36" height="36" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                {/* Subscribe */}
              </button>

            </div>  
          </div>
        </div>


        <div className="flex flex-col"
          style={{
            alignItems: 'flex-end',
            // justifyContent: 'flex-end',
          }}
        >
          <div className="md:ml-8 mb-4 "
            style={{
                marginBottom: '40px',
              }}
          >
            <a href="/">Home</a>
            <span className="mx-2">/</span>
            <a href="/movies">Movies</a>
            <span className="mx-2">/</span>
            <a href="/watchlist">Watchlist</a>
            <span className="mx-2">/</span>
            <a href="/filmmaker">Filmmaker</a>
          </div>

          <div className="flex items-center md:ml-8 flex-end">
            
          <div style={{ 
  position: 'relative', 
  display: 'inline-block', 
  width: '169px',
  height: '44px',
}}>
  <select
    className="text-white border border-gray-600 rounded-md p-2 focus:outline-none"
    style={{
      width: '164px',
      height: '44px',
      borderRadius: '40px',
      backgroundColor: '#41414d',
      paddingLeft: "54px",
      paddingRight: "12px",
    }}
  >
    <option value="english">English</option>
    <option value="spanish">VietNamese</option>
  </select>

  <div
    style={{
      position: 'absolute',
      top: '12%',
      left: '16px', // Adjust the left position to move the arrow to the left
      transform: 'translateX(-50%)',
      marginTop: '5px',
    }}
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
      ></path>
    </svg>
  </div>
</div>


            {/* <SelectDemo /> */}

            {/* <Select.Root defaultValue="apple">
              <SelectTrigger />
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select.Root>   */}

          </div>

      {/*  Links Media */}
          {/* <div className="flex mt-4 md:mt-0 ml-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-google"></i>
            </a>
          </div> */}
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
