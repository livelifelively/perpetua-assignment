import React from 'react';
import { useSelector } from 'react-redux';

import Playing from './playing';
import Next from './next';

const Playlist = () => {
  const playingTrack = useSelector((state) => state.activeTrack);
  const nextTrack = useSelector((state) => state.nextTrack);
  const randomWords = useSelector((state) => state.randomWords);

  console.log(randomWords);

  return (
    <div>
      <Playing track={playingTrack} nextTrack={nextTrack} randomWords={randomWords} />
      <Next track={nextTrack} />
    </div>
  );
};

export default Playlist;
