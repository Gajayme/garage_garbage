import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'Components/Auth/AuthContext.js';
import { AdminRouteGuard } from 'Components/Auth/AdminRouteGuard.js';
import { MainPage } from 'Components/MainPages/MainPage/MainPage.js';
import { UploadPage } from 'Components/MainPages/UploadPage/UploadPage.js';
import { DatabasePage } from 'Components/MainPages/DatabasePage/DatabasePage.js';
import { CatalogPage } from 'Components/MainPages/CatalogPage/CatalogPage.js';
import { LoginPage } from 'Components/MainPages/LoginPage/LoginPage.js';
import { ItemPage } from 'Components/MainPages/ItemPage/ItemPage.js';
import { SettingsPage } from 'Components/MainPages/SettingsPage/SettingsPage.js';
import * as Nav from 'Components/Navigation/Constants';

const App = () => {
	return (
	<AuthProvider>
	<Router>
		<Routes>
			<Route path={Nav.root} element={<MainPage/>} />
				{/* <Route path={`/${Nav.upload}`} element={<AdminRouteGuard><UploadPage /></AdminRouteGuard>} /> */}
				<Route path={`/${Nav.upload}`} element={<UploadPage />} />
				<Route path={`/${Nav.login}`} element={<LoginPage />} />
				<Route path={`/${Nav.catalog}`} element={<CatalogPage />} />
				<Route path={`/${Nav.catalog}/:id`} element={<ItemPage />} />
				<Route path={`/${Nav.database}`} element={<AdminRouteGuard><DatabasePage /></AdminRouteGuard>} />
				<Route path={`/${Nav.settings}`} element={<AdminRouteGuard><SettingsPage /></AdminRouteGuard>} />
		</Routes>
	</Router>
	</AuthProvider>
  );
};

export default App
