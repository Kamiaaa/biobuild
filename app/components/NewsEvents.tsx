'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaNewspaper } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

interface NewsEvent {
    _id: string;
    title: string;
    date: string;
    summary: string;
    image: string;
    type: 'news' | 'event';
    location?: string;
}

export default function NewsAndEventsPage() {
    const [news, setNews] = useState<NewsEvent[]>([]);
    const [events, setEvents] = useState<NewsEvent[]>([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const limit = 6; // items per page

    useEffect(() => {
        const fetchNewsEvents = async () => {
            try {
                const res = await fetch(`/api/news-events?page=${page}&limit=${limit}`, {
                    cache: 'no-store',
                });
                const json = await res.json();

                const newsItems = json.data.filter((item: NewsEvent) => item.type === 'news');
                const eventItems = json.data.filter((item: NewsEvent) => item.type === 'event');

                setNews(newsItems);
                setEvents(eventItems);
                setTotalItems(json.total);
            } catch (error) {
                console.error('Error fetching news and events:', error);
            }
        };

        fetchNewsEvents();
    }, [page]);

    const totalPages = Math.ceil(totalItems / limit);

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section with Background Image */}


            {/* News Section */}
            <section id="news-section" className="px-4 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Back to Home Button */}
                    <div className="mb-6">

                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center text-gray-900 dark:text-gray-50">
                        <FaNewspaper className="mr-3 text-[#7AA859]" />
                        Latest News
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <NewsCard key={item._id} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-4 my-12">
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <span className="px-4 py-2">Page {page} of {totalPages}</span>
                    <button
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

// Card Components (remain the same as before)
function NewsCard({ item }: { item: NewsEvent }) {
    return (
        <div className="group relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
            <div className="h-auto overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
                <span className="text-sm text-[#7AA859]">{item.date}</span>
                <h4 className="text-xl font-semibold my-2 group-hover:text-[#7AA859] transition-colors duration-300">
                    {item.title.length > 50
                        ? `${item.title.slice(0, 50)}...`
                        : item.title}
                </h4>
                <p className="text-gray-500 text-sm">
                    {item.summary.length > 100
                        ? `${item.summary.slice(0, 100)}...`
                        : item.summary}
                </p>
            </div>
            <div className="px-6 pb-6">
                <Link href={`/news-events/${item._id}`}>
                    <button className="text-[#7AA859] font-medium hover:underline">Read More →</button>
                </Link>
            </div>
        </div>
    );
}

// function EventCard({ item }: { item: NewsEvent }) {
//     return (
//         <div className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
//             <div className="h-auto overflow-hidden relative">
//                 <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                 <div className="absolute top-4 right-4 bg-[#7AA859] text-white px-3 py-1 rounded-lg text-sm font-medium">
//                     {item.date}
//                 </div>
//             </div>
//             <div className="p-6">
//                 <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 mr-1"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                         />
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                     </svg>
//                     {item.location || 'N/A'}
//                 </div>
//                 <h4 className="text-xl font-semibold my-2 group-hover:text-[#7AA859] transition-colors duration-300">
//                     {item.title}
//                 </h4>
//                 <p className="text-gray-600 dark:text-gray-300">{item.summary}</p>
//             </div>
//             <div className="px-6 pb-6">
//                 <button className="px-4 py-2 bg-[#7AA859] text-white rounded-lg hover:bg-[#5d8a3f] transition">
//                     Register Now
//                 </button>
//             </div>
//         </div>
//     );
// }