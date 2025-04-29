import { FC } from "react";
import Centered from "../../ui/Centered";
import Typography from "../../ui/Typography";
import { twMerge } from "tailwind-merge";

type ScheduleMovieDetailProps = {
  label: string;
  value: string;
  bold?: boolean;
};

const ScheduleMovieDetail: FC<ScheduleMovieDetailProps> = ({
  label,
  value,
  bold,
}) => {
  return (
    <Centered items="start" direction="col">
      <Typography
        className={twMerge(
          "text-md text-[#343A40]",
          bold && "text-lg font-medium"
        )}
      >
        {label}
      </Typography>
      <Typography className="text-md text-[#767676]">{value}</Typography>
    </Centered>
  );
};

export default ScheduleMovieDetail;
