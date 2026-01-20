import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  FaGraduationCap, 
  FaUsers, 
  FaGlobe, 
  FaCertificate,
  FaLightbulb,
  FaHeart,
  FaRocket,
  FaAward,
  FaChartLine,
  FaHandshake
} from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: FaUsers, number: "50,000+", label: "Happy Students" },
    { icon: FaGraduationCap, number: "500+", label: "Expert Instructors" },
    { icon: FaCertificate, number: "1,000+", label: "Courses Available" },
    { icon: FaGlobe, number: "100+", label: "Countries Reached" }
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We constantly evolve our platform with cutting-edge technology to provide the best learning experience."
    },
    {
      icon: FaHeart,
      title: "Passion",
      description: "We're passionate about education and believe in the transformative power of learning."
    },
    {
      icon: FaHandshake,
      title: "Community",
      description: "We foster a supportive community where learners and instructors grow together."
    },
    {
      icon: FaAward,
      title: "Excellence",
      description: "We maintain the highest standards in course quality and student support."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Former education director with 15+ years of experience in online learning."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Tech visionary who has built scalable learning platforms for millions of users."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Curriculum expert ensuring our courses meet the highest educational standards."
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <Helmet>
        <title>About Us - Eduverse</title>
        <meta name="description" content="Learn about Eduverse's mission to transform online education" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="text-base-100">Eduverse</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering learners worldwide through innovative online education and 
            building a community where knowledge knows no boundaries.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-4 sm:mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-base sm:text-lg text-base-content/80 mb-4 sm:mb-6 leading-relaxed">
                At Eduverse, we believe that quality education should be accessible to everyone, 
                everywhere. Our mission is to democratize learning by providing world-class courses, 
                expert instructors, and a supportive community that helps learners achieve their goals.
              </p>
              <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
                We're not just an online learning platform – we're a catalyst for personal and 
                professional transformation, helping millions of people unlock their potential 
                and build the future they envision.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students learning together"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              Our <span className="text-primary">Impact</span>
            </h2>
            <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
              Numbers that reflect our commitment to transforming lives through education
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-base-100 rounded-xl shadow-sm">
                <stat.icon className="text-3xl sm:text-4xl lg:text-5xl text-primary mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-base-content/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
              The principles that guide everything we do at Eduverse
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <value.icon className="text-3xl sm:text-4xl text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-base-content mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-base-content/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
              The passionate individuals behind Eduverse's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-base-content mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2 sm:mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-base text-base-content/70">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                alt="Future of learning"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-4 sm:mb-6">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-base sm:text-lg text-base-content/80 mb-4 sm:mb-6 leading-relaxed">
                We envision a world where learning is limitless, where geographical boundaries 
                don't determine educational opportunities, and where every individual has the 
                tools they need to succeed in an ever-evolving digital landscape.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Global accessibility to quality education",
                  "Personalized learning experiences for everyone",
                  "Bridging the skills gap in emerging technologies",
                  "Building a connected community of lifelong learners"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaRocket className="text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-base-content">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already transforming their careers with Eduverse
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/allcourse" className="btn btn-accent btn-sm sm:btn-md lg:btn-lg">
              <FaChartLine className="mr-2" />
              Explore Courses
            </a>
            <a href="/register" className="btn btn-outline btn-sm sm:btn-md lg:btn-lg text-white border-white hover:bg-white hover:text-primary">
              <FaUsers className="mr-2" />
              Join Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;