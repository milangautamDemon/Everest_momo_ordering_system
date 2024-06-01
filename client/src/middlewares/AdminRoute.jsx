import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AdminRoute = () => {
  const { isAdmin } = useAuth(); // Check if user is admin
  console.log(isAdmin);

  return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
