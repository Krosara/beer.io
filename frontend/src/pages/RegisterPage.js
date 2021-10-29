import { playerAPI } from '../api';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ history }) => {
  const handleOnSubmit = (e) => {
    // e.preventDefault();

    playerAPI.createPlayer(
      refUsername.current.value,
      refEmail.current.value,
      refCountry.current.value
    );

    // history.push('/');
  };

  const refUsername = useRef(null);
  const refEmail = useRef(null);
  const refCountry = useRef(null);
  const refPassword = useRef(null);
  const refConfirmPassword = useRef(null);

  return (
    <form
      action="post"
      onSubmit={handleOnSubmit}
      className="text-center bg-btngreen-default w-96 filter drop-shadow-normal text-offwhite mx-auto xs:w-full xs:h-full"
      autoComplete="off"
    >
      <div className="divide-y divide-tbgreen-border">
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 mt-16 xs:mt-12 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none"
          type="text"
          name="username"
          id="username"
          ref={refUsername}
          placeholder="Username"
        />
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none"
          type="text"
          name="email"
          id="email"
          ref={refEmail}
          placeholder="Email"
        />
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none"
          type="text"
          name="country"
          id="country"
          ref={refCountry}
          placeholder="Country"
        />
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none"
          type="password"
          name="password"
          id="password"
          ref={refPassword}
          placeholder="Password"
        />
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          ref={refConfirmPassword}
          placeholder="Confirm password"
        />
      </div>
      <button
        type="submit"
        className="bg-tbgreen-default mt-11 w-36 h-7 rounded-xl hover:bg-tbgreen-hover  focus:bg-tbgreen-hover focus:outline-none border border-tbgreen-border xs:mt-6"
      >
        Register
      </button>
      <div className="text-xs mt-3 pb-10">
        <span>Already have an account? </span>
        <a className="font-bold underline" href="/login" component={Link}>
          Login
        </a>
      </div>
    </form>
  );
};

export default Register;
