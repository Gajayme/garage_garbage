import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.js";
import * as Nav from "Components/Navigation/Constants";

export const AdminRouteGuard = ({ children }) => {
	const { isAdmin, isLoading } = useAuth();
	if (isLoading) return null;
	if (!isAdmin) return <Navigate to={`/${Nav.login}`} replace />;
	return children;
};
