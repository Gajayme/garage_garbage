import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header} from './components/Header';
import { UploadPage } from './components/UploadPage.js';
import { PostPage } from './components/PostPage.js';
import { DatabasePage } from './components/DatabasePage.js';

const App = () => {
	return (
	<Router>
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<UploadPage />} />
				<Route path="/Post" element={<PostPage />} />
				<Route path="/Database" element={<DatabasePage />} />
			</Routes>
		</div>
	</Router>
	)
}

export default App
