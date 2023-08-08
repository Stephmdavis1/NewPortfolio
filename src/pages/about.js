import AboutImages from '@/components/AboutImages'
import AnimatedText from '@/components/AnimatedText'
import Images from '@/components/Images'
import Layout from '@/components/Layout'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Skills from '../components/Skills'



const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration:3000 })
  const isInView = useInView(ref, {once: true});


  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change',(latest) =>{
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent =latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
    <Head>
        <title>Stephanie | About Page </title>
        <meta name='description' content='any description' />
    </Head>
    <main className='flex w-full flex-col items-center justify-center dark:text-light overflow-hidden'>
   
    <Layout className='px-10'>

    <AboutImages />

    <AnimatedText text='About me.' className='!text-left mt-8 mb-8 lg:mt-16 lg:mb-16' />
    <div className='grid w-full grid-cols-8'>
      <div className='col-span-5 flex flex-col items-start justify-start'>
        <h2 className='mb-4 text-sm md:text-md lg:text-lg font-semibold text-gray-400 dark:text-primary'>I'm a developer, designer and physiologist who has been building for the web in some capacity for almost 2 years. I specialize in bringing the technical and visual aspects of digital products to life without sacrificing creativity.</h2>
        {/* <p className='font-medium my-4'>As a first generation JAmerican (Jamaican - American), I was raised to always value my relationships, to relentlessly pursue my dreams and desires, and to always be the hardest worker in the room. This helped me to become the person I am today. One that is terribly competitive, passionately addicted to learning, and always willing to solve any problem I can to help others.</p> */}
        <p className='font-medium text-sm md:text-md lg:text-lg '>As an exerise physiologist turned web designer, I bring a unique perspective to my work. With a strong understanding of user behavior and a keen eye for detail, I can design and create products that meet users exact needs while also delivering an exceptional experience. My background in understanding human biomechanics and physiology has taught me the importance of empathy, communication, and problem solving. All of which are valuable skills in the field of user experience and design.</p>
        <p></p>
        <p className='font-medium text-sm md:text-md lg:text-lg'>I'm happiest when I'm creating, learning and thinking of ways to help make things better. I have a bachelors in Exercise Science, a Certificate of Web Development and a Google Cert in UX Design. When I'm not behind a computer, you can find me in the gym, trying to buy a new plant for my house (#plantmom) or living it up outdoors! </p>
          {/* I have always had a fascination for web design. I remember as a young kid memorizing hex color codes for my next homepage background and thinking scrolling marquees were the hot new thing. I would sit around for hours creating new single page 'index.html' pages. It has been a hard journey teaching myself to code btu I have enjoyed it so much.  </p> */}
      </div>

{/* 
    <div className='col-span-3 w-full h-[35rem] top-0 relative'>
      <div className='absolute inset-x-0 top-0'/>
      <Image src={profilePic} alt='Stephanie' className='absolute inset-x-0 w-full h-max top-0' />
    </div> */}

  <div className='col-span-3 flex flex-col items-end justify-start'>

    <div className='flex flex-col items-end justify-center mb-5'>
      <span className='inline-block text-3xl lg:text-5xl font-bold dark:text-primary'>
      <AnimatedNumbers value={2} />+
      </span>
      <h3 className='text-xs md:text-md lg:text-lg font-medium items-end capitalize text-dark/75 dark:text-light/75'>Years Front End Experience</h3>
    </div>

    <div className='flex flex-col items-end justify-center my-5'>
      <span className='inline-block text-3xl lg:text-5xl font-bold dark:text-primary'>
      <AnimatedNumbers value={2} />+
      </span>
      <h3 className='text-xs md:text-md lg:text-lg font-medium capitalize text-dark/75 dark:text-light/75'>Year UX Experience</h3>
    </div>

    <div className='flex flex-col items-end justify-center mt-5'>
      <span className='inline-block text-3xl lg:text-5xl font-bold dark:text-primary'>
      <AnimatedNumbers value={15} />+
      </span>
      <h2 className='text-xs md:text-md lg:text-lg font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
    </div>

    

    
    </div>

  </div>
  
  
   <Skills />
   <Images />
    </Layout> 
    </main>
    </>
  )
}

export default about