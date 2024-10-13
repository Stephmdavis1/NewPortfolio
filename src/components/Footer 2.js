import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full mt-20 border-t border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='p-32 !py-8 flex items-center justify-between'>
        
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Built with Nextjs <span className='text-primary text-2xl px-1'>&#9825;</span>
            </div>
            
            <Link href='https://www.buymeacoffee.com/stephmdavis1' target={'_blank'}>Buy Me a Coffee</Link>
        </Layout>
    </footer>
  )
}

export default Footer