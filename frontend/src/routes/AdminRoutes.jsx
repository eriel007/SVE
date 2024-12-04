import Login from "../views/auth/Login";
import ErrorPage from "../views/Error/ErrorPage";
import PagePrincipalAdmin from "../components/Home/PagePrincipalAdmin";

const AdminRoutes = [
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  { path: "/home", element: <PagePrincipalAdmin /> }, //}
];

export default AdminRoutes;
