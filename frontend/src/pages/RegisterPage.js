import { createPlayer } from '../services/playerService';
import { useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TextField from '../components/TextField/TextField';
import CountriesDropDown from '../components/CountriesDropDown/CountriesDropDown';
import countryList from 'react-select-country-list';
import * as Yup from 'yup';
import { ErrorMessage, Formik, Form } from 'formik';
import { ReactComponent as Logo } from '../assets/logo+text.svg';

export const RegisterPage = () => {
  const countries = useMemo(() => countryList().getData(), []);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState(countries[156]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleOnSubmit = () => {
    createPlayer(username, email, country.label, password)
      // .then(history.push('/'))
      .catch((error) => {
        if (error.response.status === 400) {
          console.log(error.response.status);
          alert(`Player with this username/email already exists`);
        }
      })
      .finally(history.push('/'));
  };

  const validation = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    country: Yup.string().required('Country is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  return (
    <div>
      <Logo className=" mb-14 small:mb-6 small:-mt-2 pl-2 mx-auto small:w-9/12 small:h-3/4" />
      <Formik
        initialValues={{
          username: username,
          email: email,
          country: country.label,
          password: password,
          confirmPassword: confirmPassword,
        }}
        enableReinitialize
        validationSchema={validation}
        onSubmit={handleOnSubmit}
      >
        {(formik) => (
          <Form
            action="post"
            className="text-center bg-btngreen-default w-96 filter drop-shadow-normal text-offwhite mx-auto pt-16 xs:w-full xs:h-full"
            autoComplete="off"
            {...console.log(formik.values)}
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
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <TextField
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
            </div>
            <ErrorMessage
              component="div"
              name="username"
              className="text-red-600 pt-1 text-xs"
            />
            <ErrorMessage
              component="div"
              name="email"
              className="text-red-600 pt-1 text-xs"
            />
            <ErrorMessage
              component="div"
              name="password"
              className="text-red-600 pt-1 text-xs"
            />
            <ErrorMessage
              component="div"
              name="confirmPassword"
              className="text-red-600 pt-1 text-xs -mb-10"
            />
            <button
              type="submit"
              className="bg-tbgreen-default mt-11 w-36 h-7 rounded-xl hover:bg-tbgreen-hover  focus:bg-tbgreen-hover focus:outline-none border border-tbgreen-border xs:mt-6 focus:placeholder-transparent"
            >
              Register
            </button>
            <div className="text-xs mt-3 pb-10">
              <span>Already have an account? </span>
              <Link className="font-bold underline" to="/login">
                Login
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
