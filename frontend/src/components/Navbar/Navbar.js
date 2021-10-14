import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@restart/ui/esm/Button';

const Navbar = () => {
  const [buttonText, setButtonText] = useState('Login');

  const changeText = (text) => setButtonText(text);

  return (
    <nav lassName="flex flex-row text-center justify-between py-4 px-24 bg-white shadow items-baseline w-full min-w-full xs:px-7">
      <div className="bg-green">
        <Button
          className="bg-green bg-opacity-100 font-workSans shadow-2xl"
          onClick={() => changeText('Register')}
          component={Link}
          to="/login"
        >
          {buttonText}
        </Button>
        {/* <Button
          // onClick={() => changeText('Register')}
          component={Link}
          to="/login"
        >
          {buttonText}
        </Button> */}
      </div>
    </nav>
  );
};

export default Navbar;
