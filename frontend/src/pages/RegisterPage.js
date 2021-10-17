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

  return (
    <form action="post" onSubmit={handleOnSubmit}>
      <input type="text" name="username" id="username" ref={refUsername} />
      <br />
      <br />
      <input type="text" name="email" id="email" ref={refEmail} />
      <br />
      <br />
      <input type="text" name="country" id="country" ref={refCountry} />
      <br />
      <br />
      <button type="submit">click me</button>
    </form>
  );
};

export default Register;
