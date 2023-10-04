"use client";

import { Portfolio } from "@/components/portfolio";
import Image from "next/image";
import { CardSection } from "@/components/card-section";
import banner from "../../../images/banner.png";
import avatar from "../../../images/avatar.png";

const Profile = () => {
    return (
        <div>
            <Image src={banner} height={350} alt="banner" />

            <div className="w-full h-full px-12 py-6">
                <div className="rounded-3xl">
                    <Portfolio
                        name="Mr. Anh Tran"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
                        image={avatar}
                    />

                    <CardSection />
                </div>
            </div>
        </div>
    );
};
export default Profile;
