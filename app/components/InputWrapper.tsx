import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import React, { FC, ReactNode } from "react";

type InputWrapperProps = {
  label: string;
  children: ReactNode;
  obrigatoria?: boolean;
};

const InputWrapper: FC<InputWrapperProps> = ({
  label,
  children,
  obrigatoria,
}) => {
  return (
    <Centered direction="col" items="start">
      <Typography weight="500" className="tracking-wide">
        {label}
        {obrigatoria && <span className="text-red-500">*</span>}
      </Typography>
      {children}
    </Centered>
  );
};

export default InputWrapper;
