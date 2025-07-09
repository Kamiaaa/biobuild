import Image from 'next/image';
import React from 'react'
import { PiBuildingApartmentFill } from "react-icons/pi";

export default function AboutUsPage() {
    
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="px-4 py-20 text-center bg-gray-100 dark:bg-gray-800">
                <h2 className='text-center py-10'>
                    <span className="relative inline-block text-gray-900 dark:text-gray-50">
                        About Biobuild
                        {/* Before and after lines with rings and a star in the center */}
                        <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                            {/* Left Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                            </div>
                            {/* Center Icon */}
                            <span className="z-20 bg-gray-50 dark:bg-gray-800 px-1">
                                <PiBuildingApartmentFill className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" />
                            </span>
                            {/* Right Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                            </div>
                        </span>
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                    Building the future of real estate through innovative technology and sustainable design.
                </p>
            </section>

            {/* Our Story Section */}
            <section className="px-4 py-16 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image className='pb-20 h-auto w-full rounded-xl' src={'/img/apartment.jpg'} alt='apartment' height={400} width={400}/>
                        <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Story</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Founded in 2015, [Company Name] began as a small team of passionate developers and architects with a vision to create affordable, high-quality housing solutions. Today, we've grown into a leading development company with projects across the country.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            Our journey has been marked by innovation, from our first eco-friendly apartment complex to our latest smart city developments.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 h-auto rounded-2xl overflow-hidden">
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Why Choose Us?</h2>

                        <ul className="space-y-4 pt-4 text-gray-600 dark:text-gray-300">
                            {[
                                "Proven Track Record: With years of industry experience, we’ve successfully delivered numerous high-quality projects—on time and within budget. Our portfolio reflects our commitment to excellence in both residential and commercial development.",
                                "Cutting-Edge Design & Technology: We blend modern architecture with smart technology solutions to create future-ready spaces. From eco-friendly materials to smart home integrations, innovation drives everything we build.",
                                "Client-First Approach: Your vision is our blueprint. We prioritize transparent communication, personalized solutions, and post-sale support to ensure your complete satisfaction every step of the way.",
                                "Prime Locations with High ROI: We strategically select project sites in high-demand areas, ensuring long-term value and maximum returns on your investment—whether you're buying a home or growing your portfolio.",
                                "End-to-End Solutions: From land acquisition to handover and beyond, we offer a full spectrum of development and real estate services. You can rely on us as your one-stop partner for everything property-related.",
                            ].map((item, index) => (
                                <li key={index} className="flex">
                                    <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                        <circle cx="11" cy="11" r="11" className="fill-[#7AA859]" />
                                        <circle cx="11" cy="11" r="10.5" className="stroke-[#7AA859]" />
                                        <path d="M8 11.5L10.5 14L14 8" className="stroke-gray-50 dark:stroke-sky-300" />
                                    </svg>
                                    <p className="ml-3 dark:text-gray-50">
                                        <b>{item.split(":")[0]}:</b> {item.split(":")[1]}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="px-4 py-16 bg-[#7AA859] text-white text-center">
                <h2 className="text-gray-50 mb-4">Ready to Find Your Perfect Space?</h2>
                <p className="max-w-2xl mx-auto mb-6 text-gray-50">
                    Join thousands of satisfied residents who've found their dream home with Flat Sell.
                </p>
                <button className="bg-white text-[#7AA859] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                    Explore Properties
                </button>
            </section>
        </div>
    );
}