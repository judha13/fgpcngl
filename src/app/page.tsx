'use client'

import Image from 'next/image'
import Link from "next/link";
import ImageSlider from './components/ImageSlider';
import UpcomingSlider from './components/UpcomingSlider';
import ServiceSection from './components/ServiceSection';
import useBlurFadeIn from './hooks/useBlurFadeIn';


export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home"
        className="relative min-h-screen bg-cover bg-top text-white flex items-end justify-center mt-[-92px]"
        style={{
          backgroundImage: "url('/header/fgpc_nagercoil.png')", // fallback image
        }}
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/home/fgpc_nagercoil_intro.jpg"
        >
          <source src="/home/fgpc_nagercoil_intro(33mb).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_#000000CF_0%,_#00000066_100%)] opacity-[0.68] backdrop-blur-[2px] z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 p-6 font-poppins">
          <div className="text-center md:mb-12 mb-14 blur-down">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white font-montserrat leading-snug">
              Full Gospel Pentecostal Church, Nagercoil
            </h1>

            {/* Description */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white font-normal px-2 sm:px-0">
              Together, we build the Kingdom of God through love, service, and faith, creating a community rooted in His grace
            </p>

            {/* Buttons - Always in Single Row */}
            <div className="mt-4 sm:mt-6 flex flex-row justify-center gap-3 sm:gap-4 text-sm sm:text-base flex-wrap">
              <a
                href="tel:+919488484745"
                className="px-3 sm:px-4 py-2 sm:py-3 bg-[#84373D] text-white rounded-[10px] shadow-md hover:bg-[#692A2F] transition duration-300 text-center"
              >
                <i className="fas fa-phone-alt rotate-90 mr-2"></i>
                9488484745
              </a>
              <a
                href="mailto:mail@fgpcngl.com"
                className="px-3 sm:px-4 py-2 sm:py-3 bg-white text-[#84373D] rounded-[10px] hover:bg-[#EEEEEEFC] transition duration-300 text-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                mail@fgpcngl.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Welcome Container */}
      <div className="relative z-30 px-6 bg-white">
        <div className="-translate-y-12">
          <ImageSlider />
        </div>
      </div>

      {/* About Section */}
      <section id="aboutus" className="py-20 bg-white font-poppins text-[#222831]">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-20 items-center">

          {/* Left Column - Content (60%) */}
          <div className="order-2 md:order-1 md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat leading-snug">
              <span className="text-[#84373d]">Full Gospel</span> Pentecostal Church
            </h2>

            <p className="text-[#212121] mt-4 text-base leading-relaxed text-justify">
              The ministry was founded in 1979 under the leadership of Pastor Kristhudas Samuel.
              With many challenges in the early days, the work continued by faith. 
              In 1987, Pastor Joyson took charge of the ministry, leading it with unwavering commitment, a clear God-given vision, and deep compassion for people.
              What began as a small fellowship has now grown into a strong, thriving church that continues to bless countless individuals and families
            </p>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "fab fa-youtube", label: "fgpcngl", link: "https://www.youtube.com/@fgpcnagercoil" },
                  { icon: "fab fa-instagram", label: "fgpcnagercoil", link: "https://www.instagram.com/fgpcnagercoil" },
                  { icon: "fab fa-facebook", label: "fgpcnagercoil", link: "https://www.facebook.com/fgpcnagercoil" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-2 p-2 
                   bg-[#F5F5F5] rounded-lg shadow hover:bg-[#84373D] hover:text-white 
                   cursor-pointer transition-colors duration-300 ease-in-out 
                   min-w-[120px]"
                  >
                    <i className={`${item.icon} text-xl`}></i>
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="p-5 border rounded-xl shadow-sm bg-[#ebebeb]">
                <h3 className="text-lg font-bold text-[#413b3b]">Started At</h3>
                <p className="text-sm mt-2 text-[#333]">
                  Ministry founded in 1979 by Pastor Kristhudas Samuel.
                </p>
              </div>

              <div className="p-5 border rounded-xl shadow-sm bg-[#413b3b] text-white">
                <h3 className="text-lg font-bold">Location</h3>
                <p className="text-sm mt-2">
                  174, Church Street, Vettoornimadam, Nagercoil-629003.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Pastor Image (40%) */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 md:col-span-2">
            <Link href="/aboutus" className="relative group block">
              <Image
                src="/home/pr-joyson.jpg"
                alt="Pastor Joyson"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full max-w-md"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Pastor Johnsam Joyson Section */}
      <section id="johnsamjoyson" className="py-20 bg-[#F5F5F5] font-poppins text-[#222831]">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-20 items-center">

          {/* Left Column - Pastor Image (40%) */}
          <div className="flex justify-center md:justify-center order-1 md:col-span-2">
            <Link href="/johnsamjoyson" className="relative group block">
              <Image
                src="/home/pr-johnsam_joyson.jpg"
                alt="Johnsam Joyson"
                width={384}
                height={512}
                quality={100}
                className="rounded-2xl cursor-pointer mx-auto block blur_fade_in_up"
              />
            </Link>
          </div>

          {/* Right Column - Content (60%) */}
          <div className="order-2 md:col-span-3">
            <h2 className="text-4xl font-bold font-montserrat mb-4 blur_fade_in_up">
              <span className="text-[#84373D]">Johnsam</span> Joyson
            </h2>
            <p className="text-[#212121] text-base leading-relaxed mb-6 text-justify blur_fade_in_up">
              Pr. Johnsam Joyson serves as the pastor of FGPC Church in Nagercoil.
              He began his ministry in <span className="text-[#84373D]">2007</span>. The Lord has given him many songs, and through these songs, he has been a blessing to many people.
            </p>
            {/* Songs or Images Section */}
            <div className="flex gap-2 mb-6 overflow-x-auto blur_fade_in_up">
              {[
                {
                  src: "/songs/johnsam/johnsam_lyrical_thumbnail.jpg",
                  alt: "Song 1",
                  text: "Explore most popular songs",
                },
                {
                  src: "/songs/johnsam/johnsam_album_thumbnail.jpg",
                  alt: "Song 2",
                  text: "Explore greatest albums",
                },
                {
                  src: "/songs/johnsam/johnsam_recent_thumbnail.jpg",
                  alt: "Song 3",
                  text: "Discover latest hits",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative h-32 w-56 transition-all duration-300 ease-in-out hover:w-60 cursor-pointer group"
                >
                  <Link href="https://www.youtube.com/@johnsamjoyson" target="_blank">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      quality={100}
                      unoptimized={item.alt === "Song 2"}
                      className="h-full w-full rounded-lg shadow-md object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 px-2 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg grid place-items-center">
                      <p>
                        {item.text}
                        <span className="underline decoration-red-800 ml-1">clicking here</span>
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide flex-nowrap blur_fade_in_up">
                {[
                  { icon: "fab fa-youtube", label: "YouTube", link: "https://www.youtube.com/@johnsamjoyson" },
                  { icon: "fab fa-instagram", label: "Instagram", link: "https://www.instagram.com/johnsamjoyson_official" },
                  { icon: "fas fa-envelope", label: "Email", link: "https://mail.google.com/mail/?view=cm&fs=1&to=johnsam@gmail.com" },
                  { icon: "fab fa-facebook", label: "Facebook", link: "https://www.facebook.com/jjohnsam" },
                  { icon: "fab fa-spotify", label: "Spotify", link: "https://open.spotify.com/artist/6o64MUmOWLYUJkUTxpotPG" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-2 p-2 bg-white rounded-lg shadow 
      hover:bg-[#84373D] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out min-w-[120px] flex-shrink-0"
                  >
                    <i className={`${item.icon} text-xl`}></i>
                    <span className="text-xs font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pastor Davidsam Joyson Section */}
      <section id="davidsamjoyson" className="py-20 bg-[#FFFFFF] font-poppins text-[#222831]">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-20 items-center">

          {/* Left Column - Content (60%) */}
          <div className="order-2 md:order-1 md:col-span-3">
            <h2 className="text-4xl font-bold font-montserrat mb-4 blur_fade_in_up">
              <span className="text-[#84373D]">Davidsam</span> Joyson
            </h2>
            <p className="text-[#212121] text-base leading-relaxed mb-6 text-justify blur_fade_in_up">
              Pr. Davidsam Joyson serves as the pastor of FGPC Church in Nagercoil.
              He began his ministry in <span className="text-[#84373D]">2013</span>. The Lord has given him many songs, and through these songs, he has been a blessing to many people.
            </p>

            {/* Songs or Images Section */}
            <div className="flex gap-2 mb-6 overflow-x-auto blur_fade_in_up">
              {[
                {
                  src: "/songs/davidsam/davidsam_famous.jpg",
                  alt: "Song 1",
                  text: "Explore most popular songs",
                },
                {
                  src: "/songs/davidsam/davidsam_jukebox.jpg",
                  alt: "Song 2",
                  text: "Explore greatest albums",
                },
                {
                  src: "/songs/davidsam/davidsam_recent.jpg",
                  alt: "Song 3",
                  text: "Discover latest hits",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative h-32 w-56 transition-all duration-300 ease-in-out hover:w-60 cursor-pointer group"
                >
                  <Link href="https://www.youtube.com/@davidsamjoyson1" target="_blank">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      quality={100}
                      className="h-full w-full rounded-lg shadow-md object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 px-2 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg grid place-items-center">
                      <p>
                        {item.text}
                        <span className="underline decoration-red-700 ml-1">clicking here</span>
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide flex-nowrap blur_fade_in_up">
                {[
                  { icon: "fab fa-youtube", label: "YouTube", link: "https://www.youtube.com/@davidsamjoyson1" },
                  { icon: "fab fa-instagram", label: "Instagram", link: "https://www.instagram.com/davidsam_joyson" },
                  { icon: "fas fa-envelope", label: "Email", link: "https://mail.google.com/mail/?view=cm&fs=1&to=davidsamjoyson@gmail.com" },
                  { icon: "fab fa-facebook", label: "Facebook", link: "https://www.facebook.com/jdavidsam.joyson" },
                  { icon: "fab fa-spotify", label: "Spotify", link: "https://open.spotify.com/artist/00b8jKD6HWIqU7xeEGgoev" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-2 p-2 bg-[#F5F5F5] rounded-lg shadow 
                  hover:bg-[#84373D] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out min-w-[120px] flex-shrink-0">
                    <i className={`${item.icon} text-xl`}></i>
                    <span className="text-xs font-medium blur_fade_in_up">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Pastor Image (40%) */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 md:col-span-2">
            <Link href="/davidsamjoyson" className="relative group block">
              <Image
                src="/home/pr-davidsam_joyson.jpg"
                alt="Davidsam Joyson" width={384}
                height={512} quality={100} unoptimized={true}
                className="rounded-2xl object-cover cursor-pointer blur_fade_in_up"
              />
            </Link>
          </div>

        </div>
      </section>

      {/* Our Service Section */}
      <section id="ministries" className="py-20 bg-[#F5F5F5] font-poppins">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-semibold text-center font-montserrat text-[#222831] mb-12 blur_fade_in_up">
            Our Services
          </h2>

          {/* Call ServiceSection component here */}
          <ServiceSection />
        </div>
      </section>

      <section id="upcoming" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center font-montserrat text-gray-900 blur_fade_in_up">
            Next <span className="text-[#84373D]">Upcoming</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center blur_fade_in_up">
            {/* LEFT COLUMN */}
            <UpcomingSlider />

            {/* RIGHT COLUMN - Event & Song Details */}
            <div className="space-y-4 max-w-xl mx-auto mt-8 md:mt-0">
              {/* Event Card */}
              <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-4 flex gap-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image
                  src="/home/new_year_2026.jpg"
                  alt="New Year 2026" width={112}
                  height={112} quality={100}
                  className="w-28 md:w-20 h-full rounded-xl object-cover flex-shrink-0 shadow-sm blur_fade_in_up"
                />
                <div className="flex-1 flex flex-col justify-center blur_fade_in_up">
                  <h3 className="text-2xl md:text-xl font-semibold text-gray-900 mb-2 leading-snug">
                    New Year Service 2026
                  </h3>
                  <p className="text-gray-700 text-base md:text-sm mb-1">
                    <span className="font-semibold text-gray-900">Place:</span> Concordia School Ground, Nagercoil
                  </p>
                  <p className="text-gray-700 text-base md:text-sm mb-1">
                    <span className="font-semibold text-gray-900">Date & Time:</span> Dec 31st, 8.30 Pm
                  </p>
                </div>
              </div>

              {/* Song Card 1 */}
              <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-4 flex gap-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image
                  src="/songs/johnsam/um-nithiyai-solla-latest.jpg"
                  alt="Johnsam Joyson Song" width={112}
                  height={112} quality={100}
                  className="w-28 md:w-20 h-full rounded-xl object-cover flex-shrink-0 shadow-sm blur_fade_in_up"
                />
                <div className="flex-1 flex flex-col justify-center blur_fade_in_up">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">New Song {`"UM NEETHIYAI"`}</h3>
                  <p className="text-gray-700 text-base md:text-sm mb-1">
                    <span className="font-semibold text-gray-900">Sung By:</span> Johnsam Joyson
                  </p>
                  <p className="text-gray-700 text-base md:text-sm mb-1">
                    <span className="font-semibold text-gray-900">Released On:</span> August 17th, 2025, 6:00 PM
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Listen Now:</span>{' '}
                    <a
                      href="https://youtu.be/CwjJXGy0nkQ?si=RkfOTHqAQQTao2FM"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="text-[#84373D] font-semibold">Watch Here</span>
                    </a>
                  </p>
                </div>
              </div>

              {/* Song Card 2 */}
              <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-4 flex gap-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image
                  src="/songs/davidsam/neer-indri-latest.webp"
                  alt="Davidsam Joyson Song" width={112}
                  height={112} quality={100}
                  className="w-28 md:w-20 h-full rounded-xl object-cover flex-shrink-0 shadow-sm blur_fade_in_up"
                />
                <div className="flex-1 flex flex-col justify-center blur_fade_in_up">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">New Song {`"NEERINDRI"`}</h3>
                  <p className="text-gray-700 text-base md:text-sm mb-1">
                    <span className="font-semibold text-gray-900">Sung By:</span> Davidsam Joyson
                  </p>
                  <p className="text-gray-700 text-base md:text-sm mb-1">
                    <span className="font-semibold text-gray-900">Released On:</span> Jun 28th, 2025, 6:30 PM
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Listen Now:</span>{' '}
                    <a href="https://youtu.be/3OtDemZ68bA?si=CfVkPZiT-azowRx4"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="text-[#84373D] font-semibold">Watch Here</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="bg-[#F5F5F5] px-6 py-20 font-poppins text-[#222831]">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-4xl font-montserrat font-extrabold mb-6 text-center blur_fade_in_up">
            Full Gospel Pentecostal Church <span className="text-[#84373d]">Nagercoil</span>
          </h2>

          <p className="mb-8 text-gray-700 max-w-4xl mx-auto leading-relaxed text-center blur_fade_in_up">
            Our location at <strong>174, Church Street, Vettoonimadam, Nagercoil - 629 003</strong>...
          </p>

          {/* Map and Distance side-by-side */}
          <div className="flex flex-col md:flex-row items-center max-5w-xl mx-auto mb-8 gap-8">
            {/* Map */}
            <div className="flex-shrink-0 w-full md:w-1/2 rounded-[10px] overflow-hidden shadow-lg blur_fade_in_up">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.1040276247836!2d77.4344110143367!3d8.18214379412862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411763082506f%3A0x7bdc5a57e93a64e3!2sFull%20Gospel%20Pentecostal%20Church!5e0!3m2!1sen!2sin!4v1668432434976!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[10px]"
              ></iframe>
            </div>

            {/* Distance Info */}
            <div className="w-full md:w-1/2 text-gray-800 text-base leading-relaxed">
              <ul className="space-y-6">
                <li className="flex items-center justify-between blur_fade_in_up">
                  <div className="flex items-center">
                    <i className="fas fa-bus text-[#84373d] mr-3 w-6 text-lg"></i>
                    2 km from Nagercoil Main Bus Stand
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Nagercoil+Main+Bus+Stand&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#84373D] hover:bg-[#84373D] text-white text-sm px-3 py-1 rounded transition"
                  >
                    Directions
                  </a>
                </li>

                <li className="flex items-center justify-between blur_fade_in_up">
                  <div className="flex items-center">
                    <i className="fas fa-train text-[#84373d] mr-3 w-6 text-lg"></i>
                    2 km from Nagercoil Town Railway Station
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Nagercoil+Town+Railway+Station&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#84373D] hover:bg-[#84373D] text-white text-sm px-3 py-1 rounded transition"
                  >
                    Directions
                  </a>
                </li>

                <li className="flex items-center justify-between blur_fade_in_up">
                  <div className="flex items-center">
                    <i className="fas fa-train text-[#84373d] mr-3 w-6 text-lg"></i>
                    5 km from Nagercoil Main Railway Station
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Nagercoil+Main+Railway+Station&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#84373D] hover:bg-[#84373D] text-white text-sm px-3 py-1 rounded transition"
                  >
                    Directions
                  </a>
                </li>

                <li className="flex items-center justify-between blur_fade_in_up">
                  <div className="flex items-center">
                    <i className="fas fa-train text-[#84373d] mr-3 w-6 text-lg"></i>
                    20 km from Kanyakumari Railway Station
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Kanyakumari+Railway+Station&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#84373D] hover:bg-[#84373D] text-white text-sm px-3 py-1 rounded transition"
                  >
                    Directions
                  </a>
                </li>

                <li className="flex items-center justify-between blur_fade_in_up">
                  <div className="flex items-center">
                    <i className="fas fa-plane text-[#84373d] mr-3 w-6 text-lg"></i>
                    70 km from Thiruvananthapuram Airport
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Thiruvananthapuram+Airport&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#84373D] hover:bg-[#84373D] text-white text-sm px-3 py-1 rounded transition"
                  >
                    Directions
                  </a>
                </li>

                <li className="flex items-center justify-between blur_fade_in_up">
                  <div className="flex items-center">
                    <i className="fas fa-plane text-[#84373d] mr-3 w-6 text-lg"></i>
                    115 km from Tuticorin Airport
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Tuticorin+Airport&destination=174+Church+Street+Vettoonimadam+Nagercoil+629003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#84373D] hover:bg-[#84373D] text-white text-sm px-3 py-1 rounded transition"
                  >
                    Directions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Full+Gospel+Pentecostal+Church+Nagercoil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#84373D] text-white px-6 py-2 rounded-[10px] text-md font-semibold hover:bg-[#84373D] transition blur_fade_in_up"
            >
              Get Church Directions
            </a>
          </div>
        </div>
      </section>

      <section id="contactus" className="bg-white px-6 py-20 font-poppins text-[#222831]">
        <div className="container max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-semibold mb-6 font-montserrat blur_fade_in_up"><span className="text-[#84373D]">Connect</span> With Our Team</h2>
          <p className="mb-6 text-gray-700 blur_fade_in_up">
            We&apos;re here to assist you! Please contact us using the details below for any questions, prayer requests, feedback, or further information. We look forward to connecting with you soon!
          </p>
        </div>
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-[#f8f8f8] border border-[#DEDEDE] rounded-xl p-6 shadow-md max-w-xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 font-montserrat text-center blur_fade_in_up">Get in Touch with Us</h2>
            <form className="space-y-5 blur_fade_in_up">

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
          </div>

          {/* Contact Details */}
          <div className="font-poppins">
            <h2 className="text-3xl font-semibold mb-6 font-montserrat blur_fade_in_up">Contact Details</h2>
            <p className="mb-6 text-gray-700 blur_fade_in_up">
              For inquiries, support, or prayers, connect with us through the details below anytime for assistance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Mobile */}
              <a href="tel:+919488484745" className="block hover:no-underline">
                <div className="flex items-center bg-white border rounded-[10px] p-4 shadow-sm hover:shadow-md transition duration-300 blur_fade_in_up">
                  <div className="bg-[#3E3E3E] text-[#DEDEDE] px-4 py-3 rounded-[10px] mr-4 hover:bg-[#84373D] transition duration-300">
                    <i className="fas fa-phone-alt text-lg transform rotate-90 cursor-pointer"></i>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Mobile</p>
                    <p className="text-md text-[#555]">+91 9488484745</p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mail@fgpcngl.com" className="block hover:no-underline">
                <div className="flex items-center bg-white border rounded-[10px] p-4 shadow-sm hover:shadow-md transition duration-300 blur_fade_in_up">
                  <div className="bg-[#3E3E3E] text-[#DEDEDE] px-4 py-3 rounded-[10px] mr-4 hover:bg-[#84373D] transition duration-300">
                    <i className="fas fa-envelope text-lg cursor-pointer"></i>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <p className="text-md text-[#555]">mail@fgpcngl.com</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Address */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Full+Gospel+Pentecostal+Church+Nagercoil"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:no-underline"
            >
              <div className="flex bg-white border rounded-[10px] p-4 shadow-sm hover:shadow-md transition duration-300 mb-6 blur_fade_in_up">
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

            {/* Social Media Icons */}
            <div className="mt-6">
              <hr className="mb-4" />
              <div className="flex items-center justify-between blur_fade_in_up">
                <p className="font-semibold mb-0">Social Media:</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/fgpcnagercoil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#3E3E3E] text-white rounded-[10px] hover:bg-[#84373D] transition duration-300">
                    <i className="fab fa-facebook-f text-md"></i>
                  </a>
                  <a href="https://www.instagram.com/fgpcnagercoil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#3E3E3E] text-white rounded-[10px] hover:bg-[#84373D] transition duration-300">
                    <i className="fab fa-instagram text-md"></i>
                  </a>
                  <a href="https://www.youtube.com/@fgpcnagercoil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#3E3E3E] text-white rounded-[10px] hover:bg-[#84373D] transition duration-300">
                    <i className="fab fa-youtube text-md"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}