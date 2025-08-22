// app/courses/[courseId]/lectures/[lectureId]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import { MessageCircle, Pencil, Sparkles, Clock } from 'lucide-react';

// Dummy lecture data
const getLectureData = (courseId: string, lectureId: string) => {
  const lectures = {
    '1': {
      '1': { title: 'Getting Started with React', description: 'Introduction to React basics.', videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', duration: '45 min' },
      '2': { title: 'Components and Props', description: 'Understanding components.', videoUrl: 'https://www.youtube.com/embed/fd2Cayhez58', duration: '30 min' },
    },
    '2': {
      '1': { title: 'Tailwind Basics', description: 'Core concepts of Tailwind.', videoUrl: 'https://www.youtube.com/embed/UBOj6rqRUME', duration: '50 min' },
    },
    // Add more
  };
  return lectures[courseId as keyof typeof lectures]?.[lectureId as keyof typeof lectures['1']] || lectures['1']['1'];
};

export default function LectureViewPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const lectureId = params.lectureId as string;
  const lecture = getLectureData(courseId, lectureId);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Video Player */}
        <div className="aspect-video">
          <iframe
            src={lecture.videoUrl}
            title={lecture.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{lecture.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Clock size={14} className="mr-1.5 text-blue-400" />
            {lecture.duration}
          </div>
          <p className="text-gray-600 mb-8">{lecture.description}</p>

          {/* Comments/Notes Section */}
          <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
            <h2 className="text-xl font-bold text-gray-800 flex items-center mb-4">
              <MessageCircle size={20} className="text-blue-500 mr-2" />
              Comments & Notes
            </h2>
            <div className="space-y-4">
              {/* Dummy Comments */}
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-2">
                  <img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full mr-3" />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">Student A</h4>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Great introduction! Helped me understand the basics.</p>
              </div>

              {/* Add Note */}
              <div className="mt-6">
                <textarea
                  placeholder="Add your notes or comments..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                ></textarea>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center">
                  <Pencil size={14} className="mr-2" />
                  Submit Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}