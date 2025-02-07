import React, { ReactNode } from "react";
import "./important-bold-typography.css";

interface ImportantBoldTypographyProps {
  children: ReactNode;
}

const ImportantBoldTypography: React.FC<ImportantBoldTypographyProps> = ({
  children,
}) => {
  return <span className="rgx-important-bold-typography">{children}</span>;
};

export default ImportantBoldTypography;
