"use client";

import Image from "next/image";
import MoMo from "../../images/momo.png";
import { Button } from "../ui/button";

export const ExclusiveDiscounts = () => {
    return (
        <div className="w-full bg-black border-primary-background border-[1px] border-brand bg-opacity-30 p-3 rounded-3xl flex justify-between flex-row">
            <div className="w-5/12 flex justify-center items-center">
                <Image src={MoMo} alt="lucky-draw" width={400} height={200} />
            </div>

            <div className="w-6/12 flex flex-col justify-center items-start">
                <p className="text-start animate-pulse font-semibold text-3xl drop-shadow-primary text-slate-200 mb-2">
                    Buy your tickets on
                </p>
                <p className="text-start animate-pulse font-semibold text-3xl drop-shadow-primary text-slate-200 mb-6">
                    Momo for a 5% discount
                </p>

                <Button className="w-4/5 hover:bg-brand transform active:scale-75 transition-transform hover:scale-110 duration-500 ease-out cursor-pointer flex flex-row justify-center items-center bg-brand text-black">
                    <p className="text-base font-semibold">Click here</p>
                </Button>
            </div>
        </div>
    );
};
