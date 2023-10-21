"use client";

import { Portfolio } from "@/src/components/portfolio";
import Image from "next/image";
import { CardSection } from "@/src/components/card-section";
import banner from "@/images/banner.png";
import avatar from "@/images/avatar.png";
import { useGetMeMutation } from "@/graphql/generated";
import { useEffect } from "react";

const Profile = () => {
  const [useGetMe, { data, loading, error }] = useGetMeMutation();

  const profile = data?.getMe;

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useGetMe({
            context: {
                headers: {
                    Authorization: localStorage.getItem("access_token"),
                },
            },
        });
    }
  }, [])

    return (
        <div>
            <Image src={banner} width={2000} alt="banner" />

            <div className="w-full h-full sm:px-12 px-2 py-6">
                <div className="rounded-3xl">
                    <Portfolio
                        name={profile?.name ?? "Username"}
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
                        image={profile?.avatar ?? avatar}
                        publicKey={profile?.publicKey ?? "DdzFFzCqrhshMSx...."}
                    />

                    <CardSection />
                </div>
            </div>
        </div>
    );
};
export default Profile;
