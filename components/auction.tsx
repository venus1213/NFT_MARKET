"use client"

import Link from "next/link";
import AuctionCard from "./ui/auction-card";

const Auction = () => {
  return (
    <div className="px-8">
        <div className="flex justify-between md:px-20">
            <h2 className="text-2xl">Live Auction</h2>
            <Link
            className="text-purple cursor-pointer hover:underline hover:underline-offset-4"
            href="/"
            >View All</Link>
        </div>
        <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 md:px-20 mb-20">
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
        </div>
    </div>
  )
}

export default Auction;