import { ChevronLeftCircle, ChevronRightCircle, Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface ExploreNFTsProps {
    className?: string;
}

const ExploreNFTs: React.FC<ExploreNFTsProps> = ({
    className
}) => {
  return (

    <div className='flex flex-col bg-slate-100'>
    
    <div className={`grid grid-cols-2 md:grid-cols-4  gap-6 justify-center pb-10 ${className}`}>

        <div className='flex flex-col justify-center bg-white rounded cursor-pointer hover:shadow-2xl'>

       <div className='p-5 flex justify-center'>
<Image 
className='rounded'
src="/assets/bear.gif"
alt="NFT Image"
width={300}
height={300}
unoptimized
/>
       </div>

       <div className='flex justify-between px-5'>
<p className='text-base font-semibold'>Cult Bears DAO</p>
<Heart className="" size="18" />
       </div>

<div className='mt-5 px-5'>
<hr />

<div className='flex justify-between'>
    <div>
<p className='mt-3 text-sm font-light text-slate-400 flex'>#2224</p>
<p className='flex text-sm mb-4 mt-2'>$9.99</p>
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

        <div className='flex flex-col justify-center bg-white rounded cursor-pointer hover:shadow-2xl'>

       <div className='p-5 flex justify-center'>
<Image 
className='rounded'
src="/assets/bear.gif"
alt="NFT Image"
width={300}
height={300}
unoptimized
/>
       </div>

       <div className='flex justify-between px-5'>
<p className='text-base font-semibold'>Cult Bears DAO</p>
<Heart className="" size="18" />
       </div>

<div className='mt-5 px-5'>
<hr />

<div className='flex justify-between'>
    <div>
<p className='mt-3 text-sm font-light text-slate-400 flex'>#2224</p>
<p className='flex text-sm mb-4 mt-2'>$9.99</p>
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

        <div className='flex flex-col justify-center bg-white rounded cursor-pointer hover:shadow-2xl'>

       <div className='p-5 flex justify-center'>
<Image 
className='rounded'
src="/assets/bear.gif"
alt="NFT Image"
width={300}
height={300}
unoptimized
/>
       </div>

       <div className='flex justify-between px-5'>
<p className='text-base font-semibold'>Cult Bears DAO</p>
<Heart className="" size="18" />
       </div>

<div className='mt-5 px-5'>
<hr />

<div className='flex justify-between'>
    <div>
<p className='mt-3 text-sm font-light text-slate-400 flex'>#2224</p>
<p className='flex text-sm mb-4 mt-2'>$9.99</p>
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

        <div className='flex flex-col justify-center bg-white rounded cursor-pointer hover:shadow-2xl'>

       <div className='p-5 flex justify-center'>
<Image 
className='rounded'
src="/assets/bear.gif"
alt="NFT Image"
width={300}
height={300}
unoptimized
/>
       </div>

       <div className='flex justify-between px-5'>
<p className='text-base font-semibold'>Cult Bears DAO</p>
<Heart className="" size="18" />
       </div>

<div className='mt-5 px-5'>
<hr />

<div className='flex justify-between'>
    <div>
<p className='mt-3 text-sm font-light text-slate-400 flex'>#2224</p>
<p className='flex text-sm mb-4 mt-2'>$9.99</p>
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

        <div className="flex justify-center text-black mb-10 gap-4 cursor-pointer">
                  <ChevronLeftCircle />
                  <ChevronRightCircle />
              </div>

      
       

        

        { // Dark NFT Card
        /* 
        <div className='flex flex-col justify-center bg-[#222222] rounded cursor-pointer'>

            <div className='p-5'>
            <Image 
            className='rounded hover:brightness-90'
            src="/assets/bear.gif"
            alt="NFT Image"
            width={200}
            height={200}
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
        */
        }

    

    </div>
  )
}

export default ExploreNFTs;


