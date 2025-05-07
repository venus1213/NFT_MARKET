'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Search } from 'lucide-react'
import TypewriiterComponoent from "typewriter-effect"

const DynamicCanvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), {
  ssr: false
})
const DynamicScene = dynamic(() => import('./scene'), { ssr: false })

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('')
  const searchSuggestions = ['Cult Bears', 'Digital Art', 'Collectibles']
  const searchIndex = useRef(0)

  const gradientProps = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 5000 },
    loop: true,
  })

  return (
    <div className="relative pt-10 bg-gradient-to-tr from-blue/80  via-black/80 to-black w-full overflow-hidden">
        <animated.div
        style={{
        position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(45deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
          backgroundSize: '200% 200%',
          opacity: 0.7,
          ...gradientProps,
        }}
      />

      <div className="relative z-5 px-5 md:px-10 lg:px-20 xl:px-[120px] mx-auto pt-12 md:py-12 xl:py-0">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="mt-2 -mb-4 md:-mb-0 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple400 to-purple600 text-start">
              Best NFT marketplace for
              <span className="block text-purple500"> <TypewriiterComponoent 
                options={{
                    strings: [
                        "Omnichain Art.",
                        "Omnichain Gaming.",
                        "Omnichain Memes.",
                        "Ominchain Culture.",
                    ],
                    autoStart: true,
                    loop: true
                }}
                /></span>
            </h1>
            
            <p className="text-gray-300 md:text-xl text-start">
              Leading Marketplace For all things Omnichain—get ready for a wave of innovation! 🎨
            </p>

            <div className="relative max-w-md">
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
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple500 transition-all"
              />
              <Search className="absolute right-3 top-3 text-gray-400" />
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-purple600 hover:bg-purple700 text-white px-8 py-3 text-lg rounded-[8px] transition-all hover:scale-105"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(147, 51, 234, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Explore
              </Button>
              <Button
                className="border-purple500 border-[1px] text-purple500 bg-white hover:bg-purple500/10 px-8 py-3 text-lg rounded-[8px] transition-all hover:scale-105"
              >
                Create
              </Button>
            </div>
          </motion.div>

          <div className="h-[400px] w-[400px] md:h-[450px] md:w-[500px] rounded-xl z-10 overflow-hidden">
            <DynamicCanvas>
            <DynamicScene />
            </DynamicCanvas>
          </div>
        </div>
      </div>
    </div>
  )
}