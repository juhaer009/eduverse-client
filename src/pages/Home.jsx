import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import useAxiosSecure from "../hooks/useAxiosSecure";
import FeaturedCourseCard from "../components/FeaturedCourseCard/FeaturedCourseCard";
import { Helmet } from "react-helmet-async";
import { 
  FaGraduationCap, 
  FaUsers, 
  FaCertificate, 
  FaGlobe,
  FaCode,
  FaDesktop,
  FaMobile,
  FaDatabase,
  FaChartLine,
  FaPalette,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaPlay,
  FaCheck,
  FaQuestion,
  FaChevronDown,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const [featuredCourses, setFeaturedCourses] = useState();
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    axiosSecure.get("/featured-courses").then((data) => {
      setFeaturedCourses(data.data);
    });
  }, [axiosSecure, setFeaturedCourses]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  // Sample data for sections
  const stats = [
    { icon: FaUsers, number: "50,000+", label: "Active Students" },
    { icon: FaGraduationCap, number: "500+", label: "Expert Instructors" },
    { icon: FaCertificate, number: "1,000+", label: "Courses Available" },
    { icon: FaGlobe, number: "100+", label: "Countries Reached" }
  ];

  const features = [
    {
      icon: FaPlay,
      title: "Interactive Learning",
      description: "Engage with hands-on projects and real-world scenarios"
    },
    {
      icon: FaCertificate,
      title: "Industry Certificates",
      description: "Earn recognized certificates from top industry partners"
    },
    {
      icon: FaUsers,
      title: "Expert Mentorship",
      description: "Get guidance from experienced professionals in your field"
    },
    {
      icon: FaGlobe,
      title: "Global Community",
      description: "Connect with learners and professionals worldwide"
    },
    {
      icon: FaChartLine,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics"
    },
    {
      icon: FaMobile,
      title: "Mobile Learning",
      description: "Learn anywhere, anytime with our mobile-optimized platform"
    }
  ];

  const categories = [
    { icon: FaCode, name: "Programming", courses: 150, color: "bg-blue-500" },
    { icon: FaDesktop, name: "Web Development", courses: 120, color: "bg-green-500" },
    { icon: FaMobile, name: "Mobile Development", courses: 80, color: "bg-purple-500" },
    { icon: FaDatabase, name: "Data Science", courses: 90, color: "bg-orange-500" },
    { icon: FaChartLine, name: "Business", courses: 110, color: "bg-red-500" },
    { icon: FaPalette, name: "Design", courses: 70, color: "bg-pink-500" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      company: "Tech Corp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Eduverse transformed my career. The courses are comprehensive and the instructors are world-class."
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Analytics Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The hands-on projects and real-world applications made all the difference in my learning journey."
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Design Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Amazing platform with excellent support. I landed my dream job thanks to the skills I learned here."
    }
  ];

  const blogPosts = [
    {
      title: "10 Essential Skills for Modern Developers",
      excerpt: "Discover the key skills that every developer needs to succeed in today's tech landscape.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      date: "Jan 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "The Future of Online Learning",
      excerpt: "Explore how technology is reshaping education and creating new opportunities for learners.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      date: "Jan 12, 2024",
      readTime: "7 min read"
    },
    {
      title: "Building Your First Mobile App",
      excerpt: "A step-by-step guide to creating your first mobile application from scratch.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      date: "Jan 10, 2024",
      readTime: "10 min read"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Eduverse?",
      answer: "Simply create an account, browse our course catalog, and enroll in courses that match your interests and goals. Many courses offer free previews to help you decide."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes! Our certificates are recognized by leading companies worldwide. We partner with industry leaders to ensure our curriculum meets current market demands."
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Absolutely! All our courses are self-paced, allowing you to learn when it's convenient for you. You'll have lifetime access to course materials."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee on all paid courses. If you're not satisfied, you can request a full refund within 30 days of purchase."
    },
    {
      question: "Is there support available if I get stuck?",
      answer: "Yes! We provide 24/7 support through our community forums, live chat, and direct instructor access. You're never alone in your learning journey."
    }
  ];
  return (
    <div>
      <Helmet>
        <title>Home - Eduverse</title>
        <meta name="description" content="Transform your career with Eduverse - the leading online learning platform" />
      </Helmet>

      {/* 1. Hero Banner */}
      <Banner />

      {/* 2. Statistics Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <stat.icon className="text-2xl sm:text-3xl lg:text-4xl text-primary mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-base-content mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-base-content/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              Why Choose <span className="text-primary">Eduverse</span>?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-base-content/70 max-w-2xl mx-auto">
              Discover the features that make Eduverse the preferred choice for millions of learners worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-4 sm:p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <feature.icon className="text-2xl sm:text-3xl text-primary mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-base-content mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-base-content/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Course Categories */}
      <section className="py-8 sm:py-12 lg:py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              Explore <span className="text-primary">Categories</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-base-content/70 max-w-2xl mx-auto">
              Find the perfect course in your area of interest
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer h-full">
                <div className="p-4 sm:p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 text-center h-full flex flex-col justify-between min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]">
                  <div className="flex flex-col items-center flex-1 justify-center">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <category.icon className="text-lg sm:text-xl text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-base-content mb-1 sm:mb-2 text-center leading-tight">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-base-content/70 mt-auto">
                    {category.courses} courses
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Courses */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              <span className="text-primary">Popular</span> Courses
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-base-content/70 max-w-2xl mx-auto">
              Join thousands of students in our most popular courses
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredCourses?.map((course) => (
              <FeaturedCourseCard
                key={course._id}
                course={course}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-8 sm:py-12 lg:py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              What Our <span className="text-primary">Students</span> Say
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-base-content/70 max-w-2xl mx-auto">
              Real stories from real students who transformed their careers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-base-100 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3 sm:mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-base-content">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-base-content/70">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-2 sm:mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <FaQuoteLeft className="text-primary text-lg sm:text-xl mb-2 sm:mb-3" />
                <p className="text-sm sm:text-base text-base-content/80 italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Success Stories / Highlights */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-4 sm:mb-6">
                Transform Your <span className="text-primary">Career</span> Today
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-base-content/70 mb-4 sm:mb-6">
                Join millions of learners who have advanced their careers with Eduverse. 
                Our comprehensive courses and expert instructors will guide you every step of the way.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Learn from industry experts",
                  "Get hands-on experience with real projects",
                  "Earn recognized certificates",
                  "Join a global community of learners"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheck className="text-primary mr-2 sm:mr-3 text-sm sm:text-base" />
                    <span className="text-sm sm:text-base text-base-content">{item}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary btn-sm sm:btn-md lg:btn-lg">
                Start Learning Today
                <FaArrowRight className="ml-2" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students learning"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Blog/News Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-base-content/70 max-w-2xl mx-auto">
              Stay updated with the latest trends and tips in technology and education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-primary text-primary-content px-2 py-1 rounded-full text-xs">
                    {post.readTime}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-base-content/60 mb-2">
                    {post.date}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-base-content mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-base-content/70 mb-3 sm:mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-primary text-sm sm:text-base font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-base-content/70">
              Find answers to common questions about our platform
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-base-100 rounded-xl shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-base-200 transition-colors rounded-xl"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-base-content pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown 
                    className={`text-primary transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-base-content/70">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Newsletter Subscription */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Stay Updated with <span className="text-base-100">Eduverse</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get the latest course updates, learning tips, and exclusive offers delivered to your inbox
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered flex-1 text-sm sm:text-base"
              required
            />
            <button type="submit" className="btn btn-accent btn-sm sm:btn-md">
              <FaEnvelope className="mr-2" />
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
            Ready to Start Your <span className="text-primary">Learning Journey</span>?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-base-content/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join millions of learners worldwide and take the first step towards your dream career
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="btn btn-primary btn-sm sm:btn-md lg:btn-lg">
              Browse All Courses
              <FaArrowRight className="ml-2" />
            </button>
            <button className="btn btn-outline btn-sm sm:btn-md lg:btn-lg">
              <FaPlay className="mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* 12. Contact Information */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-base-content/70">
              Have questions? We're here to help you succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-base-100 rounded-xl shadow-sm">
              <FaEnvelope className="text-2xl sm:text-3xl text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-base-content mb-2">
                Email Us
              </h3>
              <p className="text-sm sm:text-base text-base-content/70">
                support@eduverse.com
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-base-100 rounded-xl shadow-sm">
              <FaPhone className="text-2xl sm:text-3xl text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-base-content mb-2">
                Call Us
              </h3>
              <p className="text-sm sm:text-base text-base-content/70">
                +1 (555) 123-4567
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-base-100 rounded-xl shadow-sm">
              <FaMapMarkerAlt className="text-2xl sm:text-3xl text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-base-content mb-2">
                Visit Us
              </h3>
              <p className="text-sm sm:text-base text-base-content/70">
                123 Learning St, Education City
              </p>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a href="https://www.facebook.com/JH.Jafid/" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl text-base-content/60 hover:text-primary transition-colors">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/juhaer-hakim/" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl text-base-content/60 hover:text-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl text-base-content/60 hover:text-primary transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
