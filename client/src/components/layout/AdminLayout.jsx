import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import AdminHome from "../../pages/admin/AdminHome";
import AdminAboutUs from "../../pages/admin/AdminAboutUs";
import AdminAdvice from "../../pages/admin/AdminAdvice";
import AdminMenu from "../../pages/admin/AdminMenu";
import AdminContactUs from "../../pages/admin/AdminContactUs";
import AdminServices from "../../pages/admin/AdminServices";
import PrimaryButton from "../common/PrimaryButton";

const AdminLayout = () => {
  const { logout } = useAuth();

  return (
    <div>
      <nav>
        <Link to="/admin">
          <AdminHome />
        </Link>
        <Link to="/admin/aboutus">
          <AdminAboutUs />
        </Link>
        <Link to="/admin/advice">
          <AdminAdvice />
        </Link>
        <Link to="/admin/menu">
          <AdminMenu />
        </Link>
        <Link to="/admin/contact">
          <AdminContactUs />
        </Link>
        <Link to="/admin/services">
          <AdminServices />
        </Link>
        <PrimaryButton
          onClick={logout}
          buttonName="Logout"
          classFeature="px-8 bg-primary"
        />
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
