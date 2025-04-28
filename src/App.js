import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header} from './MainPages/Header.js';
import { UploadPage } from './MainPages/UploadPage/UploadPage.js';
import { PostPage } from './MainPages/PostPage/PostPage.js';
import { DatabaseViewPage } from './MainPages/DatabaseViewPage/DatabaseViewPage.js';

const App = () => {
	return (
	<Router>
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<UploadPage />} />
				<Route path="/Post" element={<PostPage />} />
				<Route path="/Database" element={<DatabaseViewPage />} />
			</Routes>
		</div>
	</Router>
	)
}

export default App
