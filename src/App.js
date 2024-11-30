import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header} from './AllComponents/Header.js';
import { UploadPage } from './AllComponents/UploadPage.js';
import { PostPage } from './AllComponents/PostPage.js';
import { DatabasePage } from './AllComponents/DatabasePage.js';

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
