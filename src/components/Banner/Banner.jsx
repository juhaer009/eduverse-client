import React from "react";
import {
  FaPlay,
  FaArrowRight,
  FaGraduationCap,
  FaClock,
  FaCertificate,
} from "react-icons/fa";
import logo from "../../assets/eduverse-logo.png";
import { Link } from "react-router";

const Banner = ({
  title = "Learn at your pace, succeed everywhere.",
  subtitle = "High-quality courses, expert instructors, and a community that helps you grow.",
  ctaText = "Get Started",
  ctaHref = "/allcourse",
  heroImage = "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80",
}) => {
  return (
    <section
      aria-label="Eduverse Banner"
      className="bg-linear-to-r from-indigo-600 via-sky-500 to-teal-400 text-white"
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text / CTAs */}
          <div className="space-y-6">
            {/* brand */}
            <div className="flex items-center gap-3">
              <div className="">
                <img
                  className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center ring-1 ring-white/25"
                  src={logo}
                  alt="eduverse logo"
                />
              </div>
              <div>
                <span className="font-semibold">Eduverse</span>
                <div className="text-xs opacity-90">
                  Online learning for curious minds
                </div>
              </div>
            </div>

            {/* headline */}
            <h1 className="text-3xl md:text-5xl font-extrabold leading-snug drop-shadow-sm">
              {title}
            </h1>

            {/* subtitle */}
            <p className="max-w-xl text-sm md:text-base opacity-95">
              {subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
              <Link
                to={ctaHref}
                className="btn btn-primary btn-lg flex items-center gap-3 shadow-lg"
              >
                {ctaText}
                <FaArrowRight />
              </Link>
            </div>

            {/* feature badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="badge badge-sm bg-white/10 border-white/20">
                <FaGraduationCap className="mr-2" /> Expert instructors
              </span>
              <span className="badge badge-sm bg-white/10 border-white/20">
                <FaClock className="mr-2" /> Self-paced
              </span>
              <span className="badge badge-sm bg-white/10 border-white/20">
                <FaCertificate className="mr-2" /> Certificate
              </span>
            </div>
          </div>

          {/* Right: Hero image card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={heroImage}
                alt="Students learning online"
                className="w-full h-72 md:h-96 object-cover"
                loading="lazy"
              />
              {/* overlay card */}
              <div className="absolute left-6 bottom-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 w-[86%]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Featured Course</div>
                    <div className="text-base md:text-lg font-bold">
                      Full-Stack Web Development
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">From</div>
                    <div className="text-lg font-semibold">$119.99</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span
                    className="btn btn-xs btn-primary"
                  >
                    Enroll now
                  </span>
                  <a
                    className="btn btn-xs btn-ghost"
                    href="http://localhost:5173/course-details/691325afcff2042c22e6b812"
                  >
                    View course
                  </a>
                </div>
              </div>
            </div>

            {/* decorative gradient blur */}
            <div className="pointer-events-none absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
