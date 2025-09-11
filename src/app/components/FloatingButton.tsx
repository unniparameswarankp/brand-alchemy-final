'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const caseStudies = [
    {
      title: "Glowora – Beauty Branding",
      image: "/images/glowora/image4.jpeg",
    },
    {
      title: "Luminex – Lighting Website",
      image: "/images/softwaredevelopment.jpg",
    },
    {
      title: "NatureNook – Eco Product Design",
      image: "/images/webdevelopment.jpg",
    },
    {
      title: "UrbanFit – Gym Identity",
      image: "/images/service.jpeg",
    },
    {
      title: "Café Noire – Coffee Branding",
      image: "/images/printing.jpg",
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-[30px] top-1/2 translate-y-[100%] rotate-90 origin-right z-[100000] bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        Explore More of Our Works
      </button>

      {/* Sliding Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[90%] md:w-[30%] bg-white shadow-2xl z-[100000] px-6 py-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Our Works</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold text-gray-600 hover:text-black"
              >
                ×
              </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5">
              {caseStudies.map((study, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
                  <Image width="1000" height="1000"
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h4 className=" font-light">{study.title}</h4>
                  </div>
                </div>
              ))}
              <Link
                href="#"
                className="inline-flex items-center gap-3 arrow-btn-black mt-5 mb-5"
              >
                View All Works{" "}
                <Image width="64" height="64" src="/arrow_right_white.svg" alt="arrow" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
