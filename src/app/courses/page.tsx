// app/courses/page.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { BookOpen, Users, DollarSign, ChevronRight, Search, Filter, Star, Clock, Calendar, TrendingUp, Target, Grid, List, BarChart2 } from 'lucide-react';

const dummyCourses = [
  {
    id: '1',
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React.js and build interactive UIs with modern hooks and state management.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
    category: 'Development',
    instructor: 'John Doe',
    price: 49.99,
    enrollments: 150,
    rating: 4.8,
    duration: '12 hours',
    level: 'Beginner',
    lastUpdated: '2023-08-15',
    lessons: 24,
    progress: 0, // Assuming 0% progress for simplicity
  },
  {
    id: '2',
    title: 'Advanced Tailwind CSS',
    description: 'Master Tailwind CSS for rapid UI development with utility-first approach and custom configurations.',
    thumbnail: 'https://images.unsplash.com/photo-1655721529465-ddfb4f2deec4?w=400&h=200&fit=crop',
    category: 'Design',
    instructor: 'Jane Smith',
    price: 59.99,
    enrollments: 120,
    rating: 4.7,
    duration: '8 hours',
    level: 'Intermediate',
    lastUpdated: '2023-08-10',
    lessons: 18,
    progress: 0,
  },
  {
    id: '3',
    title: 'Next.js Fundamentals',
    description: 'Build server-side rendered apps with Next.js, API routes, and deploy with Vercel seamlessly.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
    category: 'Development',
    instructor: 'Alex Johnson',
    price: 69.99,
    enrollments: 200,
    rating: 4.9,
    duration: '15 hours',
    level: 'Intermediate',
    lastUpdated: '2023-08-05',
    lessons: 30,
    progress: 0,
  },
  {
    id: '4',
    title: 'TypeScript Mastery',
    description: 'Deep dive into TypeScript for robust applications with type safety and advanced patterns.',
    thumbnail: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=200&fit=crop',
    category: 'Development',
    instructor: 'Emily Davis',
    price: 39.99,
    enrollments: 180,
    rating: 4.6,
    duration: '10 hours',
    level: 'Advanced',
    lastUpdated: '2023-08-01',
    lessons: 22,
    progress: 0,
  },
  {
    id: '5',
    title: 'UI/UX Design Principles',
    description: 'Learn essential UI/UX design principles and create user-centered interfaces that convert.',
    thumbnail: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=200&fit=crop',
    category: 'Design',
    instructor: 'Mike Wilson',
    price: 54.99,
    enrollments: 95,
    rating: 4.5,
    duration: '14 hours',
    level: 'Beginner',
    lastUpdated: '2023-07-28',
    lessons: 28,
    progress: 0,
  },
  {
    id: '6',
    title: 'Node.js Backend Development',
    description: 'Build scalable backend services with Node.js, Express, and MongoDB for modern applications.',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop',
    category: 'Development',
    instructor: 'Sarah Chen',
    price: 64.99,
    enrollments: 165,
    rating: 4.7,
    duration: '18 hours',
    level: 'Intermediate',
    lastUpdated: '2023-07-25',
    lessons: 32,
    progress: 0,
  },
];

const categories = ['All', 'Development', 'Design', 'Business', 'Marketing'];

export default function CoursesPage() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalCategories: 0,
    avgRating: 0,
  });
  const hasMounted = useRef(false); // Track initial mount for count-up

  useEffect(() => {
    if (!hasMounted.current) {
      // Trigger count-up animation only on first mount
      const timer = setTimeout(() => {
        setStats({
          totalCourses: dummyCourses.length,
          totalStudents: dummyCourses.reduce((acc, course) => acc + course.enrollments, 0),
          totalCategories: categories.length - 1,
          avgRating: Math.round((dummyCourses.reduce((acc, course) => acc + course.rating, 0) / dummyCourses.length) * 10) / 10,
        });
        hasMounted.current = true; // Mark as mounted
      }, 1000); // 1-second delay for animation
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSidebarCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const handleCourseClick = (id: string) => {
    router.push(`/courses/${id}`);
  };

  const filteredCourses = dummyCourses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const CountUpNumber = ({ end, duration = 1000 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count.toLocaleString()}</span>;
  };

  // Calculate additional analytics
  const getCompletionRate = (course: typeof dummyCourses[0]) => {
    // Simulated completion rate based on lessons and progress
    return course.progress > 0 ? Math.min((course.progress / course.lessons) * 100, 100).toFixed(1) : '0.0';
  };

  const getPopularityScore = (course: typeof dummyCourses[0]) => {
    // Simulated popularity score based on enrollments (e.g., normalized to 100)
    const maxEnrollments = Math.max(...dummyCourses.map(c => c.enrollments));
    return ((course.enrollments / maxEnrollments) * 100).toFixed(1);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggle={toggleSidebar} 
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={toggleSidebarCollapse}
        activeItem="Courses"
      />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'
      }`}>
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Courses Content */}
        <main className="p-4 md:p-6 lg:p-8 flex-1 overflow-y-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 transform -skew-y-6 scale-125 opacity-20"></div>
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Next Course</h1>
              <p className="text-lg opacity-90 max-w-2xl">
                Explore our comprehensive catalog of courses designed to help you master new skills and advance your career.
              </p>
            </div>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen size={20} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-600 ml-3">Total Courses</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">
                <CountUpNumber end={stats.totalCourses} />
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-green-200">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users size={20} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-600 ml-3">Total Students</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">
                <CountUpNumber end={stats.totalStudents} />
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-purple-200">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target size={20} className="text-purple-600" />
                </div>
                <span className="text-sm text-gray-600 ml-3">Categories</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">
                <CountUpNumber end={stats.totalCategories} />
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-orange-200">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <TrendingUp size={20} className="text-orange-600" />
                </div>
                <span className="text-sm text-gray-600 ml-3">Avg Rating</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {stats.avgRating.toFixed(1)}
              </div>
            </div>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-200"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses by title or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* View Toggle */}
                <div className="hidden sm:flex bg-gray-100 p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-blue-500 text-white shadow-md' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <List size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-blue-500 text-white shadow-md' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Grid size={20} />
                  </button>
                </div>

                {/* Category Filter */}
                <div className="flex items-center space-x-3">
                  <Filter size={20} className="text-gray-600" />
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Courses Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleCourseClick(course.id)}
                className={`
                  relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group
                  transition-all duration-500 ease-in-out
                  hover:shadow-2xl hover:scale-101
                  ${hoveredCard === course.id ? 'ring-2 ring-blue-500' : ''}
                  border border-gray-200
                  ${viewMode === 'list' ? 'flex' : ''}
                `}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Thumbnail */}
                <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'h-56'} overflow-hidden`}>
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {course.category}
                  </div>
                  
                  {/* Level Badge */}
                  <div className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Rating and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({course.rating})</span>
                    </div>
                    
                    <div className="text-xl font-bold text-blue-600">
                      ${course.price.toFixed(2)}
                    </div>
                  </div>

                  {/* Details and Analytics Grid */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-5">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-blue-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-2 text-purple-500" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-green-500" />
                      <span>{course.enrollments.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-orange-500" />
                      <span>{course.lastUpdated}</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart2 size={16} className="mr-2 text-red-500" />
                      <span>Progress: {getCompletionRate(course)}%</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp size={16} className="mr-2 text-indigo-500" />
                      <span>Popularity: {getPopularityScore(course)}%</span>
                    </div>
                  </div>

                  {/* Instructor and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-gray-700 ml-3 font-medium">{course.instructor}</span>
                    </div>
                    
                    <div className={`
                      bg-blue-500 text-white p-2 rounded-full
                      transition-all duration-300 transform
                      ${hoveredCard === course.id ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}
                      shadow-lg
                    `}>
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-2xl shadow-lg mt-8"
            >
              <BookOpen size={80} className="mx-auto text-gray-300 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-3">No courses found</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                Try adjusting your search criteria or browse different categories to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

// Helper functions for analytics
const getCompletionRate = (course: typeof dummyCourses[0]) => {
  // Simulated completion rate based on progress and lessons
  return course.progress > 0 ? Math.min((course.progress / course.lessons) * 100, 100).toFixed(1) : '0.0';
};

const getPopularityScore = (course: typeof dummyCourses[0]) => {
  // Simulated popularity score based on enrollments (normalized to 100)
  const maxEnrollments = Math.max(...dummyCourses.map(c => c.enrollments));
  return ((course.enrollments / maxEnrollments) * 100).toFixed(1);
};