"use-client";

import Image from "next/image";
import Slider from "react-slick";
import SecretImage from "@/images/behind-the-scene.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BehindTheScenes = () => {
    return (
        <div className="w-full">
            <CustomSlider />
        </div>
    );
};

export const CustomSlider = () => {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <div className="w-full">
            <Slider {...settings} className="flex">
                <div className="w-514 h-451">
                    <Image
                        src={SecretImage}
                        alt="secret-image"
                        className="rounded-xl"
                    />
                </div>
                <div className="w-514 h-451">
                    <Image
                        src={SecretImage}
                        alt="secret-image"
                        className="rounded-xl"
                    />
                </div>
            </Slider>
        </div>
    );
};
