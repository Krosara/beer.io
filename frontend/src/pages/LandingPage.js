import React, { useState } from 'react';
import ReactModal from 'react-modal';

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-bggreen">
      <ReactModal isOpen={open}>
        <button onClick={() => setOpen(false)}>
          <img src="/assets/exit.svg" alt="" />
        </button>
      </ReactModal>
    </div>
  );
};

export default LandingPage;
