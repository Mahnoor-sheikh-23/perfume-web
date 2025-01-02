import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center mt-16 gap-4 md:gap-8 text-white bg-customGold h-auto md:h-[63px] items-center p-4'>
                <p className='font-bold text-[14px] md:text-[16px] lg:text-[20px] text-center md:text-left'>
                    <i className="fa-solid fa-envelope"></i> &nbsp; For Latest Updates Put Your Email Here And Click The Subscribe Button
                </p>
                <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto items-center'>
                    <input
                        type='text'
                        placeholder='Enter Your Email Here...'
                        className='h-[40px] w-full md:w-[300px] lg:w-[400px] p-4 focus:outline-none'
                    />
                    <button className='bg-yellow-950 h-[40px] w-full md:w-[120px] lg:w-[180px] rounded-2xl font-bold text-[16px] md:text-[20px] lg:text-[25px]'>
                        Subscribe
                    </button>
                </div>
            </div>
            <div className='bg-black text-white flex flex-wrap gap-10 md:gap-20 justify-start items-start p-8 md:p-12'>
                <div className='flex flex-col w-full md:w-auto'>
                    <h1 className='text-[20px] md:text-[24px] text-customGold mb-4 md:mb-8'>ABOUT US</h1>
                    <ul className='space-y-4 text-base md:text-xl'>
                        <li><i className="fa-solid fa-location-dot text-customGold"></i> &nbsp; P-E-C-H-S Block 6 Main Shah-Re-Faisal Karachi, Pakistan</li>
                        <li><i className="fa-solid fa-phone text-customGold"></i> &nbsp; +92 313 2686243</li>
                        <li><i className="fa-solid fa-envelope text-customGold"></i> &nbsp; info@perfumeonline.pk</li>
                    </ul>
                    <div className='flex justify-center md:justify-start gap-4 text-lg md:text-2xl mt-6'>
                        <i className="fa-brands fa-facebook-f text-customGold"></i>
                        <i className="fa-brands fa-twitter text-customGold"></i>
                        <i className="fa-brands fa-pinterest text-customGold"></i>
                        <i className="fa-brands fa-instagram text-customGold"></i>
                        <i className="fa-brands fa-youtube text-customGold"></i>
                    </div>
                </div>
                <div className='flex flex-col w-full md:w-auto'>
                    <h1 className='text-[20px] md:text-[24px] text-customGold mb-4 md:mb-8'>POPULAR CATEGORIES</h1>
                    <ul className='space-y-2 md:space-y-4 text-base md:text-xl'>
                        <li className='hover:text-customGold cursor-pointer'>Brands</li>
                        <li className='hover:text-customGold cursor-pointer'>
                            <Link href={"/collection/men"}>
                                Men Perfumes</Link>
                        </li>
                        <li className='hover:text-customGold cursor-pointer'>
                            <Link href={"/collection/women"}>
                                Women Perfumes
                            </Link></li>
                        <li className='hover:text-customGold cursor-pointer'>
                            <Link href={"/collection/unisex"}>
                                Unisex Perfumes
                            </Link></li>
                        <li className='hover:text-customGold cursor-pointer'>
                            <Link href={"/collection/giftset"}>
                                Gift Sets
                            </Link> </li>
                    </ul>
                </div>
                <div className='flex flex-col w-full md:w-auto'>
                    <h1 className='text-[20px] md:text-[24px] text-customGold mb-4 md:mb-8'>INFORMATION</h1>
                    <ul className='space-y-2 md:space-y-4 text-base md:text-xl'>
                        <li className='hover:text-customGold cursor-pointer'>
                            <Link href={"/returnPage"}>
                            Return & Refund Policy
                            </Link></li>
                        <li className='hover:text-customGold cursor-pointer'>
                            <Link href={"/contact"}>
                                Contact Us
                            </Link></li>
                    </ul>
                </div>
            </div>
            <div className='bg-black text-white h-auto md:h-[100px] w-full border-t-2 border-white text-center md:text-left'>
                <p className='p-4 md:p-9 text-[14px] md:text-[18px]'>© 2024 Perfume Online. All rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;

