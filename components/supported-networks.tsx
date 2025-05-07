import Image from "next/image";

const SupportedNetworks = () => {
  return (
    <div className="xl:ml-20 justify-center">
    <div className='sm:px-16 px-8 grid grid-cols-4 gap-8 pt-6'>
    <Image
    src="/assets/layerzero.png" 
    className=''
    alt="Metamask" height={100} width={200} />
    <Image 
    src="/assets/polygon.webp" 
    className=''
    alt="Metamask" height={100} width={200} />
     <Image 
    src="/assets/zksync.svg" 
    className=''
    alt="Metamask" height={100} width={200} />
    <Image 
    src="/assets/arbitrum.png" 
    className=''
    alt="Metamask" height={100} width={200} />
    <Image 
    src="/assets/moonbeam.png" 
    className='mt-5 sm:mt-8'
    alt="Metamask" height={100} width={200} />
     <Image 
    src="/assets/bnb.png" 
    className=''
    alt="Metamask" height={100} width={200} />
    <Image 
    src="/assets/coinbase.png" 
    className=''
    alt="Metamask" height={100} width={200} />
    <Image 
    src="/assets/astar.webp" 
    className=''
    alt="Metamask" height={100} width={200} />
    </div>
    </div>
  )
}

export default SupportedNetworks;