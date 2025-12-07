import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from 'Components/MainPages/MainPage/MainPage.js';
import { UploadPage } from 'Components/MainPages/UploadPage/UploadPage.js';
import { DatabasePage } from 'Components/MainPages/DatabasePage/DatabasePage.js';
import { CenteredWindow } from 'Components/CenteredWindow';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CenteredWindow window={<MainPage />} />} />
        <Route path="/Upload" element={<CenteredWindow window={<UploadPage />} />} />
        <Route path="/Database" element={<CenteredWindow window={<DatabasePage />} />} />
      </Routes>
    </Router>
  );
};

export default App
