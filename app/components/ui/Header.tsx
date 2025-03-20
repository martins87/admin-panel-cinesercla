import { FC } from "react";

import Centered from "./Centered";
import Typography from "./Typography";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <Centered
      className="gap-10"
      direction="col"
      items="start"
      justify="between"
    >
      <Typography className="text-5xl" weight="500">
        {title}
      </Typography>
      {subtitle && (
        <Typography className="text-xl" weight="400">
          {subtitle}
        </Typography>
      )}
    </Centered>
  );
};

export default Header;
