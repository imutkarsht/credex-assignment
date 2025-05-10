export const Footer = () => (
   <footer className="bg-gradient-to-b from-blue-200 to-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Logo & Tagline */}
            <div>
               <div className="flex justify-center md:justify-start mb-4">
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
               </div>
               <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  SoftSell™ streamlines enterprise software resale and license
                  management with speed, trust, and compliance.
               </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-2">
               <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                  Quick Links
               </h3>
               <ul className="space-y-1 mt-3">
                  <li>
                     <a
                        href="#"
                        className="text-gray-700 hover:text-blue-700 transition"
                     >
                        About Us
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="text-gray-700 hover:text-blue-700 transition"
                     >
                        Sell Licenses
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="text-gray-700 hover:text-blue-700 transition"
                     >
                        Support
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="text-gray-700 hover:text-blue-700 transition"
                     >
                        FAQs
                     </a>
                  </li>
               </ul>
            </div>

            {/* Legal + Social */}
            <div className="space-y-2">
               <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                  Legal
               </h3>
               <ul className="space-y-1 mt-3">
                  <li>
                     <a
                        href="#"
                        className="text-gray-700 hover:text-blue-700 transition"
                     >
                        Privacy Policy
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="text-gray-700 hover:text-blue-700 transition"
                     >
                        Terms & Conditions
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="text-gray-700 hover:text-blue-700 transition"
                     >
                        Contact Us
                     </a>
                  </li>
               </ul>
            </div>
         </div>

         <div className="mt-12 border-t border-gray-300 pt-6 text-sm text-center text-gray-600">
            © {new Date().getFullYear()} SoftSell™. All rights reserved.
         </div>
      </div>
   </footer>
);
