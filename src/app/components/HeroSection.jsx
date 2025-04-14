"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5}} 
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start mr-0"
            >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                        Hello, I&apos;m{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Daniel Kim',
                            2000,
                            'MIT \'24',
                            2000,
                            'AI/ML Researher',
                            2000,
                            'Web Developer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    I am a Class of &apos;24 at MIT studying Computer Science and Finance
                </p>
                <div>
                    <Link 
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                    >
                        Connect with me
                    </Link>

                    <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                        <Link 
                            className="block bg-[#010f18] hover:bg-slate-800 rounded-full px-5 py-2" 
                            href="/files/Kim_Daniel_Resume.pdf" 
                            target="_blank"
                            download
                        >
                            Download Resume
                        </Link>
                    </button>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5}} 
                className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className="rounded-full bg-[#393939] w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
                    <Image 
                        src="/images/sss.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                        width={600}
                        height={600}
                    />
                </div>
            </motion.div>
        </div>

    </section>
  )
}

export default HeroSection