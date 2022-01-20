import { Fragment, useRef, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import TextField from '../components/TextField/TextField';
import { getPlayerByUsername, updatePlayer } from '../services/playerService';

export const ProfilePage = () => {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const history = useHistory();

  const { user } = useContext(AuthContext);

  const [username, setUsername] = useState(user.sub);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    updatePlayer(user.sub, username)
      .then(() => {
        setOpen(false);
        history.push('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto "
        initialFocus={cancelButtonRef}
        onClose={() => history.push('/')}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="font-work text-offwhite h-96 w-592 inline-block align-middle bg-btngreen-default overflow-hidden shadow-xl transform transition-all">
              <div className="bg-btngreen-default pb-4">
                <div className="text-center">
                  <form
                    action="put"
                    className=" bg-bggreen h-80 w-424 text-center mx-auto mt-8 pt-10"
                    autoComplete="off"
                    spellCheck="false"
                    onSubmit={handleOnSubmit}
                  >
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-semibold mb-8 mx-auto"
                    >
                      {user.sub}
                    </Dialog.Title>
                    <TextField
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <button
                      type="submit"
                      className=" text-lg bg-tbgreen-default mt-11 w-36 h-7 rounded-xl hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none "
                    >
                      Change username
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
