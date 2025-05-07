"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Sonic from "../public/assets/icons/sonic.jpg"
import OP from "../public/assets/icons/op.svg"
import BNB from "../public/assets/icons/bnb.svg"
import ETH from "../public/assets/icons/eth.png"
import SEI from "../public/assets/icons/sei2.png"
import SONEIUM from "../public/assets/icons/soneium.png"
import Image from "next/image"
import { ChevronDown } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChain } from "../app/features/bridge/bridgeSlice";
import { RootState } from "@/app/store";
import { useWalletClient } from "wagmi"

const blockchains = [
 // { id: "Sonic Blaze Testnet", name: "Sonic", icon: Sonic },
  { id: "Base Sepolia", name: "Base", icon: "https://assets.coingecko.com/nft_contracts/images/2989/small_2x/base-introduced.png?1707289780" },
  { id: "Avalanche Fuji", name: "Avalanche", icon: "https://assets.coingecko.com/coins/images/12559/standard/Avalanche_Circle_RedWhite_Trans.png?1696512369" },

  { id: "Polygon Amoy", name: "Polygon", icon: "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912" },
  { id: "OP Sepolia", name: "Optimism", icon: OP },
  { id: "Arbitrum Sepolia", name: "Arbitrum", icon: "https://assets.coingecko.com/coins/images/16547/standard/arb.jpg?1721358242" },
  
  { id: "Sepolia", name: "Ethereum", icon: ETH },
  //{ id: "Soneium Minato", name: "Soneium", icon: SONEIUM },
  { id: "Binance Smart Chain Testnet", name: "BNB", icon: BNB },

  // Configure pathways from and to Sonic Blaze and Soneium Minato
]

interface BlockchainSelectionProps {
  onBridgeNow: () => void;
}

export function BlockchainSelection({ onBridgeNow }: BlockchainSelectionProps) {
  const dispatch = useDispatch();
  const { selectedChain } = useSelector((state: RootState) => state.bridge);
  const [isExpanded, setIsExpanded] = useState(false);

  const walletClient = useWalletClient();
  const chainName = walletClient?.data?.chain?.name;
  console.log("ChainName", chainName);

  const filteredBlockchains = chainName
    ? blockchains.filter(
        (chain) => chain.id.toLowerCase() !== chainName.toLowerCase()
      )
    : blockchains;

  const handleSelectChain = (chainId: string) => {
    dispatch(setSelectedChain(chainId));
  };

  return (
    <section className="h-1/2 py-4">
      <Card className="bg-white/10 backdrop-blur-lg border-none text-white h-full">
        <CardContent className="p-4 flex flex-col h-full">
          <h2 className="text-xl font-bold mb-4 text-center">Select Destination Blockchain</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 flex-grow">
            {filteredBlockchains.slice(0, isExpanded ? 9 : 3).map((chain) => (
              <motion.button
                key={chain.id}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  selectedChain === chain.id ? "bg-purple600" : "bg-white/5 hover:bg-white/10"
                }`}
                onClick={() => handleSelectChain(chain.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={chain.icon} alt={chain.name} width="40" height="40" className="w-8 h-8 mx-auto mb-1 rounded-full" />
                <p className="text-xs font-medium">{chain.name}</p>
              </motion.button>
            ))}
          </div>
          <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center p-2 text-white/60 hover:text-white mb-2"
        animate={{ rotate: isExpanded ? 180 : 0 }}
      >
        <ChevronDown className="w-6 h-6 -mt-2" />
      </motion.button>

          <Button
            size="sm"
            className="w-full text-sm py-2 bg-gradient-to-r from-purple600 to-pink500 hover:from-purple700 hover:to-pink600 shadow-lg hover:shadow-xl"
            onClick={onBridgeNow}
          >
            Bridge Now
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}

