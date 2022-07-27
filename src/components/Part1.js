import React from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Part1() {
  return (
    <>
      <div className="Part1">
        <h1>Good Morning</h1>
        <div className="Part1Flex">
          <div id="Report">
            <div id="text">{<AssessmentIcon />} Reports</div>
          </div>
          <div id="LastWeek">LastWeek {<ArrowDropDownIcon />}</div>
        </div>
      </div>
    </>
  );
}

export default Part1;
