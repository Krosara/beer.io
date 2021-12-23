import { Link } from 'react-router-dom';
import { ReactComponent as HomeBtn } from '../../../src/assets/home.svg';
import { ReactComponent as ProfileBtn } from '../../../src/assets/user.svg';
import { ReactComponent as LogoutBtn } from '../../../src/assets/logout.svg';
import { ReactComponent as LoginBtn } from '../../../src/assets/login.svg';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
  let { user } = useContext(AuthContext);
  return (
    <div>
      <header className="text-offwhite small:hidden">
        <button
          component={Link}
          to="/"
          className="font-light bg-btngreen-default hover:bg-btngreen-light mt-10 w-36 filter drop-shadow-normal ml-16"
        >
          <div className="text-xl my-4">Home</div>
        </button>
        {user ? (
          <button
            component={Link}
            to="/logout"
            className="font-light bg-btngreen-default hover:bg-btngreen-light mt-10 w-36  filter drop-shadow-normal mr-16 float-right"
          >
            <div className="text-xl my-4">Logout</div>
          </button>
        ) : (
          <button
            component={Link}
            to="/login"
            className="font-light bg-btngreen-default hover:bg-btngreen-light mt-10 w-36  filter drop-shadow-normal mr-16 float-right"
          >
            <div className="text-xl my-4">Login</div>
          </button>
        )}
        <button
          component={Link}
          to="/profile"
          className="font-light bg-btngreen-darker hover:bg-btngreen-dark mt-10 w-36 filter drop-shadow-normal mr-16 float-right"
        >
          <div className="text-xl my-4">{user ? user.sub : 'Profile'}</div>
        </button>
      </header>
      <header className="big:hidden grid gap-4 grid-cols-3 mt-4 justify-items-center">
        <button
          className="bg-btngreen-default hover:bg-btngreen-light filter drop-shadow-normal rounded-full h-14 w-14"
          component={Link}
          to="/"
        >
          <HomeBtn className=" m-auto w-2/3 h-2/3" />
        </button>
        <button
          className="bg-btngreen-darker hover:bg-btngreen-dark filter drop-shadow-normal rounded-full h-14 w-14"
          component={Link}
          to="/profile"
        >
          <ProfileBtn className="m-auto w-3/4 h-3/4" />
        </button>
        {user ? (
          <button
            className="bg-btngreen-default hover:bg-btngreen-light filter drop-shadow-normal rounded-full h-14 w-14"
            component={Link}
            to="/logout"
          >
            <LogoutBtn className="m-auto w-2/3 h-2/3" />
          </button>
        ) : (
          <button
            className="bg-btngreen-default hover:bg-btngreen-light filter drop-shadow-normal rounded-full h-14 w-14"
            component={Link}
            to="/login"
          >
            <LoginBtn className="m-auto w-2/3 h-2/3" />
          </button>
        )}
      </header>
    </div>
  );
};

export default Navbar;
