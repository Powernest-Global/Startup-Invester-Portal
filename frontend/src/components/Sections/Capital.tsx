// src/components/Sections/Capital.tsx
import React from "react";
import { ChevronRight, Users, Clock } from "lucide-react";

// --- Mock Data ---
const ongoingDeals = [
    {
        title: "Venture Fund IV",
        type: "Early-stage technology fund",
        raised: 375,
        goal: 500,
        investors: 42,
        pending: 5,
        status: "Active Fundraising",
    },
    {
        title: "Opportunity Fund",
        type: "Follow-on investments",
        raised: 85,
        goal: 100,
        investors: 12,
        pending: 3,
        status: "Final close",
    },
    {
        title: "Early start-up Fund",
        type: "Early-stage technology fund",
        raised: 375,
        goal: 500,
        investors: 42,
        pending: 5,
        status: "Active Fundraising",
    },
];

const priorityFollowUps = [
    {
        name: "Institutional Pension Fund",
        type: "Institutional",
        amount: "10M",
        dueDate: "This week",
        status: "urgent",
        investors: 42,
    },
    {
        name: "Strategic Family Office",
        type: "Family Office",
        amount: "5M",
        dueDate: "Next week",
        status: "soon",
        investors: 12,
    },
    {
        name: "Insurance Capital",
        type: "Insurance",
        amount: "15M",
        dueDate: "2 weeks",
        status: "normal",
        investors: 62,
    },
];

// --- Reusable ---
const ProgressBar = ({ value, goal }: { value: number; goal: number }) => {
    const percentage = (value / goal) * 100;
    return (
        <div className="w-full bg-gray-700/40 rounded-full h-1.5">
            <div
                className="bg-blue-500 h-1.5 rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

const CapitalRaisingCard = ({ deal }) => {
    const { title, type, raised, goal, investors, pending, status } = deal;
    const statusColor =
        status === "Final close" ? "text-teal-400" : "text-green-400";

    return (
        <div
            className="p-5 rounded-2xl shadow-lg border border-gray-800"
            style={{
                background:
                    "linear-gradient(180deg, #10122b 0%, #020203 100%)", // exact gradient from your screenshot
            }}
        >
            <div>
                <p className={`text-xs font-semibold ${statusColor}`}>{status}</p>
                <div className="flex justify-between items-center mt-2">
                    <h3 className="text-white font-semibold">{title}</h3>
                    <p className="text-white font-semibold">
                        ${raised}M / ${goal}M
                    </p>
                </div>
                <p className="text-gray-400 text-xs mt-1">{type}</p>
                <p className="text-gray-400 text-xs mt-1">
                    {((raised / goal) * 100).toFixed(0)}% committed
                </p>
            </div>
            <div className="mt-4">
                <ProgressBar value={raised} goal={goal} />
                <div className="flex items-center text-gray-400 text-xs mt-3 space-x-6">
                    <div className="flex items-center">
                        <Users size={14} className="mr-1.5" />
                        <span>{investors} investors</span>
                    </div>
                    <div className="flex items-center text-orange-400">
                        <Clock size={14} className="mr-1.5" />
                        <span>{pending} pending follow-ups</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Capital Section ---
const Capital = () => {
    return (
        <main className="flex-1 p-8 bg-black min-h-screen">
            {/* Title + Action */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white">Capital Raising</h2>
                    <p className="text-gray-400 mt-1">
                        Track fundraising progress, commitments, and investor engagement
                    </p>
                </div>
                <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition">
                    Raise capital
                </button>
            </div>

            {/* Ongoing Capital Raising */}
            <section className="mb-10">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">
                        Ongoing Capital Raising
                    </h3>
                    <a
                        href="#"
                        className="text-blue-400 text-sm font-medium flex items-center hover:text-blue-300"
                    >
                        View all <ChevronRight size={16} className="ml-1" />
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ongoingDeals.map((deal, index) => (
                        <CapitalRaisingCard key={index} deal={deal} />
                    ))}
                </div>
            </section>

            {/* Priority Follow-ups */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">
                        Priority Follow-ups
                    </h3>
                    <a
                        href="#"
                        className="text-blue-400 text-sm font-medium flex items-center hover:text-blue-300"
                    >
                        View all <ChevronRight size={16} className="ml-1" />
                    </a>
                </div>
                <div className="bg-[#0f122d] rounded-2xl border border-gray-800 overflow-hidden shadow-md">
                    <table className="w-full text-left">
                        <thead className="bg-[#0f122d] border-b border-gray-800">
                            <tr>
                                <th className="py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Fund Name
                                </th>
                                <th className="py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Fund Type
                                </th>
                                <th className="py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Committed Amount
                                </th>
                                <th className="py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Due Date
                                </th>
                                <th className="py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    No. of Investors
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {priorityFollowUps.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-800 hover:bg-gray-800/40 transition"
                                >
                                    <td className="py-4 px-6 text-sm font-medium text-white">
                                        {item.name}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-400">
                                        {item.type}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-400">
                                        ${item.amount}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div
                                            className={`flex items-center text-xs px-2 py-1 rounded-full font-medium ${item.status === "urgent"
                                                ? "bg-red-500/10 text-red-400"
                                                : item.status === "soon"
                                                    ? "bg-yellow-500/10 text-yellow-400"
                                                    : "bg-blue-500/10 text-blue-400"
                                                }`}
                                        >
                                            <Clock size={12} className="mr-1" />
                                            {item.dueDate}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-400">
                                        {item.investors} Investors
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Capital;
