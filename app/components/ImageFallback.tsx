import Image from "next/image";

import Centered from "./ui/Centered";
import mountains from "@/app/assets/images/mountains.svg";
import Typography from "./ui/Typography";
import { FC } from "react";

type ImageFallbackProps = {
  label: string;
};

const ImageFallback: FC<ImageFallbackProps> = ({ label }) => {
  return (
    <Centered className="h-full gap-y-2 bg-[#A6A6A6]" direction="col">
      <Image src={mountains} alt="" />
      <Typography className="text-lg text-[#212529]" weight="500">
        {label}
      </Typography>
    </Centered>
  );
};

export default ImageFallback;
