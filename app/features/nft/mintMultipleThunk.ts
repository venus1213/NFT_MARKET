import { createAsyncThunk } from '@reduxjs/toolkit';
import ContractABI from '@/config/ABIs/CultBearsV2.json';
import { getContractAddress } from '@/utils/chainHelpers';
import { getPublicClient } from "@/config/getPublicClient";
import { ChainNames } from '@/utils/chainUtils';
import { deepSerialize } from '@/utils/helpers';

export interface MintMultipleArgs {
  mintAmount: number;  
  rarity: number;                   
  chainId: number;                    
  account: string;     
  walletClient: any;   
  value: any;         
}

export const mintMultiple = createAsyncThunk<
  unknown,
  MintMultipleArgs,
  { rejectValue: string }
>(
  "nft/mintMultiple",
  async ({ mintAmount, rarity, chainId, walletClient, value }, { rejectWithValue }) => {
    try {
      const chainName = walletClient?.data?.chain?.name;
      console.log("ChainName", chainName);
      const publicClient = getPublicClient(chainName);
      if (!publicClient) {
        throw new Error("Public client not available");
      }
      if (!walletClient || !walletClient.data) {
        throw new Error("Wallet client not available");
      }

      const contractAddress = getContractAddress(chainId);
      if (!contractAddress) {
        throw new Error("Contract address is not defined for this network.");
      }

      const simulationResult = await publicClient.simulateContract({
        account: walletClient.data.account,
        address: contractAddress,
        abi: [
          {
            inputs: [
              {
                internalType: "uint256",
                name: "mintAmount",
                type: "uint256"
              },
              {
                internalType: "enum CultBearsV2Avalanche.TokenRarityType",
                name: "rarity",
                type: "uint8"
              }
            ],
            name: "mintMultiple",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
        ] as const,
        functionName: "mintMultiple",
        args: [mintAmount, rarity],
        value: value
      });

      const { request } = simulationResult;

      const txHash = await walletClient.data.writeContract(request);
      if (!txHash) {
        throw new Error("Transaction failed to be sent.");
      }

      const receipt = await publicClient.waitForTransactionReceipt({
        hash: txHash,
        confirmations: 1,
      });

      if (receipt.status === "success") {
        // Deep serialize the receipt so that all BigInt values become strings.
        return deepSerialize(receipt);
      } else {
        throw new Error("Transaction failed on-chain");
      }
    } catch (error: any) {
      console.error("Error minting multiple NFTs:", error);
      return rejectWithValue(error.message || "Failed to mint multiple NFTs.");
    }
  }
);
