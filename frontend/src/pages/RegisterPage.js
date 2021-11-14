import { playerAPI } from '../api';
import { Fragment, useState, useMemo, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TextField from '../components/TextField';
import CountriesDropDown from '../components/CountriesDropDown';
import countryList from 'react-select-country-list';
// import { Listbox } from '@headlessui/react';
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import * as Yup from 'yup';
import { ErrorMessage, useField, Formik, Form } from 'formik';

const Register = () => {
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  //   playerAPI.createPlayer(username, email, country);

  //   history.push('/');
  // };

  const validation = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    country: Yup.string().required('Country is required'),
  });

  const countries = useMemo(() => countryList().getData(), []);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState(countries[156]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const history = useHistory();

  const refUsername = useRef(null);
  const refEmail = useRef(null);
  const refCountry = useRef(null);
  const refPassword = useRef(null);
  const refConfirmPassword = useRef(null);

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        country: '',
      }}
    >
      {(formik) => (
        <Form
          action="post"
          // onSubmit={handleOnSubmit}
          className="text-center bg-btngreen-default w-96 filter drop-shadow-normal text-offwhite mx-auto pt-16 xs:w-full xs:h-full"
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
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <CountriesDropDown value={country} onChange={setCountry} />
            <TextField
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <TextField
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              {...console.log(
                `Username:${username} Email:${email} Country:${country.label} Password:${password} Confirm:${confirmPassword}`
              )}
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
        </Form>
      )}
    </Formik>
  );
};

export default Register;
