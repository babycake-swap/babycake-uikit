import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <path d="M27.5 10H12.5C11.1193 10 10 11.1193 10 12.5V15C10 16.3807 11.1193 17.5 12.5 17.5H27.5C28.8807 17.5 30 16.3807 30 15V12.5C30 11.1193 28.8807 10 27.5 10Z" stroke="#1E2436" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M27.5 22.5H12.5C11.1193 22.5 10 23.6193 10 25V27.5C10 28.8807 11.1193 30 12.5 30H27.5C28.8807 30 30 28.8807 30 27.5V25C30 23.6193 28.8807 22.5 27.5 22.5Z" stroke="#1E2436" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};

export default Icon;
