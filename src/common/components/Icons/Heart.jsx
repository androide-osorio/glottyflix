import React from "react";

const HeartIcon = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 20" fill="none" {...props}>
    <path
      d="M21.466 1.768a6.036 6.036 0 00-8.538 0l-1.164 1.163-1.163-1.163A6.039 6.039 0 00.294 6.035c0 1.6.636 3.136 1.769 4.268l1.163 1.162L11.764 20l8.539-8.534 1.163-1.163a6.033 6.033 0 000-8.535z"
      fill={props.color}
      stroke={props.strokeColor}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export default HeartIcon;
