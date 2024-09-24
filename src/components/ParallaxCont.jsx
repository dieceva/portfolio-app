import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/diego-logo.png";
import menu from "../assets/menu.svg";  
import close from "../assets/close.svg";  
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import { useRef } from 'react';
import react from '../assets/react.svg';
import universe from '../assets/universe.jpg'
import Info from "./Info";
import javascript from '../assets/javascript.svg';
import python from '../assets/python.svg';
import django from '../assets/django.svg';


const start = 0;
const introDuration = 7;
const learningDuration = 3.65;
const masteryDuration = 7;
const helpingDuration = 3.5;
const conclusionDuration = 2.75;

const buffer = 1;

// computed values, with buffer
const introStart = start + 0;
const learningStart = introStart + introDuration + buffer;
const masteryStart = learningStart + learningDuration + buffer;
const helpingStart = masteryStart + masteryDuration + buffer;
const conclusionStart = helpingStart + helpingDuration + buffer;
const end = conclusionStart + conclusionDuration;

const totalDuration = end - start;

const ParallaxCont = () => {
    const ref = useRef()
    return(
    <Parallax pages={totalDuration} ref={ref}>
   
   <ParallaxLayer
		offset={introStart}
		factor={1.05}
		style={{
			background: `rgba(0,0,0,0.325) url(${bg1})`,
			backgroundSize: 'cover',
			backgroundPosition: "center",
			backgroundBlendMode:"darken"
		}}
		>
		</ParallaxLayer>
		
		<ParallaxLayer
		offset={introStart}
		speed={0.5}
		className="flex items-center justify-center"
		>
		<h1 className="flex align-center">My first Portfolio</h1>
		</ParallaxLayer>
		
		<ParallaxLayer
		offset={introStart + 0.93}
		speed={-5}
		style={{display:"flex", justifyContent:"center"}}
		onClick={() => {
			console.log(ref);
			ref.current.scrollTo(3)
		}}
		>
		<h2 className="mix-blend-overlay">By Diego Cevallos</h2>
		</ParallaxLayer>

		<ParallaxLayer
		offset={introStart + 1}
		factor={1.05}
		speed={0.05}
		style={{
			background: `rgba(0,0,0,0.35) url(${bg2})`,
			backgroundSize: 'cover',
			backgroundPosition: "center",
			backgroundBlendMode:"darken"
		}}
		>
		</ParallaxLayer>

		<ParallaxLayer
		offset={introStart + 1}
		speed={.18}
		>
            <div className="flex flex-col p-5 items-center justify-center h-full">
			<h1 className="my-3 text-center">Introduction about myself</h1>
			<p className="my-3 text-center">
				I am Diego Cevallos, an Industrial Engineer Bachelor living in Vancouver. 
			</p>
            <p className="my-3 text-center">Currently studying Web Development and Programming Diploma with Co-Op. </p>
			<p className="my-3 text-center">
				
			</p>
			</div>
		</ParallaxLayer>

		<ParallaxLayer
		offset={introStart + 2}
		factor={2.75}
		speed={0.01}
		style={{
			backgroundColor: `rgba(0,0,0,0.35)`,
			backgroundImage: `url(${universe})`,
			backgroundPosition:"center",
            backgroundSize: "cover",
			zIndex:-1,
		}}
		>
		</ParallaxLayer>
        <ParallaxLayer
		offset={2.43}
		speed={0.09}
		factor={0.5}
		style={{zIndex:1}}
        sticky={{start: introStart + 2.43, end: introStart + 4}}
		>
		<div className="p-5 flex items-center justify-center flex-col mx-auto">
		    <p className="text-7xl">Skills
		    </p>
		    <p className="mt-3">Programming / Web or Aplications Development</p>
		</div>
		</ParallaxLayer>

		<ParallaxLayer
		offset={2.2}
		speed={-0.15}
        factor={0.5}
		className="p-5 flex items-center flex-col"
		>
		<>
			<h2 className="text-center w-100 mt-5">
			I am very new in programming but I will list here my experience in other fields aswell xd
			</h2>
		</>
		</ParallaxLayer>
		
        <ParallaxLayer
        
		sticky={{start: introStart + 2.7, end: introStart + 4}}
		className="flex justify-center"
		style={{ width: "33%"}}
		>
		<div className="mt-40 flex flex-col"> 
        <strong className="text-center">Programming Languages and Frameworks</strong>
        <div className="grid grid-cols-2 justify-items-center gap-6 p-8">
        <img src={javascript} className="size-20 animate-bounce"/>
        <img src={react} className="size-20 animate-bounce"/>
        <img src={python} className="size-20 animate-bounce"/>
        <img src={django} className="size-20 animate-bounce"/>
        </div>
		</div>
		</ParallaxLayer>
        
		
		<ParallaxLayer
		sticky={{start: introStart + 3, end: introStart + 4}}
		className="flex justify-center"
		style={{ width: "34%", marginLeft: "33%" }}
		>
		
		<div className="mt-40"> 
		<strong >Learn as much as possible</strong>
		</div>
		
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 3.2, end: introStart + 4}}
		className="flex justify-center"
		style={{ width: "33%", marginLeft: "67%" }}
		>
		<div className="mt-40"> 
		<strong >Learn as much as possible</strong>
		</div>
				
		</ParallaxLayer>
        <ParallaxLayer
		offset={5}
		speed={-0.15}
        factor={1}
		className="p-5 flex items-center flex-col"
		>
		<>
		<Info/> {/*Contact Information Component*/}
		</>
		</ParallaxLayer>
		
		</Parallax>
		);
	}

export default ParallaxCont