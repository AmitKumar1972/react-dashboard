import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

function Navbar() {
  return (
    <div className="Navbar">
      <div id="image">
        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + "/amit.jpg"} />
      </div>
      <div>{<NotificationsIcon />}</div>
      <div>{<SupervisorAccountIcon />}</div>
      <div>{<SearchIcon />}</div>
    </div>
  );
}

export default Navbar;
