import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import React, { FC, ReactNode } from "react";

type FAQInputProps = {
  label: string;
  children: ReactNode;
  obrigatoria?: boolean;
};

const FAQInput: FC<FAQInputProps> = ({ label, children, obrigatoria }) => {
  return (
    <Centered direction="col" items="start">
      <Typography>
        {label}
        {obrigatoria && <span className="text-red-500">*</span>}
      </Typography>
      {children}
    </Centered>
  );
};

export default FAQInput;
