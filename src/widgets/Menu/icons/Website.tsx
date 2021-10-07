import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <path d="M18.75 13.75H12.5C11.837 13.75 11.2011 14.0134 10.7322 14.4822C10.2634 14.9511 10 15.587 10 16.25V27.5C10 28.163 10.2634 28.7989 10.7322 29.2678C11.2011 29.7366 11.837 30 12.5 30H23.75C24.413 30 25.0489 29.7366 25.5178 29.2678C25.9866 28.7989 26.25 28.163 26.25 27.5V21.25M17.5 22.5L30 10M30 10H23.75M30 10L30 16.25" stroke="#1E2436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
};

export default Icon;
