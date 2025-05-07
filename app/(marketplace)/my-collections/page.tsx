import FeaturedCollections from '@/components/featured-collections'
import { Button } from '@/components/ui/button'
import HeaderSection from '@/components/ui/header-section'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderSection 
      title='My Collections' 
      category='Home /' 
      subtitle='Profile' 
      />
    <div className='mt-10'>
    <div className='flex justify-between px-10 md:px-20'>

    <h2 className={`text-2xl font-semibold text-purple mb-10`}>
            My Collections
        </h2>
      <Button className="bg-purple hover:bg-purple text-white rounded-full">Create Collection</Button>
      </div>

      <FeaturedCollections grids="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center pb-10 px-5 lg:px-10 xl:px-20"  />

      <div className="flex justify-center mt-10">
      <Button
      className="bg-purple hover:bg-purple text-white rounded-full px-8 py-6 text-lg font-light"
      >
      Load More
      </Button>
     </div>
    </div>
    </div>
  )
}

export default page