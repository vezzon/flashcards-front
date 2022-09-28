import Dashboard from './components/pages/Dashboard';
import Flashcard from './components/pages/Flashcard';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Navbar from './components/Navbar';
import Signup from './components/pages/Signup';
import { Routes, Route } from 'react-router-dom';
import useAuth from './hooks/useAuth';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
          {isLoggedIn && <Route path="/flashcard" element={<Flashcard />} />}
          <Route path="*" element={<Home />} /> {/* TODO: 404 Page? */}
        </Routes>
      </div>
    </>
  );
}

export default App;
