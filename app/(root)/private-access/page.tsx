"use client";

import { LuckyDraw } from "@/components/lucky-draw";
import { WinTicket } from "@/components/win-ticket";
import { ExclusiveDiscounts } from "@/components/exclusive-discounts";
import { OnlyFans } from "@/components/only-fans";
import { BehindTheScenes } from "@/components/behind-the-scenes";

const PrivateAccess = () => {
    return (
        <div className="space-y-6">
            <p className="w-ful text-center font-semibold text-8xl drop-shadow-primary text-slate-200 h-full px-12 py-10">
                Welcome to the club
            </p>

            <div className="w-full h-full px-12 py-6">
                <div className="rounded-3xl">
                    <LuckyDraw luckyNumber={[1, 2, 3, 4]} address="214" />
                </div>
            </div>

            <div className="w-full h-full px-12 py-6">
                <div className="rounded-3xl">
                    <WinTicket />
                </div>
            </div>

            <div className="w-full h-full space-y-4 px-12 py-6">
                <div className="text-5xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD80E] via-[#2CD9FF] to-[#2CD9FF]">
                    Exclusive Discounts
                </div>

                <div className="rounded-3xl">
                    <ExclusiveDiscounts />
                </div>
            </div>

            <div className="w-full h-full px-12 space-y-4 py-6">
                <div className="text-5xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD80E] via-[#2CD9FF] to-[#2CD9FF]">
                    Only (for) fans Content
                </div>

                <div className="rounded-3xl">
                    <OnlyFans />
                </div>
            </div>

            <div className="w-full h-full px-12 space-y-4 py-6">
                <div className="text-5xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r  from-[#FFD80E] via-[#2CD9FF] to-[#2CD9FF]">
                    Behind the Scenes Photos
                </div>

                <div className="rounded-3xl">
                    <BehindTheScenes />
                </div>
            </div>
        </div>
    );
};
export default PrivateAccess;
