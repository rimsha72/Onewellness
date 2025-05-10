import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import profile from "../assets/profile.png";

export default function ClosedTickets() {
    // Dummy array to repeat 15 cards
    const cards = Array.from({ length: 15 });

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((_, index) => (
                    <div key={index} className="bg-green-250 rounded-xl p-4">
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src={profile} alt="User" className="w-8 h-8 rounded-full mr-3" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-black-150">Cynthia Cox</p>
                                </div>
                            </div>
                            <p className='text-xs text-gray-750'>11 min</p>
                        </div>
                        <div className='mt-4'>
                            <p className="text-sm font-semibold uppercase text-[#153C35] pb-3 border-b border-white">Late night thoughts</p>
                            <p className="text-sm text-gray-650 pt-3 font-medium">Status:
                                <span className='text-red-600 font-bold'>Closed</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
