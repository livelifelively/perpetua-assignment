import React from 'react';
import { useSelector } from 'react-redux';

import Playing from './playing';
import Next from './next';

const Playlist = () => {
  const playingTrack = useSelector((state) => state.activeTrack);
  const nextTrack = useSelector((state) => state.nextTrack);
  const songsPlayed = useSelector((state) => state.songsPlayed);
  const randomWords = useSelector((state) => state.randomWords);
  const overall = useSelector((state) => state);

  console.log(overall);

  return (
    <div>
      <Playing track={playingTrack} nextTrack={nextTrack} randomWords={randomWords} songsPlayed={songsPlayed} />
      <Next track={nextTrack} />
    </div>
  );
};

export default Playlist;
