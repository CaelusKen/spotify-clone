"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import CustomButton from './custom-button';

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();

    const handleLogout = () => {
        //Handle Logout Account
    }

  return (
    <header className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
        <section className='w-full mb-4 flex items-center justify-between'>
            <div className='hidden md:flex gap-x-2 items-center'>
                <button className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition' onClick={() => router.back()}>
                    <RxCaretLeft className='text-white' size={26} />
                </button>
                <button className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition' onClick={() => router.forward()}>
                    <RxCaretRight className='text-white' size={26} />
                </button>
            </div>
            <div className='flex md:hidden gap-x-2 items-center'>
                <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                    <HiHome className='text-black' size={26}/>
                </button>
                <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                    <BiSearch className='text-black' size={26}/>
                </button>
            </div>
            <div className='flex justify-between items-center gap-x-4'>
                <>
                    <div>
                        <CustomButton onClick={() => {}} className='bg-transparent text-neutral-300 font-medium'>
                            Signup
                        </CustomButton>
                    </div>
                    <div>
                        <CustomButton onClick={() => {}} className='bg-white px-6 py-2'>
                            Log In
                        </CustomButton>
                    </div>
                </>
            </div>
        </section>
        {children}
    </header>
  )
}

export default Header