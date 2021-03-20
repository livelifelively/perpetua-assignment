import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { MAX_TRACK_TIME } from '../constants';
import { activeTrackComplete } from '../actions/active-track';
import { songsByRandomWordsString } from '../actions/next-track';

const Playing = ({ track, nextTrack, randomWords }) => {
  const [trackTimer, setTrackTimer] = useState(() => 0);
  const id = useRef(null);
  const dispatch = useDispatch();

  const playNext = () => {
    window.clearInterval(id.current);
    dispatch(activeTrackComplete({ completedTrack: track, nextTrack }));
    dispatch(songsByRandomWordsString(randomWords));
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTrackTimer((c) => c + 1);
    }, 1000);

    return playNext;
  }, [track.trackId]);

  useEffect(() => {
    if (trackTimer >= MAX_TRACK_TIME) playNext();
  }, [trackTimer]);

  return (
    <div>
      <h3>Now Playing</h3>
      <h1>{track.trackName}</h1>
      <div>
        <div>{track.artistName}</div>
        <div>{track.albumName}</div>
      </div>
      {trackTimer}
    </div>
  );
};

Playing.propTypes = {
  track: PropTypes.shape({
    hasLyrics: PropTypes.number,
    trackId: PropTypes.number,
    trackName: PropTypes.string,
    isInstrumental: PropTypes.number,
    albumId: PropTypes.number,
    albumName: PropTypes.string,
    artistId: PropTypes.number,
    artistName: PropTypes.string,
  }).isRequired,
  nextTrack: PropTypes.shape({
    hasLyrics: PropTypes.number,
    trackId: PropTypes.number,
    trackName: PropTypes.string,
    isInstrumental: PropTypes.number,
    albumId: PropTypes.number,
    albumName: PropTypes.string,
    artistId: PropTypes.number,
    artistName: PropTypes.string,
  }).isRequired,
  randomWords: PropTypes.string.isRequired,
};

export default Playing;
