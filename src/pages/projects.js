import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import project1 from '../../public/images/projects/LinkedIn2.png'
import project2 from '../../public/images/projects/portfoliobg.png'
import project3 from '../../public/images/projects/sipperscover3.png'
import project4 from '../../public/images/projects/salon99mockup.png'
import project5 from '../../public/images/projects/smf-fitness.png'
import project6 from '../../public/images/projects/watchit.png'
import project7 from '../../public/images/projects/inmotion2.png'


const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-3xl bg-white bg-opacity-50 backdrop-blur-md drop-shadow-lg shadow-2xl p-12 relative rounded-br-2xl '>
            <Link href ={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto hover:scale-105 hover:transition-all' />
            </Link>
        
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-dark'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark '>{summary}</p>
                <div className='mt-2 flex items-center dark:text-dark'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link> 
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-primary text-light p-2 px-6 text-lg font-semibold dark:bg-dark dark:text-dark'
                    >Visit Project</Link> 
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, img, link, github, type, summary }) => {
    return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl  bg-white bg-opacity-50 backdrop-blur-md drop-shadow-lg p-6 relative shadow-2xl rounded-br-2xl'>
       


        <Link href ={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto hover:scale-105 hover:transition-all' />
            </Link>
            
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-light font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-dark'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-sm text-dark '>{summary}</p>
                <div className='mt-2 w-full flex items-center justify-between dark:text-dark'>
                <Link href={link} target='_blank'
                    className='text-lg font-semibold underline'
                    >Visit </Link> 
                    <Link href={github} target='_blank' className='w-8'><GithubIcon /></Link> 
                    
                </div>
            </div>
    </article>
    )
}

const CaseStudy = ({ title, img, link, type, summary }) => {
    return (

    <article className='w-full flex flex-col items-center justify-center rounded-2xl  bg-white bg-opacity-50 backdrop-blur-md drop-shadow-lg p-6 relative shadow-2xl rounded-br-2xl'>
       


        <Link href ={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto hover:scale-105 hover:transition-all' />
            </Link>
            
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-light font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-dark'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-sm text-dark '>{summary}</p>
                <div className='w-full mt-2 flex items-start justify-between dark:text-dark'>
                <Link href={link} target='_blank'
                    className='text-lg font-semibold underline'
                    >CaseStudy </Link> 
                </div>
            </div>
    </article>
    )
}


const projects = () => {
  return (
    <>
    <Head>
        <title>Stephanie | Projects Page </title>
        <meta name='description' content='any description' />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='p-32'>
            <AnimatedText className=' mb-16 text-2xl'  text='My Work.' />

            <div className='grid grid-cols-12 gap-24 gap-y-32'>
                <div className='col-span-6'>
                    <Project 
                    title='LinkedIn Clone' 
                    img={project1}
                    summary='A feature-rich LinkedIn App using React, Tailwind CSS, Firebase Firestore, React Router and Redux. 
                    It uses email and password based login credentials as well as realtime database hosting using Firebase Firestore. You can easily create a post and upload it using a live server to the app.' 
                    link='https://linkedin-clone-e5ade.web.app' 
                    type='Featured Project' 
                    github='https://github.com/Stephmdavis1/LinkedIn-clone.git'
                    />
                </div>

                <div className='col-span-6'>
                    <Project 
                    title='My Portfolio Vol. 1' 
                    img={project2}
                    summary='This was the first version of my portfolio. It was created using React JS, Material UI, Styled-components and it is completely mobile responsive. I enjoyed creating this version but I was still very new to using React and other frameworks.' 
                    link='https://stephmarie.com' 
                    type='Featured Project' 
                    github='https://github.com/Stephmdavis1/Portfolio-v1.git'
                    />
                </div>



                <div className='col-span-6'>
                <Project 
                    title='Salon 99' 
                    img={project4} 
                    summary=''
                    link='https://stephmdavis1.github.io/Salon-99/' 
                    type='Featured Project' 
                    github='https://github.com/Stephmdavis1/Salon-99.git'
                    />
                </div>

                <div className='col-span-6'>
                <CaseStudy 
                    title='Sippers Coffeehouse' 
                    img={project3} 
                    summary='We believe in coffee that tastes incredible.' 
                    link=
                    '/sipperscoffeehouse'
                    type='Featured Project' 
                    />
                </div>

                <div className='col-span-6'>
                <CaseStudy 
                    title='Stephanie Marie Fitness App' 
                    img={project5} 
                    summary='A personal training app that empowers users to reach their fitness goals.' 
                    link=
                    '/stephaniemariefitness'
                    type='Featured Project' 
                    />
                </div>

                <div className='col-span-6'>
                <CaseStudy 
                    title='Watch It' 
                    img={project6} 
                    summary='A smart watch task app that focuses on helping you to complete your tasks.' 
                    link=
                    '/watchit'
                    type='Featured Project' 
                    />
                </div>

                <div className='col-span-6'>
                <CaseStudy 
                    title='In Motion' 
                    img={project7} 
                    summary='Making an impact on the world through fitness' 
                    link=
                    '/inmotion'
                    type='Featured Project' 
                    />
                </div>

               
            </div>

        </Layout>
    </main>

  </>
  )
}

export default projects