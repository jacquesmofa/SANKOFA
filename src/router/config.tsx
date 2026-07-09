import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AwardNight from "../pages/award-night/page";
import Sankofa from "../pages/sankofa/page";
import Nomination from "../pages/nomination/page";
import Tickets from "../pages/tickets/page";
import Cawap from "../pages/cawap/page";
import Gallery from "../pages/gallery/page";
import Contact from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/award-night",
    element: <AwardNight />,
  },
  {
    path: "/sankofa",
    element: <Sankofa />,
  },
  {
    path: "/nomination",
    element: <Nomination />,
  },
  {
    path: "/tickets",
    element: <Tickets />,
  },
  {
    path: "/cawap",
    element: <Cawap />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;