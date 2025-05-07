"use client";

import HeaderSection from '@/components/ui/header-section';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CreatePage = () => {

  const router = useRouter();
  return (
    <div>
      <div>
        <HeaderSection
         title="Create" 
         category='Home /' 
         subtitle='Create' />
      </div>
    <div className='sm:px-64 px-8 pt-10 md:pt-20'>
      <div className='text-slate-400'>
        Choose <span className='text-black'>"Single NFT"</span> if you want your collectible to be one of a kind or <span className='text-black'>"NFT Collection"</span> if you want to sell one collectible multiple times.
      </div>
      <div className='grid grid-cols-2 gap-8 mt-10'> 
      <div 
      onClick={() => router.push("/create-nft")}
      className='bg-white hover:bg-slate-100 flex flex-col justify-center items-center rounded-xl py-6 cursor-pointer hover:border-blue border-[2px]'>
        <Image 
        src="/assets/nft.png" 
        className='rounded-xl'
        alt="Metamask" height={100} width={200} />
        <h3 className='pt-3'>Single NFT</h3>
        </div>
        <div 
       onClick={() => router.push("/create-collection")}
      className='bg-white hover:bg-slate-100 flex flex-col justify-center items-center rounded-xl py-6 cursor-pointer hover:border-blue border-[2px]'>
        <Image 
        src="/assets/collection.png" 
        className='rounded-xl'
        alt="Coinbase" height={100} width={200} />
        <h3 className='pt-3'>NFT Collection</h3>
        </div>
       </div>
       </div>
       </div>
  )
}

export default CreatePage;

