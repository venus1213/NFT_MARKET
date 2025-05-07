import { gql } from 'graphql-request';

const GET_RARITY_STATS = gql`
query GetRarityStats($id: ID!) {
  rarityStats(id: $id) {
    rarity
    minted
  }
}
`;

export default GET_RARITY_STATS;