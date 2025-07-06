import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header} from './MainPages/Header.js';
import { UploadPage } from './MainPages/UploadPage/UploadPage.js';
import { MainPage } from './MainPages/MainPage/MainPage.js';
import { DatabasePage } from './MainPages/DatabasePage/DatabasePage.js';

const App = () => {
	return (
	<Router>
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<UploadPage />} />
				<Route path="/Post" element={<MainPage />} />
				<Route path="/Database" element={<DatabasePage />} />
			</Routes>
		</div>
	</Router>
	)
}

export default App
