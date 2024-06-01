import { createBrowserRouter } from "react-router-dom";
import UserRoutes from "./UsersRoutes";
import AdminRoutes from "./AdminRoutes";

const routes = createBrowserRouter([...UserRoutes, ...AdminRoutes]);

export default routes;
