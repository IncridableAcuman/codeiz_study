import React, { useState } from 'react'

const MyCourse = () => {
const courses = [
  {
    id: 1,
    title: 'Build Text to image SaaS App in React JS',
    image: 'https://via.placeholder.com/80x50?text=Course+Img',
    earnings: '$150',
    students: 25,
    status: true,
  },
  {
    id: 2,
    title: 'Build Text to image SaaS App in React JS',
    image: 'https://via.placeholder.com/80x50?text=Course+Img',
    earnings: '$100',
    students: 28,
    status: false,
  },
  {
    id: 3,
    title: 'Build Text to image SaaS App in React JS',
    image: 'https://via.placeholder.com/80x50?text=Course+Img',
    earnings: '$50',
    students: 22,
    status: true,
  },
  {
    id: 4,
    title: 'Build Text to image SaaS App in React JS',
    image: 'https://via.placeholder.com/80x50?text=Course+Img',
    earnings: '$200',
    students: 8,
    status: true,
  },
  {
    id: 5,
    title: 'Build Text to image SaaS App in React JS',
    image: 'https://via.placeholder.com/80x50?text=Course+Img',
    earnings: '$250',
    students: 15,
    status: true,
  },
];
 const [courseList, setCourseList] = useState(courses);

  const toggleStatus = (id) => {
    const updatedCourses = courseList.map((course) =>
      course.id === id ? { ...course, status: !course.status } : course
    );
    setCourseList(updatedCourses);
  };

  return (
    <>
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">My Courses</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100 text-gray-600 text-sm uppercase text-left">
          <tr>
            <th className="py-3 px-4">All Courses</th>
            <th className="py-3 px-4">Earnings</th>
            <th className="py-3 px-4">Students</th>
            <th className="py-3 px-4">Course Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {courseList.map((course) => (
            <tr key={course.id} className="border-t border-gray-200">
              <td className="py-3 px-4 flex items-center gap-4">
                <img src={course.image} alt="Course" className="w-16 h-auto rounded-md" />
                {course.title}
              </td>
              <td className="py-3 px-4">{course.earnings}</td>
              <td className="py-3 px-4">{course.students}</td>
              <td className="py-3 px-4 flex items-center gap-2">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={course.status}
                    onChange={() => toggleStatus(course.id)}
                  />
                  <div
                    className={`w-11 h-6 rounded-full transition-colors duration-300 ${
                      course.status ? 'bg-blue-600' : 'bg-gray-300'
                    } relative`}
                  >
                    <div
                      className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                        course.status ? 'translate-x-5' : ''
                      }`}
                    ></div>
                  </div>
                </label>
                <span>{course.status ? 'Live' : 'Private'}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default MyCourse