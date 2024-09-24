import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';
import { useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Info from './components/Info.jsx';

import './App.css'
import Loading from './components/Loading.jsx';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import ParallaxCont from './components/ParallaxCont.jsx';


function App() {
  return (
    <>
    <Navbar/>
    <ParallaxCont/>
    </>
  );
}

export default App
