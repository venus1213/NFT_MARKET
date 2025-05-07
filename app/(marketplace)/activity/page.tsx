import { Button } from '@/components/ui/button'
import HeaderSection from '@/components/ui/header-section'
import { BadgeCheck, Check, ChevronDown, ChevronDownIcon, ChevronUpIcon, TrashIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
    <div>
      <HeaderSection 
      title="Activity" 
      category='Home /' 
      subtitle='Activity'
       />
    </div>
    <div className='mt-10 md:px-10'>
     
      <div className='flex justify-between'>
      <div className='flex flex-row justify-between pt-10 px-5 gap-5 md:gap-20 ml-5'>
        <h2 className='text-2xl font-semibold mr-12 md:mr-0'>
          Filters
        </h2>
        <Button className='bg-slate-100 hover:bg-slate-100 rounded-full'>
        <TrashIcon className='pr-2' />
        Reset</Button>
          </div>
        </div>

        <div className='flex gap-10'>
          <div className='flex flex-col'>

          <div className='border-[2px] border-slate-100 rounded-xl mt-10 ml-10'>
          <div className='flex justify-between mx-5 my-3 gap-20'>
            <p className='font-semibold text-sm mr-10'>Status</p>
            <ChevronDown  className='p-1'/>
      </div>

      <div className='px-4 pb-4'>
        <div className='flex gap-5'>
        <Button className='bg-purple rounded-full hover:bg-purple text-white'>Buy Now</Button>
        <Button className='bg-slate-100 rounded-full hover:bg-slate-100'>On Auction</Button>
        </div>
        <div className='flex gap-5 mt-5'>
        <Button className='bg-slate-100 rounded-full hover:bg-slate-100'>New</Button>
        <Button className='bg-slate-100 rounded-full hover:bg-slate-100'>Has Offers</Button>
        <Button className='bg-slate-100 rounded-full hover:bg-slate-100'>All</Button>
        </div>
      </div>
      <div>

      </div>
      </div>


        <div className='border-[2px] border-slate-100 rounded-xl mt-10 pb-5 ml-10'>
          <div className='flex justify-between mx-5 mt-5 mb-4 gap-20'>
            <p className='font-semibold text-sm mr-10'>Chains</p>
            <ChevronDown className='p-1'/>
      </div>

      <div className='flex flex-col gap-4'>

      <div className='flex justify-between px-5'>
        <div>
          <div className='flex gap-3'>
            <Check className='p-1 border-[2px] border-slate-100 rounded bg-purple text-white' />
            <p>Ethereum</p>
          </div>
        </div>
        <div className='bg-purple rounded-full text-white px-2.5'>
          116
        </div>
      </div>

      <div className='flex justify-between px-5'>
        <div>
          <div className='flex gap-3'>
            <Check className='p-1 border-[2px] border-slate-100 rounded text-white' />
            <p className='text-slate-500'>Polygon</p>
          </div>
        </div>
        <div className='bg-slate-100 rounded-full text-slate-500 px-2.5'>
          116
        </div>
        </div>

        <div className='flex justify-between px-5'>
        <div>
          <div className='flex gap-3'>
            <Check className='p-1 border-[2px] border-slate-100 rounded text-white' />
            <p className='text-slate-500'>Avalanche</p>
          </div>
        </div>
        <div className='bg-slate-100 rounded-full text-slate-500 px-2.5'>
          116
        </div>
        </div>

        <div className='flex justify-between px-5'>
        <div>
          <div className='flex gap-3'>
            <Check className='p-1 border-[2px] border-slate-100 rounded text-white' />
            <p className='text-slate-500'>Moonbeam</p>
          </div>
        </div>
        <div className='bg-slate-100 rounded-full text-slate-500 px-2.5'>
          116
        </div>
        </div>

        <div className='flex justify-between px-5'>
        <div>
          <div className='flex gap-3'>
            <Check className='p-1 border-[2px] border-slate-100 rounded text-white' />
            <p className='text-slate-500'>Astar</p>
          </div>
        </div>
        <div className='bg-slate-100 rounded-full text-slate-500 px-2.5'>
          116
        </div>
        </div>

      </div>
      </div>

      <div className='border-[2px] border-slate-100 rounded-xl mt-10 ml-10'>
          <div className='flex justify-between mx-5 my-3 gap-20'>
            <p className='font-semibold text-sm mr-10'>Price</p>
            <ChevronDown  className='p-1'/>
      </div>
      <div>

      </div>
      </div>

      <div className='border-[2px] border-slate-100 rounded-xl mt-10 ml-10'>
          <div className='flex justify-between mx-5 my-3 gap-20'>
            <p className='font-semibold text-sm mr-10'>Currency</p>
            <ChevronDown  className='p-1'/>
      </div>
      <div>

      </div>
      </div>

      </div>

      <div className='flex items-center justify-between overflow-x-auto -mt-20'>
      <div className='flex flex-col'>
      
      <div className='flex gap-x-12'>
      <h3 className='pl-5'>#</h3>
      <h3 className='pr-20'>Items</h3>
      <div className='flex pl-20'>
      <h3>Price</h3> 
      <div className='flex flex-col text-slate-500'> 
      <ChevronUpIcon className='p-1 -mt-1.5' />
      <ChevronDownIcon className='p-1 -mt-3.5'/>
      </div>
      </div>
      <div className='flex'>
      <h3>Seller</h3> 
      <div className='flex flex-col text-slate-500'> 
      <ChevronUpIcon className='p-1 -mt-1.5' />
      <ChevronDownIcon className='p-1 -mt-3.5'/>
      </div>
      </div>
      <div className='flex'>
      <h3>Buyer</h3> 
      <div className='flex flex-col text-slate-500'> 
      <ChevronUpIcon className='p-1 -mt-1.5' />
      <ChevronDownIcon className='p-1 -mt-3.5'/>
      </div>
      </div>
      <div className='flex'>
      <h3>Time</h3> 
      <div className='flex flex-col text-slate-500'> 
      <ChevronUpIcon className='p-1 -mt-1.5' />
      <ChevronDownIcon className='p-1 -mt-3.5'/>
      </div>
      </div>

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
      className="ml-2 -mt-3 rounded-full bg-slate-100"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2 pr-10'>Cult Bears DAO</p>
      </div>

      <div className='flex gap-x-6 pt-8 mt-2 bg-slate-100 border-b-[2px] border-b-slate-200 text-sm'>
      <p className='pl-5'>14.32 ETH</p>
      <p className='text-purple pl-4'>Dhnq...4f</p>
      <p className='text-purple pl-6'>CY9s...Pn</p>
      <p className='pl-5 pr-5'>40 minutes ago</p>
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
      className="ml-2 -mt-3 rounded-full"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2 pr-10'>Cult Bears DAO</p>
      </div>
      <div className='flex gap-x-6 pt-8 border-b-[2px] border-b-slate-200 text-sm'>
      <p className='pl-5'>14.32 ETH</p>
      <p className='text-purple pl-4'>Dhnq...4f</p>
      <p className='text-purple pl-6'>CY9s...Pn</p>
      <p className='pl-5 pr-5'>40 minutes ago</p>
      </div>
      </div>

      <div className='flex'>
      <div className='flex gap-x-5 pt-6 pb-4 px-5 border-b-[2px] bg-slate-100 border-b-slate-200'>
      <p className='font-bold'>3</p>
      <Image 
      src="/assets/icons/cult-bears.png"
      alt="Collection Logo"
      width={60}
      height={60} 
      className="ml-2 -mt-3 rounded-full"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2 pr-10'>Cult Bears DAO</p>
      </div>
      <div className='flex gap-x-6 pt-8 border-b-[2px] border-b-slate-200 bg-slate-100 text-sm'>
      <p className='pl-5'>14.32 ETH</p>
      <p className='text-purple pl-4'>Dhnq...4f</p>
      <p className='text-purple pl-6'>CY9s...Pn</p>
      <p className='pl-5 pr-5'>40 minutes ago</p>
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
      className="ml-2 -mt-3 rounded-full"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2 pr-10'>Cult Bears DAO</p>
      </div>
      <div className='flex gap-x-6 pt-8 border-b-[2px] border-b-slate-200 text-sm'>
      <p className='pl-5'>14.32 ETH</p>
      <p className='text-purple pl-4'>Dhnq...4f</p>
      <p className='text-purple pl-6'>CY9s...Pn</p>
      <p className='pl-5 pr-5'>40 minutes ago</p>
      </div>
      </div>

      <div className='flex'>
      <div className='flex gap-x-5 pt-6 pb-4 px-5 border-b-[2px] border-b-slate-200 bg-slate-100'>
      <p className='font-bold'>5</p>
      <Image 
      src="/assets/icons/cult-bears.png"
      alt="Collection Logo"
      width={60}
      height={60} 
      className="ml-2 -mt-3 rounded-full"
      />
      <BadgeCheck className='text-white bg-sky-500 rounded-full mt-5 -ml-10 p-0.5'/>
      <p className='font-semibold pt-2 pr-10'>Cult Bears DAO</p>
      </div>
      <div className='flex gap-x-6 pt-8 border-b-[2px] border-b-slate-200 bg-slate-100 text-sm'>
      <p className='pl-5'>14.32 ETH</p>
      <p className='text-purple pl-4'>Dhnq...4f</p>
      <p className='text-purple pl-6'>CY9s...Pn</p>
      <p className='pl-5 pr-5'>40 minutes ago</p>
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
      </div>
      </div>
  )
}

export default page;