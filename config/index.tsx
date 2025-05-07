import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { arbitrumSepolia, avalancheFuji, baseSepolia, bscTestnet, optimismSepolia, polygonAmoy, seiTestnet, sepolia, soneiumMinato } from 'viem/chains'
import { sonicTestnet } from './getPublicClient'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [sepolia, baseSepolia, optimismSepolia, arbitrumSepolia, avalancheFuji, sonicTestnet, polygonAmoy, bscTestnet, soneiumMinato]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig