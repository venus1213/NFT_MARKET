"use client";

import HeaderSection from '@/components/ui/header-section';
import Image from 'next/image';

const ConnectWalletPage = () => {
  return (

    <div>
      <div>
        <HeaderSection title="Connect Your Wallet" category='Home /' subtitle='Connect Wallet' />
      </div>
    <div className='sm:px-16 px-8 pt-10 md:pt-20 grid grid-cols-3 gap-8'>
        <div 
      onClick={() => {}}
      className='bg-white hover:bg-slate-100 flex flex-col justify-center items-center rounded-xl py-6 cursor-pointer hover:border-blue border-[2px]'>
        <Image 
        src="/assets/icons/MetaMask.png" 
        className=''
        alt="Metamask" height={60} width={60} />
        <h3 className='pt-3'>Metamask</h3>
        </div>
     
        <div 
      onClick={() => {}}
      className='bg-white hover:bg-slate-100 flex flex-col justify-center items-center rounded-xl py-6 cursor-pointer hover:border-blue border-[2px]'>
        <Image 
        src="/assets/icons/coinbase.svg" 
        className=''
        alt="Coinbase" height={60} width={60} />
        <h3 className='pt-3'>Coinbase</h3>
        </div>
        <div 
      onClick={() => {}}
      className='bg-white hover:bg-slate-100 flex flex-col justify-center items-center rounded-xl py-6 cursor-pointer hover:border-blue border-[2px]'>
        <Image 
        src="/assets/icons/phantom.png" 
        className=''
        alt="Phantom" height={60} width={60} />
        <h3 className='pt-3'>Phantom</h3>
        </div>
        <div 
      onClick={() => {}}
      className='bg-white hover:bg-slate-100 flex flex-col justify-center items-center rounded-xl py-6 cursor-pointer hover:border-blue border-[2px]'>
        <Image 
        src="/assets/icons/trustwallet.png" 
        className=''
        alt="Trust Wallet" height={60} width={60} />
        <h3 className='pt-3'>Trust Wallet</h3>
        </div>
        <div 
      onClick={() => {}}
      className='bg-white hover:bg-slate-100 flex flex-col justify-center items-center rounded-xl py-6 cursor-pointer hover:border-blue border-[2px]'>
        <Image 
        src="/assets/icons/walletconnect.png" 
        className=''
        alt="WalletConnect" height={60} width={60} />
        <h3 className='pt-3'>WalletConnect</h3>
        </div>
        </div>
        </div>
  )
}

export default ConnectWalletPage;

