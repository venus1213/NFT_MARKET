"use client";

import Auction from "@/components/auction";
import ExploreNFTs from "@/components/explore-nfts";
import FeaturedCollections from "@/components/featured-collections";
import GetStarted from "@/components/get-started";
import HeroSection from "@/components/hero-section";
import HotCollection from "@/components/hot-collection";
import NFTData from "@/components/nft-data";
import SupportedNetworks from "@/components/supported-networks";

export default function LandingPage() {
  return (
    <div className='font-bold text-center'>
     
                <HeroSection />
                <FeaturedCollections title="Featured Collections" className="text-2xl text-purple mb-6" grids="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center pb-10 px-10 lg:px-10 xl:px-20 xl:mx-10" />
                <hr />
                <SupportedNetworks />
                <hr />
                <NFTData />
                <GetStarted />
                <div className="bg-slate-100">
                <h2 className='text-2xl flex font-bold mb-10 px-10 md:px-20'>Explore NFTs</h2>
                <ExploreNFTs className="px-10 md:px-20" />
                </div>
                <HotCollection />
               </div>
                
  )
}

                