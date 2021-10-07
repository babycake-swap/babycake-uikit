import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <path d="M8 30H32M8 23.8462L14 14.6154L20 17.6923L26 10L32 16.1538" stroke="#1E2436" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};

export default Icon;
