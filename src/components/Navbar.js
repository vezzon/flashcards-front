import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to={'/'} className="site-title">
        Flashcards App
      </Link>
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/signup'}>Signup</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/dashboard'}>Dashboard</Link>
        <Link to={'/flashcard'}>Flashcard</Link>
      </ul>
    </nav>
  );
}
