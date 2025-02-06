import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import Fuse from "fuse.js";
import "./search-input-fuzzy.css"; // Updated CSS import path
import { getLimitedWords } from "document/utils/get-limited-words";

interface SearchInputFuzzyProps {
  data: { [key: string]: string }[]; // Can be array of strings or objects with string values
  keys: string[]; // Keys to search within the objects
  threshold?: number; // Threshold for fuzzy search
  resultRenderer?: (result: { [key: string]: string }) => React.ReactNode; // Function to render results
}

const SearchInputFuzzy: React.FC<SearchInputFuzzyProps> = ({
  data,
  keys,
  threshold = 0.3,
  resultRenderer,
}) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<{ [key: string]: string }[]>([]);

  // Ref to the input container to detect outside clicks
  const inputContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Fuse.js with dynamic keys and threshold
  const fuse = new Fuse(data, {
    includeScore: true, // Include score for each result (useful for sorting)
    threshold: threshold, // Dynamically passed threshold value
    keys: keys, // Dynamically passed keys for searching
  });

  // Handle input change and fuzzy search
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery) {
      // Perform search using Fuse.js
      const fuseResults = fuse.search(searchQuery);
      setResults(fuseResults.map((result) => result.item)); // Extract items from results
    } else {
      setResults([]);
    }
  };

  // Use effect to listen for clicks outside the input container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target as Node)
      ) {
        setQuery(""); // Clear input text if clicked outside
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="rgx-search-input-fuzzy-container" ref={inputContainerRef}>
      <div className="rgx-search-input-fuzzy-input-wrapper">
        {/* Search Icon */}
        <span className="rgx-search-input-fuzzy-icon">
          🔍 {/* Replace with an <img> or <svg> for a custom icon */}
        </span>

        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={onChange}
          className="rgx-search-input-fuzzy-custom-input"
          placeholder="Search topics, issues, and fixes"
        />
      </div>

      {/* Search Results Popover */}
      {results.length > 0 && (
        <div className="rgx-search-input-fuzzy-popover">
          <ul className="rgx-search-input-fuzzy-popover-list">
            {results.map((_, index) => (
              <li key={index} className="rgx-search-input-fuzzy-popover-item">
                {resultRenderer && resultRenderer(_)}
                {!resultRenderer && (
                  <div className="rgx-search-input-fuzzy-result-list">
                    <h4 className="rgx-search-input-fuzzy-result-list-h4">
                      {_?.title}
                    </h4>
                    <p className="rgx-search-input-fuzzy-result-list-p">
                      {getLimitedWords(_?.description, 20)}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchInputFuzzy;
