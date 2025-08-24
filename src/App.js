import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from 'MainPages/MainPage/MainPage.js';
import { UploadPage } from 'MainPages/UploadPage/UploadPage.js';
import { DatabasePage } from 'MainPages/DatabasePage/DatabasePage.js';
import { CenteredWindow } from 'Components/CenteredWindow';

const App = () => {

	const mainPage = MainPage()
	const uploadPage = UploadPage()
	const databasePage = DatabasePage()

	return (
	<Router>
		<div>
			<Routes>
				<Route path="/" element={<CenteredWindow window={mainPage} />} />
				<Route path="/Upload" element={<CenteredWindow window={uploadPage} />} />
				<Route path="/Database" element={<CenteredWindow window={databasePage} />} />
			</Routes>
		</div>
	</Router>
	)
}

export default App
