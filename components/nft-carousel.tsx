"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNFTs } from '../app/features/nft/nftSlice';
import { setSelectedTokenId } from '../app/features/bridge/bridgeSlice'; 
import { RootState, AppDispatch } from '@/app/store';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { getPublicClient } from '@/config/getPublicClient';
import { useWalletClient } from "wagmi";
import Loader from './loader';
import { fetchOwnedNFTs } from '@/app/features/nft/nftThunks';

export function NftCarousel() {
  const publicClient = getPublicClient("Avalanche Fuji");
  const walletClient = useWalletClient();
  const dispatch = useDispatch<AppDispatch>();
  
  const { items: nfts, loading, error, lastRefresh } = useSelector((state: RootState) => state.nft);
  const [delayedLoading, setDelayedLoading] = useState(loading);
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);
  const { selectedTokenId } = useSelector((state: RootState) => state.bridge);
  const contractAddress = '0xb1a40746dc35d00ECE291895716D7f20Cb747f14'; 

  if (walletClient && publicClient) {
    console.log("Address:", walletClient?.data?.account, "ChainId", walletClient?.data?.chain.id)
  }

  const ownerAddress = walletClient?.data?.account?.address;

  const chainId = walletClient?.data?.chain?.id;

  useEffect(() => {
    if (loading) {
      setDelayedLoading(true);
    } else {
      const timer = setTimeout(() => {
        setDelayedLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    if (chainId && ownerAddress && contractAddress) {
      // Clear previous NFTs and tokenIds
      dispatch(clearNFTs());

      // Fetch tokenIds owned by the address
      dispatch(fetchOwnedNFTs({ ownerAddress, contractAddress, chainId  }));
    }
  }, [dispatch, ownerAddress, contractAddress, chainId, lastRefresh]);


  const handleRetry = () => {
    if (ownerAddress && contractAddress && chainId) {
      dispatch(fetchOwnedNFTs({ ownerAddress, contractAddress, chainId }));
    }
  };


  if (delayedLoading) return <Loader />;
  
  {/*

      if (error)
    return (
      <div className="flex flex-col items-center">
        <p className="text-red-500">Error: {error}</p>
        <button
          onClick={handleRetry}
          disabled={loading}
          className={`mt-2 px-4 py-2 rounded ${
            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500 text-white'
          }`}
        >
          {loading ? 'Retrying...' : 'Retry'}
        </button>
      </div>
    );
    
  */}

  return (
    <section className="h-1/2 py-4">
     <div className="h-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-y-auto max-h-[400px] pb-4 scrollbar-thin scrollbar-thumb-purple600 scrollbar-track-transparent">
        {nfts.map((nft) => (
         <Card
         key={nft.tokenId}
         onMouseEnter={() => setHoveredId(nft.tokenId)}
         onMouseLeave={() => setHoveredId(null)}
         onClick={() => dispatch(setSelectedTokenId(parseInt(nft.tokenId, 10)))}
         className={`w-40 h-48 bg-white/10 backdrop-blur-lg border-none text-white transition-shadow duration-300 
          ${hoveredId === nft.tokenId ? 'shadow-lg shadow-purple500/50' : ''} 
          ${selectedTokenId === parseInt(nft.tokenId, 10) ? 'bg-purple600' : 'bg-white/10'}
        `}
       >
         <CardContent className="p-2.5">
           <Image
             src={nft.image || '/default-nft.png'} 
             alt={`Token ID: ${nft.tokenId}`}
             width={300}
             height={300}
             className="w-full h-32 object-cover rounded-lg mb-4"
           />
           <h3 className="text-sm font-semibold text-center truncate">Cult Bear #{nft.tokenId}</h3>
         </CardContent>
       </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NftCarousel;
