import Image from "next/image";

import Centered from "./ui/Centered";
import mountains from "@/app/assets/images/mountains.svg";
import Typography from "./ui/Typography";
import { FC } from "react";

type ImageFallbackProps = {
  description: string;
};

const ImageFallback: FC<ImageFallbackProps> = ({ description }) => {
  return (
    <Centered className="h-full gap-y-2 bg-[#A6A6A6]" direction="col">
      <Image src={mountains} alt="" />
      <Typography
        className="w-4/5 text-lg text-center text-[#212529]"
        weight="500"
      >
        {description}
      </Typography>
    </Centered>
  );
};

export default ImageFallback;
