import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'


const MotionLink= motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/'
        className='w-10 h-10 md:w-12 md:h-12 bg-dark text-light flex items-center justify-center rounded-md text-lg md:text-2xl font-bold dark:!bg-light dark:text-dark'
        whileHover={{ 
            backgroundColor:[ "#121212", "#cfa991"],
            transition:{duration:3, repeat: Infinity}
        }}
        >
          {/* <Image src={logo} alt='my initials' /> */}
          SD</MotionLink>
    </div>
  )
}

export default Logo