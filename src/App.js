import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from 'Components/MainPages/MainPage/MainPage.js';
import { UploadPage } from 'Components/MainPages/UploadPage/UploadPage.js';
import { DatabasePage } from 'Components/MainPages/DatabasePage/DatabasePage.js';
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
