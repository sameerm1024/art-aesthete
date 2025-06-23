import React from 'react'
import ArtCard from './ArtCard'
import { featuredArt } from '../data/featuredArt'

const FeaturedWork = () => {
    return (
        <section id='gallery' className='py-20 bg-gray-100'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='font-coromorant text-5xl font-bold text-charcoal mb-4'>
                        Featured Work
                    </h2>
                    <p className='font-montserrat text-stone-600 max-w-2xl mx-auto'>
                        Explore our curated selection of stunning artworks
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                    {featuredArt.map((art)=> (
                        <ArtCard 
                            key={art.id} 
                            title={art.title}
                            image={art.image}
                            category={art.category}
                        />
                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a href='#gallery'><button  className='bg-dusty-rose text-white px-8 py-3 rounded-full font-montserrat font-light hover:bg-stone-400 transition-all duration-300 cursor-pointer'>
                        View All Artworks
                    </button>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default FeaturedWork;