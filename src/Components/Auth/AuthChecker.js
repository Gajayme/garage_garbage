import { useAuth } from "./AuthContext.js";

export const AuthChecker = ({ children }) => {
	const { isAdmin } = useAuth();
	return isAdmin ? children : null;
};
