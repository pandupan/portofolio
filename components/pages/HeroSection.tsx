/* eslint-disable @next/next/no-img-element */
'use client';

import Button from '../core/Button'
import { motion } from 'framer-motion'
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="container px-20 w-full h-[100vh] mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="space-y-3">
          <motion.div 
            className="text-indigo-500 text-[32px] font-semibold"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >Hi, I&apos;m Pandu Pangestu </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }} 
            className="w-[416px] text-white text-5xl font-semibold leading-[60px]"
          >UI/UX Designer & Frontend Engineer</motion.div>
          <motion.div 
            initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.9,delay:0.5}}
          >
            <Link href="#project">
              <Button title="See My Project"/>
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="p-14 lg:p-0"
          initial={{x:100, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:0.9,delay:0.5}}
        >
          <div className="relative w-[425px] h-[430px] p-20 lg:p-0">
            <img src="/svg/hero-svg.svg" alt="profile"/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
