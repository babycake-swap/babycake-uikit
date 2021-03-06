import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <path d="M10 22.2222L22.2222 10M22.2222 10H17.7778M22.2222 10V14.4444M17.7778 25.5556V30M17.7778 30H22.2222M17.7778 30L30 17.7778" stroke="#1E2436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
};

export default Icon;
