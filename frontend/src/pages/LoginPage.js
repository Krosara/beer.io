import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TextField from '../components/TextField/TextField';
import { login } from '../services/auth.service';
import { ReactComponent as Logo } from '../assets/logo+text.svg';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(username, password)
      .then(history.push('/'))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Logo className=" mb-14 small:mb-6 small:-mt-2 pl-2 mx-auto small:w-9/12 small:h-3/4" />
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
    </div>
  );
};
