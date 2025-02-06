import React, { useEffect, useState } from "react";
import "./change-log.css";
import changeLog from "./changelog.json";

type ChangelogEntry = {
  version: string;
  date: string;
  changes?: {
    minor?: string[];
    major?: string[];
  };
  added?: {
    minor?: string[];
    major?: string[];
  };
};

// Function to process text and style backtick-wrapped portions
const styleBackticks = (text: string) => {
  // Replace backtick-wrapped text with styled components
  return text.split("`").map((part, index) => {
    if (index % 2 === 1) {
      // Style text inside backticks
      return (
        <span key={index} className="rgx-change-log-backtick-text">
          {part}
        </span>
      );
    }
    return part; // Return the rest of the text as-is
  });
};

const ChangeLog: React.FC = () => {
  const [changelogData, setChangelogData] = useState<ChangelogEntry[]>([]);

  useEffect(() => {
    setChangelogData(changeLog);
  }, []);

  return (
    <div className="rgx-change-log-container">
      {changelogData.map((entry, index) => (
        <div key={index} className="rgx-change-log-entry">
          <h2>{`[${entry.version}] - ${entry.date}`}</h2>

          {entry?.changes?.minor && (
            <>
              <h3>Changed (Minor)</h3>
              <ul>
                {entry.changes.minor.map((change, idx) => (
                  <li key={idx}>{styleBackticks(change)}</li>
                ))}
              </ul>
            </>
          )}

          {entry?.changes?.major && (
            <>
              <h3>Changed (Major)</h3>
              <ul>
                {entry.changes.major.map((change, idx) => (
                  <li key={idx}>{styleBackticks(change)}</li>
                ))}
              </ul>
            </>
          )}

          {entry?.added?.minor && (
            <>
              <h3>Added (Minor)</h3>
              <ul>
                {entry.added.minor.map((change, idx) => (
                  <li key={idx}>{styleBackticks(change)}</li>
                ))}
              </ul>
            </>
          )}

          {entry?.added?.major && (
            <>
              <h3>Added (Major)</h3>
              <ul>
                {entry.added.major.map((change, idx) => (
                  <li key={idx}>{styleBackticks(change)}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChangeLog;
