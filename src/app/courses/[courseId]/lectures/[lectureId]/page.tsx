// app/courses/[courseId]/lectures/[lectureId]/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Pencil, Sparkles, Clock, Play, ChevronLeft, ChevronRight, BookOpen, User, Heart, Share, Download, Bookmark, ThumbsUp, Send, ArrowLeft, FileText, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

// Fixed Dummy lecture data with proper typing
interface Lecture {
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  resources: string[];
  nextLecture: string | null;
  prevLecture: string | null;
}

interface LecturesData {
  [key: string]: {
    [key: string]: Lecture;
  };
}

const getLectureData = (courseId: string, lectureId: string) => {
  const lectures: LecturesData = {
    '1': {
      '1': { 
        title: 'Getting Started with React', 
        description: 'Learn the fundamental concepts of React including components, JSX, and the virtual DOM. This lecture covers the basics to get you started with building modern web applications.', 
        videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', 
        duration: '45 min',
        resources: ['Slide Deck', 'Code Examples', 'Exercise Files'],
        nextLecture: '2',
        prevLecture: null
      },
      '2': { 
        title: 'Components and Props', 
        description: 'Dive deeper into React components and understand how props work to pass data between components efficiently.', 
        videoUrl: 'https://www.youtube.com/embed/fd2Cayhez58', 
        duration: '30 min',
        resources: ['Slide Deck', 'Cheat Sheet'],
        nextLecture: '3',
        prevLecture: '1'
      },
      '3': { 
        title: 'State and Lifecycle', 
        description: 'Understand React state management and component lifecycle methods.', 
        videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', 
        duration: '40 min',
        resources: ['Slide Deck', 'Code Examples'],
        nextLecture: '4',
        prevLecture: '2'
      },
    },
    '2': {
      '1': { 
        title: 'Tailwind Basics', 
        description: 'Master the core concepts of Tailwind CSS including utility classes, responsive design, and customization.', 
        videoUrl: 'https://www.youtube.com/embed/UBOj6rqRUME', 
        duration: '50 min',
        resources: ['Style Guide', 'Template Files'],
        nextLecture: '2',
        prevLecture: null
      },
    },
  };
  
  // Fixed the type error with proper type assertion
  const courseLectures = lectures[courseId as keyof typeof lectures];
  const lecture = courseLectures ? courseLectures[lectureId as keyof typeof courseLectures] : lectures['1']['1'];
  
  return {
    ...lecture,
    courseTitle: courseId === '1' ? 'Introduction to React' : 'Advanced Tailwind CSS'
  };
};

const comments = [
  {
    id: 1,
    user: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    comment: 'Great introduction! The explanation of JSX was particularly helpful.',
    time: '2 days ago',
    likes: 12,
    liked: false
  },
  {
    id: 2,
    user: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    comment: 'Could you explain more about the virtual DOM in the next lecture?',
    time: '1 day ago',
    likes: 8,
    liked: true
  },
  {
    id: 3,
    user: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    comment: 'The code examples were very practical. Thanks!',
    time: '3 hours ago',
    likes: 5,
    liked: false
  }
];

export default function LectureViewPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const lectureId = params.lectureId as string;
  const lecture = getLectureData(courseId, lectureId);
  const [newComment, setNewComment] = useState('');
  const [activeTab, setActiveTab] = useState('resources');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSidebarCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  useEffect(() => {
    // Simulate progress animation
    const timer = setTimeout(() => {
      setProgress(66);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (newLectureId: string | null) => {
    if (newLectureId) {
      router.push(`/courses/${courseId}/lectures/${newLectureId}`);
    }
  };

  const handleLikeComment = (commentId: number) => {
    console.log('Liked comment:', commentId);
  };

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      console.log('New comment:', newComment);
      setNewComment('');
    }
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
            {/* Enhanced Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 md:p-6 rounded-2xl shadow-2xl mb-6 relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-white/10 transform -skew-y-6 scale-125 opacity-20"></div>
              
              <div className="relative z-10">
                {/* Back Button with Animation */}
                <motion.button
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push(`/courses/${courseId}`)}
                  className="flex items-center text-blue-100 hover:text-white transition-colors mb-4 group"
                >
                  <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Course
                </motion.button>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{lecture.courseTitle}</h1>
                    <div className="flex items-center text-blue-100">
                      <BookOpen size={16} className="mr-2" />
                      <span>Lecture {lectureId} of 6 • {lecture.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-4 md:mt-0">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-blue-100 hover:text-white hover:bg-white/20 rounded-xl transition-colors"
                    >
                      <Share size={18} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-blue-100 hover:text-white hover:bg-white/20 rounded-xl transition-colors"
                    >
                      <Bookmark size={18} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-blue-100 hover:text-white hover:bg-white/20 rounded-xl transition-colors"
                    >
                      <Download size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Video Player */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
                >
                  <div className="aspect-video relative">
                    <iframe
                      src={lecture.videoUrl}
                      title={lecture.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    ></iframe>
                    
                    {/* Overlay */}
                    {!isPlaying && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-4 cursor-pointer"
                          onClick={() => {
                            const iframe = document.querySelector('iframe');
                            if (iframe) iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                          }}
                        >
                          <Play size={40} className="text-white" />
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800">{lecture.title}</h2>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock size={16} className="mr-2 text-blue-500" />
                        {lecture.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{lecture.description}</p>

                    {/* Navigation */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <motion.button
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavigation(lecture.prevLecture)}
                        disabled={!lecture.prevLecture}
                        className={`flex items-center px-3 md:px-4 py-2 rounded-xl transition-all duration-300 ${
                          lecture.prevLecture
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <ChevronLeft size={18} className="mr-1 md:mr-2" />
                        <span className="hidden sm:inline">Previous</span>
                      </motion.button>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>Lecture {lectureId} of 6</span>
                      </div>

                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavigation(lecture.nextLecture)}
                        disabled={!lecture.nextLecture}
                        className={`flex items-center px-3 md:px-4 py-2 rounded-xl transition-all duration-300 ${
                          lecture.nextLecture
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight size={18} className="ml-1 md:ml-2" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Resources & Comments Tabs - Responsive */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200"
                >
                  <div className="flex flex-wrap gap-2 md:gap-4 border-b border-gray-200 pb-4 mb-4 md:mb-6">
                    {[
                      { id: 'resources', label: 'Resources', icon: FileText },
                      { id: 'comments', label: 'Comments', icon: MessageCircle },
                      { id: 'questions', label: 'Questions', icon: HelpCircle }
                    ].map((tab) => (
                      <motion.button
                        key={tab.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center px-3 md:px-4 py-2 rounded-lg md:rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                          activeTab === tab.id
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <tab.icon size={16} className="mr-1 md:mr-2" />
                        {tab.label}
                      </motion.button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="pt-4">
                    {activeTab === 'resources' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <Download size={20} className="text-blue-500 mr-2" />
                          Lecture Resources
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          {/* Fixed the resources mapping error */}
                          {lecture.resources?.map((resource, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center p-3 md:p-4 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer group"
                            >
                              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                                <Download size={16} className="text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-800 text-sm md:text-base">{resource}</h4>
                                <p className="text-xs md:text-sm text-gray-600">PDF Document</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'comments' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4 md:space-y-6"
                      >
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <MessageCircle size={20} className="text-blue-500 mr-2" />
                          Discussion ({comments.length})
                        </h3>

                        {/* Comments List */}
                        <div className="space-y-3 md:space-y-4">
                          {comments.map((comment, index) => (
                            <motion.div
                              key={comment.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="p-3 md:p-4 bg-gray-50 rounded-xl border border-gray-200"
                            >
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                  <img 
                                    src={comment.avatar} 
                                    alt={comment.user} 
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">{comment.user}</h4>
                                    <p className="text-xs text-gray-500">{comment.time}</p>
                                  </div>
                                </div>
                                <button
                                  onClick={() => handleLikeComment(comment.id)}
                                  className={`flex items-center space-x-1 text-sm ${
                                    comment.liked ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                                  }`}
                                >
                                  <ThumbsUp size={14} className={comment.liked ? 'fill-current' : ''} />
                                  <span>{comment.likes}</span>
                                </button>
                              </div>
                              <p className="text-gray-700 text-sm md:text-base">{comment.comment}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Add Comment */}
                        <div className="pt-4 md:pt-6 border-t border-gray-200">
                          <div className="flex items-start space-x-3">
                            <img 
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                              alt="Your avatar" 
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-1">
                              <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add your comment or question..."
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-300 h-20 resize-none text-sm md:text-base"
                              />
                              <div className="flex justify-end mt-3">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={handleSubmitComment}
                                  disabled={!newComment.trim()}
                                  className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-xl hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-sm md:text-base"
                                >
                                  <Send size={14} className="mr-2" />
                                  Post Comment
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'questions' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-8 md:py-12"
                      >
                        <HelpCircle size={48} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">Questions & Answers</h3>
                        <p className="text-gray-500 text-sm md:text-base">Ask your questions about this lecture here.</p>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-4 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm md:text-base"
                        >
                          Ask a Question
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-4 md:space-y-6">
                {/* Enhanced Lecture Progress */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200"
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
                    <Sparkles size={18} className="text-blue-500 mr-2" />
                    Course Progress
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs md:text-sm text-gray-600">
                      <span>Completed</span>
                      <span>2/6 Lectures</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-600 text-white py-2 md:py-3 rounded-xl hover:bg-green-700 transition-colors text-sm md:text-base"
                  >
                    Mark as Complete
                  </motion.button>
                </motion.div>

                {/* Upcoming Lectures */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200"
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
                    <Play size={18} className="text-blue-500 mr-2" />
                    Upcoming Lectures
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    {[3, 4, 5, 6].map((lectureNum) => (
                      <div
                        key={lectureNum}
                        className="flex items-center p-2 md:p-3 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer group"
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-blue-200 transition-colors">
                          <Play size={12} className="text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 text-xs md:text-sm">Lecture {lectureNum}</h4>
                          <p className="text-xs text-gray-500">Coming soon</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Instructor Help */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4 md:p-6 rounded-2xl shadow-2xl"
                >
                  <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center">
                    <User size={18} className="mr-2" />
                    Need Help?
                  </h3>
                  <p className="text-blue-100 text-sm md:text-base mb-3 md:mb-4">Stuck on something? Our instructors are here to help.</p>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-blue-600 py-2 md:py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm md:text-base"
                  >
                    Ask Instructor
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}