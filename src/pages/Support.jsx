import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import OpenTickets from "../components/OpenTickets";
import ClosedTickets from "../components/ClosedTickets";
export default function Support() {
  const [activeTab, setActiveTab] = useState('open tickets');
 
  return (
    <div>
      <Toaster />
      <div className="max-w-screen-3xl mx-auto font-manrope">
        <div className="lg:mx-4 sm:mx-0 space-y-4">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-2">
            <h1 className="font-bold text-2xl">Customer Support</h1>
          </div>
          <div className="w-full">
            {/* Tabs Navigation */}
            <div className="flex border border-green-150 rounded-[16px] p-1 bg-white max-w-[304px]">
              <button
                className={`flex-1 py-3 px-4 text-sm  cursor-pointer font-semibold rounded-[12px] transition-colors duration-200 ${activeTab === 'open tickets'
                    ? 'bg-green-150 text-white'
                    : 'bg-transparent text-black-350 hover:bg-gray-100'
                  }`}
                onClick={() => setActiveTab('open tickets')}
              >
                Open tickets
              </button>
              <button
                className={`flex-1 py-3 px-4 text-sm cursor-pointer font-semibold rounded-[12px] transition-colors duration-200 ${activeTab === 'closed tickets'
                   ? 'bg-green-150 text-white'
                    : 'bg-transparent text-black-350 hover:bg-gray-100'
                  }`}
                onClick={() => setActiveTab('closed tickets')}
              >
                Closed Tickets
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4 ">
              {activeTab === 'open tickets' && (
                <div>
                 <OpenTickets />
                </div>
              )}
              {activeTab === 'closed tickets' && (
                <div>
                  <ClosedTickets />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}