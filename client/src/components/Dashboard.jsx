import { User, Book } from 'lucide-react';

const Dashboard = () => {
  const defaultEnrollments = [
    {
      id: 1,
      name: 'Richard Sanford',
      course: 'Build Text to Image SaaS App in React JS',
      date: '11 May, 2025',
    },
  ];
  const content=[
    {icon:<User size={40}/>,title:"User",count:5},
     {icon:<Book size={40}/>,title:"Courses",count:12},
  ]

  const data = defaultEnrollments;
  return (
    <>
     <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-5 p-4 sm:p-6 lg:p-8">
        {
          content.map((item,index)=>(
            <div className="border border-gray-400 px-5 py-4" key={index}>
              <div className="flex items-center gap-3">
                <p className='text-gray-500'>{item.icon}</p>
                <p className='text-gray-600 text-3xl font-bold'>{item.count}</p>
              </div>
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>
      {/* card */}
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
                <td className="px-4 py-2 text-sm text-gray-600">{student.name}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{student.course}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{student.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Dashboard