"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FiDownload, FiX } from "react-icons/fi";

interface Slide {
  id: number;
  image: string;
}

const slides: Slide[] = [
  { id: 1, image: "/img/bro/page-01.png" },
  { id: 2, image: "/img/bro/page-02.png" },
  { id: 3, image: "/img/bro/page-03.png" },
];

export default function FlipSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const nextSlide = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDownloadClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: phone must be only digits
    if (!/^[0-9]+$/.test(phone)) {
      setError("Phone number must contain only digits.");
      return;
    }

    setError("");
    console.log("Name:", name, "Phone:", phone);

    // After successful submission trigger download
    const link = document.createElement("a");
    link.href = "/brochures/biobuild.pdf"; // your brochure path
    link.download = "biobuild.pdf";
    link.click();

    // Reset form
    setName("");
    setPhone("");
    setShowForm(false);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto p-4 text-center font-sans">
      {/* Title & Brochure Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-poppins font-bold text-gray-800 mb-3">
          Download <span className="text-[#7AA859]">BIOBUILD</span> Brochure
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          Get an exclusive overview of elegantly crafted apartments and real estate
          solutions — where modern design meets lasting value and superior functionality.
        </p>
      </motion.div>

      {/* Slider Container - Reduced by 30% */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg mb-6">
        {/* Slider - Height reduced from 700px to 490px (30% decrease) */}
        <div className="overflow-hidden relative h-[490px] perspective-1000">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slides[index].id}
              custom={direction}
              initial={{ 
                rotateY: direction === "next" ? 90 : -90, 
                opacity: 0,
                scale: 0.9
              }}
              animate={{ 
                rotateY: 0, 
                opacity: 1,
                scale: 1
              }}
              exit={{ 
                rotateY: direction === "next" ? -90 : 90, 
                opacity: 0,
                scale: 0.9
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 bg-white rounded-xl shadow-md flex flex-col justify-center items-center backface-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={slides[index].image}
                  alt="Brochure preview"
                  fill
                  className="rounded-lg object-contain p-3"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#7AA859] w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Controls - Slightly smaller */}
        <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2">
          <button
            onClick={prevSlide}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 hover:shadow-lg group"
            aria-label="Previous slide"
          >
            <IoMdArrowBack size={20} className="text-gray-700 group-hover:text-emerald-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 hover:shadow-lg group"
            aria-label="Next slide"
          >
            <IoMdArrowForward size={20} className="text-gray-700 group-hover:text-emerald-600" />
          </button>
        </div>
      </div>

      {/* Download Button OR Form */}
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={handleDownloadClick}
            className="mt-4 px-6 py-3 bg-[#7AA859] text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 mx-auto hover:shadow-lg text-sm"
          >
            <FiDownload size={16} />
            Download Brochure
          </motion.button>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="mt-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg max-w-md mx-auto border border-gray-100 relative"
          >
            <button 
              onClick={handleCloseForm}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close form"
            >
              <FiX size={20} />
            </button>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Get Your Brochure</h2>
            <p className="mb-4 text-gray-600 text-sm">
              Share your details to access the BIOBUILD brochure.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                />
                {error && <p className="text-red-500 text-xs mt-1 text-left">{error}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full px-5 py-3 bg-[#7AA859] text-white font-medium rounded-lg shadow hover:bg-green-700 transition-all duration-300 hover:shadow-lg text-sm"
              >
                Submit & Download
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}