

'use client';
import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';


 












export default function Header() {
  const [open, setOpen] = useState(false);


  return (
  
         <header className="ba-header w-full absolute py-8 top-0 left-0 w-full z-999 transition duration-300">
      <div className="ba-container flex items-center justify-between">
        <Link href="/" className="logo-ba">
        <Image
            src="/logo.png"
            alt="Brand Alchemy Logo"
            width="100"
            height="100"
            />
        </Link>
        <div className="flex items-center gap-10">
        <nav>
          <ul className="flex items-center">
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/services/" >Services</Link></li>
            <li><Link href="#" >Solutions</Link></li>
            <li><Link href="/industry/" >Industries</Link></li>
            <li><Link href="#" >Works</Link></li>
            <li><Link href="/about/" >About</Link></li>
            <li><Link href="#" >Contact</Link></li>
          </ul>
        </nav>
        <button
        className="flex flex-col justify-between w-8 h-6 cursor-pointer group ba-menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span
          className={`h-1 bg-white rounded transition-all duration-300 ${
            open ? 'rotate-45 translate-y-3' : ''
          }`}
        />
        <span
          className={`h-1 bg-white rounded transition-all duration-300 ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`h-1 bg-white rounded transition-all duration-300 ${
            open ? '-rotate-45 -translate-y-3' : ''
          }`}
        />
      </button>
      </div>
      </div>
{/*      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col none items-start space-y-4"
          >
            <h2 className="text-xl font-semibold">Menu</h2>
            <a href="#" className="text-lg hover:text-blue-600">Home</a>
            <a href="#" className="text-lg hover:text-blue-600">About</a>
            <a href="#" className="text-lg hover:text-blue-600">Services</a>
            <a href="#" className="text-lg hover:text-blue-600">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>*/}
    </header>
  );
}
