import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Root() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
