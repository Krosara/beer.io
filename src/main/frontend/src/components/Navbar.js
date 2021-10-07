const Navbar = () => {
  const title = 'Welcome';

  return (
    <nav>
      <div>
        <a className="no-underline text-green-600 text-4xl" href="/login">
          {title}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
