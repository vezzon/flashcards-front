import Dashboard from './components/Dashboard';
import Flashcard from './components/Flashcard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { LoginProvider } from './context/LoginContext';

function App() {
  let component;
  let path = window.location.pathname;
  switch (path) {
    case '/':
      component = <Home />;
      break;
    case '/signup':
      component = <Signup />;
      break;
    case '/login':
      component = (
        <LoginProvider>
          <Login />
        </LoginProvider>
      );
      break;
    case '/dashboard':
      component = <Dashboard />;
      break;
    case '/flashcard':
      component = <Flashcard />;
      break;
    default:
      component = <Home />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
