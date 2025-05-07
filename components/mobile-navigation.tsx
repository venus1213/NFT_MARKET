"use client"

import { useRef, useState } from 'react';
import { ExternalLink, Search } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import xhoney from "../public/assets/icons/xhoneyLogo.png"
import blueDiamond from "../public/assets/icons/blue-diamond.png"
import Hamburger from "/public/assets/icons/hamburger.svg";
import { Input } from "./ui/input"
import LOGO from "../public/assets/icons/cult-markets.png";

interface NavItem {
  title: string
  href: string
  tag?: string
  icon?: React.ReactNode
}

interface NavSection {
  title: string
  items: NavItem[]
}

{
  /*
  title: "Rewards", 
  href: "/rewards", 
  tag: "XHNY", 
  icon: <Image src={blueDiamond} className="w-6 h-6" alt="Diamond" /> 
  */
}

const navSections: NavSection[] = [
  {
    title: "Discover",
    items: [
      { title: "Collections", href: "/explore-collections" },
      { title: "ONFTs", href: "/explore-nfts" },
    ],
  },
  {
    title: "Mint",
    items: [
      { title: "Launchpad", href: "/launchpad/cultbears" },
      { title: "ONFT Editions", href: "/launchpad" },
    ],
  },
  {
    title: "Bridge",
    items: [
      { title: "Cult Bears", href: "/bridge-nfts" },
      { 
        title: "XHONEY", 
        href: "https://www.xhoney.io/bridge", 
        tag: "XHNY" 
      },
    ],
  },
]

{/*
  title: "Creator Dashboard",
  items: [
    { title: "Presale", href: "#" },
  ],
*/}

const isExternalLink = (url: string): boolean => {
  try {
    const linkUrl = new URL(url, typeof window !== 'undefined' ? window.location.origin : '')
    return linkUrl.origin !== window.location.origin
  } catch (e) {
    return false 
  }
}

export function MobileNav() {
  const [searchValue, setSearchValue] = useState('')
  const searchSuggestions = ['Search Collections', 'Cult Bears']
  const searchIndex = useRef(0)
  return (
    <div className="flex gap-2 min-[380px]:gap-2">
          {/* Search Bar */}
          <div className="relative hidden sm:flex xl:hidden ">
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
                className="w-[150px] md:w-[200px] pl-8 pr-4 py-1 rounded-[4px] bg-black border border-[#857f94]/60  placeholder:text-[#857f94] hover:text-white text-white focus:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple500 transition-all"
              />
              <Search className="absolute left-2 top-2 text-white w-5 h-5" />
            </div>

      <div className="xl:hidden">
    <appkit-button size="sm" label="Connect Wallet" />
    </div>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-slate-300 xl:hidden bg-[#0d0d0d] hover:bg-lightBlack rounded-lg border-[#191919] border-2"  size="sm">
        <Image 
        src={Hamburger} width={15} height={15} alt="Hamburger"
        />

          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-full flex-col bg-[#13111C] pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-4 pr-6">
          <SheetTitle className="text-2xl font-bold text-white">
          <a href="/">
          <div className='flex gap-3'>
          <Image
            src={LOGO}
            alt="Logo"
            width="40"
            height="40"
            className="w-[40px] h-[40px] rounded-full"
            />
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width="200"
            height="200"
            className="w-[120px] h-[20px] md:h-[50px]  md:flex mt-2"
            />
          </div>
          </a>
          </SheetTitle>
          <Tabs defaultValue="collections" className="w-full text-purple">
            <TabsList className="w-full bg-[#1C1A24]">
              <TabsTrigger value="collections" className="w-full text-white">
                Collections
              </TabsTrigger>
              <TabsTrigger value="ofts" className="w-full text-white hidden">
                OFTs
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </SheetHeader>
        <div className="flex-1 overflow-auto py-4">
          {navSections.map((section) => (
            <div key={section.title} className="px-6 py-4">
              <h2 className="mb-2 text-lg font-semibold text-white">{section.title}</h2>
              {section.items.map((item, index) => {
                const external = isExternalLink(item.href)
                const isLaunchpad = item.title === "Launchpad"
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors hover:bg-[#1C1A24]",
                      {
                        "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500  to-pink500 font-bold text-lg via-purple500": isLaunchpad,
                        "text-white": !isLaunchpad,
                      },
                      "text-base"
                    )}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    {item.tag && (
                      <span className="ml-auto flex items-center rounded bg-[#e7c88e] px-1.5 py-0.5 text-xs font-medium">
                        {item.tag === 'XHNY' && (
                          <Image src={xhoney} alt="XHONEY" className="mr-1 h-3 w-3" />
                        )}
                        {item.tag}
                      </span>
                    )}
                    {external && (
                      <ExternalLink 
                        className="ml-2 h-4 w-4 text-gray-400" 
                        aria-label="Opens in a new tab" 
                      />
                    )}
                  </a>
                )
              })}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
    </div>
  )
}
