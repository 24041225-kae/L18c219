import { Routes, Route} from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import DiplomaListPage from './Pages/DiplomaListPage';
import DiplomaDetailPage from './Pages/DiplomaDetailPage';
import RegisterPage from './Pages/Register';
import ConfirmPage from './Pages/Confirmation';
import ModuleDetailPage from './Pages/ModuleDetailPage';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage title="Welcome to SOI Diploma Showcase" />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="diplomas" element={<DiplomaListPage />}>
          <Route path=":dipId" element={<DiplomaDetailPage />}>
            <Route path=":modId" element={<ModuleDetailPage />} />
          </Route>
          <Route index element={<p style={{marginTop:'1rem'}}>Select a diploma above</p>} />
        </Route>
        <Route path="register" element={<RegisterPage />} />
        <Route path="confirmed" element={<ConfirmPage />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}