import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { authenticateAPIKey } from '../actions/auth';

export default function Authenticate() {
  const [authToken, setAuthToken] = useState(() => '');
  const [submit, setSubmit] = useState(() => false);
  const dispatch = useDispatch();

  // 12832752fc79e94b205e24b1a5bf7a4d
  useEffect(() => {
    if (submit) {
      dispatch(authenticateAPIKey(authToken));
    }
  }, [submit]);

  const handleAuthTokenSubmit = () => {
    setSubmit(true);
  };

  return (
    <div>
      <input
        type="text"
        value={authToken}
        placeholder="add your API Key"
        onChange={(evt) => setAuthToken(evt.target.value)}
      />
      <button type="submit" onClick={() => handleAuthTokenSubmit()}>
        Submit
      </button>
    </div>
  );
}
