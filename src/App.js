import React from 'react';
// import { useSelector } from 'react-redux';

// import Auth from './components/auth';
import Home from './components/home';

const App = () => {
  // const authState = useSelector((state) => state.auth);

  // const { authenticated } = authState;

  // return <div>{authenticated ? <Home /> : <Auth />}</div>;
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
