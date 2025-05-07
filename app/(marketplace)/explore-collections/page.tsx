import FeaturedCollections from '@/components/featured-collections'
import { Button } from '@/components/ui/button'
import HeaderSection from '@/components/ui/header-section'
import { Check, ChevronDown, Search, TrashIcon } from 'lucide-react'
import Image from 'next/image'

const page = () => {
  return (
   <div>
    <HeaderSection 
    title='Explore Collections' 
    category='Home /' 
    subtitle='Explore' 
    />
    <div className='mt-10 md:px-10'>
     
      <div className='flex justify-between'>
      <div className='flex flex-row justify-between pt-10 px-5 gap-5 md:gap-20 ml-5'>
        <h2 className='text-2xl font-semibold mr-12 md:mr-0'>
          Filters
        </h2>
        <Button className='bg-slate-100 hover:bg-slate-100 rounded-full'>
        <TrashIcon className='pr-2' />
        Reset</Button>

        <div className="grid grid-cols-3 gap-2 lg:flex  lg:flex-row md:gap-2">
                  <Button className="text-white bg-purple hover:bg-purple rounded-full p-3">
                      All NFT
                  </Button>
                  <Button className=" bg-slate-100 hover:bg-slate-100 rounded-full p-3">
                      Sports
                  </Button>
                  <Button className=" bg-slate-100 hover:bg-slate-100  rounded-full p-3">
                      Music
                  </Button>
                  <Button className=" bg-slate-100 hover:bg-slate-100 rounded-full p-3">
                      Art
                  </Button>
                  <Button className=" bg-slate-100 hover:bg-slate-100 rounded-full p-3">
                      Collectibles
                  </Button>
                  <Button className=" bg-slate-100 hover:bg-slate-100 rounded-full p-3">
                      Trading Cards
                  </Button>
                  <Button className=" bg-slate-100 hover:bg-slate-100 rounded-full p-3">
                      Utility
                  </Button>
                  <Button className=" bg-slate-100 hover:bg-slate-100 rounded-full p-3">
                      Photography
                  </Button>
              </div>
        </div>
       </div>

       <div className='flex gap-10'>
        

       <div className='flex gap-10'>
          <div className='flex flex-col'>

        <div className='border-[2px] border-slate-100 rounded-xl mt-10 pb-5 ml-10'>
          <div className='flex justify-between ml-5 mt-5 mb-4'>
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
      </div>
      </div>

      <div>
      <FeaturedCollections grids="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center pb-10 px-5 lg:px-10 xl:px-20" className='mt-10' />
      </div>

       </div>
      </div>
      </div>
     
 
  
  )
}

export default page;




