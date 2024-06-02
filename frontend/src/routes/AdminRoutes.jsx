import Login from "../views/client/admin/Login";
import ErrorPage from "../views/Error/ErrorPage";

const AdminRoutes = [
  {
    path: "/admin",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
];

export default AdminRoutes;
