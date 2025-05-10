'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const mobileMenuVariants = {
   hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
   visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
   exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const Hero = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div className="bg-gradient-to-b from-blue-50 to-white">
         {/* Header */}
         <header className="border-b border-blue-100">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16 lg:h-20">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                     <a href="#" className="flex">
                        <a href="#" className="flex items-center space-x-2">
                           <svg
                              width="32"
                              height="32"
                              viewBox="0 0 100 100"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-blue-600"
                           >
                              <circle
                                 cx="50"
                                 cy="50"
                                 r="45"
                                 stroke="currentColor"
                                 strokeWidth="10"
                              />
                              <path
                                 d="M35 50 L50 65 L75 35"
                                 stroke="currentColor"
                                 strokeWidth="8"
                                 fill="none"
                              />
                           </svg>
                           <span className="text-xl font-bold text-blue-900 tracking-tight">
                              SoftSell
                           </span>
                        </a>
                     </a>
                  </div>

                  {/* Mobile Menu Button */}
                  <button
                     type="button"
                     className="p-2 text-blue-900 rounded-lg lg:hidden hover:bg-blue-50"
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                     aria-label="Toggle navigation"
                  >
                     {isMenuOpen ? (
                        <X className="w-6 h-6" strokeWidth={2} />
                     ) : (
                        <Menu className="w-6 h-6" strokeWidth={2} />
                     )}
                  </button>

                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex lg:items-center lg:space-x-10">
                     <a
                        href="#"
                        className="text-base font-medium text-blue-700 hover:text-blue-900"
                     >
                        Buy Licenses
                     </a>
                     <a
                        href="#"
                        className="text-base font-medium text-blue-700 hover:text-blue-900"
                     >
                        Sell Licenses
                     </a>
                     <a
                        href="#"
                        className="text-base font-medium text-blue-700 hover:text-blue-900"
                     >
                        Resources
                     </a>
                     <a
                        href="#"
                        className="text-base font-medium text-blue-700 hover:text-blue-900"
                     >
                        Support
                     </a>
                  </nav>

                  {/* Desktop CTA */}
                  <a
                     href="#"
                     className="hidden lg:inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-colors"
                  >
                     Get Started
                  </a>
               </div>

               {/* Mobile Menu */}
               <AnimatePresence>
                  {isMenuOpen && (
                     <motion.div
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="lg:hidden pb-4 space-y-4"
                     >
                        <a
                           href="#"
                           className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded-lg"
                        >
                           Buy Licenses
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded-lg"
                        >
                           Sell Licenses
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded-lg"
                        >
                           Resources
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded-lg"
                        >
                           Support
                        </a>
                        <a
                           href="#"
                           className="block w-full px-4 py-3 text-center text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700"
                        >
                           Get Started
                        </a>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </header>

         {/* Hero Content */}
         <section className="py-12 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
               <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div>
                     <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                        Software License Marketplace
                     </p>
                     <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl lg:mt-8">
                        Transform Unused Software Into Opportunities
                     </h1>
                     <p className="mt-4 text-lg text-gray-600 sm:text-xl lg:mt-8">
                        Connect with a trusted network to buy and sell software
                        licenses securely. Maximize your investments with our
                        verified marketplace.
                     </p>

                     <div className="mt-8 space-y-4 lg:mt-12 sm:space-y-0 sm:flex sm:space-x-5">
                        <a
                           href="#"
                           className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-colors"
                        >
                           Start Selling Now
                           <ArrowRight
                              className="w-5 h-5 ml-3"
                              strokeWidth={2}
                           />
                        </a>
                        <a
                           href="#"
                           className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-700 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                        >
                           Browse Listings
                        </a>
                     </div>
                  </div>

                  {/* Hero Image */}
                  <div className="order-first lg:order-last">
                      <div className="relative w-full h-64 sm:h-96 lg:h-[500px]">
                        <Image
                           src="https://plus.unsplash.com/premium_photo-1729011776151-0b7778d329fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                           alt="Software License Management Illustration"
                           layout="fill"
                           objectFit="contain"
                           priority
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Hero;
