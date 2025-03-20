import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import React from "react";

const page = () => {
  return (
    <Centered direction="col" items="start">
      <Typography className="text-5xl" weight="500">
        Dashboard
      </Typography>
    </Centered>
  );
};

export default page;
