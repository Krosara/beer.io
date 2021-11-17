import { playerAPI } from '../api';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../components/TextField';

const LoginPage = () => {
  // const handleOnSubmit = () => {
  //   playerAPI.createPlayer(refEmail.current.value);
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const refEmail = useRef(null);
  // const refPassword = useRef(null);

  return (
    <form
      action="post"
      // onSubmit={handleOnSubmit}
      className="text-center bg-btngreen-default  w-96 filter drop-shadow-normal text-offwhite mx-auto xs:w-full xs:h-full pt-16 xs:mt-16"
      autoComplete="off"
    >
      <div className="divide-y divide-tbgreen-border">
        <TextField
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <TextField
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          {...console.log(`Email:${email}\nPassword:${password}`)}
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
        <a className="font-bold underline" href="/register" component={Link}>
          Register
        </a>
      </div>
    </form>
  );
};

export default LoginPage;
