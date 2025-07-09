'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { motion } from 'framer-motion';
import Image from 'next/image';

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel(
        { loop: false },
        [Autoplay({ delay: 3000 }), Fade()]
    )

    return (
        <div className="embla overflow-hidden h-screen max-h-[100vh]" ref={emblaRef}>
            <div className="embla__container h-full">
                {/* Slide 1 - Residential */}
                <div className="embla__slide flex-shrink-0 h-full relative">
                    <div className="relative h-full w-full bg-white text-white overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-500/10 to-pink-500/10 pointer-events-none" />
                        <div className="flex flex-col-reverse lg:flex-row z-10 relative h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/img/residential.png"
                                    alt="Residential solar solutions"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <div className="text-center px-4 max-w-2xl">
                                        <motion.h2
                                            className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3, duration: 0.8 }}
                                        >
                                            Discover Your Dream Home
                                        </motion.h2>
                                        <motion.p
                                            className="text-xl md:text-2xl text-white/90 drop-shadow-md"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.6, duration: 0.8 }}
                                        >
                                            Modern living spaces in prime locations, built with your future in mind.
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Slide 2 - Commercial */}
                <div className="embla__slide flex-shrink-0 h-full relative">
                    <div className="relative h-full w-full bg-white text-white overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-500/10 to-pink-500/10 pointer-events-none" />
                        <div className="flex flex-col-reverse lg:flex-row z-10 relative h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/img/commercial.avif"
                                    alt="Commercial solar installations"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <div className="text-center px-4 max-w-2xl">
                                        <motion.h2
                                            className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3, duration: 0.8 }}
                                        >
                                            Elevate Your Lifestyle
                                        </motion.h2>
                                        <motion.p
                                            className="text-xl md:text-2xl text-white/90 drop-shadow-md"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.6, duration: 0.8 }}
                                        >
                                            Luxury apartments and modern commercial spaces designed to inspire.
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Slide 3 - Residential (duplicate with different text) */}
                <div className="embla__slide flex-shrink-0 h-full relative">
                    <div className="relative h-full w-full bg-white text-white overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-500/10 to-pink-500/10 pointer-events-none" />
                        <div className="flex flex-col-reverse lg:flex-row z-10 relative h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/img/residential.png"
                                    alt="Solar financing options"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <div className="text-center px-4 max-w-2xl">
                                        <motion.h2
                                            className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3, duration: 0.8 }}
                                        >
                                            Solid Foundations. Stunning Futures
                                        </motion.h2>
                                        <motion.p
                                            className="text-xl md:text-2xl text-white/90 drop-shadow-md"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.6, duration: 0.8 }}
                                        >
                                            Trusted by families and businesses alike to deliver excellence.
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}