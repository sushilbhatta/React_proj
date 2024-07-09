import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        {/* other value of state ccan be ideal or submitting */}
        <Outlet></Outlet>
      </main>
    </>
  );
}
