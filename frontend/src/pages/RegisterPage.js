import { playerAPI } from '../api';
import { useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { DropDownList } from '@progress/kendo-react-dropdowns';

const Register = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    playerAPI.createPlayer(username, email, country);

    history.push('/');
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const [country1, setCountry1] = useState('');

  const countries = useMemo(() => countryList().getData(), []);

  return (
    <form
      action="post"
      onSubmit={handleOnSubmit}
      className="text-center bg-btngreen-default w-96 filter drop-shadow-normal text-offwhite mx-auto xs:w-full xs:h-full"
      autoComplete="off"
    >
      <div className="divide-y divide-tbgreen-border">
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 mt-16 xs:mt-8 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none focus:placeholder-transparent"
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none focus:placeholder-transparent"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none focus:placeholder-transparent"
          type="text"
          name="country"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none focus:placeholder-transparent"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none focus:placeholder-transparent"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
        />
      </div>
      <button
        type="submit"
        className="bg-tbgreen-default mt-11 w-36 h-7 rounded-xl hover:bg-tbgreen-hover  focus:bg-tbgreen-hover focus:outline-none border border-tbgreen-border xs:mt-6 focus:placeholder-transparent"
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
