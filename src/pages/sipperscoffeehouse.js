import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'


import { useInView, animated } from 'framer-motion'
import ReactPlayer from 'react-player'

import image1 from '../../public/images/projects/SippersCaseStudy.png'

const SippersCoffeehouse = () => {
    


    return (
        <main>
        <Layout className='p-32'>
           
    
            <Image src={image1} alt='sippers case study' className='mb-32' />

            <Link href='/projects' className='font-thin mt-96 text-3xl'>
                Back to Projects
            </Link>

        </Layout>
    </main>


   )
}

export default SippersCoffeehouse