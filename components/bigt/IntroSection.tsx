"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';
import BlurryBlob from '@/components/animata/blurry-blob';



const IntroSection = () => {
    return (
        <div className='p-10 min-w-[400px] md:min-w-[500px] flex flex-col justify-center items-start relative'>
            <BlurryBlob
                className="rounded-xl opacity-45 absolute mt-10 bg-blend-multiply"
                firstBlobColor="bg-green-500"
                secondBlobColor="bg-blue-400"
            />
            <div className='absolute text-center transform translate-x-[-50%] left-[50%] w-full'>
                <h1 className='text-3xl lg:text-4xl'>Hi There!</h1>
                <p className='text-4xl lg:text-6xl'>I am <span className='text-4xl lg:text-6xl bg-gradient-to-br from-violet-400 to-rose-600 bg-clip-text text-transparent'>Tasin</span></p>
                <div className='flex-col text-4xl text-center'>
                    <Typewriter options={{
                        strings: ['Web Dev', 'Hacker', 'Video Techie', 'Hardware Enthusiast', 'Music Lover', "AI Enthusiast"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "bg-gradient-to-br from-violet-400 to-rose-600 bg-clip-text text-transparent text-center",
                        deleteSpeed: 10
                    }} />
                </div>
            </div>
        </div>
    );
}

export default IntroSection;
