import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

function Footbar() {
  return (
    <div className="Footbar">
      <div id="text">
        <p id="text1">Need Help?</p>
        <p id="text2">Check Our Docs</p>
      </div>
      <Button id="button" variant="contained">
        Documentation
      </Button>
    </div>
  );
}

export default Footbar;
