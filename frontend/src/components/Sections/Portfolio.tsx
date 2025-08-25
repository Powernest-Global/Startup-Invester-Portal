// src/components/Sections/Portfolio.tsx
import React from "react";
import { Search, Settings2, MoreVertical, Clock } from "lucide-react";

// Mock Data
const portfolioData = Array(8).fill({
    logo: "https://via.placeholder.com/32",
    company: "Tech Start AI",
    sector: "Fintech",
    stage: "Pre-seed",
    investedOn: "Feb 2024",
    amount: "$100K",
    ownership: "3.5%",
    status: "Active",
    lastUpdate: "3 days ago",
});

const stats = [
    { label: "Total Companies", value: "45", gradient: "from-yellow-500/20 to-yellow-600/10 text-yellow-400" },
    { label: "Total Invested", value: "$2.4M", gradient: "from-green-500/20 to-green-600/10 text-green-400" },
    { label: "Active", value: "16", gradient: "from-blue-500/20 to-blue-600/10 text-blue-400" },
    { label: "Follow-ons", value: "10", gradient: "from-orange-500/20 to-orange-600/10 text-orange-400" },
    { label: "Exits", value: "2", gradient: "from-purple-500/20 to-purple-600/10 text-purple-400" },
];

const Portfolio = () => {
    return (
        <main className="flex-1 p-6 bg-[#0a0a0f] min-h-screen text-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold">Portfolio Performance</h2>
                    <p className="text-gray-400 text-sm mt-1">
                        Monitor company performance, valuations, and key business metrics
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="p-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition">
                        <Search size={18} className="text-gray-400" />
                    </button>
                    <button className="p-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition">
                        <Settings2 size={18} className="text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className={`p-5 rounded-xl border border-gray-800 shadow-lg bg-gradient-to-br ${stat.gradient}`}
                    >
                        <p className="text-gray-300 text-sm">{stat.label}</p>
                        <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-[#111113] rounded-2xl border border-gray-800 overflow-hidden shadow-lg">
                <table className="w-full text-left">
                    <thead className="bg-[#111113] border-b border-gray-800">
                        <tr>
                            {[
                                "Logo",
                                "Company",
                                "Sector",
                                "Stage",
                                "Invested On",
                                "Amount",
                                "Ownership",
                                "Status",
                                "Last update",
                                "Actions",
                            ].map((col, idx) => (
                                <th
                                    key={idx}
                                    className="py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider"
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {portfolioData.map((item, idx) => (
                            <tr
                                key={idx}
                                className="border-b border-gray-800 hover:bg-gray-800/30 transition"
                            >
                                <td className="py-4 px-6">
                                    <img
                                        src={item.logo}
                                        alt="logo"
                                        className="w-8 h-8 rounded-full"
                                    />
                                </td>
                                <td className="py-4 px-6 text-sm font-medium">{item.company}</td>
                                <td className="py-4 px-6 text-sm text-gray-400">
                                    {item.sector}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-400">
                                    {item.stage}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-400">
                                    {item.investedOn}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-400">
                                    {item.amount}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-400">
                                    {item.ownership}
                                </td>
                                <td className="py-4 px-6 text-sm">
                                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-400 flex items-center">
                                    <Clock size={14} className="mr-1" /> {item.lastUpdate}
                                </td>
                                <td className="py-4 px-6">
                                    <button className="p-1 rounded-lg hover:bg-gray-700">
                                        <MoreVertical size={16} className="text-gray-400" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-between items-center p-5 text-sm text-gray-400 bg-[#0d0d10]">
                    <p>1-8 of 100</p>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                            Prev
                        </button>
                        <button className="px-3 py-1 rounded-md bg-indigo-600 text-white">
                            1
                        </button>
                        <button className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                            2
                        </button>
                        <button className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                            3
                        </button>
                        <button className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Portfolio;
