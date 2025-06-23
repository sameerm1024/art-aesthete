import React from 'react'
import { ArrowRight } from 'lucide-react'
const Hero = () => {
  return (
    <section id="home" className='relative min-h-screen parallax-bg flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-20 left-10 w-32 h-32 bg-dusty-rose rounded-full floating-element'>
            </div>
            <div className='absolute bottom-20 right-10 w-24 h-24 bg-muted-brown rounded-full floating-element' style={{ animationDelay: '2s' }}>
            </div>
            <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-dusty-rose rounded-full floating-element' style={{ animationDelay: '4s' }}>
            </div>
        </div>

        <div className='text-center px-4 relative z-10'>
            <h1 className='font-cormorant text-6xl md:text-8xl font-bold text-charcoal mb-6'>
                Art Aesthete
            </h1>
            <p className='font-playfair text-xl md:text-2xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
                Where creativity meets elegance in every brushstroke
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <a href='#gallery'><button className='bg-muted-brown text-white px-8 py-3 rounded-full font-montserrat font-light hover:bg-dusty-rose flex items-center gap-2 hover:text-white transition-all duration-300'>
                    Explore Gallery <ArrowRight size={18}/>
                </button>
                </a>
                <a href='#about'><button className='border-2 border-dusty-rose text-muted-brown px-8 py-3 rounded-full font-montserrat font-light hover:bg-dusty-rose hover:text-white transition-all duration-300'>
                    About the Artist
                </button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero;