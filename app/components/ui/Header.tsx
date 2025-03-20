import { FC } from "react";

import Centered from "./Centered";
import Typography from "./Typography";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <Centered className="gap-y-4" direction="col" items="start" justify="start">
      <Typography className="text-5xl" weight="500">
        {title}
      </Typography>
      {subtitle && (
        <Typography className="text-lg" weight="400">
          {subtitle}
        </Typography>
      )}
    </Centered>
  );
};

export default Header;
