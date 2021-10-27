import { playerAPI } from '../api';
import { useRef } from 'react';

const Register = () => {
  const handleOnSubmit = () => {
    playerAPI.createPlayer(
      refUsername.current.value,
      refEmail.current.value,
      refCountry.current.value
    );
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
      className="text-center origin-bottom bg-btngreen-default h-96 w-96 absolute filter drop-shadow-normal text-offwhite font-work "
    >
      <input
        className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 mt-16"
        type="text"
        name="username"
        id="username"
        ref={refUsername}
        placeholder="Username"
      />
      <br />
      <input
        className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60"
        type="text"
        name="email"
        id="email"
        ref={refEmail}
        placeholder="Email"
      />
      <br />
      <input
        className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60"
        type="text"
        name="country"
        id="country"
        ref={refCountry}
        placeholder="Country"
      />
      <br />
      <input
        className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 "
        type="text"
        name="password"
        id="password"
        ref={refPassword}
        placeholder="Password"
      />
      <br />
      <input
        className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60"
        type="text"
        name="confirmPassword"
        id="confirmPassword"
        ref={refConfirmPassword}
        placeholder="Confirm password"
      />
      <br />
      <button type="submit" className="bg-tbgreen-default">
        Register
      </button>
      <br />
      <div>
        <span>Already have an account? </span>
        <a className="font-bold" href="/login">
          Login
        </a>
      </div>
    </form>
  );
};

export default Register;
