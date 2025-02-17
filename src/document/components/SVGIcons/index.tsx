import React from "react";

interface SvgIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  svgPath: string; // Pass full SVG string
  style?: React.CSSProperties;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  color = "currentColor",
  svgPath,
  style = {},
  className = "",
  ...props
}) => {
  // Extract width and height from SVG string
  const widthMatch = svgPath.match(/width=["']?(\d+)["']?/);
  const heightMatch = svgPath.match(/height=["']?(\d+)["']?/);

  const width = widthMatch ? `${widthMatch[1]}px` : "24px"; // Default to 24px if not found
  const height = heightMatch ? `${heightMatch[1]}px` : "24px"; // Default to 24px if not found

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
