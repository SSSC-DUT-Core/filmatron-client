import { StepType } from "@reactour/tour";
import TalkToStarImg from "@/images/talk-to-stars.png";
import LuckyDrawImage from "@/images/lucky-draw.png";
import Image from "next/image";
import Ticket from "@/images/ticket.png";


export const steps: StepType[] = [
    {
        selector: '[data-tut="reactour__iso"]',
        content: () => (
            <div>
                <Image
                    className="mt-3"
                    src={TalkToStarImg}
                    alt="lucky-draw"
                    width={400}
                    height={200}
                />
                <p className="text-center mt-4">
                    <strong>Login</strong> to experience more features from{" "}
                    <strong>Filmatron</strong> !
                </p>
            </div>
        ),
        position: "left",
    },
    {
        selector: ".filmmatron-1",
        content: () => (
            <div className="flex flex-col justify-center items-center">
                <Image
                    className="mt-3 rounded-lg"
                    src={LuckyDrawImage}
                    alt="lucky-draw"
                    width={150}
                    height={150}
                />
                <p className="text-center mt-4">
                    <strong>Choose</strong> your favorite movie 😊
                </p>
            </div>
        ),
        position: "right",
    },
    {
        selector: ".claim-button",
        content: () => (
            <div className="flex flex-col justify-center items-center">
                <div>
                    <Image
                        className="mt-2 rounded-lg"
                        src={Ticket}
                        alt="lucky-draw"
                        width={200}
                        height={200}
                    />
                </div>
                <p className="text-center mt-4">
                    <strong>Claim NFT</strong> and enjoy private access
                    experiences!
                </p>
            </div>
        ),
        position: "bottom",
    },
];
