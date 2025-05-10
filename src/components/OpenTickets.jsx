import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

export default function OpenTickets() {
    // Dummy array with ticket data
    const tickets = Array.from({ length: 15 }, (_, index) => ({
        id: index + 1, // Unique ticket ID
        name: "Cynthia Cox",
        title: "Late night thoughts",
        timeAgo: "11 min",
    }));

    const navigate = useNavigate();

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tickets.map((ticket) => (
                    <div key={ticket.id} className="bg-green-250 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={profile} alt="User" className="w-8 h-8 rounded-full mr-3" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-black-150">{ticket.name}</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-750">{ticket.timeAgo}</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm font-semibold uppercase text-[#153C35] pb-3 border-b border-white">{ticket.title}</p>
                            <button
                                className="text-sm text-green-150 pt-3 font-medium"
                                onClick={() => navigate(`/support/${ticket.id}`)}
                            >
                               Continue Chat
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
