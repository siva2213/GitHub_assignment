import React from "react";
import "./index.css";

export default (props) => {
  return (
    <div className="tabs">
      {props.tabs.map((tab, i) => {
        return (
          <div
            key={tab.name + i}
            className={`tab ${tab.active ? "active" : ""}`}
            onClick={() => props.onHandle(tab.name)}
          >
            {tab.name}  &nbsp; {tab.count}
          </div>
        );
      })}
    </div>
  );
};
