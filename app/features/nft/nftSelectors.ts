
import { createSelector } from 'reselect';
import { RootState } from '@/app/store';

const selectNFTState = (state: RootState) => state.nft;

export const selectNFTItems = createSelector(
  [selectNFTState],
  (nftState) => nftState.items
);

export const selectNFTLoading = createSelector(
  [selectNFTState],
  (nftState) => nftState.loading
);

export const selectNFTError = createSelector(
  [selectNFTState],
  (nftState) => nftState.error
);