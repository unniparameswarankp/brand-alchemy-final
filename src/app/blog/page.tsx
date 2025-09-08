// app/blog/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {  useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const title = 'Insights & Articles';
import Image from "next/image";

const blogPosts = [
  {
    slug: 'branding-secrets-for-2025',
    title: 'Branding Secrets for 2025',
    excerpt: 'Explore the key strategies shaping the future of branding this year...',
    date: 'June 26, 2025',
  },
  {
    slug: 'alchemy-approach-to-ux',
    title: 'The Alchemy Approach to UX',
    excerpt: 'Discover how our UX philosophy blends magic with metrics...',
    date: 'June 20, 2025',
  },
];
 
export default function BlogPage() {
     const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
    <Header />
    <div
            ref={containerRef}
            className="relative w-full h-[clamp(300px,60vh,600px)] overflow-hidden flex items-center justify-center px-6 text-white pt-[100px]"
          >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/industry-banner.jpg"
                alt="Industry Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
      
            {/* Title Animation */}
            <motion.div
              className="relative z-10 text-[clamp(2rem,4vw,5rem)] font-light text-center flex flex-wrap justify-center"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.04,
                  },
                },
              }}
            >
              {title.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>
          </div>



          <section>
            <div className='left-bk'>
            </div>
            <div className='right-bk'>
            </div>
          </section>
    <section className="px-6 lg:px-24 py-16 bg-white text-gray-800">
      <h1 className="text-4xl font-light mb-10 text-center">Insights & Articles</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {blogPosts.map(post => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-medium mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-600">{post.excerpt}</p>
              <span className="text-indigo-600 text-sm mt-2 block">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}
