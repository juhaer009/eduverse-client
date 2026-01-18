import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { 
  FaUser, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaGraduationCap,
  FaCertificate,
  FaEdit,
  FaStar,
  FaBook,
  FaClock,
  FaTrophy,
  FaChartLine
} from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  // Dummy data for demonstration
  const profileData = {
    joinDate: "January 15, 2023",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    bio: "Passionate learner and technology enthusiast. Always eager to explore new technologies and expand my skill set.",
    completedCourses: 12,
    certificatesEarned: 8,
    totalLearningHours: 156,
    currentStreak: 15,
    skillLevel: "Intermediate",
    favoriteSubjects: ["Web Development", "Data Science", "Mobile Development"]
  };

  const recentCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      progress: 85,
      instructor: "Sarah Johnson",
      rating: 4.8,
      lastAccessed: "2 days ago"
    },
    {
      id: 2,
      title: "Python for Data Science",
      progress: 60,
      instructor: "Michael Chen",
      rating: 4.9,
      lastAccessed: "1 week ago"
    },
    {
      id: 3,
      title: "Mobile App Design",
      progress: 100,
      instructor: "Emily Rodriguez",
      rating: 4.7,
      lastAccessed: "2 weeks ago"
    }
  ];

  const achievements = [
    {
      icon: FaTrophy,
      title: "Course Completion Champion",
      description: "Completed 10+ courses",
      date: "Dec 2024",
      color: "text-yellow-500"
    },
    {
      icon: FaStar,
      title: "Top Performer",
      description: "Maintained 90%+ average score",
      date: "Nov 2024",
      color: "text-blue-500"
    },
    {
      icon: FaChartLine,
      title: "Learning Streak Master",
      description: "15-day learning streak",
      date: "Jan 2025",
      color: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-base-200 py-8 sm:py-12">
      <Helmet>
        <title>Profile - Eduverse</title>
        <meta name="description" content="Your learning profile and progress on Eduverse" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-base-100 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6">
            <div className="relative">
              <img
                src={user?.photoURL || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
                alt={user?.displayName || "User"}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-primary/20"
              />
              <button className="absolute bottom-0 right-0 btn btn-circle btn-sm btn-primary">
                <FaEdit className="text-xs" />
              </button>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content">
                    {user?.displayName || "John Doe"}
                  </h1>
                  <p className="text-sm sm:text-base text-base-content/70 mt-1">
                    {profileData.skillLevel} Level Learner
                  </p>
                </div>
                <button className="btn btn-primary btn-sm sm:btn-md self-start sm:self-auto">
                  <FaEdit className="mr-2" />
                  Edit Profile
                </button>
              </div>
              
              <p className="text-sm sm:text-base text-base-content/80 mt-3 sm:mt-4 max-w-2xl">
                {profileData.bio}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <div className="bg-base-100 rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-base-content mb-4 sm:mb-6">
                Contact Information
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary text-sm sm:text-base" />
                  <span className="text-sm sm:text-base text-base-content">
                    {user?.email || "john.doe@example.com"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-primary text-sm sm:text-base" />
                  <span className="text-sm sm:text-base text-base-content">
                    {profileData.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-primary text-sm sm:text-base" />
                  <span className="text-sm sm:text-base text-base-content">
                    {profileData.location}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-primary text-sm sm:text-base" />
                  <span className="text-sm sm:text-base text-base-content">
                    Joined {profileData.joinDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Learning Stats */}
            <div className="bg-base-100 rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-base-content mb-4 sm:mb-6">
                Learning Statistics
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-primary/10 rounded-lg">
                  <FaBook className="text-primary text-xl sm:text-2xl mx-auto mb-2" />
                  <div className="text-lg sm:text-xl font-bold text-base-content">
                    {profileData.completedCourses}
                  </div>
                  <div className="text-xs sm:text-sm text-base-content/70">
                    Courses Completed
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-secondary/10 rounded-lg">
                  <FaCertificate className="text-secondary text-xl sm:text-2xl mx-auto mb-2" />
                  <div className="text-lg sm:text-xl font-bold text-base-content">
                    {profileData.certificatesEarned}
                  </div>
                  <div className="text-xs sm:text-sm text-base-content/70">
                    Certificates
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-accent/10 rounded-lg">
                  <FaClock className="text-accent text-xl sm:text-2xl mx-auto mb-2" />
                  <div className="text-lg sm:text-xl font-bold text-base-content">
                    {profileData.totalLearningHours}h
                  </div>
                  <div className="text-xs sm:text-sm text-base-content/70">
                    Learning Hours
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-success/10 rounded-lg">
                  <FaChartLine className="text-success text-xl sm:text-2xl mx-auto mb-2" />
                  <div className="text-lg sm:text-xl font-bold text-base-content">
                    {profileData.currentStreak}
                  </div>
                  <div className="text-xs sm:text-sm text-base-content/70">
                    Day Streak
                  </div>
                </div>
              </div>
            </div>

            {/* Favorite Subjects */}
            <div className="bg-base-100 rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-base-content mb-4 sm:mb-6">
                Favorite Subjects
              </h2>
              <div className="flex flex-wrap gap-2">
                {profileData.favoriteSubjects.map((subject, index) => (
                  <span
                    key={index}
                    className="badge badge-primary badge-sm sm:badge-md"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Courses & Achievements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Courses */}
            <div className="bg-base-100 rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-base-content mb-4 sm:mb-6">
                Recent Courses
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {recentCourses.map((course) => (
                  <div key={course.id} className="border border-base-300 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-base-content">
                          {course.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-base-content/70">
                          by {course.instructor} • Last accessed {course.lastAccessed}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-xs" />
                            <span className="text-xs sm:text-sm text-base-content/70">
                              {course.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm sm:text-base font-medium text-base-content">
                          {course.progress}% Complete
                        </div>
                        <div className="w-24 sm:w-32 bg-base-300 rounded-full h-2 mt-1">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-base-100 rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-base-content mb-4 sm:mb-6">
                Recent Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border border-base-300 rounded-lg p-3 sm:p-4 text-center hover:shadow-md transition-shadow">
                    <achievement.icon className={`text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3 ${achievement.color}`} />
                    <h3 className="text-sm sm:text-base font-semibold text-base-content mb-1 sm:mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-base-content/70 mb-1 sm:mb-2">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-base-content/60">
                      {achievement.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;