"use client";

import Image from "next/image";
import React from "react";

import SelectLang from './selectLang/index'

const Lang = [
    {
        label: "English",
        value: "english",
    },
    {
        label: "VietNamese",
        value: "vietnamese",
    },
];

const Footer = () => {

    return (
        <footer
            className="text-white p-8"
            style={{
                backgroundColor: "rgb(19,16,32)",
                padding: "80px",
            }}
        >
            <div className="mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0 col">
                    <div
                        className="flex items-center "
                        style={{
                            width: "450px",
                            flexDirection: "row",
                        }}
                    >
                        <Image
                            src="/assets/images/logo-header.png"
                            alt="Logo"
                            width={144}
                            height={32}
                        />
                    </div>

                    <div
                        style={{
                            paddingTop: "40px",
                            paddingBottom: "40px",
                        }}
                    >
                        <span
                            className=""
                            style={{
                                fontSize: '20px',
                            }}
                        >
                            Our platform is trusted by millions & features
                            <br />
                            the best updated movies from around the world.
                        </span>
                    </div>

                    <div>
                        <span className="text-thin"
                            style={{
                                fontSize: '14px',
                                marginBottom: '24px',
                                color: '#8A8F98',
                            }}
                        >
                            Subscribe to our newsletter
                        </span>

                        <div className="relative">
                            <div
                                className="absolute  left-5 transform -translate-y-1/2 w-6 h-6"
                                style={{
                                    top: "55%",
                                    opacity: "0.5",
                                }}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 15 15"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ color: "black" }}
                                >
                                    <path
                                        d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                            <input
                                type="email"
                                placeholder="your email"
                                className="bg-white p-4 pl-12 focus:outline-none w-[444px] h-[80px]"
                                style={{
                                    color: "black",
                                    borderRadius: "16px",
                                    fontSize: "16px",
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
                                <svg style={{ color: 'black' }} width="36" height="36" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg>
                                {/* Subscribe */}
                            </button>

                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col"
                    style={{
                        alignItems: "flex-end",
                    }}
                >
                    <div
                        className="md:ml-8 mb-4 "
                        style={{
                            marginBottom: "40px",
                        }}
                    >
                        {/* <a href="/">Home</a>
                        <span className="mx-2">/</span>
                        <a href="/movies">Movies</a>
                        <span className="mx-2">/</span>
                        <a href="/watchlist">Watchlist</a>
                        <span className="mx-2">/</span>
                        <a href="/filmmaker">Filmmaker</a> */}
                    </div>

                    <div className="flex items-center mr-8 flex-end">

                        <SelectLang
                            options={Lang}
                        />

                    </div>

                  

                </div>
            </div>
        </footer>
    );
};

export default Footer;
