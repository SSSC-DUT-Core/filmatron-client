"use client";

import Image from "next/image";
import Ticket from "@/images/ticket.png";

export const WinTicket = () => {
    return (
        <div className="w-full bg-black border-primary-background border-[1px] border-brand bg-opacity-30 p-3 rounded-3xl flex flex-row">
            <div className="h-full w-full flex flex-col items-center justify-center">
                <p className="text-center font-semibold text-6xl drop-shadow-primary animate-pulse text-slate-200 mb-6">
                    You’ve been entered to win
                </p>

                {/* TODO: Add the win ticket component */}

                <div className="w-full grid grid-cols-3 gap-3 h-full">
                    <Image
                        src={Ticket}
                        alt="lucky-draw"
                        width={400}
                        height={200}
                    />
                    <Image
                        src={Ticket}
                        alt="lucky-draw"
                        width={400}
                        height={200}
                    />
                    <Image
                        src={Ticket}
                        alt="lucky-draw"
                        width={400}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
};
