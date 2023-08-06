import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'

import image1 from '../../public/images/projects/SippersCaseStudy.png'
import { useInView, animated } from 'framer-motion'


const SippersCoffeehouse = () => {
    


    return (
    <main>
        {/* <div className='bg-fixed bg-center bg-no-repeat bg-cover bg-dark/77  overflow-x-auto'>
        <h6 className='text-md mt-5 ml-5 text-gray-700'>back to projects</h6>
        <h1 className='text-[30rem] text-center h-screen align-top top-0 left-0 font-[oi]'>S I P P E R S</h1>
        </div> */}

   
        <Layout className='p-32'>
           
    
            <Image src={image1} alt='sippers case study' className='mb-32'/>

            <Link href='/projects' className='font-thin mt-96 text-3xl'>
                Back to Projects
            </Link>
            
        </Layout>
    </main>

   )
}

export default SippersCoffeehouse