import { SvgIconProps } from "module/types/svg-icons-props";
import React from "react";

const SvgIcon: React.FC<SvgIconProps> = ({
  color = "currentColor",
  svgPath,
  style = {},
  className = "",
  ...props
}) => {
  const widthMatch = svgPath.match(/width=["']?(\d+)["']?/);
  const heightMatch = svgPath.match(/height=["']?(\d+)["']?/);

  const width = widthMatch ? `${widthMatch[1]}px` : "24px";
  const height = heightMatch ? `${heightMatch[1]}px` : "24px";

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        width,
        height,
        ...style,
      }}
      dangerouslySetInnerHTML={{
        __html: svgPath.replace(/currentColor/g, color),
      }}
      {...props}
    />
  );
};

export default SvgIcon;
