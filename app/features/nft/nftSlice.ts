import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOwnedNFTs, NFTMetadata } from './nftThunks';
import { mintMultiple } from './mintMultipleThunk';
import { quoteSend } from './quoteSendThunk';
import { send } from './sendThunk';

interface NFTState {
  items: NFTMetadata[];  
  loading: boolean;
  error: string | null;
  mintResult?: unknown;
  sendResult?: unknown;
  quoteResult?: unknown;
  lastRefresh: number;
}

const initialState: NFTState = {
  items: [],
  loading: false,
  error: null,
  lastRefresh: Date.now(),
};

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    clearNFTs: (state) => {
      state.items = [];
      state.error = null;
    },
    refreshNFTs: (state) => {
      state.lastRefresh = Date.now();
    },
  },
  extraReducers: (builder) => {

    // Handle fetchOwnedNFTs
    builder
    .addCase(fetchOwnedNFTs.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      fetchOwnedNFTs.fulfilled,
      (state, action: PayloadAction<NFTMetadata[]>) => {
        state.loading = false;
        state.items = action.payload;
      }
    )
    .addCase(fetchOwnedNFTs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Handle mintMultiple
    builder
    .addCase(mintMultiple.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(mintMultiple.fulfilled, (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      // Optionally, store the mint result (e.g., transaction receipt)
      state.mintResult = action.payload;
    })
    .addCase(mintMultiple.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Handle sendTransaction
     builder
    .addCase(send.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(send.fulfilled, (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.sendResult = action.payload; // Store the result of the send transaction
    })
    .addCase(send.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      })
  
    // Handle quoteSend
    builder
    .addCase(quoteSend.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(quoteSend.fulfilled, (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.quoteResult = action.payload; // Store the result of the quoteSend
    })
    .addCase(quoteSend.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { clearNFTs, refreshNFTs } = nftSlice.actions;

export default nftSlice.reducer;
