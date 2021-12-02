import { playerService } from '../pages';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../components/TextField/TextField';
import { login, logout } from '../services/auth.service';
import { AuthenticatedRoutes } from '../AuthenticatedRoutes';

export const LoginPage = ({ history }) => {
  // const handleOnSubmit = () => {
  //   playerAPI.createPlayer(refEmail.current.value);
  // };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form
      action="post"
      onSubmit={handleOnSubmit}
      className="text-center bg-btngreen-default  w-96 filter drop-shadow-normal text-offwhite mx-auto xs:w-full xs:h-full pt-16 xs:mt-16"
      autoComplete="off"
    >
      <div className="divide-y divide-tbgreen-border">
        <TextField
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <TextField
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          {...console.log(`Username:${username}\nPassword:${password}`)}
        />
      </div>
      <button
        type="submit"
        className=" text-lg bg-tbgreen-default mt-11 w-36 h-7 rounded-xl hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none "
      >
        Login
      </button>
      <div className="text-xs mt-3 pb-10">
        <span>Dont't have an account? </span>
        <Link className="font-bold underline" to="/register">
          Register
        </Link>
      </div>
    </form>
  );
};
