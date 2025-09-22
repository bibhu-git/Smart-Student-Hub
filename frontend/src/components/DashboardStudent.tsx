import { motion } from "framer-motion";
import {
  User,
  Award,
  Calendar,
  Bell,
  Upload,
  FileText,
  Search,
  Menu,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

import UploadForm from "../components/UploadForm";
import Portfolio from "../components/Portfolio";
import Achievements from "../components/Achievements";
import Events from "../components/Events";

export default function DashboardStudent() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const achievements = [
    { title: "Certification: ReactJS", date: "2025-08-15" },
    { title: "Hackathon Participation", date: "2025-07-20" },
    { title: "Workshop: AI & ML", date: "2025-06-12" },
  ];

  const upcomingEvents = [
    { event: "Workshop: Cloud Computing", date: "2025-09-25" },
    { event: "Seminar: Data Science Trends", date: "2025-10-05" },
  ];

  // New summary stats
  const stats = [
    { title: "Total Achievements", value: achievements.length, icon: <Award className="w-5 h-5 text-indigo-600" /> },
    { title: "Upcoming Events", value: upcomingEvents.length, icon: <Calendar className="w-5 h-5 text-pink-500" /> },
    { title: "Certificates Uploaded", value: 5, icon: <FileText className="w-5 h-5 text-green-600" /> },
    { title: "Overall Progress", value: "80%", icon: <BarChart3 className="w-5 h-5 text-yellow-500" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-white shadow-lg flex flex-col fixed h-screen z-40 transition-transform duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="px-6 py-6 flex items-center gap-3 border-b">
          <User className="w-7 h-7 text-indigo-600" />
          <span className="text-xl font-bold text-indigo-600">MyHub</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto">
          {[
            { key: "dashboard", label: "Dashboard", icon: <User className="w-5 h-5" /> },
            { key: "achievements", label: "My Achievements", icon: <Award className="w-5 h-5" /> },
            { key: "events", label: "Events", icon: <Calendar className="w-5 h-5" /> },
            { key: "upload", label: "Upload Certificate", icon: <Upload className="w-5 h-5" /> },
            { key: "portfolio", label: "Portfolio", icon: <FileText className="w-5 h-5" /> },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveTab(item.key);
                setSidebarOpen(false); // close on mobile
              }}
              className={`flex items-center gap-3 w-full text-gray-700 px-3 py-2 rounded-lg transition
              ${
                activeTab === item.key
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : "hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-8">
          {/* Menu button (mobile) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Search bar (hidden on small) */}
          <div className="hidden md:flex items-center gap-3 w-full max-w-md bg-white px-3 py-2 rounded-lg shadow-sm">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search achievements, events..."
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Profile + Notifications */}
          <div className="flex items-center gap-4 ml-auto">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600 transition" />
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </div>

        {/* Tabs */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Top Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 bg-white rounded-2xl shadow flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-indigo-50">{stat.icon}</div>
                  <div>
                    <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                    <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Section: Achievements + Events */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow p-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600" /> My Achievements
                </h2>
                {achievements.map((a, i) => (
                  <div key={i} className="flex justify-between border-b py-3">
                    <span>{a.title}</span>
                    <span className="text-sm text-gray-500">{a.date}</span>
                  </div>
                ))}
              </motion.div>

              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow p-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-600" /> Upcoming Events
                </h2>
                {upcomingEvents.map((e, i) => (
                  <div key={i} className="flex justify-between border-b py-3">
                    <span>{e.event}</span>
                    <span className="text-sm text-gray-500">{e.date}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === "upload" && <UploadForm />}
        {activeTab === "portfolio" && <Portfolio />}
        {activeTab === "achievements" && <Achievements />}
        {activeTab === "events" && <Events />}
      </main>
    </div>
  );
}
