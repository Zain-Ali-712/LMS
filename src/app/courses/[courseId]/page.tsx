// app/courses/[courseId]/page.tsx
'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { BookOpen, User, Calendar, Clock, ChevronRight, Sparkles, PlayCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Dummy course data
const getCourseData = (id: string) => {
  const courses = {
    '1': {
      title: 'Introduction to React',
      description: 'Learn the fundamentals of React.js and build interactive UIs.',
      thumbnail: 'https://via.placeholder.com/1200x400?text=React+Banner',
      instructor: {
        name: 'John Doe',
        bio: 'Experienced React developer with 10+ years in frontend.',
        avatar: 'https://via.placeholder.com/150',
      },
      lectures: [
        { id: 1, title: 'Getting Started with React', duration: '45 min' },
        { id: 2, title: 'Components and Props', duration: '30 min' },
        { id: 3, title: 'State and Lifecycle', duration: '40 min' },
        { id: 4, title: 'Hooks Introduction', duration: '35 min' },
      ],
    },
    '2': {
      title: 'Advanced Tailwind CSS',
      description: 'Master Tailwind CSS for rapid UI development.',
      thumbnail: 'https://via.placeholder.com/1200x400?text=Tailwind+Banner',
      instructor: {
        name: 'Jane Smith',
        bio: 'UI/UX designer specializing in utility-first CSS.',
        avatar: 'https://via.placeholder.com/150',
      },
      lectures: [
        { id: 1, title: 'Tailwind Basics', duration: '50 min' },
        { id: 2, title: 'Responsive Design', duration: '40 min' },
        { id: 3, title: 'Custom Themes', duration: '35 min' },
      ],
    },
    // Add more as needed
  };
  return courses[id as keyof typeof courses] || courses['1'];
};

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const course = getCourseData(courseId);
  const [hoveredLecture, setHoveredLecture] = useState<number | null>(null);

  const handleLectureClick = (lectureId: number) => {
    router.push(`/courses/${courseId}/lectures/${lectureId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Banner */}
        <div className="relative h-64">
          <img 
            src={course.thumbnail} 
            alt="Course Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-lg opacity-90">{course.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Instructor Section */}
            <div className="bg-blue-50/50 p-5 rounded-xl mb-6 border border-blue-100">
              <h2 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                <User size={20} className="text-blue-500 mr-2" />
                Instructor Details
              </h2>
              <div className="flex items-center space-x-4">
                <img 
                  src={course.instructor.avatar} 
                  alt="Instructor" 
                  className="w-16 h-16 rounded-full shadow-md"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{course.instructor.name}</h3>
                  <p className="text-sm text-gray-600">{course.instructor.bio}</p>
                </div>
              </div>
            </div>

            {/* Lectures List */}
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 flex items-center mb-5">
                <BookOpen size={20} className="text-blue-500 mr-2" />
                List of Lectures
              </h2>
              <div className="space-y-3">
                {course.lectures.map((lecture, index) => (
                  <div
                    key={lecture.id}
                    onClick={() => handleLectureClick(lecture.id)}
                    className={`
                      flex items-center justify-between p-4 rounded-xl border cursor-pointer
                      transition-all duration-300
                      ${hoveredLecture === index 
                        ? 'bg-gradient-to-r from-blue-50/50 to-blue-100/30 border-blue-200 shadow-md transform scale-[1.02]' 
                        : 'bg-white border-gray-100 hover:shadow-md hover:border-blue-100'
                      }
                    `}
                    onMouseEnter={() => setHoveredLecture(index)}
                    onMouseLeave={() => setHoveredLecture(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <PlayCircle size={18} className="text-blue-500" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{lecture.title}</h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock size={12} className="mr-1.5 text-blue-400" />
                          {lecture.duration}
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar/Quick Info */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50/50 p-5 rounded-xl sticky top-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Sparkles size={18} className="text-blue-500 mr-2" />
                Course Quick Info
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-blue-400" />
                  Updated: August 2023
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-blue-400" />
                  Total Duration: 2.5 hours
                </div>
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-2 text-blue-400" />
                  Lectures: {course.lectures.length}
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}