import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router';
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className='' }) => {
    const router = useRouter();
    return (
            <Link href={href} className={`${className} relative group`}>
                {title}

                <span className={`h-[1px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                 ${router.asPath === href ? 'w-full' : 'w-0'}
                 dark:bg-primary
                 `}>&nbsp;</span>
            </Link>
    )    
}


const NavBar = () => {


    const[mode, setMode] = useThemeSwitcher();

  return (
    <header className='w-full px-4 pl-44 md:px-10 lg:px-32 md:py-8 pt-0 text-xs md:text-lg font-medium flex items-center justify-between dark:text-light'>
        <nav>
            <CustomLink href='/' title='Home' className='mr-2 sm:mr-4' />
            <CustomLink href='/about' title="About" className='mx-2 sm:mx-4' />
            <CustomLink href='/projects2' title='Projects' className='mx-2 sm:mx-4'/>
            <CustomLink href='/sipperscoffeehouse2' title='Sippers Coffeehouse Case Study' className='ml-4 hidden' />
            <CustomLink href='/stephaniemariefitness' title='Stephanie Marie Fitness App Case Study' className='ml-4 hidden' />
            <CustomLink href='/watchit' title='Watch It Case Study' className='ml-4 hidden' />
            <CustomLink href='/inmotion' title='In Motion Case Study' className='ml-4 hidden' />

        </nav>



       
        <nav className='flex items-center justify-center flex-wrap mr-10 md:mr-0 py-6'>

            {/* <motion.a href='https://twitter.com' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-5 md:w-6 mr-2 md:mr-3'
            ><GithubIcon /></motion.a> */}

            <motion.a href='https://www.linkedin.com/in/stephmdavis1/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-4 m-1 md:w-6 mr-1 md:mr-3 hidden md:block'
            ><LinkedInIcon /></motion.a>

            <motion.a href='https://pin.it/5o2TM65' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-4 m-1 md:w-6 mr-1 md:mr-3 hidden md:block'
            ><PinterestIcon /></motion.a>

            <motion.a href='https://dribbble.com/stephmdavis' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-4 m-1 md:w-6 mr-1 md:mr-3 hidden md:block'
            ><DribbbleIcon /></motion.a>
        

        <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-1 flex items-center justify-center rounded-full p-1 w-6 md:w-8  ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark' }`}>
            {
                mode==='dark' ? 
                <SunIcon className={'fill-dark'} /> :
                <MoonIcon className={'fill-dark'} />
            }
        </button>
        
        </nav>



        <div className='absolute left-[10%] md:left-[50%] top-3 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  );
};

export default NavBar;