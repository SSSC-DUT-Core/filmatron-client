"use-client";

import Image from "next/image";
import Slider from "react-slick";
import SecretImage from "@/images/behind-the-scene.png";
import Chipu from "@/images/chipu.png";
import Chipu2 from "@/images/chipu-2.png";
import Slide from "@/images/slide.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

export const BehindTheScenes = () => {
    return (
        <div className="w-full">
            <CustomSlider />
        </div>
    );
};

export const CustomSlider = () => {
    const settings = {
        className: "center",
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 500,
        focusOnSelect: true,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 2000,
        infinite: true,
    };

    const slides = [
        SecretImage,
        Chipu,
        Chipu2,
        Slide,
        SecretImage,
        Chipu,
        Chipu2,
        Slide,
    ];

    return (
        <div className="w-full">
            <Slider {...settings} className="flex sm:w[450px] h-[240px]">
                {slides.map((source) => {
                    return (
                        <div className="w-[450px] mx-2 sm:w[450px] h-[240px]">
                            <Image
                                src={source}
                                alt="secret-image"
                                className="rounded-xl cursor-pointer w-[450px] sm:w[450px] h-[240px]"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    );
                }) as any}
            </Slider>
        </div>
    );
};
