import { playerAPI } from '../api';
import { Fragment, useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import countryList from 'react-select-country-list';
import { Listbox } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

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
        {/* <input
          className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none focus:placeholder-transparent"
          type="text"
          name="country"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        /> */}
        <Listbox value={country} onChange={setCountry}>
          <Listbox.Button className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none focus:placeholder-transparent">
            <span className=" text-center">{country.label}</span>
            <SelectorIcon
              className=" h-5 w-5 float-right mr-2 text-gray-300"
              aria-hidden="true"
            />
          </Listbox.Button>

          <Listbox.Options className="z-10 mt-1 w-full max-h-48 bg-btngreen-dark text-offwhite overflow-auto ">
            {countries.map((country) => (
              <Listbox.Option
                key={country.label}
                className={({ active }) =>
                  classNames(
                    active ? 'text-white bg-tbgreen-hover' : 'text-offwhite',
                    'select-none relative py-2 pl-3 pr-9'
                  )
                }
                value={country}
              >
                {({ selected, active }) => (
                  <>
                    <div className="flex items-center">
                      <span
                        className={classNames(
                          selected ? 'font-bold' : 'font-normal',
                          'ml-3 block truncate'
                        )}
                      >
                        {country.label}
                      </span>
                    </div>

                    {selected ? (
                      <span
                        className={classNames(
                          active ? 'text-white' : 'text-indigo-600',
                          'absolute inset-y-0 right-0 flex items-center pr-4'
                        )}
                      >
                        <CheckIcon
                          className="h-5 w-5 text-offwhite"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>

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
