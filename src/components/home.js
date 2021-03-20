import React from 'react';
import { useSelector } from 'react-redux';

import Playlist from './playlist';
import InitialInput from './initial-input';

const Home = () => {
  const playlistInitiated = useSelector((state) => state.initiated);

  return <div>{playlistInitiated ? <Playlist /> : <InitialInput />}</div>;
};

export default Home;
