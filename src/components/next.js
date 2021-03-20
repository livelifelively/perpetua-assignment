import React from 'react';
import PropTypes from 'prop-types';

const NextTrack = ({ track }) => {
  return (
    <div>
      <h3>Up Next</h3>
      <h1>{track.trackName}</h1>
      <div>
        <div>{track.artistName}</div>
        <div>{track.albumName}</div>
      </div>
    </div>
  );
};

NextTrack.propTypes = {
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
};

export default NextTrack;
