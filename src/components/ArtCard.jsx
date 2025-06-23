import React from 'react'
import '../index.css'

const ArtCard = ({title,image,category}) => (
    <div className='art-card bg-white rounded-2xl shadow-lg overflow-hidden'>
        <div className='aspect-[4/5] overflow-hidden'>
            <img src={image} alt={title} className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' />
        </div>
        <div className='p-6'>
            <h3 className='font-coromorant text-xl font-semibold text-charcoal mb-2'>{title}</h3>
            <p className='text-gray-600 mb-2'>{category}</p>
            <button className='bg-[#8B6F47] text-white px-4 py-2 rounded-lg hover:bg-[#b2a99d] transition-colors'>View Details</button>
        </div>
    </div>
);

export default ArtCard;