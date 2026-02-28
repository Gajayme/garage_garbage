import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from 'Components/MainPages/MainPage/MainPage.js';
import { UploadPage } from 'Components/MainPages/UploadPage/UploadPage.js';
import { CatalogPage } from 'Components/MainPages/CatalogPage/CatalogPage.js';
import { LoginPage } from 'Components/MainPages/LoginPage/LoginPage.js';
import { ItemPage } from 'Components/MainPages/ItemPage/ItemPage.js';
import { CenteredWindow } from 'Components/CenteredWindow';
import * as Nav from 'Components/Navigation/Constants';

const App = () => {
	return (
	<Router>
		<Routes>
			<Route path={Nav.root} element={<CenteredWindow window={<MainPage />} />} />
			<Route path={`/${Nav.upload}`} element={<CenteredWindow window={<UploadPage />} />} />
			<Route path={`/${Nav.login}`} element={<CenteredWindow window={<LoginPage />} />} />
			<Route path={`/${Nav.catalog}`} element={<CenteredWindow window={<CatalogPage />} />} />
			<Route path={`/${Nav.catalog}/:id`} element={<CenteredWindow window={<ItemPage />} />} />
		</Routes>
	</Router>
  );
};

export default App
