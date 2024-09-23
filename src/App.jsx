import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';
import { useRef } from 'react';

import './App.css'
import Loading from './Loading.jsx';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'


function App() {
  return (
    <>
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer>
          <img src={viteLogo} />
        </ParallaxLayer>

        <ParallaxLayer onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
    </>
  );
}

export default App
