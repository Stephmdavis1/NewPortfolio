import Link from 'next/link'
import React from 'react'
import { CircularText2 } from './Icons'

const HireMe = () => {
  return (
    <div className='w-24 h-24 lg:w-40 lg:h-40 right-0 bottom-64 lg:bottom-0 flex items-center justify-center overflow-hidden absolute'>

    <div className='flex items-center justify-center relative'></div>
    <CircularText2 className={'fill-dark dark:fill-light animate-spin-slow'} />
    
    <Link href='mailto:stephmdavis1@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
     bg-dark text-light text-[6px] lg:text-[11px] text-center shadow-md border border-solid border-dark w-10 h-10 lg:w-16 lg:h-16 rounded-full font-semibold hover:bg-light hover:text-dark hover:border-light dark:bg-primary dark:text-dark' 
    > Web Designer</Link>
    </div>
  )
}

export default HireMe