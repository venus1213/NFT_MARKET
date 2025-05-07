import ExploreNFTs from '@/components/explore-nfts'
import { Button } from '@/components/ui/button'
import HeaderSection from '@/components/ui/header-section'
import { Check, ChevronDown, Search, TrashIcon } from 'lucide-react'
import Image from 'next/image'

const page = () => {
  return (
    
    <div>
    <div>
      <HeaderSection 
      title='Explore NFTs'
      category='Home /' 
      subtitle='Explore'
       />
    </div>
    <div className='flex flex-col'>
    
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
   

      
      <div className='-mt-10'>


      <div className='mb-6 grid'>
      <Button
      className='border-slate-100 border-[2px] rounded-full'
      >
      <div className='flex justify-between gap-x-80'>
     <p className='text-purple'> Type your search query
     </p>
     <Search />
     </div>
     </Button>
     </div>

     <div className='bg-slate-100 pt-2 pb-10'>
     <h2 className='text-2xl flex font-bold mb-10 mt-10 ml-6'>Explore NFTs</h2>
      <ExploreNFTs className='mx-6'/>
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

      </div>

  


 
  
  )
}

export default page;












