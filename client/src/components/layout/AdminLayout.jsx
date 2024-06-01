import { Outlet } from "react-router-dom";
import AdminNavbar from "../../pages/admin/components/AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
