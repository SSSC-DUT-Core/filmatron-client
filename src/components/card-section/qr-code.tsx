import { useEffect } from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LineShareButton, LineIcon, TelegramShareButton, TelegramIcon } from "next-share";

export interface IQRCodeProps {
}

export const QRCode = (props: IQRCodeProps) => {
  const initTerminal = () => {
      // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
      const QRCodeStyling = require("qr-code-styling");

      const qrCode = new QRCodeStyling({
          width: 300,
          height: 300,
          type: "svg",
          image: "https://res.cloudinary.com/drh6sa2x5/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1697222868/logo_acsbip.jpg?_s=public-apps",
          dotsOptions: {
              color: "#91754D",
              type: "rounded",
          },
          imageOptions: {
              crossOrigin: "anonymous",
              margin: 10,
          },
      });

      qrCode.update({
          data: "https://filmatron-client.vercel.app/",
      });
      qrCode.append(document.getElementById("canvas") as HTMLCanvasElement);
  };
  useEffect(() => {
    initTerminal();
  }, []);

  return (
      <div>
          <div id="canvas" />

          <div className="flex flex-row mt-8 w-full h-full justify-center items-center">
              <div className="w-1/4 flex justify-center items-center">
                  <FacebookShareButton
                      url="https://filmatron.vercel.app/"
                      quote="Filmatron, a movie ticket claiming platform, is a convenient way to watch your favorite movies. By using the platform, you can find the movies you want to see, follow top casts, and book tickets quickly and easily."
                      hashtag="#filmatron"
                  >
                      <FacebookIcon size={48} round />
                  </FacebookShareButton>
              </div>

              <div className="w-1/4 flex justify-center items-center">
                  <TelegramShareButton
                      url="https://filmatron.vercel.app/"
                      title="Filmatron, a movie ticket claiming platform, is a convenient way to watch your favorite movies. By using the platform, you can find the movies you want to see, follow top casts, and book tickets quickly and easily."
                  >
                      <TelegramIcon size={48} round />
                  </TelegramShareButton>
              </div>

              <div className="w-1/4 flex justify-center items-center">
                  <TwitterShareButton
                      url="https://filmatron.vercel.app/"
                      title="Filmatron, a movie ticket claiming platform, is a convenient way to watch your favorite movies. By using the platform, you can find the movies you want to see, follow top casts, and book tickets quickly and easily."
                  >
                      <TwitterIcon size={48} round />
                  </TwitterShareButton>
              </div>

              <div className="w-1/4 flex justify-center items-center">
                  <EmailShareButton
                      url="https://filmatron.vercel.app/"
                      subject="Next Share"
                      body="body"
                  >
                      <EmailIcon size={48} round />
                  </EmailShareButton>
              </div>
          </div>
      </div>
  );
}
