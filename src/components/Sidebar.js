import React from "react";
import {
  GeneralData,
  PageData,
  PlatformsData,
  AppsData,
  ManagementData,
} from "./SidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <div className="Category">GENERAL</div>
        {GeneralData.map((value, key) => {
          return (
            <li key={key} className="row">
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>

      <ul className="SidebarList">
        <div className="Category">MANAGEMENT</div>
        {ManagementData.map((value, key) => {
          return (
            <li key={key} className="row">
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>

      <ul className="SidebarList">
        <div className="Category">PLATFORMS</div>
        {PlatformsData.map((value, key) => {
          return (
            <li key={key} className="row">
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>

      <ul className="SidebarList">
        <div className="Category">APPS</div>
        {AppsData.map((value, key) => {
          return (
            <li key={key} className="row">
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>

      <ul className="SidebarList">
        <div className="Category">PAGES</div>
        {PageData.map((value, key) => {
          return (
            <li key={key} className="row">
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
