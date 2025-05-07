"use client";

import ExploreNFTs from '@/components/explore-nfts';
import { Button } from '@/components/ui/button';
import HeaderSection from '@/components/ui/header-section';
import { ChevronLeftCircle, ChevronRightCircle, Eye, Heart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const NFTDetailsPage = () => {
  const [like, setLike] = useState(false);

  const [likeCount, setLikeCount] = useState(0);
 
  const likeNFT = () => {
    if (!like) {
      setLike(true)
      setLikeCount(1)
    } else {
      setLike(false)
      setLikeCount(0)
    }
  }

  return (
    <div>

      {/* <HeaderSection 
      title="NFT Details" 
      category='Home /' 
      subtitle='NFTDetails' 
  /> */}

    <div className='pt-10 md:pt-20 px-10'>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

      <div className='flex justify-center'>
        <Image
        className='rounded-xl'
        src="/assets/bear.gif"
        alt="NFT Image"
        width={700}
        height={700}
        unoptimized
        />
         <div className='-ml-20'
         onClick={() => likeNFT()}
         >
          {like ? (
             <div className='flex mt-10 -ml-10 px-4 rounded-full py-2 bg-slate-400 text-white gap-4'>
             <Heart 
             size="26" className='fill-white' />
             <p className='text-xl'>{likeCount}</p>
             </div>
          ): (
            <div className='flex mt-10 -ml-10 px-4 rounded-full py-2 bg-slate-400 text-white gap-4'>
            <Heart 
            size="26" />
            <p className='text-xl'>{likeCount}</p>
            </div>
          )}

          </div>
        

        
       
      </div>

      <div className='flex flex-col justify-start mt-5 '>

        <p>by <span className='text-purple'>Cult Bears DAO</span></p>
        

        <div className='flex justify-between my-4'>
        <h2 className='font-bold text-2xl'>Cult Bears DAO</h2>
        <div className='flex gap-2'>
        <Eye />
        <p>124.6k</p>
        <Image 
        src="/assets/icons/three-dots.svg"
        alt="Three dots"
        width={20}
        height={20}
        className="-mt-2"
        />
        </div>
        </div>

        <p> Cult Bears DAO is one of the first omnichain communities. Sice its inception we have expanded to variety of new blockchains...</p>
        <Button
        className='flex justify-start -ml-4 text-purple hover:underline'
        >Read More</Button>
        <p className='mt-5 font-semibold'>Owner</p>
        <div className='flex gap-4 mt-5'>
          <Image 
          src="/assets/icons/cult-bears.png"
          alt="Owner"
          width={40}
          height={40}
          />
          <p className='text-sm mt-2'>0x330cd8f...8b7c</p>
        </div>

        <p className='mt-10 mb-2 font-semibold'>Traits</p>
        <div className='grid grid-cols-4 gap-2 text-sm'>
          <p className='flex bg-slate-100 rounded-full px-4 py-2'>
            Background: Forest
          </p>
          <p className='flex bg-slate-100 rounded-full px-4 py-2'>
            Background: Forest
          </p>
          <p className='flex bg-slate-100 rounded-full px-4 py-2'>
            Background: Forest
          </p>
          <p className='flex bg-slate-100 rounded-full px-4 py-2'>
            Background: Forest
          </p>
          <p className='flex bg-slate-100 rounded-full px-4 py-2'>
            Background: Forest
          </p>
          <p className='flex bg-slate-100 rounded-full px-4 py-2'>
            Background: Forest
          </p>
          <p className='flex text-purple cursor-pointer bg-slate-100 rounded-full px-4 py-2'>
            See more...
          </p>
          </div>

          <p className='mt-10 font-semibold'>Current Price</p>
          <div className='flex gap-3 mt-5'>
            <p className='text-3xl font-bold text-purple'>6.37 ETH</p>
            <p className='mt-1'>($4,789)</p>
          </div>
          <p className='mt-5 font-semibold'>Last Sale: <span className='text-purple font-bold'>5.98 ETH</span></p>

          <div className='grid grid-cols-2 mt-10 gap-4'>
            <Button
            className='bg-purple rounded-full text-white hover:bg-purple hover:brightness-90'
            >
              Buy Now
            </Button>

            <Button
            className='text-purple border-purple border-[2px] rounded-full hover:brightness-90'
            >
              Place a bid
            </Button>
          </div>
        
      </div>

     </div>

     <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:px-5 gap-8'>

      <div className='border-[2px] border-slate-100 rounded-xl'>
        <p className='border-b-[2px] border-b-slate-100 font-bold px-4 py-6'>Offers</p>
        
        <div className='grid grid-cols-5 pt-4 px-4 text-slate-400 text-sm'>
          <p>Price (ETH)</p>
          <p>USD Price</p>
          <p className='flex'>Floor Difference</p>
          <p>Expiration</p>
          <p>From</p>

          </div>

          <div className='grid grid-cols-5 py-4 px-4 text-sm border-b-[2px] border-b-slate-100 '>
         
            <p>0.1700 ETH </p>
            <p>$384.95</p>
            <p>32% below</p>
            <p>11 min</p>
            <p>NFT_Lord</p>
            </div>

         <div className='grid grid-cols-5 py-4 px-4 text-sm border-b-[2px] border-b-slate-100 '>
         
         <p>0.1700 ETH </p>
         <p>$384.95</p>
         <p>32% below</p>
         <p>11 min</p>
         <p>NFT_Lord</p>
         </div>

         <div className='grid grid-cols-5 py-4 px-4 text-sm border-b-[2px] border-b-slate-100 '>
         
         <p>0.1700 ETH </p>
         <p>$384.95</p>
         <p>32% below</p>
         <p>11 min</p>
         <p>NFT_Lord</p>
         </div>

         <div className='grid grid-cols-5 py-4 px-4 text-sm border-b-[2px] border-b-slate-100 '>
         
         <p>0.1700 ETH </p>
         <p>$384.95</p>
         <p>32% below</p>
         <p>11 min</p>
         <p>NFT_Lord</p>
         </div>

         <div className='grid grid-cols-5 py-4 px-4 text-sm border-b-[2px] border-b-slate-100 '>
         
         <p>0.1700 ETH </p>
         <p>$384.95</p>
         <p>32% below</p>
         <p>11 min</p>
         <p>NFT_Lord</p>
         </div>

         <div className='grid grid-cols-5 py-4 px-4 text-sm border-b-[2px] border-b-slate-100 '>
         
         <p>0.1700 ETH </p>
         <p>$384.95</p>
         <p>32% below</p>
         <p>11 min</p>
         <p>NFT_Lord</p>
         </div> 
      
      </div>

      <div className='border-[2px] border-slate-100 rounded-xl'>
        <div className='flex px-10 gap-10 mt-10 text-xl border-b-[2px] border-b-slate-100 pb-5'>
          <p>Details</p>
          <p className='text-slate-400'>Bids</p>
          <p className='text-slate-400'>Activity</p>
        </div>

        <p className='mt-5 px-5'>A collection of 2,000 bears minted across 10+ networks. Each is handrawn and completely unique. 
        </p>
        <p className='mt-5 px-5'>
        More than 200 different traits. There are 5 different rarities
        </p>

        <div className='grid grid-cols-2 px-5 mt-10 gap-5 pb-5'>
          <p>Blockchain</p> <p>Ethereum</p>
          <p>Contract Address</p> <p>0x330cfg8...8bcf9</p>
          <p>Metadata</p> <p>IPFS</p>
          <p>Last Updated</p> <p>3 days ago</p>

        </div>

      <div className='grid grid-cols-1 md:grid-cols-2'>
     </div>

      </div>
     </div>


     <div className='bg-slate-100 mt-10'>
     <div className='flex justify-between px-10 pt-10'>
      <p className='md:text-xl font-bold'>More From This Collection</p> <p className='text-purple hover:underline font-bold md:text-xl cursor-pointer'>View Collection</p>
     </div>

     <ExploreNFTs className='pt-10 px-10'/>
     </div>


    {/* 
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-20 pb-10 px-5">
                  <div className='bg-slate-400/60 rounded-xl text-white'>
                      <Image
                          src="/assets/bear.gif"
                          alt="NFT Image"
                          width={200}
                          height={200}
                          className="w-full rounded-xl" />
                      <div className='flex justify-start px-4 pt-5'>
                          <Image
                              src="/assets/icons/cult-bears.png"
                              alt="Collection Logo"
                              width={50}
                              height={50}
                              className="rounded-full my-3 ml-3" />
                          <div className="flex flex-col items-start pt-3 pl-6">
                              <h3 className=''>Cult Bears DAO</h3>
                              <p className="text-purple font-semibold">Omnichain</p>
                          </div>
                      </div>
                      <div className='flex pb-5 px-4 flex-1 gap-2 justify-between'>

                      </div>
                  </div>
                  <div className='bg-slate-400/60 rounded-xl text-white'>
                      <Image
                          src="/assets/bear.gif"
                          alt="NFT Image"
                          width={200}
                          height={200}
                          className="w-full rounded-xl" />
                      <div className='flex justify-start px-4 pt-5'>
                          <Image
                              src="/assets/icons/cult-bears.png"
                              alt="Collection Logo"
                              width={50}
                              height={50}
                              className="rounded-full my-3 ml-3" />
                          <div className="flex flex-col items-start pt-3 pl-6">
                              <h3 className=''>Cult Bears DAO</h3>
                              <p className="text-purple font-semibold">Omnichain</p>
                          </div>
                      </div>
                      <div className='flex pb-5 px-4 flex-1 gap-2 justify-between'>

                      </div>
                  </div>
                  <div className='bg-slate-400/60 rounded-xl text-white'>
                      <Image
                          src="/assets/bear.gif"
                          alt="NFT Image"
                          width={200}
                          height={200}
                          className="w-full rounded-xl" />
                      <div className='flex justify-start px-4 pt-5'>
                          <Image
                              src="/assets/icons/cult-bears.png"
                              alt="Collection Logo"
                              width={50}
                              height={50}
                              className="rounded-full my-3 ml-3" />
                          <div className="flex flex-col items-start pt-3 pl-6">
                              <h3 className=''>Cult Bears DAO</h3>
                              <p className="text-purple font-semibold">Omnichain</p>
                          </div>
                      </div>
                      <div className='flex pb-5 px-4 flex-1 gap-2 justify-between'>
                      </div>
                  </div>
                  <div className='bg-slate-400/60 rounded-xl text-white'>
                      <Image
                          src="/assets/bear.gif"
                          alt="NFT Image"
                          width={200}
                          height={200}
                          className="w-full rounded-xl" />
                      <div className='flex justify-start px-4 pt-5'>
                          <Image
                              src="/assets/icons/cult-bears.png"
                              alt="Collection Logo"
                              width={50}
                              height={50}
                              className="rounded-full my-3 ml-3" />
                          <div className="flex flex-col items-start pt-3 pl-6">
                              <h3 className=''>Cult Bears DAO</h3>
                              <p className="text-purple font-semibold">Omnichain</p>
                          </div>
                      </div>
                      <div className='flex pb-5 px-4 flex-1 gap-2 justify-between'>

                      </div>
                  </div>

              </div>
    */} 

    </div>
    </div>
  )
}

export default NFTDetailsPage;