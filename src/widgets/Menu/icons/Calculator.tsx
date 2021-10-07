import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <path d="M10 20H30M20 10V30M25 11.6667L28.3333 15M28.3333 11.6667L25 15M13.3333 11.1113V15.5558M11.1107 13.3333H15.5551M26.6667 24.4447H26.6778M26.6667 28.8887H26.6778M11.1107 26.6667H15.5551" stroke="#1E2436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
};

export default Icon;
