import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  // const [buttonText, setButtonText] = useState('');

  // const changeText = (text) => setButtonText(text);

  return (
    <header className="sticky text-offwhite z-50">
      <button component={Link} to="/scoreboard">
        <div className="font-light bg-btngreen-default hover:bg-btngreen-light mx-16 my-10 absolute w-36 top-0 filter drop-shadow-normal">
          <div className="text-xl my-4">Scoreboard</div>
        </div>
      </button>
      <button component={Link} to="/logout">
        <div className="font-light bg-btngreen-darker hover:bg-btngreen-dark mx-16 my-10 absolute w-36 right-52 top-0 filter drop-shadow-normal">
          <div className="text-xl my-4">Profile</div>
        </div>
      </button>
      <button component={Link} to="/profile">
        <div className="font-light bg-btngreen-default hover:bg-btngreen-light mx-16 my-10 absolute w-36 right-0 top-0 filter drop-shadow-normal">
          <div className=" text-xl my-4">Logout</div>
        </div>
      </button>
    </header>
  );
};

export default Navbar;
