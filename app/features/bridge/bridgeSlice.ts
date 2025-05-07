
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BridgeState {
  selectedTokenId: number | null;
  selectedChain: string | null;
}

const initialState: BridgeState = {
  selectedTokenId: null,
  selectedChain: null,
};

export const bridgeSlice = createSlice({
  name: "bridge",
  initialState,
  reducers: {
    setSelectedTokenId: (state, action: PayloadAction<number>) => {
      state.selectedTokenId = action.payload;
    },
    setSelectedChain: (state, action: PayloadAction<string>) => {
      state.selectedChain = action.payload;
    },
    clearBridgeState: (state) => {
      state.selectedTokenId = null;
      state.selectedChain = null;
    },
  },
});

export const { setSelectedTokenId, setSelectedChain, clearBridgeState } =
  bridgeSlice.actions;

export default bridgeSlice.reducer;

