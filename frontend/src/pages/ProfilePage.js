import { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

function ProfilePage({ setState }) {
  const [open, setOpen] = useState(true);
  const history = useHistory();

  if (!open) {
    return null;
  }

  return (
    <Modal
      isOpen={true}
      className="bg-btngreen-default text-offwhite w-2/5 h-3/4 mx-auto my-auto self-center align-middle outline-none "
    >
      <h1>thisisatest</h1>

      <button>close</button>
    </Modal>
  );
}

export default ProfilePage;
