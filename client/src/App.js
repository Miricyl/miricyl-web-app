import React, { useEffect, useState } from "react";
import "./App.css";
import HomePageContainer from "./containers/HomePageContainer";
import { BrowserRouter, useHistory } from "react-router-dom";
import FlagsProvider from "./components/FlagsProvider";
// import useGaTracker from './useGaTracker';
import TagManager from 'react-gtm-module';


function App() {

  // useGaTracker();
  const history = useHistory();

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-578R2Q2' });
  }, []);

  return (
    <FlagsProvider defaults={{ filter: 0 }}>
      <BrowserRouter>
        <HomePageContainer history={history} />
      </BrowserRouter>
    </FlagsProvider>
  );
}

export default App;
