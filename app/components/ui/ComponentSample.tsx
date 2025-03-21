import { FC, ReactNode } from "react";
import Typography from "./Typography";

type ComponentSampleProps = {
  label: string;
  children: ReactNode;
};

const ComponentSample: FC<ComponentSampleProps> = ({ label, children }) => {
  return (
    <>
      <Typography className="text-xl">{label}</Typography>
      {children}
    </>
  );
};

export default ComponentSample;
