import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import AnalyticsCards2 from "../components/AnalyticsCards2";
import ToolsUsageChart from "../components/ToolsUsageChart";
import PremiumUserChart from "../components/PremiumUserChart";
import BusinessChart from "../components/BusinessChart";
export default function Analytics() {

  return (
    <div>
      <Toaster />
      <div className="max-w-screen-3xl mx-auto font-manrope">
        <div className="lg:mx-4 sm:mx-0 space-y-4">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-2">
            <h1 className="font-bold text-2xl">Analytics</h1>
          </div>
          <AnalyticsCards2 />
          <div className="p-4 rounded-[20px] border border-gray-250">
            <div className="flex justify-between items-center pt-2 pb-6">
              <div>
                <h2 className="text-[20px] font-semibold text-black-250">Tools Usage</h2>
                <p className="text-sm font-medium text-gray-350 mt-1">Overall users count</p>
              </div>
              <button className="flex items-center cursor-pointer space-x-6 font-medium text-sm text-gray-350 hover:text-gray-800 border border-gray-250 rounded-[10px] px-4 py-2">
                <span>Year</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.27325 0H8.72658C8.85843 0.00055282 8.98715 0.0401893 9.09648 0.113898C9.2058 0.187606 9.29081 0.292077 9.34076 0.414098C9.39071 0.536119 9.40336 0.670212 9.3771 0.799421C9.35084 0.928629 9.28686 1.04715 9.19325 1.14L5.47325 4.85999C5.41127 4.92248 5.33754 4.97207 5.2563 5.00592C5.17506 5.03976 5.08792 5.05719 4.99991 5.05719C4.91191 5.05719 4.82477 5.03976 4.74353 5.00592C4.66229 4.97207 4.58856 4.92248 4.52658 4.85999L0.80658 1.14C0.712966 1.04715 0.648985 0.928629 0.622728 0.799421C0.596471 0.670212 0.609118 0.536119 0.659068 0.414098C0.709018 0.292077 0.79403 0.187606 0.903352 0.113898C1.01267 0.0401893 1.1414 0.00055282 1.27325 0V0Z" fill="#727A90" />
                </svg>
              </button>
            </div>
            <ToolsUsageChart />
          </div>
          <div className="p-4 rounded-[20px] border border-gray-250">
            <div className="flex justify-between items-center pt-2 pb-6">
              <div>
                <h2 className="text-[20px] font-semibold text-black-250">Premium Users</h2>
                <p className="text-sm font-medium text-gray-350 mt-1">Overall users count</p>
              </div>
              <button className="flex items-center cursor-pointer space-x-6 font-medium text-sm text-gray-350 hover:text-gray-800 border border-gray-250 rounded-[10px] px-4 py-2">
                <span>Year</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.27325 0H8.72658C8.85843 0.00055282 8.98715 0.0401893 9.09648 0.113898C9.2058 0.187606 9.29081 0.292077 9.34076 0.414098C9.39071 0.536119 9.40336 0.670212 9.3771 0.799421C9.35084 0.928629 9.28686 1.04715 9.19325 1.14L5.47325 4.85999C5.41127 4.92248 5.33754 4.97207 5.2563 5.00592C5.17506 5.03976 5.08792 5.05719 4.99991 5.05719C4.91191 5.05719 4.82477 5.03976 4.74353 5.00592C4.66229 4.97207 4.58856 4.92248 4.52658 4.85999L0.80658 1.14C0.712966 1.04715 0.648985 0.928629 0.622728 0.799421C0.596471 0.670212 0.609118 0.536119 0.659068 0.414098C0.709018 0.292077 0.79403 0.187606 0.903352 0.113898C1.01267 0.0401893 1.1414 0.00055282 1.27325 0V0Z" fill="#727A90" />
                </svg>
              </button>
            </div>
            <PremiumUserChart />
          </div>
          <div className="p-4 rounded-[20px] border border-gray-250">
            <div className="flex justify-between items-center pt-2 pb-6">
              <div>
                <h2 className="text-[20px] font-semibold text-black-250">Businesses</h2>
                <p className="text-sm font-medium text-gray-350 mt-1">Based on Categories</p>
              </div>
              <button className="flex items-center cursor-pointer space-x-6 font-medium text-sm text-gray-350 hover:text-gray-800 border border-gray-250 rounded-[10px] px-4 py-2">
                <span>Year</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.27325 0H8.72658C8.85843 0.00055282 8.98715 0.0401893 9.09648 0.113898C9.2058 0.187606 9.29081 0.292077 9.34076 0.414098C9.39071 0.536119 9.40336 0.670212 9.3771 0.799421C9.35084 0.928629 9.28686 1.04715 9.19325 1.14L5.47325 4.85999C5.41127 4.92248 5.33754 4.97207 5.2563 5.00592C5.17506 5.03976 5.08792 5.05719 4.99991 5.05719C4.91191 5.05719 4.82477 5.03976 4.74353 5.00592C4.66229 4.97207 4.58856 4.92248 4.52658 4.85999L0.80658 1.14C0.712966 1.04715 0.648985 0.928629 0.622728 0.799421C0.596471 0.670212 0.609118 0.536119 0.659068 0.414098C0.709018 0.292077 0.79403 0.187606 0.903352 0.113898C1.01267 0.0401893 1.1414 0.00055282 1.27325 0V0Z" fill="#727A90" />
                </svg>
              </button>
            </div>
            <BusinessChart />
          </div>
        </div>
      </div>

    </div>
  );
}