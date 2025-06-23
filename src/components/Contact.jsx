import React from 'react'
import {Mail, Instagram} from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted-brown text-white">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='font-cormorant text-5xl font-bold mb-6'>
                Let's Connect
            </h2>
            <p className='font-montserrat text-stone-200 mb-12 max-w-2xl mx-auto'>
                If my work speaks to you, and you’d like to bring a piece into your world or know more about what’s 
                available — I’d be truly happy to hear from you’d.
            </p>

            <div className='flex justify-center gap-8 mb-12 flex-wrap'>
                <a href='mailto:art.aesthetess@gmail.com'
                    className='flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer'>
                    <Mail size={20}/>
                    <span className='font-montserrat text-lg'>Email Me</span>
                </a>
                <a href='https://www.instagram.com/art.aesthete__?igsh=MXhlczdldXFleGR1cg=='
                    className='flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer'>
                    <Instagram size={20}/>
                    <span className='font-montserrat text-lg'>Instagram</span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact