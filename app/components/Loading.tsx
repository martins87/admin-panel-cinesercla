"use client";

import Image from "next/image";

import Centered from "@/app/components/ui/Centered";
import { logoBig } from "@/app/constants/icons";
import Typography from "./ui/Typography";

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center z-10 backdrop-brightness-10">
    <Centered
      className="w-fit bg-white rounded-xl px-20 py-20 gap-y-14"
      direction="col"
    >
      <Image src={logoBig} alt="Logo" />
      <Typography className="text-xl ">Carregando...</Typography>
    </Centered>
  </div>
);

export default Loading;
