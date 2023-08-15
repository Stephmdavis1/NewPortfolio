import React from 'react'

import { useInView, animated } from 'framer-motion'
import ReactPlayer from 'react-player'

export const sipperscoffeehouse2 = () => {
  return (
    <div>sipperscoffeehouse2
    <Layout>
            <div className='w-full justify-center h-screen bg-fixed bg-no-repeat bg-cover bg-coffeeshop '>
            </div>

                <div className='bg-dark'>
                    <div>
                        <AnimatedText className='mb-4 md:m-10 mt-8 !text-[30rem] text-light' text='Sippers' />
                        
                        <a href="/projects" className='ml-[5rem] uppercase text-[.7rem] text-white'>back to all projects</a>
                                <div className='pb-16'>
                                        <h4 className='translate-x-[50%] translate-y-[140%] text-white mb-2'>Sippers Coffeehouse</h4>
                                        <p className='translate-x-[50%] translate-y-[140%] text-white pr-2 text-[14px] mb-2 '>Noun:  Sippers Coffeehouse is a local coffee shop that believes in coffee that tastes incredible.</p>
                                        <p className='translate-x-[50%] translate-y-[140%] text-white pr-2 text-[14px] mb-2 '>Role: Researcher / Branding / Interface Design / Interaction Design</p>
                                        <p className='translate-x-[50%] translate-y-[140%] text-white pr-2 text-[14px]  mb-2 '>Year:  2022</p>
                                </div>
                    </div>
                </div>

                <div>
                    <ReactPlayer
                    className='react-player !h-1/5'
                    url='/images/videos/beans.mp4'
                    width='100%'
                    controls={false}
                    loop={true}

                    />
                </div>   
        </Layout>
        </div>
  )
}
