// src/pages/Network.tsx
import React from "react";
import { ChevronRight, Clock, Plus } from "lucide-react";

// --- Mock Data ---
const activities = [
  {
    name: "Sarah Chen",
    role: "Tech Flow AI, Founder, Series A",
    activity: "Quarterly update call",
    time: "2h ago",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "person",
  },
  {
    name: "Pension Fund XYZ",
    role: "LP, Institutional",
    activity: "Investment committee meeting",
    time: "2h ago",
    avatar: "P",
    type: "company",
    color: "bg-indigo-500",
  },
  {
    name: "Acme Ventures",
    role: "Co-investor, Seed",
    activity: "Deal syndication discussion",
    time: "3d ago",
    avatar: "A",
    type: "company",
    color: "bg-rose-500",
  },
  {
    name: "Capital Ventures",
    role: "Co-investor, Seed",
    activity: "Deal syndication discussion",
    time: "3d ago",
    avatar: "C",
    type: "company",
    color: "bg-teal-500",
  },
];

const meetingsToday = [
  {
    title: "Daily Meet",
    time: "10:00 AM - 11:00 AM",
    attendees: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/women/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg",
    ],
  },
  {
    title: "Investors Meet",
    time: "11:00 AM - 12:00 PM",
    attendees: [
      "https://randomuser.me/api/portraits/women/5.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/women/6.jpg",
    ],
  },
  {
    title: "Founders Meet",
    time: "02:00 PM - 02:30 PM",
    attendees: [
      "https://randomuser.me/api/portraits/men/7.jpg",
      "https://randomuser.me/api/portraits/women/8.jpg",
      "https://randomuser.me/api/portraits/men/9.jpg",
      "https://randomuser.me/api/portraits/women/10.jpg",
      "https://randomuser.me/api/portraits/men/11.jpg",
      "https://randomuser.me/api/portraits/women/12.jpg",
    ],
  },
  {
    title: "Stand-up Meet",
    time: "04:00 PM - 04:30 PM",
    attendees: [
      "https://randomuser.me/api/portraits/women/13.jpg",
      "https://randomuser.me/api/portraits/men/14.jpg",
      "https://randomuser.me/api/portraits/women/15.jpg",
      "https://randomuser.me/api/portraits/men/16.jpg",
    ],
  },
  {
    title: "Pre-Plan",
    time: "05:00 PM - 05:30 PM",
    attendees: [
      "https://randomuser.me/api/portraits/men/17.jpg",
      "https://randomuser.me/api/portraits/women/18.jpg",
      "https://randomuser.me/api/portraits/men/19.jpg",
      "https://randomuser.me/api/portraits/women/20.jpg",
      "https://randomuser.me/api/portraits/men/21.jpg",
    ],
  },
];

const MAX_ATTENDEES_SHOWN = 6;

// --- Reusable Components ---
const ActivityCard = ({ item }) => (
  <div className="p-5 rounded-2xl shadow-md bg-[#0B0E1E] border border-gray-800 flex items-center space-x-4">
    {item.type === "person" ? (
      <img
        src={item.avatar}
        alt={item.name}
        className="w-10 h-10 rounded-full"
      />
    ) : (
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-lg text-white font-bold text-lg ${item.color}`}
      >
        {item.avatar}
      </div>
    )}
    <div className="flex-1">
      <p className="text-white font-medium">{item.name}</p>
      <p className="text-gray-400 text-xs mt-1">{item.role}</p>
      <p className="text-gray-300 text-sm mt-2">{item.activity}</p>
    </div>
    <div className="flex items-center text-gray-400 text-xs">
      <Clock size={14} className="mr-1.5" />
      {item.time}
    </div>
  </div>
);

const MeetingCard = ({ meeting }) => (
  <div className="py-4 border-b border-gray-800 last:border-0">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-white font-semibold">{meeting.title}</p>
        <p className="text-gray-400 text-xs mt-1">{meeting.time}</p>
      </div>
      <div className="flex items-center -space-x-2">
        {meeting.attendees
          .slice(0, MAX_ATTENDEES_SHOWN)
          .map((attendee, i) => (
            <img
              key={i}
              src={attendee}
              alt="attendee"
              className="w-6 h-6 rounded-full border-2 border-[#0B0E1E]"
            />
          ))}
        {meeting.attendees.length > MAX_ATTENDEES_SHOWN && (
          <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-white text-[10px] font-semibold border-2 border-[#0B0E1E]">
            +{meeting.attendees.length - MAX_ATTENDEES_SHOWN}
          </div>
        )}
      </div>
    </div>
  </div>
);

// --- Network Page ---
const Network = () => {
  return (
    <main className="flex-1 p-8 bg-gray min-h-screen text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Network Management</h1>
          <p className="text-gray-400 mt-1">
            Maintain relationships with founders, LPs, and co-investment partners
          </p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition flex items-center gap-2">
          <Plus size={16} /> Add
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recent Activities */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold text-white">Recent Activities</h2>
              <p className="text-gray-400 text-sm">Stay connected with your network</p>
            </div>
            <a
              href="#"
              className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1"
            >
              View all <ChevronRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((item, idx) => (
              <ActivityCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Right Column: Meetings */}
        <div className="bg-[#0B0E1E] rounded-2xl border border-gray-800 shadow-md p-6 h-fit">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Meetings</h2>
            <div className="flex space-x-1 text-sm p-1 bg-[#1E2239] rounded-full">
              <button className="px-3 py-1 bg-blue-600 text-white rounded-full">
                Today
              </button>
              <button className="px-3 py-1 text-gray-300 rounded-full">
                Upcoming
              </button>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-2">Today, 30 July 2025</p>
          <div>
            {meetingsToday.map((meeting, idx) => (
              <MeetingCard key={idx} meeting={meeting} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Network;
