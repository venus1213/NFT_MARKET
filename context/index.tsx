'use client'

import { wagmiAdapter, projectId } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { avalancheFuji, baseSepolia, seiTestnet, soneiumMinato, fantomSonicTestnet, arbitrumSepolia, optimismSepolia, polygonAmoy, bscTestnet, sepolia } from 'viem/chains'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'
import { sonicTestnet } from '@/config/getPublicClient'
import OP from "../public/assets/icons/op.svg"
import BNB from "../public/assets/icons/bnb.svg"
import ETH from "../public/assets/icons/eth.png"
import SONEIUM from "../public/assets/icons/soneium.png"
import { ApolloProvider } from '@apollo/client'
import apolloClient from '@/config/apolloClient'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'Cult Markets',
  description: 'Cult Markets is an innovative ONFT marketplace with multi-chain support, seamless cross-chain transactions, AI creation tools, and a gaming-focused, user-friendly design that emphasizes scalability, compliance, and education.',
  url: 'https://cultmarkets.com', 
  // Replace with custom icon URL
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [sepolia, baseSepolia, optimismSepolia, arbitrumSepolia, avalancheFuji, sonicTestnet, soneiumMinato, polygonAmoy, bscTestnet],
  defaultNetwork: baseSepolia,
  metadata: metadata,
  themeVariables: {
    '--w3m-accent': '#9B4AEB',
    '--w3m-border-radius-master': '1px'
  },
  features: {
    analytics: true, 
    email: false, 
    socials: [],
    emailShowWallets: false,
  },
  chainImages: {
    11155111: ETH.src,
    57054: "https://ugc.production.linktr.ee/60d974f5-bb93-4a96-80a1-ed70396cbb0e_mGq9bwZW-400x400--1-.jpeg?io=true&size=avatar-v3_0",
    43113: "https://assets.coingecko.com/coins/images/12559/standard/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    84532: "https://assets.coingecko.com/nft_contracts/images/2989/small_2x/base-introduced.png?1707289780",
    1328: "https://assets.coingecko.com/coins/images/28205/standard/Sei_Logo_-_Transparent.png?1696527207",
    421_614: "https://assets.coingecko.com/coins/images/16547/standard/arb.jpg?1721358242",
    80002: "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912",
    11155420: OP.src,
    97: BNB.src,
    1946: SONEIUM.src
  },
  allWallets: 'HIDE',
})

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
       <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ApolloProvider>
    </WagmiProvider>
  )
}

export default ContextProvider