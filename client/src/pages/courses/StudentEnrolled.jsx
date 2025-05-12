import React from 'react';

const StudentEnrolled = () => {

const students = [
  {
    id: 1,
    name: 'Richard Sanford',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    course: 'Build Text to image SaaS App in React JS',
    date: '22 Aug, 2024',
  },
  {
    id: 2,
    name: 'Enrique Murphy',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    course: 'Build AI BG Removal SaaS App in React JS',
    date: '22 Aug, 2024',
  },
  {
    id: 3,
    name: 'Alison Powell',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    course: 'React Router Complete Course in One Video',
    date: '25 Sep, 2024',
  },
  {
    id: 4,
    name: 'Richard Sanford',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    course: 'Build Full Stack E-Commerce App in React JS',
    date: '15 Oct, 2024',
  },
  {
    id: 5,
    name: 'Enrique Murphy',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    course: 'Build AI BG Removal SaaS App in React JS',
    date: '22 Aug, 2024',
  },
  {
    id: 6,
    name: 'Alison Powell',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    course: 'React Router Complete Course in One Video',
    date: '25 Sep, 2024',
  },
  {
    id: 7,
    name: 'Richard Sanford',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    course: 'Build Full Stack E-Commerce App in React JS',
    date: '15 Oct, 2024',
  },
];
  return (
   <div className="overflow-x-auto p-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100 text-gray-600 text-sm uppercase text-left">
          <tr>
            <th className="py-3 px-4">#</th>
            <th className="py-3 px-4">Student name</th>
            <th className="py-3 px-4">Course Title</th>
            <th className="py-3 px-4">Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {students.map((student, index) => (
            <tr key={student.id} className="border-t border-gray-200">
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4 flex items-center gap-2">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-8 h-8 rounded-full"
                />
                {student.name}
              </td>
              <td className="py-3 px-4">{student.course}</td>
              <td className="py-3 px-4">{student.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentEnrolled;