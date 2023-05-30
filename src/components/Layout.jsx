import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavComponent from "./NavComponent";
function Layout() {
  return (
    <div>
      <NavComponent />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
