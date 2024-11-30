import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header} from './Components/Header.js';
import { UploadPage } from './Components/UploadPage.js';
import { PostPage } from './Components/PostPage.js';
import { DatabasePage } from './Components/DatabasePage.js';

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
