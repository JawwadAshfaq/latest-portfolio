import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <hr className="h-[1px] border-[#800080] mb-15 md:mt-8" />

      <footer className='max-w-[1300px] w-full mx-auto px-4 mb-5'>
        <div className='max-w-[1300px] mx-auto py-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            {/* Column 1 */}
            <div className='foot-col-1 text-[#c4cfde]'> 
              <h2 className='text-xl font-bold mb-4'>JAWWAD ASHFAQ</h2>
              <p>
                Passionate Web Developer with a deep expertise in modern technologies,
                dedicated to crafting dynamic, high-performance websites that are fast,
                user-friendly, and optimized for seamless user experience.
              </p>   
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://www.facebook.com/jawwadashfaqwebdeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-head-btn bg-gradient-to-r from-[#bb00d4] to-[#0007ff] p-3 rounded-full text-white text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/in/jawwad-ashfaq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-head-btn bg-gradient-to-r from-[#bb00d4] to-[#0007ff] p-3 rounded-full text-white text-xl"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://wa.me/923191542621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-head-btn bg-gradient-to-r from-[#bb00d4] to-[#0007ff] p-3 rounded-full text-white text-xl"
                >
                  <FaWhatsapp />
                </a>
              </div> 
            </div>

            {/* Column 2 */}
            <div className='foot-col-2 text-[#c4cfde]'> 
              <h2 className='text-xl font-bold mb-4'>QUICK LINKS</h2>
              <ul className='space-y-2 text-[16px]'>
                <Link href="#home" scroll={true}><li className='py-1 cursor-pointer'>Home</li></Link> 
                <Link href="#about" scroll={true}><li className='py-1 cursor-pointer'>About</li></Link> 
                <Link href="#services" scroll={true}><li className='py-1 cursor-pointer'>Services</li></Link> 
                <Link href="#portfolio" scroll={true}><li className='py-1 cursor-pointer'>Portfolio</li></Link> 
                <Link href="#faqs"><li className='py-1 cursor-pointer'>Faqs</li></Link>
                <Link href="#contact"><li className='py-1 cursor-pointer'>Contact</li></Link>
              </ul>
            </div>

            {/* Column 3 */}
            <div className='foot-col-3 text-[#c4cfde]'> 
              <h2 className='text-xl font-bold mb-4'>SERVICES</h2>
              <ul className='space-y-2 text-[16px]'> 
                <Link href="#"><li className='py-1'>Custom Website Development</li></Link>
                <Link href="#"><li className='py-1'>WordPress Development</li></Link>
                <Link href="#"><li className='py-1'>Website Maintenance</li></Link>
                <Link href="#"><li className='py-1'>Website Redesign</li></Link>
                <Link href="#"><li className='py-1'>Ecommerce Website</li></Link> 
                <Link href="#"><li className='py-1'>Shopify Store</li></Link> 
              </ul> 
            </div>

            {/* Column 4 */}
            <div className='foot-col-4 text-[#c4cfde]'> 
              <h2 className='text-xl font-bold mb-4'>CONTACT</h2>
              <p>
                Available for freelance work. Let’s connect and discuss how I can help bring your
                project to life with tailored solutions.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-lg">
                  <div className="bg-head-btn bg-gradient-to-r from-[#bb00d4] to-[#0007ff] p-2 rounded-full mr-2">
                    <FaPhoneAlt className="text-white text-[16px]" />
                  </div>
                  <a href="tel:+923323926157" className="hover:underline">+92-319-1542621</a>
                </div>
                <div className="flex items-center text-lg">
                  <div className="bg-head-btn bg-gradient-to-r from-[#bb00d4] to-[#0007ff] p-2 rounded-full mr-2">
                    <FaEnvelope className="text-white text-[16px]" />
                  </div>
                  <a href="mailto:info@jawwadashfaq.com" className="hover:underline">info@jawwadashfaq.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <hr className="h-[1px] border-[#800080] mb-6" />

      <div className="mb-6">
        <p className="text-[16px] text-center">© 2025. All Rights Reserved. By Jawwad Ashfaq</p>
      </div>
    </>
  );
};

export default Footer;
