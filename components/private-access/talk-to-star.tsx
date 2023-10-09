"use client";

import Image from "next/image";
import { BsClock } from "react-icons/bs";
import TalkToStarImg from "../../images/talk-to-stars.png";
import Director from "../../images/director.png";
import { Button } from "../ui/button";

export const TalkToStar = () => {
    return (
        <div className="w-full bg-black border-primary-background border-[1px] border-brand bg-opacity-30 p-3 py-5 rounded-3xl flex justify-between flex-row">
            <div className="w-5/12 flex justify-center items-center">
                <Image
                    src={TalkToStarImg}
                    alt="lucky-draw"
                    width={400}
                    height={200}
                />
            </div>

            <div className="w-6/12 flex flex-col justify-center items-start">
                <div className="w-full flex items-center">
                    <BsClock />
                    <p className="text-start font-serif text-md text-white ml-1">
                        Nov 1st, chat with director
                    </p>
                </div>

                <div className="mt-3 flex justify-between w-4/5">
                    <div>
                        <DirectorComponent />
                    </div>

                    <div>
                        <DirectorComponent />
                    </div>
                </div>

                <Button className="w-4/5 hover:bg-brand transform active:scale-75 transition-transform hover:scale-110 duration-500 ease-out cursor-pointer flex flex-row justify-center items-center bg-brand text-black mt-10">
                    <p className="text-base font-semibold">Coming soon</p>
                </Button>
            </div>
        </div>
    );
};

export const DirectorComponent = () => {
    return (
        <div className="flex items-center">
            <div className="relative">
                <div className="relative -right-12 top-4 z-10">
                    <div className="px-2 py-1 bg-brand text-black text-center rounded-xl relative">
                        <p className="text-black text-center">Hello</p>
                    </div>
                    <div className="relative w-4 h-4 bottom-3 left-3">
                        <div className="absolute w-full h-full bg-brand transform rotate-45 origin-center" />
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src={Director}
                        alt="director"
                        width={103.64}
                        height={103.64}
                    />
                </div>
            </div>
            <div className="ml-5 mt-8">
                <p className="font-semibold text-3xl">First name</p>
                <p className="pt-3 text-slate-500">Last name</p>
            </div>
        </div>
    );
};
