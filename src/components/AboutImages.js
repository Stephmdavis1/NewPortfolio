import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

import image1 from '../../public/images/About-Images/1.jpg' 
import image2 from '../../public/images/About-Images/steph2.jpeg'
import image3 from '../../public/images/About-Images/steph4.jpeg'
import image4 from '../../public/images/About-Images/steph5.jpeg'
import image5 from '../../public/images/About-Images/steph1.jpeg'
import image6 from '../../public/images/About-Images/steph7.jpeg'
import image7 from '../../websiteimages/gallery/flex.jpeg'
import image8 from '../../websiteimages/gallery/thinking.jpeg'
import image9 from '../../websiteimages/gallery/dbswing.jpeg'


const AboutImages = () => {


    const [width, setWidth] = useState(0);
    const carousel = useRef();

    const { scrollYProgress } = useScroll({
        target: carousel,
        offset: ['start start', 'end end']
    });

    const movement = useTransform(scrollYProgress, [0,1], ['-99%', '80%']);

    useEffect(() => {
        setWidth(carousel.current.scrollwidth - carousel.current.offsetWidth);
    }, []);


  return (
    <div>
        <motion.div ref={carousel} className='h-fit overflow-x-scroll mt-0'
        >
            <motion.div className='w-[15rem] lg:w-full h-[20rem] lg:h-[25rem]  flex items-center justify-between'
            style={{ translateX: movement }}
            >
            <motion.div className='flex items-center justify-between' >
               <Image src={image8} alt='' className='w-[10rem] lg:w-[25rem] h-[15rem] lg:h-[22rem] rounded-xl mr-5 shadow-xl'/>
               <Image src={image2} alt='' className='w-[10rem] lg:w-[25rem] h-[15rem] lg:h-[22rem] rounded-xl mr-5 shadow-xl'/>
               <Image src={image3} alt='' className='w-[10rem] lg:w-[25rem] h-[15rem] lg:h-[22rem] rounded-xl mr-5 shadow-xl'/>
               <Image src={image6} alt='' className='w-[10rem] lg:w-[25rem] h-[15rem] lg:h-[22rem] rounded-xl mr-5 shadow-xl'/>
               <Image src={image5} alt='' className='w-[10rem] lg:w-[25rem] h-[15rem] lg:h-[22rem] rounded-xl mr-5 shadow-xl'/>
               <Image src={image4} alt='' className='w-[10rem] lg:w-[25rem] h-[15rem] lg:h-[22rem] rounded-xl mr-5 shadow-xl'/>
               <Image src={image7} alt='' className='w-[10rem] lg:w-[25rem] h-[15rem] lg:h-[22rem] rounded-xl mr-5 shadow-xl'/>
               <Image src={image8} alt='' className='w-[10rem] lg:w-[25rem] h-[15rem] lg:h-[22rem] rounded-xl mr-5 shadow-xl'/>
               <Image src={image9} alt='' className='w-[10rem] lg:w-[25rem] h-[15rem] lg:h-[22rem] rounded-xl mr-5 shadow-xl'/>
            </motion.div>

            </motion.div>
        </motion.div>
    
    
    
    
    </div>
  )
}

export default AboutImages