import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import ProjectList from '@/components/projectlist'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
    featuredProjects, WebProjects, MobileProjects, UXCaseStudies, AnimeProjects
} from '../components/projectsdata';
import bg1 from '../../websiteimages/woodbg.jpg'
import Footer from '@/components/Footer'


export const projects2 = ({type, title, summary, img, link, github, casestudy}) => {
    
    
    const [isClicked, setClicked] = useState(false)


  const colors = ["#CCF5AC", "#F9F5E3", "#EF798A", "#D14081", '#7E2E84'] 
  // ['#F2F6D0', '#D0E1D4', '#D9D2B6', '#E4BE9E', '#71697A']
  
  const bgColor = ['#f5f5f5']
    
    
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web Projects',
        },
        {
            id: 'mobile',
            title: 'Mobile Projects',
        },
        {
            id: 'ux',
            title: 'UX Case Studies',
        },
        
    ];

    useEffect(() => {
        switch (selected) {
            case 'featured':
                setData(featuredProjects);
                break;
            case 'web':
                setData(WebProjects);
                break;
            case 'mobile':
                setData(MobileProjects);
                break;
            case 'ux':
                setData(UXCaseStudies);
                break;
            default:
                setData(featuredProjects);
        }

}, [selected])

    return (
        <>
        <Head>
            <title>Stephanie | Projects Page </title>
            <meta name='Projects' content='Here is a collection of the projects I have completed. These include web based projects, case studies and a few others.' />
        </Head>
        <div className='w-full h-full mb-[30rem]'>
        <main className='w-full flex flex-col items-center mb-12 justify-center dark:text-light'
        >




                    {/* start of body */}
                    <Layout className='mb-4'>
                        <AnimatedText className='mb-4 md:m-10 mt-8 text-2xl'  text='My Work.' />
                            <p className='text-md font-thin text-center mb-4'>Click or drag the tabs to change the projects below</p>
                            <ul className='list-none flex items-center justify-center '

                            >
                            {list.map((item) => (
                                < ProjectList
                                title={item.title}
                                active={selected === item.id}
                                setSelected={setSelected}
                                id={item.id} 
                                summary= {item.summary}/>
                            
                            ))}
                        </ul>
                    <div className='w-full h-[80rem] flex flex-wrap justify-center rounded '>



                    <header className='w-full flex flex-wrap justify-center max-h-max bg-fixed my-2 bg-no-repeat bg-cover bg-wood1'>
                        
                    
                        {/* Projects */}
                        {data.map((d) => (
                    
                            <article>
                                <div className="w-[24rem] h-[35rem] mt-10 mx-[20px] mb-2 text-dark shadow-md flex flex-wrap items-center justify-center rounded-lg transition-all ease-in-out cursor-pointer bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 ">
                            
                                    <Image className='w-[25rem] h-[18rem] self-start object-cover hover:opacity-60 drop-shadow-md rounded-t-lg ' src={d.img} alt="project image"  />
                                    
                                    <a href={d.link} className='font-bold text-xl text-center bottom:0  mt-3' target='_blank'>{d.title}</a>

                                    <p className='text-center text-sm mx-2 my-2 text-dark'>{d.summary}</p>

                                    <div className='flex items-end justify-center w-full m-3 mt-4 mb-6'>
                                        <div className=' bg-dark text-light text-sm border rounded-lg px-1 py-2 text-center mr-4 w-24 shadow-md border-none'
                                        >
                                            <a href={d.github} target='_blank'>Github</a>
                                        </div>
                                        <div className=' bg-dark text-light text-sm border rounded-lg px-1 py-2 text-center w-24 shadow-md border-none'>
                                            <a href={d.link}  target='_blank'>Link</a>
                                        </div>
                                        <div className=' bg-dark text-light text-sm border rounded-lg px-1 py-2  text-center ml-4 w-24 shadow-md border-none'>
                                            <a href={d.casestudy}  target='_blank'>Casestudy</a>
                                        </div>
                                    </div>
                                </div> 
                            </article>
                    ))}
                    </header>
                </div>
            
        </Layout>
        </main>
    </div>
        </>
);
}

export default projects2

