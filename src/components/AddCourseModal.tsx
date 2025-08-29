// components/AddCourseModal.tsx
'use client';
import { useState, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ArrowRight, Sparkles, Upload, Image, DollarSign, User, Tag } from 'lucide-react';

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end overflow-hidden"
        >
          <motion.div
            className="bg-blue-50 w-full max-w-4xl h-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl rounded-l-3xl border-l-4 border-blue-500/60"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {/* Header */}
            <div className="relative mb-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-4 border-b border-gray-200 pb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <BookOpen className="w-12 h-12 text-blue-50" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-200 tracking-tight">Create New Course</h2>
                    <p className="text-gray-300 mt-1">Craft your educational masterpiece with ease!</p>
                  </div>
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Top Section: Basic Info + Thumbnail */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Basic Info */}
                <div className="space-y-6">
                  {/* Course Title */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="title" 
                      name="title" 
                      value={formData.title}
                      onChange={handleChange}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm"
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="title" 
                      className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                    >
                      Course Title *
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
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm"
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="instructor" 
                      className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                    >
                      <User className="w-4 h-4 inline mr-2" />
                      Instructor Name *
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
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm"
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="category" 
                      className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                    >
                      <Tag className="w-4 h-4 inline mr-2" />
                      Category/Tags *
                    </label>
                  </div>
                </div>

                {/* Right Column: Thumbnail Upload */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full h-56 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-6 hover:border-blue-400 transition-colors duration-300 cursor-pointer bg-gray-50/50">
                    {formData.thumbnail ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={formData.thumbnail} 
                          alt="Course thumbnail" 
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <button 
                          type="button"
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                          onClick={() => setFormData({...formData, thumbnail: ''})}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Image className="w-16 h-16 text-gray-400 mb-4" />
                        <p className="text-gray-600 text-center mb-2">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-gray-500 text-sm text-center">
                          PNG, JPG, GIF up to 10MB
                        </p>
                        <input 
                          type="file"
                          className="hidden"
                          id="thumbnail-upload"
                          onChange={(e) => {
                            // Simulate file upload
                            setFormData({...formData, thumbnail: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop'});
                          }}
                        />
                        <label 
                          htmlFor="thumbnail-upload"
                          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors cursor-pointer"
                        >
                          <Upload className="w-4 h-4 inline mr-2" />
                          Upload Image
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Middle Section: Description */}
              <div className="relative group">
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleChange}
                  className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm h-40 resize-none"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="description" 
                  className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                >
                  Course Description *
                </label>
              </div>

              {/* Bottom Section: Price + Submit */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                {/* Price Input */}
                <div className="relative group">
                  <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    value={formData.price}
                    onChange={handleChange}
                    className="peer w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm"
                    placeholder=" "
                    step="0.01"
                    min="0"
                  />
                  <label 
                    htmlFor="price" 
                    className="absolute left-5 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                  >
                    <DollarSign className="w-4 h-4 inline mr-2" />
                    Price (optional)
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg font-semibold text-lg"
                >
                  Create Course
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddCourseModal;