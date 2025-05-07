
import { getPublicClient } from "@/config/getPublicClient";

export interface NFTMetadata {
    id: number; 
    name: string;
    description: string;
    image: string;
  }
  
  export const fetchTokenURI = async (
    contractAddress: `0x${string}`,
    tokenId: number
  ): Promise<string> => {
    const publicClient = getPublicClient("Avalanche Fuji");
    if (!publicClient) {
      throw new Error("Public client not available");
    }
  
    const response = await publicClient.readContract({
      address: contractAddress,
      abi: [
        {
          name: 'tokenURI',
          inputs: [{ name: 'tokenId', type: 'uint256' }],
          outputs: [{ name: '', type: 'string' }],
          stateMutability: 'view',
          type: 'function',
        },
      ] as const,
      functionName: 'tokenURI',
      args: [tokenId],
    });
  
    if (typeof response !== 'string') {
      throw new Error('Invalid tokenURI response');
    }
  
    return response;
  };
  
  export const fetchMetadata = async (tokenURI: string): Promise<Omit<NFTMetadata, 'id'>> => {
    const response = await fetch(tokenURI);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
  
    const { id, ...rest } = json;
  
    return {
      name: rest.name || 'Untitled',
      description: rest.description || '',
      image: rest.image || '',
    };
  };
  