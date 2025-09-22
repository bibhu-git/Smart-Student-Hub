import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Award,
  Calendar,
  Users,
  Download,
  Briefcase,
} from "lucide-react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  { title: "Total Students", value: "1,245", icon: <Users className="w-6 h-6 text-indigo-600" /> },
  { title: "Certifications", value: "320", icon: <Award className="w-6 h-6 text-pink-500" /> },
  { title: "Workshops Attended", value: "180", icon: <Calendar className="w-6 h-6 text-yellow-500" /> },
  { title: "Internships", value: "95", icon: <Briefcase className="w-6 h-6 text-green-500" /> },
];

export default function ReportsPage() {
  // Chart Data
  const barData = {
    labels: ["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL"],
    datasets: [
      {
        label: "Student Participation",
        data: [120, 95, 80, 60, 50, 40],
        backgroundColor: "#6366F1",
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Certificates Issued",
        data: [20, 30, 25, 40, 35, 50],
        borderColor: "#EC4899",
        backgroundColor: "#FCE7F3",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ["Verified", "Pending"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["#22C55E", "#FACC15"],
      },
    ],
  };

  const placementData = {
    labels: ["Placed", "Higher Studies", "Entrepreneurship"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ["#16A34A", "#3B82F6", "#F97316"],
      },
    ],
  };

  return (
    <div className="p-4 md:p-6 w-full overflow-x-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Institutional Reports</h2>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          <Download className="w-5 h-5" /> Download Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition flex items-center gap-4"
          >
            <div className="p-3 rounded-full bg-indigo-50">{stat.icon}</div>
            <div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="text-xl md:text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Department Participation & Verification Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
        <div className="bg-white rounded-2xl shadow p-4 md:p-6 w-full col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" /> Department-wise Participation
          </h3>
          <div className="w-full h-[300px] md:h-[400px]">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 md:p-6 w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-500" /> Verification Status
          </h3>
          <div className="w-full h-[300px]">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      {/* Certificates Trend */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6 mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-pink-500" /> Certificates Issued Over Time
        </h3>
        <div className="w-full h-[300px] md:h-[400px]">
          <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Placement & Higher Education */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6 mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-green-600" /> Placement & Career Outcomes
        </h3>
        <div className="w-full h-[300px] md:h-[400px]">
          <Pie data={placementData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Recent Reports Table */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-green-500" /> Recent Verified Activities
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 min-w-[600px]">
            <thead className="text-gray-700 bg-gray-100">
              <tr>
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Activity</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { student: "Bibhu Ranjan Mohanty", activity: "AI Workshop", type: "Workshop", status: "Approved", date: "2025-08-15" },
                { student: "Dinakrushna Mohanta", activity: "React Certification", type: "Certification", status: "Pending", date: "2025-08-20" },
                { student: "Ranjan Kumar Mohanta", activity: "Hackathon", type: "Competition", status: "Approved", date: "2025-09-01" },
              ].map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{row.student}</td>
                  <td className="px-4 py-3">{row.activity}</td>
                  <td className="px-4 py-3">{row.type}</td>
                  <td className={`px-4 py-3 font-medium ${row.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    {row.status}
                  </td>
                  <td className="px-4 py-3">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
