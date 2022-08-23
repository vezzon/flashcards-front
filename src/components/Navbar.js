export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Flashcards App
      </a>
      <ul>
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/signup">Signup</CustomLink>
        <CustomLink href="/login">Login</CustomLink>
        <CustomLink href="/dashboard">Dashboard</CustomLink>
        <CustomLink href="/flashcard">Flashcard</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? 'active' : ''}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
