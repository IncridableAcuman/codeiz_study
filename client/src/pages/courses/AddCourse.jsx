import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

const AddCourse = () => {
  const [thumbnail, setThumbnail] = useState(null);

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6">
      <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Add New Course</h2>

        {/* Course Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">Course Title</label>
          <input
            id="title"
            type="text"
            placeholder="Type course title"
            className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Course Headline */}
        <div>
          <label htmlFor="headline" className="block text-sm font-medium mb-1">Course Headline</label>
          <input
            id="headline"
            type="text"
            placeholder="Short headline"
            className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Course Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">Course Description</label>
          <textarea
            id="description"
            rows="4"
            placeholder="Describe the course..."
            className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Price & Thumbnail */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <label htmlFor="price" className="block text-sm font-medium mb-1">Course Price ($)</label>
            <input
              id="price"
              type="number"
              placeholder="0"
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Thumbnail Upload */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Course Thumbnail</label>
            <label
              htmlFor="thumbnail"
              className="flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
            >
              <UploadCloud size={20} />
              {thumbnail ? thumbnail.name : 'Upload Thumbnail'}
            </label>
            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleThumbnailChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
