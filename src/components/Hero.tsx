import React from 'react'
import Image from "next/image"; 

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6">
    <h1 className="text-4xl font-bold justify-center flex reveal-text">Hello!!<span>S</span><span>a</span><span>n</span><span>a</span><span>N</span><span>a</span><span>w</span> <span>a</span><span>z</span></h1>
        <p className="text-lg text-center justify-center flex max-w-md">A passionate web developer exploring the world of coding and creativity. This is a simple Next.js application for practice.</p>
        
        
        <Image src="/images/picture.jpg" alt="picture.jpg" width={200} height={200} className="picture.jpg - border-spacing-100 rounded-full mx-20 "></Image>
          
          <br /><button className="rounded- bg-sky-600 text-black  mb-10  ">More About Me</button>
        
          
        </div>
        
         
           
              
          

  )
}

export default Hero