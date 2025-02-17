import React from "react";

export interface SvgIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  svgPath: string;
  style?: React.CSSProperties;
}
