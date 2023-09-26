import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4">
      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/3 mb-4 md:mb-0">
          {/* Logo */}
          <div className="relative leading-[28px] font-semibold bg-clip-text text-transparent">
            SOUL
          </div>
        </div>

        <div className="md:w-2/3 text-center md:text-left">
          {/* Description */}
          <div className="text-3xl leading-[36px] mb-6">
            Our platform is trusted by millions & features the best updated movies from around the world.
          </div>

          {/* Navigation */}
          <div className="text-base md:text-lg opacity-70">
            Home / Movies / Filmmaker / Release
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-8 text-center md:text-left">
        <div className="flex flex-row items-center justify-center md:justify-start gap-4">
          {/* Social Icons */}
          {/* <img className="w-8 h-8" src="/iconsocial-networkinstagram.svg" alt="" />
          <img className="w-8 h-8" src="/iconsocial-networkfacebook.svg" alt="" />
          <img className="w-8 h-8" src="/iconsocial-networktwitter.svg" alt="" />
          <img className="w-8 h-8" src="/iconsocial-networkgoogle.svg" alt="" /> */}
        </div>

        {/* Bottom Links */}
        <div className="mt-4 flex flex-row items-center justify-center md:justify-start gap-4">
          <a className="opacity-70" href="#">Language</a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs opacity-70 text-center md:text-left">
          © 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
