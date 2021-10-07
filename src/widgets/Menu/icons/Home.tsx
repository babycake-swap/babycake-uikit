import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <path d="M28.7125 15.8818L22.0462 10.7016C21.4612 10.2469 20.7412 10 20 10C19.2588 10 18.5388 10.2469 17.9537 10.7016L11.2863 15.8818C10.8856 16.1931 10.5614 16.5918 10.3384 17.0474C10.1155 17.503 9.99976 18.0035 10 18.5106V27.5023C10 28.1647 10.2634 28.8 10.7322 29.2684C11.2011 29.7369 11.837 30 12.5 30H27.5C28.163 30 28.7989 29.7369 29.2678 29.2684C29.7366 28.8 30 28.1647 30 27.5023V18.5106C30 17.4828 29.525 16.5125 28.7125 15.8818Z" stroke="#1E2436" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
};

export default Icon;
