import React from 'react'
import AnimatedText from './AnimatedText'

import image1 from '../../websiteimages/gallery/titan.jpeg' 
import image2 from '../../websiteimages/gallery/epcot.jpeg'
import image3 from '../../websiteimages/gallery/sunset.jpeg'
import image4 from '../../websiteimages/gallery/plantstore.jpeg'
import image5 from '../../websiteimages/gallery/onthetown.jpeg'
import image6 from '../../websiteimages/gallery/Ace.jpeg'
import image7 from '../../websiteimages/gallery/candle.jpeg'
import image8 from '../../websiteimages/gallery/babygeese.jpeg'
import image9 from '../../websiteimages/gallery/islandtrail.jpeg'
import image10 from '../../websiteimages/gallery/plantstore2.jpeg'
import image11 from '../../websiteimages/gallery/castle.jpeg'
import image12 from '../../websiteimages/gallery/Sunrise.jpeg'


import Image from 'next/image'
import { motion } from 'framer-motion'

const Images = () => {
  return (
    <div>
        <AnimatedText text='Outside of Coding.' className='!text-left mt-16 md:mt-32 mb-8 ' />
        <h4 className='mb-12 text-sm md:text-lg'>When I'm not coding, I like to spend as much time as I can away from my laptop. Most of my time is spent in the gym, going to plant shops and eating ice cream. Here is a collection of pics I have taken in the past few months. </h4>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4"
        transition={{ type: "spring", duration: 2, bounce: 0.6 }}
        >
            <div class="grid gap-4">
            <div>
                <Image class="h-96 max-w-full rounded-lg hover:scale-105" src={image1} alt="" />
            </div>
            <div>
            <Image class="96 max-w-full rounded-lg hover:scale-105" src={image2} alt="" />
        </div>
        <div>
            <Image class="h-96 max-w-full rounded-lg hover:scale-105" src={image3} alt="" />
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <Image class="h-96 max-w-full rounded-lg hover:scale-105" src={image4} alt="" />
        </div>
        <div>
            <Image class="h-96 max-w-full rounded-lg hover:scale-105" src={image12} alt=""/>
        </div>
        <div>
            <Image class="h-96 max-w-full rounded-lg hover:scale-105 top-0" src={image6} alt="" />
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <Image class="h-h-[30rem] max-w-full rounded-lg hover:scale-105" src={image7} alt=""/>
        </div>
        <div>
            <Image class="h-96 max-w-full rounded-lg hover:scale-105" src={image8} alt="" />
        </div>
        <div>
            <Image class="h-96 max-w-full rounded-lg hover:scale-105" src={image9} alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <Image class="h-96 max-w-full rounded-lg hover:scale-105" src={image10} alt=""/>
        </div>
        <div>
            <Image class="h-96 max-w-full rounded-lg hover:scale-105" src={image11} alt=""/>
        </div>
        <div>
            <Image class="h-96 max-w-full rounded-lg hover:scale-105" src={image5} alt=""/>
        </div>
    </div>
</div>

    </div>
  )
}

export default Images