import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ProfilePage = () => {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto "
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
            <div className="font-work text-offwhite h-740 w-592 inline-block align-middle bg-btngreen-default overflow-hidden shadow-xl transform transition-all">
              <div className="bg-btngreen-default pb-4">
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-semibold mt-16 mx-auto"
                  >
                    Username
                  </Dialog.Title>
                  <form
                    action="post"
                    className=" bg-bggreen h-432 w-424 text-center mx-auto mt-8 pt-10"
                  >
                    <input type="email" placeholder="Email"></input>
                  </form>
                </div>
              </div>
              <div className="bg-btngreen-default px-4 py-3">
                <button
                  type="button"
                  className=" w-64 h-16 inline-flex justify-center border border-transparent shadow-sm bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => setOpen(false)}
                >
                  Deactivate
                </button>
                {/* <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button> */}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProfilePage;
