import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  // const [buttonText, setButtonText] = useState('');

  // const changeText = (text) => setButtonText(text);

  return (
    <header>
      <button component={Link} to="/scoreboard">
        <div className="font-light bg-btngreen-default hover:bg-btngreen-light mx-16 my-10 absolute w-40 text-center top-0 filter drop-shadow-normal">
          <div className="text-offwhite text-2xl leading-7 my-5">
            Scoreboard
          </div>
        </div>
      </button>
      <button component={Link} to="/logout">
        <div className="font-light bg-btngreen-darker hover:bg-btngreen-dark mx-16 my-10 absolute w-44 text-center right-56 top-0 filter drop-shadow-normal">
          <div className="text-offwhite text-2xl leading-7 my-5">Profile</div>
        </div>
      </button>
      <button component={Link} to="/profile">
        <div className="font-light bg-btngreen-default hover:bg-btngreen-light mx-16 my-10 absolute w-40 text-center right-0 top-0 filter drop-shadow-normal">
          <div className=" text-offwhite text-2xl leading-7 my-5">Logout</div>
        </div>
      </button>
    </header>
  );
};

export default Navbar;
