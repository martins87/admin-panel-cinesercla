"use client";

import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import Typography from "@/app/components/ui/Typography";

const ButtonPage = () => {
  const [status, setStatus] = useState<boolean>(false);

  const handleClick = () => setStatus((state) => !state);

  return (
    <Page title="Switch">
      <Centered className="gap-y-2" direction="col" items="start">
        <Typography className="text-xl">
          Status: {status ? "On" : "Off"}
        </Typography>
        <Switch onClick={handleClick} />
      </Centered>
    </Page>
  );
};

export default ButtonPage;
