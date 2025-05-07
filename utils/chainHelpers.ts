
const AVALANCHE_FUJI_ID = 43113; 
const BASE_SEPOLIA_ID = 84532;    
const POLYGON_AMOY_ID = 80002;
const OPTIMISM_SEPOLIA_ID = 11155420;
const ARBITRUM_SEPOLIA_ID = 421614;
const ETHEREUM_SEPOLIA_ID = 11155111;
const BINANCE_SMARTCHAIN_ID = 97;      
const SONIC_TESTNET_ID = 57054;     
const SONEIUM_MINATO_ID = 1946;

export interface explorers_urls {
  BASE_SEPOLIA: string;
  AVALANCHE_FUJI: string;
  POLYGON_AMOY: string;
  OPTIMISM_SEPOLIA: string;
  ARBITRUM_SEPOLIA: string;
  ETHEREUM_SEPOLIA: string;
  BINANCE_SMARTCHAIN: string;
  SONIC_TESTNET: string;
  SONEIUM_MINATO: string;
}     

const CONTRACT_ADDRESS = "0xb1a40746dc35d00ECE291895716D7f20Cb747f14"

export interface explorers_urls {
  BASE_SEPOLIA: string;
  AVALANCHE_FUJI: string;
  POLYGON_AMOY: string;
  OPTIMISM_SEPOLIA: string;
  ARBITRUM_SEPOLIA: string;
  ETHEREUM_SEPOLIA: string;
  BINANCE_SMARTCHAIN: string;
  SONIC_TESTNET: string;
  SONEIUM_MINATO: string;
}

export const explorers: explorers_urls = {
  BASE_SEPOLIA: "https://sepolia.basescan.org/",
  AVALANCHE_FUJI: "https://testnet.snowtrace.io/",
  POLYGON_AMOY: "https://amoy.polygonscan.com/",
  OPTIMISM_SEPOLIA: "https://sepolia-optimism.etherscan.io/",
  ARBITRUM_SEPOLIA: "https://sepolia.arbiscan.io/",
  ETHEREUM_SEPOLIA: "https://sepolia.etherscan.io/",
  BINANCE_SMARTCHAIN: "https://testnet.bscscan.com/",
  SONIC_TESTNET: "https://testnet.sonicscan.org/",
  SONEIUM_MINATO: "https://1946.testnet.routescan.io/"
}

export const LZ_EXPLORER_URL = "https://testnet.layerzeroscan.com/"

export function getExplorerUrl(chainId: number): string {
  if (chainId === AVALANCHE_FUJI_ID) {
    return explorers.AVALANCHE_FUJI!;
  } else if (chainId === BASE_SEPOLIA_ID) {
    return explorers.BASE_SEPOLIA!;
  } else if (chainId === POLYGON_AMOY_ID) {
    return explorers.POLYGON_AMOY!;
  } else if (chainId === OPTIMISM_SEPOLIA_ID) {
    return explorers.OPTIMISM_SEPOLIA!;
  } else if (chainId === ARBITRUM_SEPOLIA_ID) {
    return explorers.ARBITRUM_SEPOLIA!;
  } else if (chainId === ETHEREUM_SEPOLIA_ID) {
    return explorers.ETHEREUM_SEPOLIA!;
  } else if (chainId === BINANCE_SMARTCHAIN_ID) {
    return explorers.BINANCE_SMARTCHAIN!;
  } else if (chainId === SONIC_TESTNET_ID) {
    return explorers.SONIC_TESTNET!;
  }  else if (chainId === SONEIUM_MINATO_ID) {
    return explorers.SONEIUM_MINATO!;
  }

  return explorers.BASE_SEPOLIA!;
}


export function getContractAddress(chainId: number): string {
    if (chainId === AVALANCHE_FUJI_ID) {
      return CONTRACT_ADDRESS!;
    } else if (chainId === BASE_SEPOLIA_ID || chainId === SONIC_TESTNET_ID) {
      return CONTRACT_ADDRESS!;
    }
    return CONTRACT_ADDRESS!;
}

export function getSubgraphUrl(chainId: number): string {
  if (chainId === AVALANCHE_FUJI_ID) {
    return process.env.NEXT_PUBLIC_SUBGRAPH_URL_AVALANCHE_FUJI!;
  } else if (chainId === BASE_SEPOLIA_ID) {
    return process.env.NEXT_PUBLIC_SUBGRAPH_URL_BASE_SEPOLIA!;
  } else if (chainId === POLYGON_AMOY_ID) {
    return process.env.NEXT_PUBLIC_SUBGRAPH_URL_POLYGON_AMOY!;
  } else if (chainId === OPTIMISM_SEPOLIA_ID) {
    return process.env.NEXT_PUBLIC_SUBGRAPH_URL_OPTIMISM_SEPOLIA!;
  } else if (chainId === ARBITRUM_SEPOLIA_ID) {
    return process.env.NEXT_PUBLIC_SUBGRAPH_URL_ARBITRUM_SEPOLIA!;
  } else if (chainId === ETHEREUM_SEPOLIA_ID) {
    return process.env.NEXT_PUBLIC_SUBGRAPH_URL_ETHEREUM_SEPOLIA!;
  } else if (chainId === BINANCE_SMARTCHAIN_ID) {
    return process.env.NEXT_PUBLIC_SUBGRAPH_URL_BINANCE_SMARTCHAIN!;
  } else if (chainId === SONIC_TESTNET_ID) {
    return process.env.NEXT_PUBLIC_SUBGRAPH_URL_SONIC_BLAZE!;
  } else if (chainId === SONEIUM_MINATO_ID) {
    return process.env.NEXT_PUBLIC_SUBGRAPH_URL_SONEIUM_MINATO!;
  }

  return process.env.NEXT_PUBLIC_SUBGRAPH_URL_BASE_SEPOLIA!;
}
  
