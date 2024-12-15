import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header} from './Common/Header.js';
import { UploadPage } from './UploadPage/UploadPage.js';
import { PostPage } from './UploadPage/PostPage.js';
import { DatabaseViewPage } from './DatabaseViewPage/DatabaseViewPage.js';

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
