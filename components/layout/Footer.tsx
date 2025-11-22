import Link from 'next/link';
import React from 'react'

export default function Footer() {
    const current_year = new Date().getFullYear();
  return (
    <div className='w-full bg-linear-to-br from-purple-800 via-black to-purple-800  p-8 text-white
            shadow-2xl hover:shadow-purple-500/50
            transition-all duration-500 hover:scale-105
            backdrop-blur-xl border border-white/10 '>
        <div className='text-center py-4'>
            <Link href='' target='_blank' className='text-purple-800 btn btn-link'>Privacy</Link>
            <span> | </span>
            <Link href='' target='_blank' className='text-purple-800 btn btn-link'>Terms</Link>
            <span> | </span>
            <Link href='mailto:Roads<yostingabriel036@gmail.com>' className='text-purple-800 btn btn-link'>Contact</Link>
            <p className='text-blue-900 text-ms'>Copyright &copy; {current_year}, GamingStore LLC, All Rights Reserved</p>


        </div>
    </div>
  )
}
