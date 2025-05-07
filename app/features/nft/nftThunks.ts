
import GET_OWNED_TOKEN_IDS from '@/queries/getOwnedTokenIds';
import { getSubgraphUrl } from '@/utils/chainHelpers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from 'graphql-request';      

interface GetOwnedTokenIdsResponse {
  tokens: {
    tokenId: string;
    tokenURI: string | null;
  }[];
}

export interface NFTMetadata {
  tokenId: string;
  name: string;
  description: string;
  image: string;
}

export const fetchOwnedNFTs = createAsyncThunk<
NFTMetadata[], 
  { ownerAddress: string; contractAddress: string; chainId: number }, 
  { rejectValue: string } 
>(
  'nft/fetchOwnedNFTs',
  async ({ ownerAddress, contractAddress, chainId }, { rejectWithValue }) => {
    try {
      const SUBGRAPH_URL = getSubgraphUrl(chainId);

      if (!SUBGRAPH_URL) {
        throw new Error('Subgraph URL is not defined in environment variables.');
      }

      const variables = {
        owner: ownerAddress.toLowerCase(),
        contract: contractAddress.toLowerCase(),
      };

      const data = await request<GetOwnedTokenIdsResponse>(SUBGRAPH_URL, GET_OWNED_TOKEN_IDS, variables);

      const nftMetadataArr: NFTMetadata[] = [];

      for (let token of data.tokens) {
        const tokenId = token.tokenId;
        let tokenURI = token.tokenURI ? token.tokenURI : 
          `https://arweave.net/yEZJbyNFfcsw-aweLmt8q6lXTJTMgiMLg_1JVM9QpDU/${tokenId}.json`;
        
        let response = await fetch(tokenURI);
        if (!response.ok) {
          throw new Error(`Failed to fetch metadata for token ${tokenId} (status: ${response.status})`);
        }
        let meta = await response.json();

        nftMetadataArr.push({
          tokenId: tokenId,
          name: meta.name || 'Cult Bears NFT',
          description: meta.description || '',
          image: meta.image || '/default-nft.png'
        });
      }

      return nftMetadataArr;
    } catch (error: any) {
      console.error('Error fetching owned tokenIds:', error);
      return rejectWithValue(error.message || 'Failed to fetch owned tokenIds.');
    }
  }
);
