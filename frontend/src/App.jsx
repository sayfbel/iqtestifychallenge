// App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import MathPage from './pages/MathPage';
import PythonPage from './pages/PythonPage';
import QuizPage from './pages/QuizPage';
import PythonQuiz from './pages/PythonQuiz';
import MathQuiz from './pages/MathQuiz';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="layout">
        <div className="ambient-light"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/math" element={<MathPage />} />
          <Route path="/math/start" element={<MathQuiz />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/python/start" element={<PythonQuiz />} />
          <Route path="/:topic/start" element={<QuizPage />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
