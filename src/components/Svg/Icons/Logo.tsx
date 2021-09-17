import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1920 1080" {...props}>
      <image width="1920" height="1080" href="/images/babycake/logo.gif"/>
    </Svg>
  );
};

export default Icon;
