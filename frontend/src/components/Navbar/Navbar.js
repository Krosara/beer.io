import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  // const [buttonText, setButtonText] = useState('');

  // const changeText = (text) => setButtonText(text);

  return (
    <header className="text-offwhite">
      <button
        component={Link}
        to="/scoreboard"
        className="font-light bg-btngreen-default hover:bg-btngreen-light my-10 w-36 filter drop-shadow-normal ml-16"
      >
        <div className="text-xl my-4">Scoreboard</div>
      </button>
      <button
        component={Link}
        to="/profile"
        className="font-light bg-btngreen-default hover:bg-btngreen-light my-10 w-36  filter drop-shadow-normal mr-16 float-right"
      >
        <div className=" text-xl my-4">Logout</div>
      </button>
      <button
        component={Link}
        to="/logout"
        className="font-light bg-btngreen-darker hover:bg-btngreen-dark my-10 w-36 filter drop-shadow-normal mr-16 float-right"
      >
        <div className="text-xl my-4">Profile</div>
      </button>
    </header>
  );
};

export default Navbar;
