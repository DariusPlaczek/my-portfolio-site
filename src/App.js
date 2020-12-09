import React, { useState } from 'react';
import './App.scss';

import { Links } from './components/Utils/'
import { Home, ReactPortfolio, Webdesign } from './components/Pages'

function App() {


  const [homeBool, setHomeBool] = useState(true);
  const [reactBool, setReactBool] = useState(false);
  const [webDesignBool, setWebDesignBool] = useState(false);

  const [homeIndex, setHomeIndex] = useState(3)
  const [reactIndex, setReactIndex] = useState(2)
  const [webIndex, setWebIndex] = useState(1)

  const [homeAnimation, setHomeAnimation] = useState('')
  const [reactAnimation, setReactAnimation] = useState('')
  const [webAnimation, setWebAnimation] = useState('')


  const homePage = () => {
    setHomeIndex(3)

    if (reactBool) {
      setReactIndex(2)
      setWebIndex(1)
    }

    if (webDesignBool) {
      setWebIndex(2)
      setReactIndex(1)
    }

    setHomeBool(true)
    setReactBool(false)
    setWebDesignBool(false)
    setHomeAnimation('slide-normal')
    setWebAnimation('')
    setReactAnimation('')
  }

  const reactPage = () => {
    setReactIndex(3)

    if (homeBool) {
      setHomeIndex(2)
      setWebIndex(1)
    }

    if (webDesignBool) {
      setHomeIndex(1)
      setWebIndex(2)
    }

    setReactBool(true)
    setHomeBool(false)
    setWebDesignBool(false)
    setReactAnimation('slide-normal')
    setHomeAnimation('')
    setWebAnimation('')

  }

  const webPage = () => {
    setWebIndex(3)

    if (homeBool) {
      setHomeIndex(2)
      setReactIndex(1)
    }

    if (reactBool) {
      setReactIndex(2)
      setHomeIndex(1)
    }

    setHomeBool(false)
    setReactBool(false)
    setWebDesignBool(true)
    setWebAnimation('slide-normal')
    setReactAnimation('')
    setHomeAnimation('')
  }

  return (
    <>

    <div className="sidebar-container">
      <div className="navigation">
        <Links id="home" linkName="About Me" classes="first-element" onClick={homePage}/>
        <Links id="react" linkName="ReactPortfolio" onClick={reactPage} />
        <Links id="web" linkName="Webdesign" classes="last-element" onClick={webPage} />
      </div>
    </div>
    <div className="container">
      <Home animation={homeAnimation} styles={homeIndex}/>
      <ReactPortfolio animation={reactAnimation} styles={reactIndex}/>
      <Webdesign animation={webAnimation} styles={webIndex}/>
    </div>
    </>
  );
}

export default App;
