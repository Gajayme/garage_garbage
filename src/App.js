import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header} from './MainPages/Header.js';
import { UploadPage } from './MainPages/UploadPage/UploadPage.js';
import { MainPage } from './MainPages/MainPage/MainPage.js';
import { DatabasePage } from './MainPages/DatabasePage/DatabasePage.js';
import { CenteredWindow } from './Components/CenteredWindow';

const App = () => {

	const uploadPage = UploadPage()
	const mainPage = MainPage()

	return (
	<Router>
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<CenteredWindow window={mainPage} />} />
				<Route path="/Upload" element={<CenteredWindow window={uploadPage} />} />
				<Route path="/Database" element={<DatabasePage />} />
			</Routes>
		</div>
	</Router>
	)
}

export default App
