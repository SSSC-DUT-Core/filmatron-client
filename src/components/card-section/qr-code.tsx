import { useEffect } from "react";

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
              color: "#F3C879",
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
      </div>
  );
}
