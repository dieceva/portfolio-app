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
import mysql from '../assets/mysql.svg';
import php from '../assets/php.svg';
import youtube from '../assets/youtube.svg';
import css from '../assets/css.svg';
import html from '../assets/html.svg';
import powerbi from '../assets/powerbi.svg';
import office from '../assets/office.svg';
import chatgpt from '../assets/chatgpt.svg';
import sap from '../assets/sap.svg';
import chrome from '../assets/chrome.svg';



const introStart = 0;

const ParallaxCont = () => {
    const ref = useRef()
    return(
    <Parallax pages={7} ref={ref}>
   {/* First Page */}
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
		<h1 className="flex align-center box-decoration-slice bg-gradient-to-r from-gray-600 to-purple-500 text-white px-2 rounded">My Portfolio</h1>
		</ParallaxLayer>
		
		<ParallaxLayer
		offset={introStart + 0.6}
		speed={-5}
		style={{display:"flex", justifyContent:"center"}}
		onClick={() => {
			console.log(ref);
			ref.current.scrollTo(3)
		}}
		>
		<h2 className="mix-blend-overlay text-3xl">By Diego Cevallos</h2>
		</ParallaxLayer>
{/* End of First Page */}


{/* Second Page */}
		<ParallaxLayer
		offset={1}
		factor={1.05}
		speed={0.05}
		style={{
			background: `rgba(0,0,0,0.325) url(${bg2})`,
			backgroundSize: 'cover',
			backgroundPosition: "center",
			backgroundBlendMode:"darken"
		}}
		>
		</ParallaxLayer>
		<ParallaxLayer
		offset={1}
		speed={0.5}
		className="flex items-start justify-center mt-10"
		>
		<h1 className="flex align-center box-decoration-slice bg-gradient-to-r from-gray-600 to-purple-500 text-white px-2 rounded">Here I will put some projects</h1>
		<h2 className="flex align-center box-decoration-slice bg-gradient-to-r from-gray-600 to-purple-500 text-white px-2 rounded">This is just an example</h2>
		</ParallaxLayer>
		<ParallaxLayer
		offset={1}
		speed={.18}
		>
            <div class="overflow-hidden bg-transparent py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
                Push to deploy.
              </dt>
              <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                SSL certificates.
              </dt>
              <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                </svg>
                Database backups.
              </dt>
              <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
            </div>
          </dl>
        </div>
      </div>
      <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442"/>
    </div>
  </div>
</div>
		</ParallaxLayer>
{/* End of Second Page */}

		{/* <ParallaxLayer
		offset={introStart + 1}
		speed={.18}
		>
            <div className="flex flex-col p-5 items-center justify-center h-full card rounded-none">
			<h1 className="my-3 text-center flex align-center box-decoration-slice bg-gradient-to-b from-purple-500 to-transparent text-white px-2 rounded">Introduction about myself</h1>
			<p className="my-3 text-center">
				I am Diego Cevallos, an Industrial Engineer Bachelor living in Vancouver. 
			</p>
            <p className="my-3 text-center">Currently studying Web Development and Programming Diploma with Co-Op. </p>
			<p className="my-3 text-center">
				
			</p>
			</div>
		</ParallaxLayer> */}
{/* Third Page */}
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
		offset={2}
		speed={0.2}
		className="flex items-start justify-center mt-10"
		>
		<h1 className="flex align-center box-decoration-slice bg-gradient-to-r from-gray-600 to-purple-500 text-white px-2 rounded">Web Developing Experience</h1>
		</ParallaxLayer>
		{/* <ParallaxLayer
		offset={introStart + 5}
		factor={1}
		speed={0.01}
		style={{
			backgroundColor: `rgba(0,0,0,0.35)`,
			backgroundImage: `url(${universe})`,
			backgroundPosition:"center",
            backgroundSize: "cover",
			zIndex:-1,
		}}
		>
		</ParallaxLayer> */}
        <ParallaxLayer
		offset={2.43}
		speed={0.09}
		factor={0.5}
		style={{zIndex:1}}
        sticky={{start: introStart + 2.43, end: introStart + 4}}
		>
		<div className="p-5 w-2/5 rounded flex items-center justify-center flex-col mx-auto bg-gradient-to-b from-purple-500 to-transparent">
		    <p className="text-7xl">Skills
		    </p>
		    <strong className="mt-3">But I am now very familiar with these:</strong>
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
			Still very new, 0 experience xd
			</h2>
		</>
		</ParallaxLayer>
		
        <ParallaxLayer
        
		sticky={{start: introStart + 2.7, end: introStart + 4}}
		className="flex justify-center"
		style={{ width: "33%"}}
		>
		<div className="rounded w-11/12 mt-40 flex flex-col bg-gradient-to-b from-purple-500 to-transparent"> 
        <strong className="text-center">Programming Languages / Frameworks </strong>
        <div className="grid grid-cols-2 justify-items-center gap-6 p-8">
        <img src={javascript} className="size-20 animate-bounce"/>
        <img src={react} className="size-20 animate-bounce"/>
        <img src={python} className="size-20 animate-bounce"/>
        <img src={django} className="size-20 animate-bounce"/>
		<img src={mysql} className="size-20 animate-bounce"/>
        <img src={php} className="size-20 animate-bounce"/>
        </div>
		</div>
		</ParallaxLayer>
        
		
		<ParallaxLayer
		sticky={{start: introStart + 3, end: introStart + 4}}
		className="flex justify-center"
		style={{ width: "34%", marginLeft: "33%" }}
		>
		
		<div className="rounded w-11/12 mt-40 flex flex-col bg-gradient-to-b from-purple-500 to-transparent"> 
        <strong className="text-center">Software Tools</strong>
        <div className="grid grid-cols-2 justify-items-center gap-6 p-8">
        <img src={css} className="size-20 animate-bounce"/>
        <img src={html} className="size-20 animate-bounce"/>
        <img src={sap} className="size-20 animate-bounce"/>
        <img src={powerbi} className="size-20 animate-bounce"/>
        <img src={office} className="size-20 animate-bounce"/>
        </div>
		</div>
		
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 3.2, end: introStart + 4}}
		className="flex justify-center"
		style={{ width: "33%", marginLeft: "67%" }}
		>
		<div className="rounded w-11/12 mt-40 flex flex-col bg-gradient-to-b from-purple-500 to-transparent"> 
        <strong className="text-center">Special Thanks to:</strong>
        <div className="grid grid-cols-2 justify-items-center gap-6 p-8">
        <img src={chatgpt} className="size-20 animate-bounce"/>
        <img src={chrome} className="size-20 animate-bounce"/>
        <img src={youtube} className="size-20 animate-bounce"/>
       
        </div>
		</div>
				
		</ParallaxLayer>
        <ParallaxLayer
		offset={5.3}
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