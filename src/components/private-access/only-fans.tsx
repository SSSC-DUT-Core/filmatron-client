"use client";

import { PainIcon } from "@/public/assets";
import Image from "next/image";

export const OnlyFans = () => {
    return (
        <div className="w-full bg-gray-600 border-primary-background bg-opacity-40 p-2 rounded-3xl flex justify-between flex-col">
            <div className="bg-slate-900 bg-opacity-50 h-96 rounded-3xl flex flex-col justify-center items-center w-full">
                <p className="text-5xl font-bold text-slate-300">Link</p>
                <p className="text-base font-medium text-slate-300">
                    View more
                </p>
            </div>

            <div className="flex flex-row p-4 space-x-4">
                <Image src={PainIcon} alt="gift-box" width={30} height={30} />

                <div className="flex flex-col text-slate-300">
                    <p className="text-base font-semibold">Project title</p>
                    <p className="text-sm font-light">View project</p>
                </div>
            </div>
        </div>
    );
};
