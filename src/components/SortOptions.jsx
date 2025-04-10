import React from "react";
import { ArrowDownUp } from "lucide-react";

const SortOptions = ({ onSortChange, currentSort }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
      <div className="mb-3 sm:mb-0">
        <span className="text-muted-foreground text-sm">Sort by:</span>
      </div>
      <div className="flex space-x-2">
        <button
          className={`px-3 py-1.5 rounded-md flex items-center text-sm ${
            !currentSort
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-foreground hover:bg-secondary/70"
          }`}
          onClick={() => onSortChange(null)}
        >
          <ArrowDownUp size={16} className="mr-1.5" />
          Default
        </button>
        <button
          className={`px-3 py-1.5 rounded-md flex items-center text-sm ${
            currentSort === "lowToHigh"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-foreground hover:bg-secondary/70"
          }`}
          onClick={() => onSortChange("lowToHigh")}
        >
          <svg
            className="w-4 h-4 mr-1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9L7 5M7 5L11 9M7 5V19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 16L18 20M18 20L22 16M18 20V5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Price: Low to High
        </button>
        <button
          className={`px-3 py-1.5 rounded-md flex items-center text-sm ${
            currentSort === "highToLow"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-foreground hover:bg-secondary/70"
          }`}
          onClick={() => onSortChange("highToLow")}
        >
          <svg
            className="w-4 h-4 mr-1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 16L7 20M7 20L11 16M7 20V5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 9L18 5M18 5L22 9M18 5V20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Price: High to Low
        </button>
      </div>
    </div>
  );
};

export default SortOptions;
