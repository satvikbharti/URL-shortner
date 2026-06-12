import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 px-4 shadow-lg'>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between text-white'>
        <Link href='/' className='text-2xl font-bold'>BitLinks</Link>

        <ul className='flex items-center gap-6 text-sm font-medium'>
          <li>
            <Link href='/' className='transition hover:text-purple-200'>Home</Link>
          </li>
          <li>
            <Link href='/about' className='transition hover:text-purple-200'>About</Link>
          </li>
          <li>
            <Link href='/shorten' className='transition hover:text-purple-200'>Shorten</Link>
          </li>
          <li>
            <Link href='/contact' className='transition hover:text-purple-200'>Contact</Link>
          </li>
          <li className='flex items-center gap-3'>
            <Link href='/shorten' className='rounded-full bg-purple-500 px-4 py-2 text-white shadow-lg transition hover:bg-purple-600'>Try Now</Link>
            <a href='https://github.com/satvikbharti3108' target='_blank' rel='noreferrer' className='rounded-full border border-white/20 px-4 py-2 text-white transition hover:bg-white/10'>GitHub</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
