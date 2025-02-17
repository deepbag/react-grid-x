import React from "react";
import "./bottom-navigator.css";
import { useNavigate } from "react-router-dom";
import SvgIcon from "../SVGIcons";

interface BottomNavigatorProps {
  prev?: {
    label: string;
    url: string;
    onPrev?: () => void;
  };
  next?: {
    label: string;
    url: string;
    onNext?: () => void;
  };
}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({ prev, next }) => {
  const navigate = useNavigate();
  return prev || next ? (
    <div className="rgx-bottom-navigator-container">
      {prev ? (
        <div
          className="rgx-bottom-navigator-prev"
          onClick={() => {
            prev?.onPrev && prev?.onPrev();
            navigate(prev?.url);
          }}
        >
          <SvgIcon
            svgPath={`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`}
            className="rgx-bottom-navigator-prev-icon"
          />
          <h4 className="rgx-bottom-navigator-prev-label">{prev.label}</h4>
        </div>
      ) : (
        <div />
      )}
      {next && (
        <div
          className="rgx-bottom-navigator-next"
          onClick={() => {
            next?.onNext && next?.onNext();
            navigate(next?.url);
          }}
        >
          <h4 className="rgx-bottom-navigator-next-label">{next.label}</h4>
          <SvgIcon
            svgPath={`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`}
            className="rgx-bottom-navigator-next-icon"
          />
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default BottomNavigator;
