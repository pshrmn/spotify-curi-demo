import React from 'react';
import { useResponse } from '@curi/react-dom';

import './App.css';
import NavBar from '../NavBar';
import NowPlaying from '../NowPlaying';

function App() {
  const { response } = useResponse();

  const { body:Body } = response;

  return (
    <div className="App">
      <main>
        <NavBar />
        <div className="content">
          <Body response={response} />
        </div>
      </main>
      <NowPlaying />
    </div>
  );
}

export default App;
