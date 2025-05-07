"use client";

import { ArrowBigDownIcon, ArrowDown, ChevronDown, ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PopularCollections from "./popular-collections";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const HotCollection = () => {
  return (
  <div className="px-5 md:px-20 pt-10 bg-black">
          <div className="flex justify-between">
              <h2 className="text-2xl text-white">Popular Collections in<span className="text-purple flex mt-2 cursor-pointer">24 Hours <ChevronDown />
              </span>
              </h2>
              <Link
                  href="/"
                  className="text-purple cursor-pointer hover:underline hover:underline-offset-4"
              >
                  View All
              </Link>
          </div>





           <PopularCollections />


       

          
              <div className="flex flex-col p-10">
              <h2 className="flex flex-row text-2xl text-center text-white">NFT's Trending in 
                  <span className="flex text-purple text-center cursor-pointer">
                      &nbsp; All Categories
                      <ChevronDown className="" />
                  </span>
              </h2>
              <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-20 pb-10">
                  <div className='bg-slate-400/60 rounded-xl text-white'>
                      <Image
                          src="/assets/bear.gif"
                          alt="NFT Image"
                          width={200}
                          height={200}
                          unoptimized
                          className="w-full rounded-xl" />
                      <div className='flex justify-start px-4 pt-5'>
                          <Image
                              src="/assets/icons/cult-bears.png"
                              alt="Collection Logo"
                              width={60}
                              height={60}
                              className="rounded-full my-3 ml-3" />
                          <div className="flex flex-col items-start pt-3 pl-6">
                              <h3 className=''>Cult Bears DAO</h3>
                              <p className="text-purple font-semibold">Omnichain</p>
                          </div>
                      </div>
                      <div className='flex pb-5 px-4 flex-1 gap-2 justify-between'>

                      </div>
                  </div>
                  <div className='bg-slate-400/60 rounded-xl text-white'>
                      <Image
                          src="/assets/bear.gif"
                          alt="NFT Image"
                          width={200}
                          height={200}
                          unoptimized
                          className="w-full rounded-xl" />
                      <div className='flex justify-start px-4 pt-5'>
                          <Image
                              src="/assets/icons/cult-bears.png"
                              alt="Collection Logo"
                              width={60}
                              height={60}
                              className="rounded-full my-3 ml-3" />
                          <div className="flex flex-col items-start pt-3 pl-6">
                              <h3 className=''>Cult Bears DAO</h3>
                              <p className="text-purple font-semibold">Omnichain</p>
                          </div>
                      </div>
                      <div className='flex pb-5 px-4 flex-1 gap-2 justify-between'>

                      </div>
                  </div>
                  <div className='bg-slate-400/60 rounded-xl text-white'>
                      <Image
                          src="/assets/bear.gif"
                          alt="NFT Image"
                          width={200}
                          height={200}
                          unoptimized
                          className="w-full rounded-xl" />
                      <div className='flex justify-start px-4 pt-5'>
                          <Image
                              src="/assets/icons/cult-bears.png"
                              alt="Collection Logo"
                              width={60}
                              height={60}
                              className="rounded-full my-3 ml-3" />
                          <div className="flex flex-col items-start pt-3 pl-6">
                              <h3 className=''>Cult Bears DAO</h3>
                              <p className="text-purple font-semibold">Omnichain</p>
                          </div>
                      </div>
                      <div className='flex pb-5 px-4 flex-1 gap-2 justify-between'>
                      </div>
                  </div>
                  <div className='bg-slate-400/60 rounded-xl text-white'>
                      <Image
                          src="/assets/bear.gif"
                          alt="NFT Image"
                          width={200}
                          height={200}
                          unoptimized
                          className="w-full rounded-xl" />
                      <div className='flex justify-start px-4 pt-5'>
                          <Image
                              src="/assets/icons/cult-bears.png"
                              alt="Collection Logo"
                              width={60}
                              height={60}
                              className="rounded-full my-3 ml-3" />
                          <div className="flex flex-col items-start pt-3 pl-6">
                              <h3 className=''>Cult Bears DAO</h3>
                              <p className="text-purple font-semibold">Omnichain</p>
                          </div>
                      </div>
                      <div className='flex pb-5 px-4 flex-1 gap-2 justify-between'>

                      </div>
                  </div>

              </div>
              <div className="flex justify-center text-white gap-4 cursor-pointer">
                  <ChevronLeftCircle />
                  <ChevronRightCircle />
              </div>


              <div className="flex pt-20 justify-between">
                  <h2 className="text-2xl text-white">Explore
                  </h2>
                  <Link
                      href="/"
                      className="text-purple cursor-pointer hover:underline hover:underline-offset-4"
                  >
                      View All
                  </Link>
              </div>
              <div className="grid grid-cols-2 gap-x-4 lg:flex  lg:flex-row md:gap-5">
                  <Button className="text-white bg-purple hover:bg-purple rounded-full mt-10 p-3">
                      All NFT
                  </Button>
                  <Button className="text-white bg-slate-400/60 hover:bg-slate-400/60 rounded-full mt-10 p-3">
                      Sports
                  </Button>
                  <Button className="text-white bg-slate-400/60 hover:bg-slate-400/60  rounded-full mt-10 p-3">
                      Music
                  </Button>
                  <Button className="text-white bg-slate-400/60 hover:bg-slate-400/60 rounded-full mt-10 p-3">
                      Art
                  </Button>
                  <Button className="text-white bg-slate-400/60 hover:bg-slate-400/60 rounded-full mt-10 p-3">
                      Collectibles
                  </Button>
                  <Button className="text-white bg-slate-400/60 hover:bg-slate-400/60 rounded-full mt-10 p-3">
                      Trading Cards
                  </Button>
                  <Button className="text-white bg-slate-400/60 hover:bg-slate-400/60 rounded-full mt-10 p-3">
                      Utility
                  </Button>
                  <Button className="text-white bg-slate-400/60 hover:bg-slate-400/60 rounded-full mt-10 p-3">
                      Photography
                  </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4">
                  <div className="text-white bg-white/20 rounded-xl mt-10 p-5">
                      <div className="pb-5 flex">
                          <Image
                              src="/assets/bear.gif"
                              alt="NFT Image"
                              className="rounded-full"
                              width={50}
                              height={50} 
                              unoptimized
                              />

                          <div className="flex flex-col text-start ml-5">
                              <h2>Collection name</h2>
                              <p className="text-slate-400 font-light">category</p>
                          </div>
                      </div>
                      <div className="flex flex-cols-2 gap-4 justify-center">
                      <div className="flex flex-col gap-4">
                              <Image
                                  src="/assets/bear.gif"
                                  alt="NFT Image"
                                  className="rounded-xl"
                                  width={150}
                                  height={100} 
                                  unoptimized
                                  />
                              <Image
                                  src="/assets/bear.gif"
                                  alt="NFT Image"
                                  className="rounded-xl"
                                  width={150}
                                  height={150} 
                                  unoptimized
                                  />
                                <Image
                                  src="/assets/bear.gif"
                                  alt="NFT Image"
                                  className="rounded-xl"
                                  width={150}
                                  height={150}
                                  unoptimized
                                   />
                                 
                          </div>
                          <div className="flex flex-col gap-4">
                              <Image
                                  src="/assets/bear.gif"
                                  alt="NFT Image"
                                  className="rounded-xl"
                                  width={150}
                                  height={100} 
                                  unoptimized
                                  />
                              <Image
                                  src="/assets/bear.gif"
                                  alt="NFT Image"
                                  className="rounded-xl"
                                  width={150}
                                  height={150} 
                                  unoptimized
                                  />
                                    <Image
                                  src="/assets/bear.gif"
                                  alt="NFT Image"
                                  className="rounded-xl"
                                  width={150}
                                  height={150} 
                                  unoptimized
                                  />
                          </div>
                      </div>
                  </div>
                  <div>
                  </div>
              </div>
              <div className="flex justify-center text-white gap-4 cursor-pointer pb-10">
              <ChevronLeftCircle />
              <ChevronRightCircle />
          </div>
           </div>
            </div>
             
  )
}

export default HotCollection;