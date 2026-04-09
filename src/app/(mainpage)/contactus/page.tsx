'use client'

import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function ContactUsPage() {
  return (
    <main>
      <section
        className="relative h-[70vh] w-full bg-cover bg-center text-white flex items-end justify-center mt-[-100px]"
        style={{
          backgroundImage: "url('/header/fgpc_nagercoil.png')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 p-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-montserrat mb-48 md:mb-24 text-6xl font-semibold text-white text-center"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      <section className="bg-white px-6 py-20 font-poppins text-[#222831]">
        <div className="container max-w-5xl mx-auto text-center mb-10">
          <ScrollAnimation>
            <h2 className="text-4xl font-semibold mb-6 font-montserrat"><span className="text-[#84373D]">Connect</span> With Our Team</h2>
          </ScrollAnimation>
          <ScrollAnimation>
            <p className="mb-6 text-gray-700">
              We&apos;re here to assist you! Please contact us using the details below for any questions, prayer requests, feedback, or further information. We look forward to connecting with you soon!
            </p>
          </ScrollAnimation>
        </div>
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <ScrollAnimation className="bg-[#f8f8f8] border border-[#DEDEDE] rounded-xl p-6 shadow-md max-w-xl mx-auto w-full">
            <h2 className="text-3xl font-semibold mb-6 font-montserrat text-center">Get in Touch with Us</h2>
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-[#DEDEDE] rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#222831] custom-placeholder"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-[#DEDEDE] rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#222831] custom-placeholder"
              />

              <input
                type="tel"
                placeholder="Mobile No"
                className="w-full px-4 py-3 border border-[#DEDEDE] rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#222831] custom-placeholder"
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 border border-[#DEDEDE] rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#222831] custom-placeholder"
              />

              <textarea
                placeholder="Prayer Request or Testimony (Text)"
                className="w-full px-4 py-3 border border-[#DEDEDE] rounded-[10px] h-32 resize-none focus:outline-none focus:ring-1 focus:ring-[#222831] custom-placeholder"
              ></textarea>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-1/3 bg-[#3E3E3E] text-[#DEDEDE] py-3 rounded-[10px] font-semibold hover:bg-[#313131] transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </ScrollAnimation>

          {/* Contact Details */}
          <div className="font-poppins">
            <ScrollAnimation>
              <h2 className="text-3xl font-semibold mb-6 font-montserrat">Contact Details</h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="mb-6 text-gray-700">
                For inquiries, support, or prayers, connect with us through the details below anytime for assistance
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Mobile */}
              <ScrollAnimation>
                <a href="tel:+919488484745" className="block hover:no-underline">
                  <div className="flex items-center bg-white border rounded-[10px] p-4 shadow-sm hover:shadow-md transition duration-300">
                    <div className="bg-[#3E3E3E] text-[#DEDEDE] px-4 py-3 rounded-[10px] mr-4 hover:bg-[#84373D] transition duration-300">
                      <i className="fas fa-phone-alt text-lg transform rotate-90 cursor-pointer"></i>
                    </div>
                    <div>
                      <p className="font-medium text-lg">Mobile</p>
                      <p className="text-md text-[#555]">+91 9488484745</p>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>

              {/* Email */}
              <ScrollAnimation delay={0.1}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mail@fgpcngl.com" className="block hover:no-underline">
                  <div className="flex items-center bg-white border rounded-[10px] p-4 shadow-sm hover:shadow-md transition duration-300">
                    <div className="bg-[#3E3E3E] text-[#DEDEDE] px-4 py-3 rounded-[10px] mr-4 hover:bg-[#84373D] transition duration-300">
                      <i className="fas fa-envelope text-lg cursor-pointer"></i>
                    </div>
                    <div>
                      <p className="font-medium text-lg">Email</p>
                      <p className="text-md text-[#555]">mail@fgpcngl.com</p>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>
            </div>

            {/* Address */}
            <ScrollAnimation>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Full+Gospel+Pentecostal+Church+Nagercoil"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:no-underline"
              >
                <div className="flex bg-white border rounded-[10px] p-4 shadow-sm hover:shadow-md transition duration-300 mb-6">
                  <div className="bg-[#3E3E3E] text-[#DEDEDE] px-4 py-3 h-14 rounded-[10px] mr-4 hover:bg-[#84373D] transition duration-300 flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-lg cursor-pointer inline-block"></i>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Address</p>
                    <p className="text-md text-[#555] leading-relaxed">
                      Full Gospel Pentecostal Church,<br />
                      174, Church Street,<br />
                      Vettoornimadam, Nagercoil - 629 003,<br />
                      Kanyakumari District,<br />
                      Tamilnadu, India.
                    </p>
                  </div>
                </div>
              </a>
            </ScrollAnimation>

            {/* Social Media Icons */}
            <ScrollAnimation className="mt-6">
              <hr className="mb-4" />
              <div className="flex items-center justify-between">
                <p className="font-semibold mb-0">Social Media:</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/fgpcnagercoil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#3E3E3E] text-white rounded-[10px] hover:bg-[#84373D] transition duration-300">
                    <i className="fab fa-facebook-f text-md"></i>
                  </a>
                  <a href="https://www.instagram.com/fgpcnagercoil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#3E3E3E] text-white rounded-[10px] hover:bg-[#84373D] transition duration-300">
                    <i className="fab fa-instagram text-md"></i>
                  </a>
                  <a href="https://www.youtube.com/@fgpcngl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#3E3E3E] text-white rounded-[10px] hover:bg-[#84373D] transition duration-300">
                    <i className="fab fa-youtube text-md"></i>
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] px-6 py-20 font-poppins text-[#222831]">
        <div className="container max-w-5xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-montserrat font-extrabold mb-6 text-center">
              Full Gospel Pentecostal Church <span className="text-[#84373d]">Nagercoil</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation>
            <p className="mb-8 text-gray-700 max-w-4xl mx-auto leading-relaxed text-center">
              Our location at <strong>174, Church Street, Vettoonimadam, Nagercoil - 629 003</strong> is easily accessible from various parts of the city and nearby regions.
            </p>
          </ScrollAnimation>

          {/* Map and Distance side-by-side */}
          <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto mb-8 gap-8">
            {/* Map */}
            <ScrollAnimation className="flex-shrink-0 w-full md:w-1/2 rounded-[10px] overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.1040276247836!2d77.4344110143367!3d8.18214379412862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411763082506f%3A0x7bdc5a57e93a64e3!2sFull%20Gospel%20Pentecostal%20Church!5e0!3m2!1sen!2sin!4v1668432434976!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[10px]"
              ></iframe>
            </ScrollAnimation>

            {/* Distance Info */}
            <div className="w-full md:w-1/2 text-gray-800 text-base leading-relaxed">
              <ul className="space-y-6">
                {[
                  { icon: "fas fa-bus", text: "2 km from Nagercoil Main Bus Stand", link: "https://www.google.com/maps/dir/?api=1&origin=Nagercoil+Main+Bus+Stand&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003" },
                  { icon: "fas fa-train", text: "2 km from Nagercoil Town Railway Station", link: "https://www.google.com/maps/dir/?api=1&origin=Nagercoil+Town+Railway+Station&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003" },
                  { icon: "fas fa-train", text: "5 km from Nagercoil Main Railway Station", link: "https://www.google.com/maps/dir/?api=1&origin=Nagercoil+Main+Railway+Station&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003" },
                  { icon: "fas fa-train", text: "20 km from Kanyakumari Railway Station", link: "https://www.google.com/maps/dir/?api=1&origin=Kanyakumari+Railway+Station&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003" },
                  { icon: "fas fa-plane", text: "70 km from Thiruvananthapuram Airport", link: "https://www.google.com/maps/dir/?api=1&origin=Thiruvananthapuram+Airport&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003" },
                  { icon: "fas fa-plane", text: "115 km from Tuticorin Airport", link: "https://www.google.com/maps/dir/?api=1&origin=Tuticorin+Airport&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003" },
                ].map((item, idx) => (
                  <ScrollAnimation key={idx} delay={idx * 0.05} className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <i className={`${item.icon} text-[#84373d] mr-3 w-6 text-lg`}></i>
                      {item.text}
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#84373D] hover:bg-[#84373D] text-white text-sm px-3 py-1 rounded transition flex-shrink-0 ml-4"
                    >
                      Directions
                    </a>
                  </ScrollAnimation>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <ScrollAnimation>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Full+Gospel+Pentecostal+Church+Nagercoil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#84373D] text-white px-6 py-2 rounded-[10px] text-md font-semibold hover:bg-[#84373D] transition"
              >
                Get Church Directions
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </section>

    </main >
  );
}