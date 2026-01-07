import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Added aspect ratio properties to simulate different heights/widths in the masonry flow
const GALLERY_DATA = [
  {
    id: 1,
    title: "Dr P.U. Agu Speaking",
    url: "/speaking.jpg",
    category: "Minimal",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Lab Operations",
    url: "/lab.jpg",
    category: "Organic",
    aspect: "aspect-square",
  },
  {
    id: 3,
    title: "Urban View",
    url: "/dis.jpg",
    category: "Landscape",
    aspect: "aspect-[2/3]",
  },
  {
    id: 4,
    title: "Urban View",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
    category: "Landscape",
    aspect: "aspect-video",
  },
  {
    id: 5,
    title: "Texture Study",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    category: "Abstract",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    title: "Still Life",
    url: "/1.jpg",
    category: "Minimal",
    aspect: "aspect-[3/2]",
  },
  {
    id: 7,
    title: "Reflections and awards",
    url: "/award.jpg",
    category: "Minimal",
    aspect: "aspect-square",
  },
  {
    id: 8,
    title: "Operations",
    url: "lab1.jpg",
    category: "Organic",
    aspect: "aspect-[9/16]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* Header Section */}
        <header className="mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
              Sneak Peek
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-light tracking-tighter"
          >
            Gallery
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px bg-black/10 w-full origin-left"
          />
        </header>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {GALLERY_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative group cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImg(item)}
            >
              {/* Added dynamic aspect ratio class and kept 1.3rem radius */}
              <div
                className={`relative overflow-hidden bg-gray-100 rounded-[1.3rem] ${item.aspect}`}
              >
                <motion.img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 
               transition-all duration-[1.5s] ease-out 
               group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <motion.div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/60 text-xs uppercase tracking-[0.2em]">
                      {item.category}
                    </p>
                    <div className="flex justify-between items-center">
                      <h3 className="text-white text-2xl font-light tracking-tight">
                        {item.title}
                      </h3>
                      <Maximize2 className="text-white w-5 h-5" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        {/* <footer className="mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm tracking-widest uppercase">
          <p>© 2025 Visual Studio</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Archive</a>
            <a href="#" className="hover:text-black transition-colors">Information</a>
          </div>
        </footer> */}
      </main>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              className="absolute top-8 right-8 z-[60] text-black hover:rotate-90 transition-transform duration-300"
              whileTap={{ scale: 0.9 }}
            >
              <X size={32} strokeWidth={1} />
            </motion.button>

            <div
              className="relative w-full h-full flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                layoutId={`img-${selectedImg.id}`}
                className="w-full md:w-2/3 h-[50vh] md:h-full overflow-hidden rounded-[1.3rem]"
              >
                <img
                  src={selectedImg.url}
                  className="w-full h-full object-contain md:object-cover bg-gray-50"
                  alt={selectedImg.title}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full md:w-1/3 space-y-6"
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {selectedImg.category}
                  </span>
                  <h2 className="text-5xl font-light tracking-tighter mt-2">
                    {selectedImg.title}
                  </h2>
                </div>
                <p className="text-gray-500 leading-relaxed font-light">
                  Disom Specialist Hospital is a specialist healthcare facility
                  providing quality healthcare services in obstetrics and
                  gynecology, pediatrics, surgeries, fertility management,
                  family medicine, ultrasound and laboratory services.
                </p>
                <button
                  onClick={() => setSelectedImg(null)}
                  className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] group pt-4"
                >
                  Explore More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Gallery;
