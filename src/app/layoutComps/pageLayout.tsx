import React, { ReactNode } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

type Props = {
  children: ReactNode;
};
const PageLayout = ({ children }: Props) => {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);
  return <div className={` md:w-[70%] flex flex-col  `}>{children}</div>;
};

export default PageLayout;
