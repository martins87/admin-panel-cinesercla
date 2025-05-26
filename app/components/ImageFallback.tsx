import { FC } from "react";
import Image from "next/image";

import Centered from "./ui/Centered";
import Typography from "./ui/Typography";
import mountains from "@/app/assets/images/mountains.svg";

type ImageFallbackProps = {
  description: string;
};

const ImageFallback: FC<ImageFallbackProps> = ({ description }) => {
  return (
    <Centered
      className="min-w-[358px] max-w-[358px] h-full gap-y-2 bg-[#A6A6A6] rounded-lg"
      direction="col"
    >
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
