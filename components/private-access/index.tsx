"use client";

import { LuckyDraw } from "@/components/private-access/lucky-draw";
import { WinTicket } from "@/components/private-access/win-ticket";
import { ExclusiveDiscounts } from "@/components/private-access/exclusive-discounts";
import { OnlyFans } from "@/components/private-access/only-fans";
import { BehindTheScenes } from "@/components/private-access/behind-the-scenes";
import { TalkToStar } from "@/components/private-access/talk-to-star";

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

            <div className="w-full h-full px-12 space-y-4 py-6">
                <div className="text-5xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r  from-[#FFD80E] via-[#2CD9FF] to-[#2CD9FF]">
                    Talk To the Stars
                </div>

                <TalkToStar />
            </div>
        </div>
    );
};
export default PrivateAccess;
