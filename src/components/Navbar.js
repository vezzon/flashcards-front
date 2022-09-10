import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LoginContext from '../context/LoginContext';

export default function Navbar() {
  const { isLoggedIn, logout } = useContext(LoginContext);

  return (
    <nav className="nav">
      <Link to={'/'} className="site-title">
        Flashcards App
      </Link>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to={'/dashboard'}>Dashboard</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to={'/flashcard'}>Flashcard</Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link to={'/signup'}>Signup</Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link onClick={() => logout()} to={'/'}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
