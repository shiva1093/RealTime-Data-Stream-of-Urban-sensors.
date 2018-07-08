import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Maps from "views/Maps/Maps.jsx";
import Weather from "../components/weather/weather.jsx";
import Transportation from "../components/transpotation/transportation.jsx";
import TransportSharing from "../components/TransportSharing/TransportSharing.jsx";
//import Bikes from "../components/sharing/bike/bike.jsx";


import {
  Dashboard,
  FilterDrama,
  Train,
  DirectionsBike,
  DirectionsCar,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },

  {
    path: "/weather",
    sidebarName: "Weather",
    navbarName: "Weather",
    icon: FilterDrama,
    component: Weather
  },

  {
    path: "/Transpotation",
    sidebarName: "Public Transport",
    navbarName: "Transportation",
    icon: Train,
    component: Transportation
  },
  
  {
    path: "/TransportSharing",
    sidebarName: "Transport Sharing",
    navbarName: "Transport Sharing",
    icon: DirectionsCar,
    component: TransportSharing
  },
    /* {
      path: "/Bikes",
      sidebarName: "Bikes",
      navbarName: "Bikes",
      icon: DirectionsBike,
      component: Bikes
    },

    {
      path: "/notifications",
      sidebarName: "Notifications",
      navbarName: "Notifications",
      icon: Notifications,
      component: NotificationsPage
    },
    */
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
