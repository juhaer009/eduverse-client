import { useLoaderData } from "react-router";
import { useState, useEffect, useMemo } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import CourseCardSkeleton from "../../components/Loading/CourseCardSkeleton";
import { Helmet } from "react-helmet-async";
import { 
  FaSearch, 
  FaFilter, 
  FaSort, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaChevronDown
} from "react-icons/fa";

const AllCourse = () => {
  const courses = useLoaderData();
  const [loading, setLoading] = useState(true);
  
  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showFilters, setShowFilters] = useState(false);
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(12);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Get unique categories from courses
  const categories = useMemo(() => {
    if (!courses) return [];
    const uniqueCategories = [...new Set(courses.map(course => course.category))];
    return uniqueCategories.sort();
  }, [courses]);

  // Filter and Search Logic
  const filteredCourses = useMemo(() => {
    if (!courses) return [];
    
    let filtered = courses.filter(course => {
      // Search filter
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (course.instructor && course.instructor.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Category filter
      const matchesCategory = !selectedCategory || course.category === selectedCategory;
      
      // Price filter
      const coursePrice = parseFloat(course.price);
      const matchesPrice = (!priceRange.min || coursePrice >= parseFloat(priceRange.min)) &&
                          (!priceRange.max || coursePrice <= parseFloat(priceRange.max));
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sorting
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case "price":
          aValue = parseFloat(a.price);
          bValue = parseFloat(b.price);
          break;
        case "title":
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case "category":
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        case "date":
          aValue = new Date(a.createdAt || a.date || "2024-01-01");
          bValue = new Date(b.createdAt || b.date || "2024-01-01");
          break;
        default:
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
      }
      
      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [courses, searchTerm, selectedCategory, priceRange, sortBy, sortOrder]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, priceRange, sortBy, sortOrder]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setPriceRange({ min: "", max: "" });
    setSortBy("title");
    setSortOrder("asc");
    setCurrentPage(1);
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Helmet>
        <title>All Courses - Eduverse</title>
        <meta name="description" content="Browse and search all available courses on Eduverse" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-3 sm:mb-4">
            All <span className="text-primary">Courses</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-base-content/70 mb-4">
            Discover our complete collection of courses
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-base-200 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          {/* Search Bar */}
          <div className="relative mb-4 sm:mb-6">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
              <input
                type="text"
                placeholder="Search courses by title, category, or instructor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input input-bordered w-full pl-10 pr-4 text-sm sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-outline btn-sm flex items-center gap-2"
            >
              <FaFilter />
              Filters
              <FaChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            <div className="text-sm text-base-content/70">
              {filteredCourses.length} of {courses?.length || 0} courses
            </div>
          </div>

          {/* Filters */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
            {/* Category Filter */}
            <div>
              <label className="label label-text text-sm font-medium">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="select select-bordered w-full text-sm"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="label label-text text-sm font-medium">Price Range</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                  className="input input-bordered w-full text-sm"
                  min="0"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                  className="input input-bordered w-full text-sm"
                  min="0"
                />
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="label label-text text-sm font-medium">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select select-bordered w-full text-sm"
              >
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
                <option value="date">Date Added</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="label label-text text-sm font-medium">Order</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="select select-bordered w-full text-sm"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          {/* Filter Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4 sm:mt-6">
            <div className="text-sm text-base-content/70 hidden lg:block">
              Showing {currentCourses.length} of {filteredCourses.length} courses
              {filteredCourses.length !== courses?.length && ` (filtered from ${courses?.length} total)`}
            </div>
            <button
              onClick={clearFilters}
              className="btn btn-ghost btn-sm text-error hover:bg-error/10"
            >
              <FaTimes className="mr-2" />
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(12)].map((_, index) => (
              <CourseCardSkeleton key={index} />
            ))}
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-base-content mb-2">
              No Courses Found
            </h3>
            <p className="text-base-content/70 mb-4">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={clearFilters}
              className="btn btn-primary btn-sm"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {currentCourses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 sm:mt-12">
                <div className="text-sm text-base-content/70">
                  Page {currentPage} of {totalPages} ({filteredCourses.length} total courses)
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrevious}
                    disabled={currentPage === 1}
                    className="btn btn-outline btn-sm disabled:opacity-50"
                  >
                    <FaChevronLeft />
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {getPageNumbers().map((page, index) => (
                      <button
                        key={index}
                        onClick={() => typeof page === 'number' && goToPage(page)}
                        disabled={page === '...'}
                        className={`btn btn-sm ${
                          page === currentPage 
                            ? 'btn-primary' 
                            : page === '...' 
                              ? 'btn-ghost cursor-default' 
                              : 'btn-ghost hover:btn-outline'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    className="btn btn-outline btn-sm disabled:opacity-50"
                  >
                    Next
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllCourse;
