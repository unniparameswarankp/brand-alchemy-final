'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";

const title = 'Insights & Articles';

const blogPosts = [
  {
    slug: 'branding-secrets-for-2025',
    title: 'Branding Secrets for 2025',
    image: '/images/webdevelopment.jpg',
    excerpt: 'Explore the key strategies shaping the future of branding this year...',
    date: 'June 26, 2025',
  },
  {
    slug: 'alchemy-approach-to-ux',
    title: 'The Alchemy Approach to UX',
    image: '/images/softwaredevelopment.jpg',
    excerpt: 'Discover how our UX philosophy blends magic with metrics...',
    date: 'June 20, 2025',
  },
];

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />

      {/* Banner */}
      <div
        ref={containerRef}
        className="relative w-full h-[clamp(300px,60vh,600px)] overflow-hidden flex items-center justify-center px-6 text-white pt-[100px]"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={600}
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
              transition: { staggerChildren: 0.04 },
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
        <div className='left-bk'></div>
        <div className='right-bk'></div>
      </section>

      {/* Blog Posts */}
      <section className="px-6 lg:px-24 py-16 bg-white text-gray-800">
        <h1 className="text-4xl font-light mb-10 text-center">Insights & Articles</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
              <div className="border rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
                <Image
                  className="w-full h-[300px] object-cover"
                  width={1000}
                  height={1000}
                  alt={post.title}
                  src={post.image}
                />
                <footer className="p-6">
                  <h2 className="text-2xl font-medium mb-2">{post.title}</h2>
                  <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-3 arrow-btn-black">
                    Read More
                    <Image
                      alt="arrow"
                      loading="lazy"
                      width={64}
                      height={64}
                      decoding="async"
                      style={{ color: 'transparent' }}
                      src="/arrow_right_white.svg"
                    />
                  </span>
                </footer>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
