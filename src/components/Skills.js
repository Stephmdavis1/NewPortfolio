import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import img1 from '../../public/images/icons/html.png'
import img2 from '../../public/images/icons/css.png'
import img3 from '../../public/images/icons/js.png'
import img4 from '../../public/images/icons/science.png'
import img5 from '../../public/images/icons/node-js.png'
import img6 from '../../public/images/icons/figma.png'
import img7 from '../../public/images/icons/next.png'
import img8 from '../../public/images/icons/tailwind.png'
import img9 from '../../public/images/icons/gatsby.png'
import img10 from '../../public/images/icons/programming.png'
import img11 from '../../public/images/icons/market-research.png'
import img12 from '../../public/images/icons/git.png'
import img13 from '../../public/images/icons/code.png'
import img14 from '../../public/images/icons/visual-studio.png'
import img15 from '../../public/images/icons/adobe.png'
import img16 from '../../public/images/icons/firebase.png'
import img17 from '../../public/images/icons/responsive-design.png'


const Skill =({ name, x, y, img }) => {
    return (
        <motion.div className='flex flex-col items-center justify-center text-xs md:text-lg lg:font-semibold text-dark  shadow-dark cursor-pointer dark:text-light absolute'
        whileHover={{ scale:1.05 }}
        initial={{x:0,y:0}}
        whileInView={{ x:x, y:y }}
        transition= {{ duration: 1.5}}
        viewport={{once:true}}
        >
          <Image src={img} alt='' className='w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem]' />
          {name}
        
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-7xl lg:text-8xl mt-16 lg:mt-22 w-full text-center'>Skills</h2>
    <h5 className='font-semibold text:lg md:mb-14 lg:text-2xl text-center mt-4 text-primary dark:text-light/50'>My Toolbox & Things I Can Do</h5>
    <div className='w-full  lg:mt-28 relative flex items-center justify-center '>
  
    <Skill name='HTML' x='-6vw' y='6vw' img={img1} />
    <Skill name='CSS' x='6vw' y='6vw' img={img2} />
    <Skill name='ReactJS' x='18vw' y='6vw' img={img4} />
    <Skill name='NodeJS' x='-30vw' y='6vw' img={img5} />
    <Skill name='NextJS' x='30vw' y='6vw' img={img7} />
    <Skill name='JavaScript' x='-18vw' y='6vw' img={img3} />
   
   
    <Skill name='Tailwind' x='-24vw' y='-7vw' img={img8} />
    <Skill name='Figma' x='-12vw' y='-7vw' img={img6} />
    <Skill name='Gatsby' x='0vw' y='-7vw' img={img9}/>
    <Skill name='Web Design' x='13vw' y='-7vw' img={img10} />
    <Skill name='Researching' x='27vw' y='-7vw' img={img11}/>

    <Skill name='Git' x='-6vw' y='-20vw' img={img12}/>
    <Skill name='VS Code' x='18vw' y='-20vw' img={img14}/>
    <Skill name='Adobe Studio' x='6vw' y='-20vw' img={img15}/>
    <Skill name='Github' x='-38vw' y='-20vw' img={img13}/>
    <Skill name='Firebase' x='30vw' y='-20vw' img={img16}/>
    <Skill name='Responsive Design' x='-22vw' y='-20vw' img={img17} />

    <div className='text-center mt-72 lg:mt-96 '>
    <h5 className='font-semibold text-lg lg:text-2xl text-primary dark:primary lg:mt-32 '>Currently Working On:</h5>
    <p className='text-sm md:text-lg text-center mt-2 lg:mt-8'>Starting to learn more backend languages starting with Python.</p>
    </div>
    
    </div>


        

   
    </>
  )
}

export default Skills