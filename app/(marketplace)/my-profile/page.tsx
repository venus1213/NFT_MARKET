"use client";

import { Button } from '@/components/ui/button';
import { FormItem } from '@/components/ui/form';
import HeaderSection from '@/components/ui/header-section';
import { Copy, Heart } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'


const list = [
  {"name": "Collected"},
  {"name": "Created"},
  {"name": "Favorited"},
  {"name": "Activity"}
]

const MyProfilePage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
      <div>
      <div>
        <HeaderSection 
        title="My Profile" 
        category='Home /'
        subtitle="Profile" />
      </div>
      <div className='flex flex-col md:flex-row gap-10  px-5 md:px-10'>

      <div className='grid grid-col -mt-10 h-1/2'>
          <Image 
          className='rounded-full'
          src="/assets/icons/cult-bears.png"
          alt="Profile"
          width={80}
          height={80}
          />
          <div className='flex justify-between'>
          <p className='mt-5'>John Doe</p>
          <Image 
          className='mt-4 cursor-pointer'
          src="/assets/icons/three-dots.svg"
          alt="Edit Profile"
          width={20}
          height={20}
          />
          </div>
          
          <div className='flex gap-2 text-slate-400 text-sm'>
            <p>0x9b4...6548f</p>
            <Copy size="16" className='mt-1' />
          </div>
          <p className='text-sm text-slate-400 mt-5 mb-5'>Creator of several famous collections. Now working on something new...</p>
          <div className=' grid grid-cols-3 pt-5 pb-5 border-y-slate-100 border-y-[2px]'>

            <div className='flex flex-col text-center text-sm '>
              <p className='font-semibold'>96</p>
              <p className='text-slate-400'>Followers</p>
              </div>

              <div className='flex flex-col text-center text-sm '>
              <p className='font-semibold'>247</p>
              <p className='text-slate-400'>Following</p>
              </div>

              <div className='flex flex-col text-center text-sm '>
              <p className='font-semibold'>1,542</p>
              <p className='text-slate-400'>Items</p>
              </div>

          </div>
      </div>

      <div>

      

        <div className='grid grid-cols-4 mt-5 md:mt-10 px-5'>

       {/*

          {isActive? (
          <p className='underline cursor-pointer text-purple font-bold'>Collected</p>
        ): (
          <p 
          onClick={() => setIsActive(true)}
          className='font-semibold cursor-pointer'>Collected</p>
        )}

       */} 

    


          <p className='underline cursor-pointer text-purple font-bold'>Collected</p>
          <p className='font-semibold'>Created</p>
          <p className='font-semibold'>Favorited</p>
          <p className='font-semibold'>Activity</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 mt-5 md:mt-10 gap-6 px-5'>

        <div className='flex flex-col justify-center bg-[#222222] rounded cursor-pointer'>

        <div className='p-5 justify-center'>
<Image 
className='rounded hover:shadow-2xl '
src="/assets/bear.gif"
alt="NFT Image"
width={300}
height={300}
unoptimized
/>
        </div>

       <div className='flex justify-between px-5'>
<p className='text-base font-semibold text-white'>Cult Bears DAO</p>
<Heart className="text-white" size="18" />
       </div>

      <div className='mt-5 px-5'>
<hr />

<div className='flex justify-between'>
    <div>
<p className='mt-3 text-sm font-light text-slate-400 flex'>Reserve Price</p>
<p className='flex text-sm text-white mb-4 mt-2'>$9.99</p>
</div>
<div>
<Image 
className='mt-6'
src="/assets/icons/matic.webp"
alt="network"
width={24}
height={24}
/>
</div>
</div>

     </div>

        </div>

        <div className='flex flex-col justify-center bg-[#222222] rounded cursor-pointer'>

        <div className='p-5 justify-center'>
<Image 
className='rounded hover:shadow-2xl '
src="/assets/bear.gif"
alt="NFT Image"
width={300}
height={300}
unoptimized
/>
        </div>

       <div className='flex justify-between px-5'>
<p className='text-base font-semibold text-white'>Cult Bears DAO</p>
<Heart className="text-white" size="18" />
       </div>

      <div className='mt-5 px-5'>
<hr />

<div className='flex justify-between'>
    <div>
<p className='mt-3 text-sm font-light text-slate-400 flex'>Reserve Price</p>
<p className='flex text-sm text-white mb-4 mt-2'>$9.99</p>
</div>
<div>
<Image 
className='mt-6'
src="/assets/icons/matic.webp"
alt="network"
width={24}
height={24}
/>
</div>
</div>

     </div>

        </div>

        <div className='flex flex-col justify-center bg-[#222222] rounded cursor-pointer'>

        <div className='p-5 justify-center'>
<Image 
className='rounded hover:shadow-2xl '
src="/assets/bear.gif"
alt="NFT Image"
width={300}
height={300}
unoptimized
/>
        </div>

       <div className='flex justify-between px-5'>
<p className='text-base font-semibold text-white'>Cult Bears DAO</p>
<Heart className="text-white" size="18" />
       </div>

      <div className='mt-5 px-5'>
<hr />

<div className='flex justify-between'>
    <div>
<p className='mt-3 text-sm font-light text-slate-400 flex'>Reserve Price</p>
<p className='flex text-sm text-white mb-4 mt-2'>$9.99</p>
</div>
<div>
<Image 
className='mt-6'
src="/assets/icons/matic.webp"
alt="network"
width={24}
height={24}
/>
</div>
</div>

     </div>

        </div>

        <div className='flex flex-col justify-center bg-[#222222] rounded cursor-pointer'>

        <div className='p-5 justify-center'>
<Image 
className='rounded hover:shadow-2xl '
src="/assets/bear.gif"
alt="NFT Image"
width={300}
height={300}
unoptimized
/>
        </div>

       <div className='flex justify-between px-5'>
<p className='text-base font-semibold text-white'>Cult Bears DAO</p>
<Heart className="text-white" size="18" />
       </div>

      <div className='mt-5 px-5'>
<hr />

<div className='flex justify-between'>
    <div>
<p className='mt-3 text-sm font-light text-slate-400 flex'>Reserve Price</p>
<p className='flex text-sm text-white mb-4 mt-2'>$9.99</p>
</div>
<div>
<Image 
className='mt-6'
src="/assets/icons/matic.webp"
alt="network"
width={24}
height={24}
/>
</div>
</div>

     </div>

        </div>

        </div>

        <div className="flex justify-center mt-10">
      <Button
      className="bg-purple hover:bg-purple text-white rounded-full px-8 py-6 text-lg font-light"
      >
      Load More
      </Button>
        </div>

      </div>

      </div>
      </div>
    
  )
}

export default MyProfilePage;