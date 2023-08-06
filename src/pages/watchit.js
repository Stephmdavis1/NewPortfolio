import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'

import image1 from '../../public/images/projects/WatchItCaseStudy.png'


const sipperscoffeehouse = () => {
    return (
    <main>
        <Layout className='p-32'>
           
    
            <Image src={image1} alt='stephanie marie fitness case study' className='mb-32' />

            <Link href='/projects' className='font-thin mt-96 text-3xl'>
                Back to Projects
            </Link>

        </Layout>
    </main>
   )
}

export default sipperscoffeehouse