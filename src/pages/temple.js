import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

import image1 from '../../public/images/projects/templemockup.png'
import image2 from '../../public/images/projects/homepage.png'
import image3 from '../../public/images/projects/newmembers.png'
import image4 from '../../public/images/projects/classes.png'


const temple = () => {
    return (
    <main>
        <Layout className='px-16 md:px-32'>
        <AnimatedText className='mb-4 mt-6 !text-[3rem] md:!text-[5rem] text-dark dark:text-light' text='Temple Gym & Fitness' />
        <h4 className='text-center mt-4 md:mt-8 text-[14px] md:font-medium dark:text-light'>Rebranding the responsive website to help aid in more user engagement </h4>
        <div className='mt-16 md:mt-24 flex justify-center dark:text-light'>
            <div>
                <p className='text-[15px] md:text-[20px] mb-2 font-bold dark:text-primary'>Noun:</p>
                <p className='text-[12px] md:text-[14px] mb-4 '>Temple Gym and Fitness. We get results.</p>
            </div>
            <div>
                <p className='ml-4 text-[15px] md:text-[20px] mb-2 font-bold dark:text-primary'>Role:</p>
                <p className='ml-4 text-[12px] md:text-[14px] mb-4 '> Researcher / Branding / Interface Design / Interaction Design</p>
            </div>
            <div>
                <p className='ml-4 text-[15px] md:text-[20px] mb-2 font-bold dark:text-primary '>Year:</p>
                <p className='ml-4 text-[12px] md:text-[14px] mb-4 '> 2022</p>
            </div>
        </div>
           
    
            <Image src={image1} alt='temple desktop' className='mb-16 ml-0 md:ml-28' width={1000} height={1000}/>

            <div className='text-left md:ml-32 dark:text-light'>
                <h3 className='font-thin text-2xl mb-6 dark:text-primary'>The Company</h3>
                <p className='md:mr-96'>At it's core, Temple Gym and Fitness is dedicated to promote a healthy lifestyle for the community. Offering science based programs, group fitness classes, sport specific training and more, this gym is more than capable to handle all fitness ideas and needs. The company's indoor and outdoor training area provides the space needed for the development of our youth and local community.</p>
            </div>

            <div className='text-left md:ml-32 mt-12 dark:text-light'>
                <h3 className='font-thin text-2xl mb-6 dark:text-primary'>The Challenge</h3>
                <p className='md:mr-96'>Temple Gym approached me to help redesign their website, with a focus on improving the user experience and streamlining the content structure. Through the combination of wireframing, and iterative design, we were able to create a website that effectively communicated Temple's value proposition and showcased their experitse in fitness. In this case study, I'll share more about the process I went through and the results achieved.</p>
            </div>

            <div className='text-left md:ml-32 mt-12 dark:text-light'>
                <h3 className='font-thin text-2xl mb-6 dark:text-primary'>The Focus</h3>
                <p className='md:mr-96'>With these challenges in mind, I narrowed in on two questions that would guide my approah to finding a solution:</p>
                <p className='mt-6'>- Who are our interested new members?</p>
                <p className='mt-6'>- What information does a successful web app view contain?</p>
            </div>

            <div className='text-left md:ml-32 mt-12 dark:text-light'>
                <h3 className='font-thin text-2xl mb-6 dark:text-primary'>The Design Process</h3>
                <p className='md:mr-96 mb-4'>My first step was to analyze Temple's existing website to understand how their content was organized. I found that the website had too little information and was not well-organized, making it difficult for users to find the information they were looking for. To address this issue, I started by grouping the information into categories and subcategories, making it easier for users to navigate the website.</p>
                <p className='md:mr-96 mb-4'>In additino to categorising the content, I also prioritized the information on the homepage. I reduced the amount of content focusing only on the most important information. I wanted to ensure that users would immediately find the most relevant and important information when thye landed on the website. By doing this, we were able to create a more streamlined user experience that reduced cognitive overlaod and made it easier to find what they needed.</p>
                <p className='md:mr-96 mb-12'>I kicked off the wireframing process by doing a complete rebranding of the website. Starting with the homepage and then working to the other pages for the website, I made sure to keep the main questions in mind.  </p>
            </div>

            <div className='overflow-x-auto flex md:justify-center dark:text-light mt-8'>
            <Image src={image2} alt='temple home page' className='mb-16' width={390} />
            <Image src={image3} alt='temple new members page' className='mb-16 ml-6' width={390} />
            <Image src={image4} alt='temple classes page' className='mb-16 ml-6' width={390} />
            </div>

            <div className='text-left md:ml-32 mb-20 md:mb-48 dark:text-light'>
                <h3 className='font-thin text-2xl mb-6 dark:text-primary'>Conclusion</h3>
                <p className='md:mr-96'>Creating a user-centered design for Temple was both a challenging and a rewarding experience. By conducting UX research, analysing user data, and creating UX stategy, I was able to identify the key pain points and opportunities for the website. The wireframing and prototyping process allowed me to test and refine the design to ensure it was user-frieldnt and easy to use. The final UI design was modern, vibrnat, and consistent. This provided users with a seamless and enjoyable experience when discoving new experiences.</p>
            </div>

           

            <Link href='/projects' className='font-thin text-xl dark:text-light'>
                Back to Projects
            </Link>

        </Layout>
    </main>
   )
}

export default temple