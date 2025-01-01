import React from 'react';
import "../globals.css";
import Image from 'next/image';
import Link from 'next/link';

function ImageSection() {
  return (
    <div id='something'>
      <div>
        <Link href={"/collection/all"}>
          <Image alt=" " src='https://perfumeonline.pk/cdn/shop/files/Banner_1920x.webp?v=1704452333' width={1000} height={1000} className='w-screen h-screen object-fill object-center overflow-hidden aspect-auto z-0  ' />
        </Link>
      </div>
      <div className='mt-10 mb-10 text-4xl flex justify-center'>
        <span className='font-bold underline'>
          FEATURED COLLECTIONS
        </span>
      </div>
      <div className='flex md:flex-row flex-col space-y-5 md:space-y-0 justify-between space-x-8 ml-9 mr-9'>
        <div className='relative z-10 group'>
          <Link href={"/collection/creed"}>
            <Image
              width={900}
              height={900}
              src='https://perfumeonline.pk/cdn/shop/files/Creed_f173c277-457d-4e0e-8399-cbefcb2d13c9.webp?v=1709038482'
              alt='Azzaro Banner'
              className='w-full h-auto cursor-pointer'
            />
          </Link>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100/80 h-16 w-full text-center transition-all duration-500 ease-in-out group-hover:top-full group-hover:-translate-y-full'>
            <p className='bg-transparent font-semibold text-lg'>CREED <br /> 15 items</p>
          </div>
        </div>
        <div className='relative z-10 group'>
          <Link href={"/collection/carolina"}>
            <Image
              width={900}
              height={900}
              src='https://perfumeonline.pk/cdn/shop/files/Carolina-Photoroom.webp?v=1709038338'
              alt='Azzaro Banner'
              className='w-full h-auto cursor-pointer'
            />
          </Link>

          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100/80 h-16 w-full text-center transition-all duration-500 ease-in-out group-hover:top-full group-hover:-translate-y-full'>
            <p className='bg-transparent font-semibold text-lg'>CAROLINA HERRERA <br /> 27 items</p>
          </div>
        </div>
        <div className='relative z-10 group'>
          <Link href={"/collection/cartier"}>
            <Image
              width={900}
              height={900}
              src='https://perfumeonline.pk/cdn/shop/files/Cartier-Photoroom.webp?v=1709038400'
              alt='Azzaro Banner'
              className='w-full h-auto cursor-pointer'
            />
          </Link>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100/80 h-16 w-full text-center transition-all duration-500 ease-in-out group-hover:top-full group-hover:-translate-y-full'>
            <p className='bg-transparent font-semibold text-lg'>CARTIER<br /> 22 items</p>
          </div>
        </div>
        <div className='relative z-10 group'>
          <Link href={"/collection/jeanpaul"}>
            <Image
              width={900}
              height={900}
              src='https://perfumeonline.pk/cdn/shop/files/Jean_Paul.webp?v=1709038451'
              alt='Azzaro Banner'
              className='w-full h-auto cursor-pointer'
            />
          </Link>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100/80 h-16 w-full text-center transition-all duration-500 ease-in-out group-hover:top-full group-hover:-translate-y-full'>
            <p className='bg-transparent font-semibold text-lg'>JEAN PAUL GAULTIER  <br /> 30 items</p>
          </div>
        </div>
      </div>

      <div className=' m-9'>
        <Link href={"/collection/chanel"}>

          <Image width={900}
            height={900} alt="chanel" src='https://perfumeonline.pk/cdn/shop/files/Chanel_1920x.webp?v=1709038549' className='w-screen h-[100vh] object-fill' />
        </Link>
      </div>

      <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between space-x-8 ml-9 mr-9 mb-9'>
        <div>
          <Link href={"/collection/davidoff"}>  
          <Image alt="" width={500} height={500} src='https://perfumeonline.pk/cdn/shop/files/DavidOff_400x.webp?v=1709038583' />
          </Link>
        </div>
        <div>
          <Link href={"/collection/pacorabanne"}> 
          <Image alt="" width={500} height={500} src='https://perfumeonline.pk/cdn/shop/files/Paco_Rabanne_400x.webp?v=1709038625' />
          </Link>
        </div>
        <div>
          <Link href={"/collection/boss"}> 
          <Image alt="" width={500} height={500} src='https://perfumeonline.pk/cdn/shop/files/Hugo_Boss_440d24ad-7e9c-467a-b122-7dc3c277c089_400x.webp?v=1709038666' />
          </Link>
        </div>
        <div>
          <Link href={"/collection/klein"}>  
          <Image alt="" width={500} height={500}
            src='https://perfumeonline.pk/cdn/shop/files/Calvin_Klein_400x.webp?v=1709038716'
          />
          </Link>
        </div>
      </div>

      <div className='flex  justify-between flex-col md:flex-row space-y-6 md:space-y-0  space-x-8 ml-9 mr-9 mb-9 '>
        <div>
          <Link href={"/collection/versace"}>
            <Image className='w-screen h-[100vh] object-fill'  alt="" width={700} height={700} src="https://perfumeonline.pk/cdn/shop/files/Versace_d745d576-1ec9-4917-b297-c8316ff29379_800x.webp?v=1709038847" />
          </Link>
        </div>
        <div>
          <Link href={"/collection/christian"}>
          <Image  className='w-screen h-[100vh] object-fill' alt="" width={700} height={700} src="https://perfumeonline.pk/cdn/shop/files/Christian_Dior_95b272eb-fbce-4c45-b806-be32df01ab79_800x.webp?v=1709038905" />
          </Link>
        </div>
      </div>





    </div>
  )
}


export default ImageSection
