import { useAuth } from 'Components/Auth/AuthContext.js'

export const AuthChecker = ({children}) => {
	const { isAdmin } = useAuth();
	return isAdmin ? children : null;
};
