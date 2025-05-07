"use client";

import { ChevronDownIcon, ChevronUpIcon, Search, SunMoon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from './ui/button';
import { MobileNav } from './mobile-navigation';
import { Input } from "@/components/ui/input"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import LOGO from "../public/assets/icons/cult-markets.png";
import { useRef, useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const searchSuggestions = ['Search Collections', 'Cult Bears']
  const searchIndex = useRef(0)

  const router = useRouter();
 
  return (
    <header className="fixed z-20 sm:px-8 lg:px-16 px-4 py-4 md:py-4 w-full bg-black">
    <nav className='flex justify-between items-center md:w-full'>
        <a href="/">
        <div className='flex gap-2 md:gap-4'>
          <Image
            src={LOGO}
            alt="Logo"
            width="40"
            height="40"
            className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"
            />
     
        <Image
            src="/assets/logo.svg"
            alt="Logo"
            width="50"
            height="50"
            className="w-[120px] lg:w-[150px] h-[20px] md:h-[50px] mt-3 md:mt-0 mr-0 md:mr-5"
            />
          </div>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-xl:hidden'>
        <li>
            
        <div className='flex gap-10 md:gap-20 justify-between'>
        <div className='flex gap-4 md:gap-6 lg:gap-8 xl:gap-10'>

            {/* Search Bar */}
          <div className="relative -mr-10">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={searchSuggestions[searchIndex.current]}
                onFocus={() => {
                  const interval = setInterval(() => {
                    searchIndex.current = (searchIndex.current + 1) % searchSuggestions.length
                  }, 2000)
                  return () => clearInterval(interval)
                }}
                className="text-sm  w-[150px] xl:w-[200px] pl-10 pr-4 py-2 mt-1 rounded-[4px] bg-black border border-[#857f94]/60 placeholder:text-[#857f94] hover:text-white text-white focus:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple500 transition-all"
              />
              <Search className="absolute left-2.5 top-3 text-white w-5 h-5" />
            </div>

           {/* Main Navigation */}
           <NavigationMenu className="ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-base font-semibold text-white hover:text-white focus:text-white'>Discover</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] bg-black">
                  <div className="grid gap-1">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/explore-nfts"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-lightBlack hover:text-accent-foreground focus:bg-lightBlack focus:text-accent-foreground"
                      >
                        <div className="text-medium font-semibold text-purple leading-none">Explore ONFTs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                          Browse through our curated collection of ONFTs
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/explore-collections"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-lightBlack hover:text-accent-foreground focus:bg-lightBlack focus:text-accent-foreground"
                      >
                        <div className="text-medium font-semibold text-purple leading-none">Collections</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                          View trending and popular ONFT collections
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-base font-semibold text-white hover:text-white focus:text-white'>Mint</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 bg-black">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/launchpad/cultbears"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-lightBlack hover:text-accent-foreground focus:bg-lightBlack focus:text-accent-foreground"
                    >
                      <div className="text-medium font-semibold text-purple leading-none">Launchpad</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                      Explore recent and upcoming launches 
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/launchpad"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-lightBlack hover:text-accent-foreground focus:bg-lightBlack focus:text-accent-foreground"
                    >
                      <div className="text-medium font-semibold text-purple leading-none">ONFT Editions</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                      Discover active ONFT Editions available now
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-base font-semibold text-white hover:text-white focus:text-white'>Bridge</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 bg-black">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/bridge-nfts"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-lightBlack hover:text-accent-foreground focus:bg-lightBlack focus:text-accent-foreground"
                    >
                      <div className="text-medium font-semibold text-purple leading-none">Bridge NFTs</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                        Transfer your NFTs across different blockchains
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='hidden text-base font-semibold text-white hover:text-white focus:text-white'>Stats</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 bg-black">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/collection-stats"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-lightBlack hover:text-accent-foreground focus:bg-lightBlack focus:text-accent-foreground"
                    >
                      <div className="text-medium font-semibold text-purple leading-none">Collection Stats</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                        View detailed statistics for collections
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/activity"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-lightBlack hover:text-accent-foreground focus:bg-lightBlack focus:text-accent-foreground"
                    >
                      <div className="text-medium font-semibold text-purple leading-none">Activity</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                        Track recent sales and market activity
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button 
         className='hover:bg-lightBlack hover:text-white rounded-lg font-semibold cursor-pointer text-white mr-5 pt-2'
         onClick={() => router.push("/create")}
         >Create
         </Button>
          </div>
            <div className='flex gap-5'>
             <Image 
               onClick={() => router.push("/my-profile")}
               src="/assets/icons/cult-bears.png"
               width={50}
               height={50}
               alt="Avatar"
               className='-mt-1 rounded-full hover:shadow-2xl fixed -ml-20'
                />
                <appkit-button />
             </div>
            </div>
          </li>
         </ul>
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header;
