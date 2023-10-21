"use client";


import { CopyIcon, ChatIcon, Facebook, Google, Twitter } from "@/public/assets";
import Image, { StaticImageData } from "next/image";
import toast from "react-hot-toast";
export interface IPortfolioProps {
    name: string;
    description: string;
    image: StaticImageData | string;
    publicKey: string;
}

const socialList = [
    {
        name: "facebook",
        image: Facebook,
    },
    {
        name: "twitter",
        image: Twitter,
    },
    {
        name: "google",
        image: Google,
    },
    {
        name: "chat",
        image: ChatIcon,
    },
];

export const Portfolio = ({ name, description, image, publicKey }: IPortfolioProps) => {

    return (
        <div className="w-full bg-black bg-opacity-30 sm:p-6 p-2 rounded-t-3xl flex sm:flex-row flex-col sm:items-start items-center">
            <div className="sm:w-1/4 rounded-xl w-full flex justify-center items-center">
                <Image
                    className="rounded-xl"
                    src={image}
                    alt={name}
                    width={250}
                    height={250}
                />
            </div>
            <div className="sm:w-2/4 sm:mt-0 mt-4 flex flex-col items-center sm:items-start w-full text-white">
                <p className="text-xl font-normal mb-2">User profile</p>
                <p className="text-4xl font-semibold mb-3">{name}</p>
                <p className="text-sm font-normal mb-4">{description}</p>
                <div className="flex flex-row justify-center w-fit bg-slate-200 py-2 px-4 rounded-full items-center space-x-2">
                    <p className="text-slate-600">{publicKey.slice(0, 16)}</p>
                    <Image className="cursor-pointer" onClick={() => {
                      navigator.clipboard.writeText(publicKey);
                      toast.success('Copied!');
                    }} src={CopyIcon} alt="icon-copy" />
                </div>
            </div>

            <div className="sm:w-1/4 w-full sm:mt-0 mt-4 flex flex-row  space-x-2 items-start justify-center">
                {socialList.map(({ image, name }) => (
                    <div className="bg-slate-50 w-10 h-10 flex justify-center rounded-xl items-center">
                        <Image src={image} alt={name} width={20} height={20} />
                    </div>
                ))}

                <div className="cursor-pointer hover:bg-slate-50 font-semibold hover:text-gray-800 bg-transparent border-2 h-fit w-fit text-white rounded-full border-white px-4 py-2">
                    Edit profile
                </div>
            </div>
        </div>
    );
};
