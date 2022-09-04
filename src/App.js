import Dashboard from './components/Dashboard';
import Flashcard from './components/Flashcard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { LoginProvider } from './context/LoginContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <LoginProvider>
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
    </LoginProvider>
  );
}

export default App;
