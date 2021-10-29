import { playerAPI } from '../api';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleOnSubmit = () => {
    playerAPI.createPlayer(refEmail.current.value);
  };

  const refEmail = useRef(null);
  const refPassword = useRef(null);

  return (
    <form
      action="post"
      onSubmit={handleOnSubmit}
      className="text-center bg-btngreen-default  w-96 filter drop-shadow-normal text-offwhite "
      autoComplete="off"
    >
      <div className="divide-y divide-tbgreen-border">
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 mt-16 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none "
          type="text"
          name="email"
          id="email"
          ref={refEmail}
          placeholder="Email"
        />
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none "
          type="password"
          name="password"
          id="password"
          ref={refPassword}
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className=" text-lg bg-tbgreen-default mt-11 w-36 h-7 rounded-xl hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none"
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
