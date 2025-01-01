import React from 'react'
import Navbar from './components/NavBar'
import Footer from './components/Footer';
import Link from 'next/link';

const notFound = () => {
    return (
        <div>
            <Navbar />
            <div className='h-[300px]  flex flex-col justify-center items-center text-center space-y-7 '>
                <p className='text-5xl'>404 Page Not Found</p>
                <div className='flex'>
                    <p className='text-xl'>The page you were looking for does not exist.</p> &nbsp;
                    <span className='text-xl hover:text-customGold'>
                        <Link href={"/"}>
                        Click here
                        </Link> </span>&nbsp;
                    <span className='text-xl'> to continue shopping.</span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default notFound
