import Dashboard from './components/Dashboard';
import Flashcard from './components/Flashcard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

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
      component = <Login />;
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
    <div>
      <Navbar />
      <div className="container">{component}</div>
    </div>
  );
}

export default App;
