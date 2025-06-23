import React from 'react'
import {Star} from 'lucide-react'

const About = () => {
  return (
    <section id='about' className='py-20 bg-stone-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            
            <h2 className="font-cormorant text-5xl font-bold text-charcoal mb-12">About Me</h2>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm">
                <img 
                src="/me/me.jpg" 
                alt="Artist" 
                className="w-full h-auto object-cover"
                />
            </div>

            <div className="flex flex-col gap-6 font-montserrat text-stone-600 flex-1">

                <p className="leading-relaxed">
                Art Aesthete is my soul poured onto canvas — a journey through color, emotion, and fleeting whispers of time. Every brushstroke
                holds a memory, every shade a dream once dreamt. I paint not just what I see, but what I feel — the tangled beauty of being human, 
                the ache of nostalgia, the quiet joy of wonder. Through each piece, I try to hold still the moments that move me, and in doing so, 
                I offer a part of myself.
                </p>

                <p className="leading-relaxed">
                From close, thoughtful portraits to wide, flowing landscapes, my work reflects beauty, nostalgia, and the quiet rhythm between 
                tradition and the ever-changing tides of today.
                </p>

                <div className="flex items-center gap-3">
                <Star className="text-dusty-rose" size={20} />
                <span>Crazy in love with LOLO MOWAA</span>
                </div>
            </div>
            
            </div>
        </div>
    </section>

  )
}

export default About