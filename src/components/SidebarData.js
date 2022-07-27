import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import ShareIcon from "@mui/icons-material/Share";
import BookIcon from "@mui/icons-material/Book";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LockIcon from "@mui/icons-material/Lock";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ErrorIcon from "@mui/icons-material/Error";

export const GeneralData = [
  {
    title: "Overview",
    icon: <HomeIcon />,
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon />,
  },
  {
    title: "Finance",
    icon: <MonetizationOnIcon />,
  },
  {
    title: "Logistics",
    icon: <LocalShippingIcon />,
    upgrade: (
      <div id="Part2ContentText1">
        <p>New</p>
      </div>
    ),
  },
  {
    title: "Account",
    icon: <AccountCircleIcon />,
  },
];

export const ManagementData = [
  {
    title: "Customers",
    icon: <PeopleAltIcon />,
  },
  {
    title: "Products",
    icon: <ShoppingBagIcon />,
  },
  {
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Invoices",
    icon: <DescriptionIcon />,
  },
];

export const PlatformsData = [
  {
    title: "Job Listings",
    icon: <WorkIcon />,
  },
  {
    title: "Social Media",
    icon: <ShareIcon />,
  },
  {
    title: "Blog",
    icon: <BookIcon />,
  },
];

export const AppsData = [
  {
    title: "Kanban",
    icon: <ViewKanbanIcon />,
  },
  {
    title: "Mail",
    icon: <AttachEmailIcon />,
  },
  {
    title: "Chat",
    icon: <ChatBubbleIcon />,
  },
  {
    title: "Calendar",
    icon: <CalendarMonthIcon />,
  },
];

export const PageData = [
  {
    title: "Auth",
    icon: <LockIcon />,
  },
  {
    title: "Pricing",
    icon: <LocalOfferIcon />,
  },
  {
    title: "Checkout",
    icon: <ShoppingCartCheckoutIcon />,
  },
  {
    title: "Contact",
    icon: <ContactSupportIcon />,
  },
  {
    title: "Error",
    icon: <ErrorIcon />,
  },
];
