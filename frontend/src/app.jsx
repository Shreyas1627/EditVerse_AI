// frontend/src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landinpage'; // <--- Import it
import LoginPage from './pages/loginpage';
import EditorPage from './pages/EditorPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Default Route -> Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* 2. Login Route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* 3. Editor Route */}
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;