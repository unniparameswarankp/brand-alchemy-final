

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
            <li><Link href="/contact/" >Contact</Link></li>
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
      {/*<AnimatePresence>*/}
        {open && (
      <div className="fixed h-screen left-0 top-0 w-screen bg-black text-white shadow-lg py-10 overflow-y-auto">
       
      <button
        className="flex flex-col justify-between w-8 h-6 cursor-pointer group ba-menu-btn absolute top-10 right-10"
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


          <div className="ba-container pt-20 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-20">

          

            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/services/branding/">Branding</Link></li>
                <li><Link href="#">Experience Design</Link></li>
                <li><Link href="#">Technology</Link></li>
                <li><Link href="#">Digital Marketing</Link></li>
                <li><Link href="#">Branding</Link></li>
                <li><Link href="#">Experience Design</Link></li>
                <li><Link href="#">Technology</Link></li>
                <li><Link href="#">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/industry/">Beauty</Link></li>
                <li><Link href="#">Healthcare</Link></li>
                <li><Link href="#">Fashion</Link></li>
                <li><Link href="#">Electronics</Link></li>
                <li><Link href="#">Retail</Link></li>
                <li><Link href="#">Real Estate</Link></li>
                <li><Link href="#">Construction</Link></li>
                <li><Link href="#">Manufacturing</Link></li>
              </ul>
            </div>

         

              {/* Column 5 */}

<div>
            <h3 className="text-xl font-semibold mb-4">Solutions</h3>
<ul className="space-y-2 text-gray-300">
  <li><Link href="#">E-commerce Development</Link></li>
  <li><Link href="#">Custom Web Apps</Link></li>
  <li><Link href="#">Mobile Apps</Link></li>
  <li><Link href="#">UI/UX Design</Link></li>
  <li><Link href="#">Digital Marketing</Link></li>
  <li><Link href="#">Cloud Solutions</Link></li>
  <li><Link href="#">SEO Optimization</Link></li>
  <li><Link href="#">Consulting</Link></li>
</ul>

</div>

            {/* Column 6 */}

   {/* Column 4 */}

  {/* Column 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/industries">Industries</Link></li>
                <li><Link href="/works">Works</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/blog">Blogs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Other</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#">Partnership</Link></li>
                <li><Link href="#">Awards and Recognitions</Link></li>
                <li><Link href="#">Insights</Link></li>
                <li><Link href="#">Blogs</Link></li>
                <li><Link href="#">Resource Augmentation</Link></li>
                <li><Link href="#">Sitemap</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-300">
                <li>General Enquiry: +91 480 2733 111</li>
                <li>Sales Enquiry: +91 480 2733 555</li>
                <li>Email: info@bandalchemys.com</li>
                <li>HR Enquiry: +91 480 2733 999</li>
                <li>WhatsApp: +91 8606 483 399</li>
              </ul>
            </div>


          </div>
        </div>
        )}
      {/*</AnimatePresence>*/}
    </header>
  );
}
