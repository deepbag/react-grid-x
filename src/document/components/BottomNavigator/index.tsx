import React from "react";
import "./bottom-navigator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solidIcons } from "document/assets/icons";
import { useNavigate } from "react-router-dom";

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
          <FontAwesomeIcon
            icon={solidIcons.faCircleLeft}
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
          <FontAwesomeIcon
            icon={solidIcons.faCircleRight}
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
