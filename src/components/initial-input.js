import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongsByInputCategoryName } from '../actions/initiate-playlist';

const InitialInput = () => {
  const [initCategory, setInitCategory] = useState(() => '');
  const dispatch = useDispatch();

  const handleInitCategorySubmit = () => {
    dispatch(fetchSongsByInputCategoryName(initCategory));
  };

  return (
    <div>
      <input
        type="text"
        value={initCategory}
        placeholder="Add Category"
        onChange={(evt) => setInitCategory(evt.target.value)}
      />
      <button type="submit" disabled={initCategory.length === 0} onClick={() => handleInitCategorySubmit()}>
        Submit
      </button>
    </div>
  );
};

export default InitialInput;
