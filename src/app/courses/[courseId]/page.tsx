// app/courses/[courseId]/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, User, Calendar, Clock, ChevronRight, Sparkles, PlayCircle, Star, MessageCircle, Award, Target, Users, Heart, Share, Download, Bookmark, BarChart3 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

// Dummy course data
const getCourseData = (id: string) => {
  const courses = {
    '1': {
      title: 'Introduction to React',
      description: 'Learn the fundamentals of React.js and build interactive UIs with modern hooks and state management.',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=400&fit=crop',
      instructor: {
        name: 'John Doe',
        bio: 'Senior React Developer with 10+ years of experience. Former tech lead at Google and Microsoft.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        rating: 4.9,
        students: 12500,
        courses: 15
      },
      rating: 4.8,
      reviews: 1247,
      students: 8950,
      duration: '12 hours',
      level: 'Beginner',
      lastUpdated: 'August 2023',
      lectures: [
        { id: 1, title: 'Getting Started with React', duration: '45 min', completed: true },
        { id: 2, title: 'Components and Props', duration: '30 min', completed: true },
        { id: 3, title: 'State and Lifecycle', duration: '40 min', completed: false },
        { id: 4, title: 'Hooks Introduction', duration: '35 min', completed: false },
        { id: 5, title: 'Context API', duration: '50 min', completed: false },
        { id: 6, title: 'Performance Optimization', duration: '55 min', completed: false },
      ],
      whatYouLearn: [
        'Build modern React applications',
        'State management with hooks',
        'Component composition patterns',
        'Performance optimization techniques'
      ],
      requirements: [
        'Basic JavaScript knowledge',
        'HTML & CSS fundamentals',
        'Node.js installed'
      ]
    },
    '2': {
      title: 'Advanced Tailwind CSS',
      description: 'Master Tailwind CSS for rapid UI development with utility-first approach and custom configurations.',
      thumbnail: 'https://images.unsplash.com/photo-1655721529465-ddfb4f2deec4?w=1200&h=400&fit=crop',
      instructor: {
        name: 'Jane Smith',
        bio: 'UI/UX designer specializing in utility-first CSS frameworks. Author of "Design Systems with Tailwind".',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
        rating: 4.7,
        students: 8900,
        courses: 8
      },
      rating: 4.7,
      reviews: 856,
      students: 6700,
      duration: '8 hours',
      level: 'Intermediate',
      lastUpdated: 'July 2023',
      lectures: [
        { id: 1, title: 'Tailwind Basics', duration: '50 min', completed: false },
        { id: 2, title: 'Responsive Design', duration: '40 min', completed: false },
        { id: 3, title: 'Custom Themes', duration: '35 min', completed: false },
      ],
      whatYouLearn: [
        'Advanced Tailwind techniques',
        'Custom theme creation',
        'Responsive design patterns',
        'Component library building'
      ],
      requirements: [
        'Basic CSS knowledge',
        'Understanding of flexbox/grid',
        'Familiarity with npm'
      ]
    },
  };
  return courses[id as keyof typeof courses] || courses['1'];
};

const reviews = [
  {
    id: 1,
    user: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
    rating: 5,
    comment: 'Amazing course! The instructor explains complex concepts in a very simple way.',
    date: '2 days ago'
  },
  {
    id: 2,
    user: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
    rating: 4,
    comment: 'Great content and well structured. Would recommend to anyone starting with React.',
    date: '1 week ago'
  },
  {
    id: 3,
    user: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
    rating: 5,
    comment: 'The best React course I have taken. Projects are practical and relevant.',
    date: '3 weeks ago'
  }
];

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const course = getCourseData(courseId);
  const [hoveredLecture, setHoveredLecture] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSidebarCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsEnrolled(true); // Simulate user enrollment
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLectureClick = (lectureId: number) => {
    router.push(`/courses/${courseId}/lectures/${lectureId}`);
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

        {/* Course Content */}
        <main className="p-4 md:p-6 lg:p-8 flex-1 overflow-y-auto relative">
          {/* Background Particles */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-30 blur-sm"
                initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
                animate={{
                  x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                  y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                }}
                transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-6xl mx-auto relative z-10"
          >
            {/* Banner */}
            <motion.div 
              className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={course.thumbnail} 
                alt="Course Banner" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg"
                >
                  {course.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl opacity-90 max-w-3xl drop-shadow-md"
                >
                  {course.description}
                </motion.p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Stats Cards */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  <motion.div 
                    initial= {{ y: 20, opacity: 0 }}
                    animate= {{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }}
                    className="bg-white p-4 rounded-2xl shadow-lg border border-blue-100">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                      <span className="text-sm text-gray-600">Rating</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{course.rating}</div>
                  </motion.div>
                  
                  <motion.div 
                    initial= {{ y: 20, opacity: 0 }}
                    animate= {{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }}
                    className="bg-white p-4 rounded-2xl shadow-lg border border-green-100">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Students</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{course.students.toLocaleString()}</div>
                  </motion.div>
                  
                  <motion.div 
                    initial= {{ y: 20, opacity: 0 }}
                    animate= {{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }} 
                    className="bg-white p-4 rounded-2xl shadow-lg border border-purple-100">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-purple-500 mr-2" />
                      <span className="text-sm text-gray-600">Duration</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{course.duration}</div>
                  </motion.div>
                  
                  <motion.div 
                    initial= {{ y: 20, opacity: 0 }}
                    animate= {{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }} 
                    className="bg-white p-4 rounded-2xl shadow-lg border border-orange-100">
                    <div className="flex items-center mb-2">
                      <BarChart3 className="w-5 h-5 text-orange-500 mr-2" />
                      <span className="text-sm text-gray-600">Level</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{course.level}</div>
                  </motion.div>
                </motion.div>

                {/* Tabs Navigation - Responsive */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4"
                >
                  <div className="flex flex-wrap gap-2 md:gap-4 border-b border-gray-200 pb-4 mb-4 md:mb-6">
                    {['overview', 'curriculum', 'reviews', 'resources'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl font-medium transition-all duration-300 ${
                          activeTab === tab
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="pt-6">
                    {activeTab === 'overview' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <Target className="w-6 h-6 text-blue-500 mr-2" />
                            What You'll Learn
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {course.whatYouLearn.map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center p-3 bg-blue-50 rounded-xl"
                              >
                                <Sparkles className="w-4 h-4 text-blue-500 mr-3" />
                                <span className="text-gray-700">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <Award className="w-6 h-6 text-blue-500 mr-2" />
                            Requirements
                          </h3>
                          <div className="space-y-2">
                            {course.requirements.map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center text-gray-600"
                              >
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                {item}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'curriculum' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                          <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
                          Course Curriculum
                        </h3>
                        <div className="space-y-3">
                          {course.lectures.map((lecture, index) => (
                            <motion.div
                              key={lecture.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => handleLectureClick(lecture.id)}
                              className={`
                                flex items-center justify-between p-4 rounded-xl border cursor-pointer
                                transition-all duration-300 group
                                ${hoveredLecture === index 
                                  ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-md transform scale-[1.02]' 
                                  : 'bg-white border-gray-200 hover:shadow-md'
                                }
                                ${lecture.completed ? 'border-green-200 bg-green-50/50' : ''}
                              `}
                              onMouseEnter={() => setHoveredLecture(index)}
                              onMouseLeave={() => setHoveredLecture(null)}
                            >
                              <div className="flex items-center space-x-4">
                                <div className={`p-2 rounded-lg ${
                                  lecture.completed 
                                    ? 'bg-green-100 text-green-600' 
                                    : 'bg-blue-100 text-blue-600'
                                }`}>
                                  <PlayCircle size={20} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {lecture.title}
                                  </h4>
                                  <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <Clock size={14} className="mr-1.5" />
                                    {lecture.duration}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                {lecture.completed && (
                                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                    Completed
                                  </span>
                                )}
                                <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'reviews' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                          <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
                          Student Reviews
                        </h3>
                        <div className="space-y-4">
                          {reviews.map((review, index) => (
                            <motion.div
                              key={review.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gray-50 p-5 rounded-2xl border border-gray-200"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                  <img 
                                    src={review.avatar} 
                                    alt={review.user} 
                                    className="w-10 h-10 rounded-full"
                                  />
                                  <div>
                                    <h4 className="font-semibold text-gray-800">{review.user}</h4>
                                    <div className="flex items-center">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          size={14}
                                          className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'resources' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                          <Download className="w-6 h-6 text-blue-500 mr-2" />
                          Course Resources
                        </h3>
                        <div className="space-y-4">
                          <button className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                            <span className="font-semibold text-gray-800">Course Slides</span>
                            <Download size={20} className="text-blue-500" />
                          </button>
                          <button className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                            <span className="font-semibold text-gray-800">Code Repository</span>
                            <Download size={20} className="text-blue-500" />
                          </button>
                          <button className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                            <span className="font-semibold text-gray-800">Additional Readings</span>
                            <Download size={20} className="text-blue-500" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2 bg-white p-4 rounded-2xl shadow-lg"
                >
                  <button className="flex-1 min-w-[120px] flex items-center justify-center p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                    <Heart className="w-5 h-5 mr-2" />
                    Like
                  </button>
                  <button className="flex-1 min-w-[120px] flex items-center justify-center p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                    <Share className="w-5 h-5 mr-2" />
                    Share
                  </button>
                  <button className="flex-1 min-w-[120px] flex items-center justify-center p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                    <Bookmark className="w-5 h-5 mr-2" />
                    Save
                  </button>
                  <button className="flex-1 min-w-[120px] flex items-center justify-center p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </button>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6 md:flex md:flex-row md:space-y-0 md:space-x-6 lg:flex-col lg:space-x-0 lg:space-y-6">
                {/* Instructor Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex-1"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <User className="w-5 h-5 text-blue-500 mr-2" />
                    Instructor
                  </h3>
                  <div className="text-center">
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name} 
                      className="w-20 h-20 rounded-full mx-auto mb-4 shadow-md"
                    />
                    <h4 className="font-bold text-gray-800 mb-2">{course.instructor.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{course.instructor.bio}</p>
                    <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <div className="font-bold text-blue-600">{course.instructor.rating}</div>
                        <div className="text-gray-600">Rating</div>
                      </div>
                      <div className="bg-green-50 p-2 rounded-lg">
                        <div className="font-bold text-green-600">{(course.instructor.students / 1000).toFixed(1)}k</div>
                        <div className="text-gray-600">Students</div>
                      </div>
                      <div className="bg-purple-50 p-2 rounded-lg">
                        <div className="font-bold text-purple-600">{course.instructor.courses}</div>
                        <div className="text-gray-600">Courses</div>
                      </div>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Follow
                    </button>
                  </div>
                </motion.div>

                {/* Enrollment Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl flex-1"
                >
                  <h3 className="text-xl font-bold mb-4">Start Learning Today</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Sparkles className="w-5 h-5 text-yellow-300 mr-3" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="w-5 h-5 text-green-300 mr-3" />
                      <span>Download resources</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 text-blue-300 mr-3" />
                      <span>Q&A support</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold mb-2">$49.99</div>
                    <div className="text-blue-200">One-time payment</div>
                  </div>
                  <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    {isEnrolled ? 'Continue Learning' : 'Enroll Now'}
                  </button>
                  <div className="text-center mt-4 text-blue-200 text-sm">
                    30-day money-back guarantee
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}