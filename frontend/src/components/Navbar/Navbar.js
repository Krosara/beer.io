import { Link } from 'react-router-dom';
// import { ReactComponent as Scoreboard } from '../../../src/assets/trophy.svg';
// import { ReactComponent as Profile } from '../../../src/assets/user.svg';
// import { ReactComponent as Logout } from '../../../src/assets/logout.svg';

const Navbar = () => {
  // const [buttonText, setButtonText] = useState('');

  // const changeText = (text) => setButtonText(text);

  return (
    <div>
      <header className="text-offwhite small:hidden">
        <button
          component={Link}
          to="/scoreboard"
          className="font-light bg-btngreen-default hover:bg-btngreen-light mt-10 w-36 filter drop-shadow-normal ml-16"
        >
          <div className="text-xl my-4">Scoreboard</div>
        </button>
        <button
          component={Link}
          to="/profile"
          className="font-light bg-btngreen-default hover:bg-btngreen-light mt-10 w-36  filter drop-shadow-normal mr-16 float-right"
        >
          <div className=" text-xl my-4">Logout</div>
        </button>
        <button
          component={Link}
          to="/logout"
          className="font-light bg-btngreen-darker hover:bg-btngreen-dark mt-10 w-36 filter drop-shadow-normal mr-16 float-right"
        >
          <div className="text-xl my-4">Profile</div>
        </button>
      </header>
      {/* <header className="big:hidden grid gap-4 grid-cols-3 mt-4 justify-items-center">
        <button
          className="bg-btngreen-default hover:bg-btngreen-light filter drop-shadow-normal rounded-full h-16 w-16"
          component={Link}
          to="/scoreboard"
        >
          <Scoreboard className="w-auto h-auto" />
        </button>
        <button
          className="bg-btngreen-darker hover:bg-btngreen-dark filter drop-shadow-normal rounded-full h-16 w-16"
          component={Link}
          to="/profile"
        >
          <Profile />
        </button>
        <button
          className="bg-btngreen-default hover:bg-btngreen-light filter drop-shadow-normal rounded-full h-16 w-16"
          component={Link}
          to="/logout"
        >
          <Logout />
        </button>
      </header> */}
    </div>
  );
};

export default Navbar;
