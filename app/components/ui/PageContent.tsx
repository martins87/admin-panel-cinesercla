import { FC, ReactNode } from "react";
import Centered from "./Centered";

type PageContentProps = {
  children: ReactNode;
};

const PageContent: FC<PageContentProps> = ({ children }) => {
  return (
    <Centered className="h-full border rounded-lg bg-white">
      {children}
    </Centered>
  );
};

export default PageContent;
