import { Button } from "@mui/material";
import React from "react";

function Part2() {
  return (
    <div>
      <div className="Part2">
        <div>
          <img
            id="image1"
            alt="Amit"
            src={process.env.PUBLIC_URL + "/banner-illustration.png"}
          />
        </div>
        <div className="Part2Content">
          <div id="Part2ContentText1">
            <p>New</p>
          </div>
          <div id="Part2ContentText2">
            <h1>Welcome to Material Kit Pro v5!</h1>
          </div>
          <div id="Part2ContentText3">
            <p id="Part2ContentText3P">
              Your dashboard has been improved! Explore new features like
              Notifications, Search, Jobs Platform and more.
            </p>
          </div>
          <div id="Part2ContentButton">
            <Button
              style={{
                borderRadius: 15,
                backgroundColor: "#10b981",
                marginTop: 10,
              }}
              variant="contained"
            >
              Dismiss Banner
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part2;
