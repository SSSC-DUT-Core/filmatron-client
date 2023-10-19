"use client";

import { LuckyDraw } from "@/src/components/private-access/lucky-draw";
import { WinTicket } from "@/src/components/private-access/win-ticket";
import { ExclusiveDiscounts } from "@/src/components/private-access/exclusive-discounts";
import { OnlyFans } from "@/src/components/private-access/only-fans";
import { BehindTheScenes } from "@/src/components/private-access/behind-the-scenes";
import { TalkToStar } from "@/src/components/private-access/talk-to-star";

const PrivateAccess = () => {
    return (
        <div className="space-y-6">
            <p className="w-ful text-center font-semibold sm:text-8xl text-5xl drop-shadow-primary text-slate-200 h-full px-12 sm:py-10 py-8">
                Welcome to the club
            </p>

            <div className="w-full h-full sm:px-12 px-0 sm:py-6 py-0">
                <div className="rounded-3xl">
                    <LuckyDraw luckyNumber={[1, 2, 3, 4]} address="214" />
                </div>
            </div>

            <div className="w-full h-full sm:px-12 px-o py-6">
                <div className="rounded-3xl">
                    <WinTicket />
                </div>
            </div>

            <div className="w-full h-full space-y-4 sm:px-12 px-0 sm:py-6 py-0">
                <div className="sm:text-5xl text-3xl font-semibold mb-3 text-transparent bg-clip-text sm:text-start text-center bg-gradient-to-r from-[#FFD80E] via-[#2CD9FF] to-[#2CD9FF]">
                    Exclusive Discounts
                </div>

                <div className="rounded-3xl">
                    <ExclusiveDiscounts />
                </div>
            </div>

            <div className="w-full h-full sm:px-12 px-0 space-y-4 sm:py-6 py-0">
                <div className="sm:text-5xl text-3xl sm:text-start text-center font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD80E] via-[#2CD9FF] to-[#2CD9FF]">
                    Only (for) fans Content
                </div>

                <div className="rounded-3xl">
                    <OnlyFans />
                </div>
            </div>

            <div className="w-full h-full sm:px-12 px-3 space-y-4 sm:py-6 py-0">
                <div className="sm:text-5xl text-3xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r  from-[#FFD80E] via-[#2CD9FF] to-[#2CD9FF]">
                    Behind the Scenes Photos
                </div>

                <div className="rounded-3xl">
                    <BehindTheScenes />
                </div>
            </div>

            <div className="w-full h-full sm:px-12 px-0 space-y-4 sm:py-6 py-0">
                <div className="sm:text-5xl text-3xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r  from-[#FFD80E] via-[#2CD9FF] to-[#2CD9FF]">
                    Talk To the Stars
                </div>

                <TalkToStar />
            </div>
        </div>
    );
};
export default PrivateAccess;
