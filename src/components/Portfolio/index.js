import React, { useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model/Model';
import { OrbitControls } from '@react-three/drei';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import Media from "react-media";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']} idx={15} />
          </h1>
          <p>I am passionate about everything that has to do with Digital Design and Art Direction. I enjoy working with agencies and enthusiastic people who want to solve problems through beautiful design and experiences.</p>
          <a href="http://nurulasrulroji.byethost8.com/" target={["_blank"]} className='flat-button'>visit now <FontAwesomeIcon icon={faRocket} color="#666" /></a>
        </div>
        <Media queries={{ small: { maxWidth: 599 } }}>
          <Canvas
            camera={{ position: [2, 0, 12.25], fov: 12 }}
            style={{
              backgroundColor: 'transparent',
              position: 'absolute',
              zIndex: -1,
              bottom: -80,
              right: 50,
              width: '100%',
              height: '100%',
            }}
          >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.1} />
            <Suspense fallback={null}>
              <mesh scale={0.010}>
                <Model position={[20, 30, 1]} />
              </mesh>
            </Suspense>
            <OrbitControls />
          </Canvas>
        </Media>
        <Media queries={{ small: { minWidth: 599 } }}>
          <Canvas
            camera={{ position: [2, 0, 12.25], fov: 12 }}
            style={{
              backgroundColor: 'transparent',
              position: 'absolute',
              zIndex: -1,
              top: -100,
              right: -100,
              width: '100%',
              height: '100%',
            }}
          >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.1} />
            <Suspense fallback={null}>
              <mesh scale={0.020}>
                <Model position={[20, 30, 1]} />
              </mesh>
            </Suspense>
            <OrbitControls />
          </Canvas>
        </Media>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio
