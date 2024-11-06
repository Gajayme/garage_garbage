import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header} from './Components/Header';
import { UploadPage } from './Components/UploadPage';
import { PostPage } from './Components/PostPage';

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
