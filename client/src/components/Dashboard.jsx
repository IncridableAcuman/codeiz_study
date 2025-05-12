import { User, Book } from 'lucide-react';

const Dashboard = () => {
const stats = [
  { title: 'Total Enrolments', value: 14, icon: '👥' },
  { title: 'Total Courses', value: 8, icon: '📚' },
  { title: 'Total Earnings', value: '$245', icon: '💰' },
];

const enrolments = [
  { id: 1, name: 'Richard Sanford', avatar: '/avatars/user1.png', course: 'Build Text to image SaaS App in React JS', date: '22 Aug, 2024' },
  { id: 2, name: 'Enrique Murphy', avatar: '/avatars/user2.png', course: 'Build AI BG Removal SaaS App in React JS', date: '22 Aug, 2024' },
  { id: 3, name: 'Alison Powell', avatar: '/avatars/user3.png', course: 'React Router Complete Course in One Video', date: '25 Sep, 2024' },
  { id: 4, name: 'Richard Sanford', avatar: '/avatars/user1.png', course: 'Build Full Stack E-Commerce App in React JS', date: '15 Oct, 2024' },
  { id: 5, name: 'Enrique Murphy', avatar: '/avatars/user2.png', course: 'Build AI BG Removal SaaS App in React JS', date: '22 Aug, 2024' },
  { id: 6, name: 'Alison Powell', avatar: '/avatars/user3.png', course: 'React Router Complete Course in One Video', date: '25 Sep, 2024' },
  { id: 7, name: 'Richard Sanford', avatar: '/avatars/user1.png', course: 'Build Full Stack E-Commerce App in React JS', date: '15 Oct, 2024' },
];
  return (
    <>
    <div className="p-6 space-y-8">
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="border rounded-xl shadow p-5 flex items-center space-x-4">
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-gray-600">{stat.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Enrolments Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Latest Enrolments</h2>
        <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">#</th>
              <th className="text-left px-4 py-2">Student name</th>
              <th className="text-left px-4 py-2">Course Title</th>
              <th className="text-left px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolments.map((entry, index) => (
              <tr key={entry.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={entry.avatar} alt={entry.name} className="w-8 h-8 rounded-full" />
                  {entry.name}
                </td>
                <td className="px-4 py-2">{entry.course}</td>
                <td className="px-4 py-2">{entry.date}</td>
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