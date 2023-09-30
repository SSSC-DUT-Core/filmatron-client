"use client";

import React from "react";

import "./NFTCard.css";

const NFTCard = () => {
    return <></>;
};

const NFTsDisplay = () => {
    return (
        <>
            <div className="w-full h-full" style={{}}>
                <div
                    className=""
                    style={{
                        paddingLeft: "20px ",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div
                        className="card"
                        style={{
                            maxWidth:
                                "372px" /* Đặt chiều rộng tối đa là 372px */,
                            minHeight:
                                "462px" /* Đặt chiều cao tối thiểu là 462px */,
                            padding: "16px" /* Đặt padding là 16px */,
                        }}
                    >
                        <img
                            src="./assets/NFTs/NFT1.png"
                            alt="NFT1"
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "16px",
                            }}
                        />
                    </div>

                    <div
                        className="card"
                        style={{
                            maxWidth: "330px",
                            minHeight: "410px",
                        }}
                    >
                        <img
                            src="./assets/NFTs/NFT2.png"
                            alt="NFT1"
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "16px",
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
