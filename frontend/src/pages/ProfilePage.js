import { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

const ProfilePage = ({ showModal, setShowModal }) => {
  return <>{showModal ? <h1>thisisatest</h1> : null}</>;
};

export default ProfilePage;
