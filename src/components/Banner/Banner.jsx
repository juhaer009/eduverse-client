import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaArrowRight,
  FaGraduationCap,
  FaClock,
  FaCertificate,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaPause,
} from "react-icons/fa";
import logo from "../../assets/eduverse-logo.png";
import { Link } from "react-router";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Banner = ({
  ctaHref = "/allcourse",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      title: "Learn at your pace, succeed everywhere.",
      subtitle: "High-quality courses, expert instructors, and a community that helps you grow.",
      ctaText: "Get Started",
      heroImage: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80",
      gradient: "from-indigo-600 via-sky-500 to-teal-400",
      featuredCourse: {
        title: "Full-Stack Web Development",
        price: "$119.99",
        link: "http://localhost:5173/course-details/691325afcff2042c22e6b812"
      }
    },
    {
      title: "Master new skills with expert guidance.",
      subtitle: "Join thousands of learners advancing their careers with our comprehensive courses.",
      ctaText: "Explore Courses",
      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
      gradient: "from-purple-600 via-pink-500 to-red-400",
      featuredCourse: {
        title: "Data Science Fundamentals",
        price: "$99.99",
        link: "/allcourse"
      }
    },
    {
      title: "Build your future with cutting-edge technology.",
      subtitle: "Learn from industry professionals and get hands-on experience with real projects.",
      ctaText: "Start Learning",
      heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      gradient: "from-green-600 via-blue-500 to-purple-400",
      featuredCourse: {
        title: "Mobile App Development",
        price: "$149.99",
        link: "/allcourse"
      }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: 'smooth'
    });
  };

  const currentSlideData = slides[currentSlide];
  return (
    <section
      aria-label="Eduverse Banner"
      className={`relative bg-gradient-to-r ${currentSlideData.gradient} text-white min-h-[50vh] sm:min-h-[60vh] max-h-[70vh] h-screen overflow-hidden`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-white rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 xl:py-16 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center h-full">
          {/* Left: Text / CTAs */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 animate-fade-in order-2 lg:order-1">
            {/* Brand */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center ring-1 ring-white/25"
                  src={logo}
                  alt="eduverse logo"
                />
              </div>
              <div>
                <span className="font-semibold text-sm sm:text-base lg:text-lg">Eduverse</span>
                <div className="text-xs sm:text-sm opacity-90">
                  Online learning for curious minds
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight drop-shadow-sm">
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-sm sm:text-base lg:text-lg opacity-95 leading-relaxed">
              {currentSlideData.subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col xs:flex-row xs:items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              <Link
                to={ctaHref}
                className="btn btn-primary btn-sm sm:btn-md lg:btn-lg flex items-center gap-2 sm:gap-3 shadow-lg hover:scale-105 transition-transform duration-200 text-xs sm:text-sm lg:text-base"
              >
                {currentSlideData.ctaText}
                <FaArrowRight className="text-xs sm:text-sm" />
              </Link>
              
              {/* Auto-play control */}
              <button
                onClick={toggleAutoPlay}
                className="btn btn-ghost btn-sm sm:btn-md text-white hover:bg-white/20 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
              >
                {isAutoPlay ? <FaPause className="text-xs sm:text-sm" /> : <FaPlay className="text-xs sm:text-sm" />}
                <span className="hidden xs:inline">{isAutoPlay ? 'Pause' : 'Play'}</span>
              </button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-1 sm:gap-2 lg:gap-3 mt-3 sm:mt-4">
              <span className="badge badge-xs sm:badge-sm lg:badge-md bg-white/10 border-white/20 text-xs">
                <FaGraduationCap className="mr-1 text-xs" /> 
                <span className="hidden xs:inline">Expert </span>instructors
              </span>
              <span className="badge badge-xs sm:badge-sm lg:badge-md bg-white/10 border-white/20 text-xs">
                <FaClock className="mr-1 text-xs" /> Self-paced
              </span>
              <span className="badge badge-xs sm:badge-sm lg:badge-md bg-white/10 border-white/20 text-xs">
                <AiFillSafetyCertificate className="mr-1 text-xs" /> Certificate
              </span>
            </div>
          </div>

          {/* Right: Hero image card */}
          <div className="relative animate-slide-in order-1 lg:order-2">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl ring-1 ring-white/10 hover:scale-105 transition-transform duration-300">
              <img
                src={currentSlideData.heroImage}
                alt="Students learning online"
                className="w-full h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 2xl:h-96 object-cover"
                loading="lazy"
              />
              {/* Overlay card */}
              <div className="absolute left-2 sm:left-3 lg:left-6 bottom-2 sm:bottom-3 lg:bottom-6 bg-white/10 backdrop-blur-sm p-2 sm:p-3 lg:p-4 rounded-lg border border-white/10 w-[90%] sm:w-[86%]">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-semibold">Featured Course</div>
                    <div className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold truncate">
                      {currentSlideData.featuredCourse.title}
                    </div>
                  </div>
                  <div className="text-right ml-2">
                    <div className="text-xs opacity-90">From</div>
                    <div className="text-sm sm:text-base lg:text-lg font-semibold">{currentSlideData.featuredCourse.price}</div>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1 sm:gap-2 lg:gap-3">
                  <span className="btn btn-xs sm:btn-sm btn-primary text-xs">
                    <span className="hidden xs:inline">Enroll </span>now
                  </span>
                  <a
                    className="btn btn-xs sm:btn-sm btn-ghost text-xs"
                    href={currentSlideData.featuredCourse.link}
                  >
                    <span className="hidden xs:inline">View </span>course
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative gradient blur */}
            <div className="pointer-events-none absolute -right-3 sm:-right-6 lg:-right-10 -top-3 sm:-top-6 lg:-top-10 w-16 sm:w-24 lg:w-32 xl:w-48 h-16 sm:h-24 lg:h-32 xl:h-48 rounded-full bg-white/10 blur-2xl sm:blur-3xl" />
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 xl:bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 lg:gap-4">
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="btn btn-circle btn-xs sm:btn-sm lg:btn-md btn-ghost text-white hover:bg-white/20"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xs sm:text-sm lg:text-base" />
        </button>

        {/* Slide indicators */}
        <div className="flex gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="btn btn-circle btn-xs sm:btn-sm lg:btn-md btn-ghost text-white hover:bg-white/20"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xs sm:text-sm lg:text-base" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: isAutoPlay ? `${((currentSlide + 1) / slides.length) * 100}%` : '0%'
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
