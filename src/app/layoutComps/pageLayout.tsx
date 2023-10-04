import React, { ReactNode } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

type Props = {
  children: ReactNode;
};
const PageLayout = ({ children }: Props) => {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);
  return (
    <div>
      <div
        className={`flex flex-col w-[90%] ${
          gameChoice != "" && "gap-5 mt-"
        } mx-auto `}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
