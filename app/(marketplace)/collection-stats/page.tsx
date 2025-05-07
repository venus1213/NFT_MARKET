import { Button } from '@/components/ui/button'
import HeaderSection from '@/components/ui/header-section'
import { BadgeCheck, ChevronDownIcon, ChevronUpIcon, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderSection title="Collection Stats" category='Home /' subtitle='Stats' />
    <div className='md:mt-10 p-10 md:px-40'>
      <div className=''>
        <h2 className='text-2xl font-semibold'>
          Top Collection
        </h2>
       
      </div>
      <div className='flex flex-col gap-4 lg:flex-row lg:justify-between mt-10 pb-10'>
        <div className='flex flex-row gap-x-4'>
          <Button
          className='rounded-full text-white bg-purple hover:bg-purple'
          >
            Top
          </Button>
          <Button className='rounded-full bg-slate-100 hover:bg-slate-100'>
            Trending
          </Button>
          <Button  className='rounded-full bg-slate-100 hover:bg-slate-100'>
            Watchlist
          </Button>
        </div>

        <div className='flex flex-row gap-x-4'>
        <Button  className='rounded-full bg-slate-100 hover:bg-slate-100'>
            24h
          </Button>
        <Button
          className='rounded-full text-white bg-purple hover:bg-purple'
          >
            48h
          </Button>
          <Button className='rounded-full bg-slate-100 hover:bg-slate-100'>
            3d
          </Button>
          <Button  className='rounded-full bg-slate-100 hover:bg-slate-100'>
            7d
          </Button>
          <Button  className='rounded-full bg-slate-100 hover:bg-slate-100'>
            1m
          </Button>

        </div>
      </div>
      <hr />
      <div className='flex items-center justify-between overflow-x-auto'>
      <div className='flex flex-col'>
      
      <div className='flex mt-10 gap-x-10'>
      <h3 className='pl-5'>#</h3>
      <h3 className='pr-20'>Collection</h3>
      <div className='flex pl-20'>
      <h3>Volume</h3> 
      <div className='flex flex-col text-slate-500'> 
      <ChevronUpIcon className='p-1 -mt-1.5' />
      <ChevronDownIcon className='p-1 -mt-3.5'/>
      </div>
      </div>
      <div className='flex'>
      <h3>Change</h3> 
      <div className='flex flex-col text-slate-500'> 
      <ChevronUpIcon className='p-1 -mt-1.5' />
      <ChevronDownIcon className='p-1 -mt-3.5'/>
      </div>
      </div>
      <div className='flex'>
      <h3>Floor Price</h3> 
      <div className='flex flex-col text-slate-500'> 
      <ChevronUpIcon className='p-1 -mt-1.5' />
      <ChevronDownIcon className='p-1 -mt-3.5'/>
      </div>
      </div>
      <div className='flex'>
      <h3>Owner</h3> 
      <div className='flex flex-col text-slate-500'> 
      <ChevronUpIcon className='p-1 -mt-1.5' />
      <ChevronDownIcon className='p-1 -mt-3.5'/>
      </div>
      </div>
      <div className='flex'>
      <h3>Items</h3> 
      <div className='flex flex-col text-slate-500'> 
      <ChevronUpIcon className='p-1 -mt-1.5' />
      <ChevronDownIcon className='p-1 -mt-3.5'/>
      </div>
      </div>
      <h3>Watchlist</h3> 
      </div>
      
      <div>

      <div className='flex'>
      <div className='flex gap-x-5 bg-slate-100 pt-6 mt-2 pb-4 px-5 border-b-[2px] border-b-slate-200'>
      <p className='font-bold'>1</p>
      <Image 
      src="/assets/icons/cult-bears.png"
      alt="Collection Logo"
      width={60}
      height={60} 
      className=" -mt-3 rounded-full bg-slate-100"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2'>Cult Bears DAO</p>
      </div>
      <div className='flex gap-x-8 pt-8 mt-2 bg-slate-100 pl-20 pr-10 border-b-[2px] border-b-slate-200'>
      <p className=''>14.32 ETH</p>
      <p className='text-green pl-4'>+2.3%</p>
      <p className='pl-10'>6.50 ETH</p>
      <p className='pl-10'>1,238</p>
      <p className='pl-10 pr-5'>500</p>
      <div className='pl-10 pr-5'>
      <Star />
      </div>
      </div>
      </div>

      <div className='flex'>
      <div className='flex gap-x-5 pt-6 pb-4 px-5 border-b-[2px] border-b-slate-200'>
      <p className='font-bold'>2</p>
      <Image 
      src="/assets/icons/cult-bears.png"
      alt="Collection Logo"
      width={60}
      height={60} 
      className="-mt-3 rounded-full"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2'>Cult Bears DAO</p>
      </div>
      <div className='flex gap-x-8 pt-8 pl-20 pr-10 border-b-[2px] border-b-slate-200'>
      <p className=''>14.32 ETH</p>
      <p className='text-green pl-4'>+2.3%</p>
      <p className='pl-10'>6.50 ETH</p>
      <p className='pl-10'>1,238</p>
      <p className='pl-10 pr-5'>500</p>
      <div className='pl-10 pr-5'>
      <Star />
      </div>
      </div>
      </div>

      <div className='flex'>
      <div className='flex gap-x-5 bg-slate-100 pt-6 pb-4 px-5 border-b-[2px] border-b-slate-200'>
      <p className='font-bold'>3</p>
      <Image 
      src="/assets/icons/cult-bears.png"
      alt="Collection Logo"
      width={60}
      height={60} 
      className="-mt-3 rounded-full bg-slate-100"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2'>Cult Bears DAO</p>
      </div>
      <div className='flex gap-x-8 pt-8 bg-slate-100 pl-20 pr-10 border-b-[2px] border-b-slate-200'>
      <p>14.32 ETH</p>
      <p className='text-green pl-4'>+2.3%</p>
      <p className='pl-10'>6.50 ETH</p>
      <p className='pl-10'>1,238</p>
      <p className='pl-10 pr-5'>500</p>
      <div className='pl-10 pr-5'>
      <Star />
      </div>
      </div>
      </div>

      <div className='flex'>
      <div className='flex gap-x-5 pt-6 pb-4 px-5 border-b-[2px] border-b-slate-200'>
      <p className='font-bold'>4</p>
      <Image 
      src="/assets/icons/cult-bears.png"
      alt="Collection Logo"
      width={60}
      height={60} 
      className="-mt-3 rounded-full"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2'>Cult Bears DAO</p>
      </div>
      <div className='flex gap-x-8 pt-8 pl-20 pr-10 border-b-[2px] border-b-slate-200'>
      <p>14.32 ETH</p>
      <p className='text-green pl-4'>+2.3%</p>
      <p className='pl-10'>6.50 ETH</p>
      <p className='pl-10'>1,238</p>
      <p className='pl-10 pr-5'>500</p>
      <div className='pl-10 pr-5'>
      <Star />
      </div>
      </div>
      </div>

      <div className='flex'>
      <div className='flex gap-x-5 bg-slate-100 pt-6 pb-4 px-5 border-b-[2px] border-b-slate-200'>
      <p className='font-bold'>5</p>
      <Image 
      src="/assets/icons/cult-bears.png"
      alt="Collection Logo"
      width={60}
      height={60} 
      className="-mt-3 rounded-full bg-slate-100"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2'>Cult Bears DAO</p>
      </div>
      <div className='flex gap-x-8 pt-8 bg-slate-100 pl-20 pr-10 border-b-[2px] border-b-slate-200'>
      <p>14.32 ETH</p>
      <p className='text-green pl-4'>+2.3%</p>
      <p className='pl-10'>6.50 ETH</p>
      <p className='pl-10'>1,238</p>
      <p className='pl-10 pr-5'>500</p>
      <div className='pl-10 pr-5'>
      <Star />
      </div>
      </div>
      </div>

      </div>
      </div>
      </div>

      <div className="flex justify-center p-10">
                    <Button
                    className="bg-purple hover:bg-purple text-white rounded-full px-8 py-6 text-lg font-light"
                    >
                    Load More
                    </Button>
      </div>
      </div>
      </div>
  )
}

export default page;