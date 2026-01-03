import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from 'Components/MainPages/MainPage/MainPage.js';
import { UploadPage } from 'Components/MainPages/UploadPage/UploadPage.js';
import { CatalogPage } from 'Components/MainPages/CatalogPage/CatalogPage.js';
import { ItemPage } from 'Components/MainPages/ItemPage/ItemPage.js';
import { CenteredWindow } from 'Components/CenteredWindow';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CenteredWindow window={<MainPage />} />} />
        <Route path="/Upload" element={<CenteredWindow window={<UploadPage />} />} />
        <Route path="/Catalog" element={<CenteredWindow window={<CatalogPage />} />} />
        <Route path="/Catalog/:id" element={<CenteredWindow window={<ItemPage />} />} />
      </Routes>
    </Router>
  );
};

export default App
