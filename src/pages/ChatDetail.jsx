import { useState } from 'react';
import { ArrowLeft, Paperclip, Smile, Send } from 'lucide-react';
import profile from '../assets/profile.png';
import pills from '../assets/pills.png'; // the image shown in the chat

export default function ChatDetails() {
    const [message, setMessage] = useState('');

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-2">
                    <ArrowLeft className="w-5 h-5 cursor-pointer" />
                    <h2 className="text-lg font-semibold">LATE NIGHT THOUGHTS</h2>
                    <span className="text-gray-500 ml-2">Chat support system</span>
                </div>
                <button className="border border-gray-300 text-sm rounded px-3 py-1 text-teal-700">Close Ticket</button>
            </div>

            {/* Date label */}
            <div className="text-center text-sm text-gray-500 my-4 font-medium">Today</div>

            {/* Chat messages */}
            <div className="space-y-6">
                {/* Message - You */}
                <div className="flex items-start space-x-3">
                    <img src={profile} className="w-8 h-8 rounded-full" alt="You" />
                    <div>
                        <p className="text-sm font-semibold">You</p>
                        <div className="bg-gray-100 p-3 rounded-lg max-w-md mt-1 text-sm">
                            Lorem ipsum odor Lorem ipsum odor Lorem ipsum odor Lorem ipsum odor
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Feb 29, 2025</p>
                    </div>
                </div>

                {/* Message - Cynthia */}
                <div className="flex items-start space-x-3">
                    <img src={profile} className="w-8 h-8 rounded-full" alt="Cynthia" />
                    <div>
                        <p className="text-sm font-semibold">Cynthia Cox</p>
                        <div className="bg-gray-100 p-3 rounded-lg max-w-md mt-1 text-sm">
                            <p>Lorem ipsum odor</p>
                            <img src={pills} alt="Pills" className="mt-2 rounded-md" />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Feb 29, 2025</p>
                    </div>
                </div>

                {/* Message - You */}
                <div className="flex items-start space-x-3">
                    <img src={profile} className="w-8 h-8 rounded-full" alt="You" />
                    <div>
                        <p className="text-sm font-semibold">You</p>
                        <div className="bg-gray-100 p-3 rounded-lg max-w-md mt-1 text-sm">
                            Lorem ipsum odor <br /> Lorem ipsum odor
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Feb 29, 2025</p>
                    </div>
                </div>
            </div>

            {/* Message input area */}
            <div className="mt-6 border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                    <select className="text-sm border rounded px-2 py-1">
                        <option>Normal text</option>
                    </select>
                    <button className="text-sm font-medium">B</button>
                    <button className="italic text-sm font-medium">I</button>
                    <button className="underline text-sm font-medium">U</button>
                    <button className="line-through text-sm font-medium">S</button>
                    <button><Paperclip className="w-4 h-4" /></button>
                </div>
                <div className="flex items-center gap-2">
                    <img src={profile} className="w-8 h-8 rounded-full" alt="User" />
                    <input
                        type="text"
                        placeholder="Write your message or upload media"
                        className="flex-1 border rounded-full px-4 py-2 text-sm"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm flex items-center">
                        <Send className="w-4 h-4 mr-1" />
                        Send Message
                    </button>
                </div>
                {/* Additional icons */}
                <div className="flex items-center gap-3 mt-2 pl-10">
                    <Smile className="w-5 h-5 cursor-pointer" />
                    <Paperclip className="w-5 h-5 cursor-pointer" />
                    <div className="w-5 h-5 bg-gray-200 rounded cursor-pointer"></div>
                    <div className="w-5 h-5 bg-gray-200 rounded cursor-pointer"></div>
                    <div className="w-5 h-5 bg-gray-200 rounded cursor-pointer"></div>
                </div>
            </div>
        </div>
    );
}
