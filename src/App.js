import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header} from './components/Header';
import { UploadPage } from './components/UploadPage';
import { PostPage } from './components/PostPage';

const App = () => {
	return (
	<Router>
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<UploadPage />} />
				<Route path="/Post" element={<PostPage />} />
			</Routes>
		</div>
	</Router>
	)
}

export default App
