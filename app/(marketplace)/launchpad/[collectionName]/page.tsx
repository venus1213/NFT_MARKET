"use client"

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface CollectionData {
    name: string;
    description: string;
  }

const CollectionPage = () => {
  const router = useRouter();
  const { collectionName } = router.query;
  const [collectionData, setCollectionData] = useState<CollectionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (collectionName) {
      // Fetch collection data based on collectionName
      // Replace the URL with your actual API endpoint
      fetch(`/api/collections/${collectionName}`)
        .then((res) => res.json())
        .then((data) => {
          setCollectionData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching collection data:', error);
          setLoading(false);
        });
    }
  }, [collectionName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!collectionData) {
    return <div>Collection not found.</div>;
  }

  return (
    <div>
      <h1>{collectionData.name}</h1>
      <p>{collectionData.description}</p>
      {/* Render your NFT items here */}
    </div>
  );
};

export default CollectionPage;
