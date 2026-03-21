import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as Constants from 'Constants.js';

const AuthContext = createContext(null);

const checkSession = async () => {
	const response = await fetch(Constants.base_server_url + Constants.user_me, {
		method: Constants.http_methods.GET,
		credentials: 'include',
	});
	if (!response.ok) return { isAdmin: false };
	const data = await response.json().catch(() => ({}));
	const isAdmin = data?.status === true && data?.data != null;
	return { isAdmin };
};

export const AuthProvider = ({ children }) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const checkAuth = useCallback(async () => {
		setIsLoading(true);
		try {
			const { isAdmin: ok } = await checkSession();
			setIsAdmin(ok);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	const value = { isAdmin, isLoading, checkAuth };

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('useAuth must be used within AuthProvider');
	return ctx;
};
