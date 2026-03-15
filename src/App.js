import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from 'Components/Auth/AuthContext.js';
import { MainPage } from 'Components/MainPages/MainPage/MainPage.js';
import { UploadPage } from 'Components/MainPages/UploadPage/UploadPage.js';
import { DatabasePage } from 'Components/MainPages/DatabasePage/DatabasePage.js';
import { CatalogPage } from 'Components/MainPages/CatalogPage/CatalogPage.js';
import { LoginPage } from 'Components/MainPages/LoginPage/LoginPage.js';
import { ItemPage } from 'Components/MainPages/ItemPage/ItemPage.js';
import { CenteredWindow } from 'Components/CenteredWindow';
import * as Nav from 'Components/Navigation/Constants';

// Вынести в отдельный компонент, который будет проверять, является ли пользователь админом и отображать переданный в него компонент
const UploadRouteGuard = () => {
	const { isAdmin, isLoading } = useAuth();
	if (isLoading) return null;
	if (!isAdmin) return <Navigate to={`/${Nav.login}`} replace />;
	return <UploadPage />;
};

const App = () => {
	return (
	<AuthProvider>
	<Router>
		<Routes>
			<Route path={Nav.root} element={<CenteredWindow window={<MainPage />} />} />
			<Route path={`/${Nav.upload}`} element={<CenteredWindow window={<UploadRouteGuard />} />} />
			<Route path={`/${Nav.login}`} element={<CenteredWindow window={<LoginPage />} />} />
			<Route path={`/${Nav.catalog}`} element={<CenteredWindow window={<CatalogPage />} />} />
			<Route path={`/${Nav.catalog}/:id`} element={<CenteredWindow window={<ItemPage />} />} />
			<Route path={`/${Nav.database}`} element={<CenteredWindow window={<DatabasePage />} />} />
		</Routes>
	</Router>
	</AuthProvider>
  );
};

export default App
