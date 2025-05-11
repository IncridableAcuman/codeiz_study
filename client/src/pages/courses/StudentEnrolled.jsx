import React from 'react';

const StudentEnrolled = () => {
  // Default data if no props are passed
  const defaultEnrollments = [
    {
      id: 1,
      name: 'Richard Sanford',
      image:"./profile_img_1.png",
      course: 'Build Text to Image SaaS App in React JS',
      date: '11 May, 2025',
    },
  ];

  const data = defaultEnrollments;

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-sm rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700" scope="col">
                #
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700" scope="col">
                Student Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700" scope="col">
                Course Title
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700" scope="col">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={student.id || index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-600">{index + 1}</td>
                <div className="flex items-center gap-2">
                  <img src={student.image} alt="profile image" className='w-10 h-10 rounded-full' />
                <td className="px-4 py-2 text-sm text-gray-600">{student.name}</td>
                </div>
                <td className="px-4 py-2 text-sm text-gray-600">{student.course}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{student.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentEnrolled;