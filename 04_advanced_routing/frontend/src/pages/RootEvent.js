import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";
export default function RootEvent() {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
