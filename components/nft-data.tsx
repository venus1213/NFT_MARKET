import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

const NFTData = () => {
  return (
    <div className='grid md:grid-cols-2 gap-8  bg-black p-10 md:px-20'>
        <div>
            <h2 className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl space-y-5 font-extrabold text-white'>We have the best NFT <span className='bg-clip-text text-transparent bg-gradient-to-r from-lightPink to-purple font-bold'>Digital Artists</span>
            </h2>
            <p className='text-sm font-semibold text-slate-400 mt-4 md:mt-6 md:pl-10'>
                The World's Largest Digital Marketplace for Crypto Collectibles  and Non-Fungible Tokens
            </p>
            <div className='grid grid-cols-3 pt-10'>
            <div 
            className=''>
            <h3 className=' text-pink'>
            11,593
            </h3>
            <p className='text-white'>
            Collectibles
            </p>
            </div>
            <div 
            className=''>
            <h3 className=' text-purple'>
            1,200
            </h3>
            <p className='text-white'>
            Auctions
            </p>

            <div className='text-white md:hidden'>
                <Button
                className='rounded-full mt-10 text-purple hover:text-purple border-[1.5px] border-purple'
                >
                    Create
                </Button>
            </div>
            </div>
           
            <div 
            className=''>
            <h3 className=' text-[#C636F9]'>
            5,987
            </h3>
            <p className='text-white'>
            Artists
            </p>
            </div>
            <div className=' invisible text-white md:visible'>
                <Button
                className='border-[1.5px] border-pink rounded-full mt-10 text-pink hover:text-pink'
                >
                    Create
                </Button>
            </div>
           
        </div>
        </div>

        <div className='text-white flex justify-center -mt-10 mb-5 md:mt-0 md:mb-0'>
            <Image
            className='rounded-xl'
            src="/assets/cb12.webp"
            alt="NFT"
            width={300}
            height={300}
            />
        </div>
    </div>
  )
}

export default NFTData;