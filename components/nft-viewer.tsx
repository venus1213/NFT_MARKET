import { useState, useEffect } from 'react';
import { getPublicClient } from '@/config/getPublicClient';
import Image from 'next/image';

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
}

interface NFTViewerProps {
  contractAddress: `0x${string}`;
  tokenId: number;
}

const NFTViewer: React.FC<NFTViewerProps> = ({ contractAddress, tokenId }) => {
  const [tokenURI, setTokenURI] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<NFTMetadata | null>(null);

  // Fetch the token URI from the contract
  useEffect(() => {
    const publicClient = getPublicClient("Avalanche Fuji");
    if (!publicClient) return;

    const getNFTTokenURI = async (tid: number) => {
      try {
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
          args: [tid],
        });

        if (typeof response === 'string') {
          setTokenURI(response);
        } else {
          console.warn('Token URI response was not a string:', response);
        }
      } catch (error) {
        console.error("Error fetching token URI:", error);
      }
    };

    getNFTTokenURI(tokenId);
  }, [contractAddress, tokenId]);

  // Fetch the metadata from the URI
  useEffect(() => {
    const fetchMetadata = async () => {
      if (tokenURI && typeof tokenURI === 'string') {
        try {
          const response = await fetch(tokenURI);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const json = await response.json();

          // Validate or cast `json` to `NFTMetadata` as needed
          const fetchedMetadata: NFTMetadata = {
            name: json.name || 'Untitled',
            description: json.description || '',
            image: json.image || ''
          };

          setMetadata(fetchedMetadata);
        } catch (error) {
          console.error('Error fetching metadata:', error);
        }
      }
    };

    fetchMetadata();
  }, [tokenURI]);

  return (
    <div>
      {metadata ? (
        <div>
          <Image src={metadata.image} alt={metadata.name} width="300" height="300" className="w-full h-32 object-cover rounded-lg mb-2" />
        </div>
      ) : (
        <p>No metadata available for this token.</p>
      )}
    </div>
  );
};

export default NFTViewer;
