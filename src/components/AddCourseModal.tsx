// components/AddCourseModal.tsx
'use client';
import { useState, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

interface AddCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCourseModal: FC<AddCourseModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: '',
    category: '',
    instructor: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.thumbnail || !formData.category || !formData.instructor) {
      alert('Please fill all required fields');
      return;
    }
    console.log('New Course Added:', formData);
    alert('Course added successfully! (Dummy)');
    onClose();
    setFormData({ title: '', description: '', thumbnail: '', category: '', instructor: '', price: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end overflow-hidden"
        >
          <motion.div
            className="bg-white w-full max-w-2xl h-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl rounded-l-3xl border-l-4 border-blue-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="relative mb-8 pb-6 border-b border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50 rounded-t-3xl"></div>
              <div className="relative flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <BookOpen className="w-12 h-12 text-blue-600" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Create New Course</h2>
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:rotate-90"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">Craft your educational masterpiece with ease!</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Course Title */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="title" 
                  name="title" 
                  value={formData.title}
                  onChange={handleChange}
                  className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg group-hover:bg-blue-50/20"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="title" 
                  className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 transform group-hover:-translate-y-1"
                >
                  Course Title *
                </label>
              </div>

              {/* Description */}
              <div className="relative group">
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleChange}
                  className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg group-hover:bg-blue-50/20 h-40 resize-none"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="description" 
                  className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 transform group-hover:-translate-y-1"
                >
                  Description *
                </label>
              </div>

              {/* Thumbnail Image */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="thumbnail" 
                  name="thumbnail" 
                  value={formData.thumbnail}
                  onChange={handleChange}
                  className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg group-hover:bg-blue-50/20"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="thumbnail" 
                  className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 transform group-hover:-translate-y-1"
                >
                  Thumbnail Image URL *
                </label>
              </div>

              {/* Category/Tags */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="category" 
                  name="category" 
                  value={formData.category}
                  onChange={handleChange}
                  className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg group-hover:bg-blue-50/20"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="category" 
                  className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 transform group-hover:-translate-y-1"
                >
                  Category/Tags *
                </label>
              </div>

              {/* Instructor Name */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="instructor" 
                  name="instructor" 
                  value={formData.instructor}
                  onChange={handleChange}
                  className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg group-hover:bg-blue-50/20"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="instructor" 
                  className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 transform group-hover:-translate-y-1"
                >
                  Instructor Name *
                </label>
              </div>

              {/* Price */}
              <div className="relative group">
                <input 
                  type="number" 
                  id="price" 
                  name="price" 
                  value={formData.price}
                  onChange={handleChange}
                  className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg group-hover:bg-blue-50/20"
                  placeholder=" "
                  step="0.01"
                />
                <label 
                  htmlFor="price" 
                  className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 transform group-hover:-translate-y-1"
                >
                  Price (optional)
                </label>
              </div>

              {/* Submit Button */}
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                Add Course
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddCourseModal;