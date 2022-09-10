import Dashboard from './components/pages/Dashboard';
import Flashcard from './components/pages/Flashcard';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Navbar from './components/Navbar';
import Signup from './components/pages/Signup';
import { LoginProvider } from './context/LoginContext';
import { CardsProvider } from './context/CardsContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <LoginProvider>
      <CardsProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/flashcard" element={<Flashcard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CardsProvider>
    </LoginProvider>
  );
}

export default App;
