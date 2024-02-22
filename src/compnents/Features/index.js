import React from 'react'
import Cards from './featurecards'
import data from './data'



const FeaturesSection = () => {
  return (

    <>
      <div className='bg-[#03131B] p-4'>
        <h2 className='text-center py-20 text-5xl font-bold text-white'>
          Make Your Site Easier to Use in Minutes
        </h2>

        {/* Map the Features Card. */}
        {data.map((items)=>(
          <Cards
          media={items.media}
          heading = {items.heading}
          textOne={items.textOne}
          textTwo={items.textTwo}
          order={items.order}
          
          />
        ))

        }
        
      </div>
    </>
  )
}

export default FeaturesSection
