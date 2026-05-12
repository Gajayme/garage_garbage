import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AuthProvider } from 'Components/Auth/AuthContext.js';
import { AdminRouteGuard } from 'Components/Auth/AdminRouteGuard.js';
import { UploadPage } from 'Components/MainPages/UploadPage/UploadPage.js';
import { DatabasePage } from 'Components/MainPages/DatabasePage/DatabasePage.js';
import { CatalogPage } from 'Components/MainPages/CatalogPage/CatalogPage.js';
import { LoginPage } from 'Components/MainPages/LoginPage/LoginPage.js';
import { ItemPage } from 'Components/MainPages/CatalogItemPage/ItemPage.js';
import { DatabaseItemPage } from 'Components/MainPages/DatabaseItemPage/DatabaseItemPage.js';
import { SettingsPage } from 'Components/MainPages/SettingsPage/SettingsPage.js';
import * as Nav from 'Components/Navigation/Constants';

import {OuterWindow} from "Components/Window/OuterWindow";
import {WindowHeader} from "Components/Window/WindowHeader";
import {ButtonLayer} from "Components/Window/ButtonLayer";
import {InnerWindow} from "Components/Window/InnerWindow";
import {DefaultNavButtons} from "Components/Navigation/DefaultNavButtons";

const Layout = () => {
	return (
		<div>
			<OuterWindow className="outer-window"
			header={<WindowHeader className="window-header" />}
			buttonLayer={<ButtonLayer className="button-layer">
				<DefaultNavButtons className="default-nav-buttons" />
			</ButtonLayer>}
			innerWindow={<InnerWindow className="inner-window">
				<Outlet />
			</InnerWindow>}
			/>
		</div>
	)
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [{ path: Nav.root, element: <CatalogPage /> },
			{
				path: `/${Nav.upload}/edit/:itemId`,
				element: (
					<AdminRouteGuard>
						<UploadPage />
					</AdminRouteGuard>
				),
			},
			{
				path: `/${Nav.upload}`,
				element: (
					<AdminRouteGuard>
						<UploadPage />
					</AdminRouteGuard>
				),
			},
			{ path: `/${Nav.login}`, element: <LoginPage /> },
			{ path: `/${Nav.catalog}/:itemId`, element: <ItemPage /> },
			{
				path: `/${Nav.database}/:itemId`,
				element: (
					<AdminRouteGuard>
						<DatabaseItemPage />
					</AdminRouteGuard>
				),
			},
			{
				path: `/${Nav.database}`,
				element: (
					<AdminRouteGuard>
						<DatabasePage />
					</AdminRouteGuard>
				),
			},
			{
				path: `/${Nav.settings}`,
				element: (
					<AdminRouteGuard>
						<SettingsPage />
					</AdminRouteGuard>
				),
			},]
	},
]);

const App = () => {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
};

export default App;
