// app/courses/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { BookOpen, Users, DollarSign, ChevronRight } from 'lucide-react';

const dummyCourses = [
  {
    id: '1',
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React.js and build interactive UIs.',
    thumbnail: 'https://via.placeholder.com/400x200?text=React',
    category: 'Development',
    instructor: 'John Doe',
    price: 49.99,
    enrollments: 150,
  },
  {
    id: '2',
    title: 'Advanced Tailwind CSS',
    description: 'Master Tailwind CSS for rapid UI development.',
    thumbnail: 'https://via.placeholder.com/400x200?text=Tailwind',
    category: 'Design',
    instructor: 'Jane Smith',
    price: 59.99,
    enrollments: 120,
  },
  {
    id: '3',
    title: 'Next.js Fundamentals',
    description: 'Build server-side rendered apps with Next.js.',
    thumbnail: 'https://via.placeholder.com/400x200?text=Next.js',
    category: 'Development',
    instructor: 'Alex Johnson',
    price: 69.99,
    enrollments: 200,
  },
  {
    id: '4',
    title: 'TypeScript Mastery',
    description: 'Deep dive into TypeScript for robust applications.',
    thumbnail: 'https://via.placeholder.com/400x200?text=TypeScript',
    category: 'Development',
    instructor: 'Emily Davis',
    price: 39.99,
    enrollments: 180,
  },
];

export default function CoursesPage() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSidebarCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const handleCourseClick = (id: string) => {
    router.push(`/courses/${id}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggle={toggleSidebar} 
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={toggleSidebarCollapse}
        activeItem="Courses" // Set active item to 'Courses' for this page
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-lg mb-8">
            <h1 className="text-3xl font-bold mb-2">Available Courses</h1>
            <p className="text-lg opacity-90">
              Explore our diverse range of courses designed to enhance your skills and knowledge. 
              From beginner to advanced levels, find the perfect course to advance your career.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className={`
                  relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer
                  transition-all duration-500 ease-in-out
                  hover:shadow-2xl hover:scale-105 hover:rotate-1
                  ${hoveredCard === course.id ? 'ring-2 ring-blue-500' : ''}
                `}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  {/* Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-blue-500" />
                      {course.enrollments} enrolled
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-1 text-green-500" />
                      {course.price.toFixed(2)}
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen size={16} className="mr-2 text-purple-500" />
                    Instructor: {course.instructor}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className={`
                  absolute bottom-4 right-4 text-blue-500 opacity-0
                  transition-all duration-300
                  ${hoveredCard === course.id ? 'opacity-100 translate-x-0' : 'translate-x-4'}
                `}>
                  <ChevronRight size={24} />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {course.category}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}