import Image from 'next/image';
import { IconType } from "react-icons";



const AuctionCard = () => {
  return (
    <div className='bg-slate-500 rounded-xl text-white'>
        <Image 
        src="/assets/bear.gif" 
        alt="NFT Image"
        width={200}
        height={200}
        unoptimized
        className="w-full rounded-xl"
        />
        <div className='rounded-full bg-slate-400/60 mx-12 -mt-10'>Timer</div>
        <div className='flex justify-between px-4 pt-5'>
            <h3 className='py-3'>Item Name</h3>
            <Image 
            src="/assets/icons/matic.webp"
            alt="Currency"
            width={24}
            height={24}
            className="rounded-full bg-slate-400/60 my-3"
            />
        </div>

        <div className='flex pb-5 px-4 flex-1 gap-2 justify-between'>
            <div>
            <Image 
            src="/assets/icons/cult-bears.png"
            alt="Collection Logo"
            width={24}
            height={24}
            className="rounded-full my-3"
            />
            </div>
            <div className='flex flex-col items-start -ml-3'>
                <p className='text-sm font-light'>Creator</p>
                <h3 className='text-sm font-semibold'>Artist</h3>
            </div>
            <div className='flex flex-col'>
                <p className='text-sm font-light'>Highest Bid</p>
                <h3 className='text-sm font-semibold'>4.24 ETH</h3>
            </div>
            </div>
            </div>
  )
}

export default AuctionCard;