import { createBrowserRouter } from "react-router-dom";
import VotanteRoutes from "./VotanteRoutes";
import AdminRoutes from "./AdminRoutes";

const routes = createBrowserRouter([...VotanteRoutes, ...AdminRoutes]);

export default routes;
