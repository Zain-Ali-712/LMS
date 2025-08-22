// app/course/add/page.tsx
'use client';
import { useState } from 'react';
import { Plus, Image, Tag, User, DollarSign } from 'lucide-react';

export default function AddCoursePage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: '',
    categoryTags: '',
    instructorName: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Course Added:', formData);
    alert('Course added successfully! (Dummy validation)');
    setFormData({ title: '', description: '', thumbnail: '', categoryTags: '', instructorName: '', price: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Course</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Title</label>
            <div className="mt-1 relative">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter course title"
                required
              />
              <Plus className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 h-24"
              placeholder="Enter course description"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Thumbnail Image URL</label>
            <div className="mt-1 relative">
              <input
                type="text"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter thumbnail URL"
                required
              />
              <Image className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category/Tags</label>
            <div className="mt-1 relative">
              <input
                type="text"
                name="categoryTags"
                value={formData.categoryTags}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter category or tags"
                required
              />
              <Tag className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Instructor Name</label>
            <div className="mt-1 relative">
              <input
                type="text"
                name="instructorName"
                value={formData.instructorName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter instructor name"
                required
              />
              <User className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price (optional)</label>
            <div className="mt-1 relative">
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price (optional)"
                min="0"
                step="0.01"
              />
              <DollarSign className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Course
          </button>
        </div>
      </form>
    </div>
  );
}