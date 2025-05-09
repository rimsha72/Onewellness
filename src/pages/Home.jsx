import toast, { Toaster } from "react-hot-toast";
import AnalyticsCards from "../components/AnalyticsCards";
import { useState } from "react";
import OverviewDashboard from "../components/OverviewDashboard";
import Posts from "../components/Posts";
import CreatePostModal from "../components/CreatePostModal";
import SetRolesModal from "../components/SetRolesModal";
export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openRoleModal = () => setIsRoleModalOpen(true);
  const closeRoleModal = () => setIsRoleModalOpen(false);
  return (
    <div>
      <Toaster />
      <div className="max-w-screen-3xl mx-auto font-manrope">
        <div className="lg:mx-4 sm:mx-0 space-y-4">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-2">
            <h1 className="font-bold text-2xl">Dashboard</h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3 ">
              <button className="border border-green-150 rounded-xl text-sm text-green-150 font-medium py-2.5 px-4 transition duration-200 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.565 7.50922C14.5712 7.50918 14.5774 7.50918 14.5837 7.50918C16.6547 7.50918 18.3337 9.19117 18.3337 11.2661C18.3337 13.1998 16.8753 14.7923 15.0003 15M14.565 7.50922C14.5773 7.37172 14.5837 7.23247 14.5837 7.09174C14.5837 4.55579 12.5317 2.5 10.0003 2.5C7.60303 2.5 5.6356 4.34389 5.43401 6.69327M14.565 7.50922C14.4797 8.45633 14.1075 9.3205 13.536 10.0138M5.43401 6.69327C3.32031 6.89478 1.66699 8.67825 1.66699 10.8486C1.66699 12.8681 3.09846 14.5527 5.00033 14.9394M5.43401 6.69327C5.56554 6.68073 5.69885 6.67431 5.83366 6.67431C6.77184 6.67431 7.63761 6.98495 8.33408 7.50918" stroke="#6EB9AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.0003 17.4999V10.8333M10.0003 17.4999C9.41683 17.4999 8.3266 15.838 7.91699 15.4166M10.0003 17.4999C10.5838 17.4999 11.6741 15.838 12.0837 15.4166" stroke="#6EB9AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                Export in CSV
              </button>
              <button onClick={openRoleModal} className="border border-green-150 bg-green-150/20 rounded-xl text-sm text-green-150 font-medium py-2.5 px-4 transition duration-200">
                Set Roles
              </button>
              <button
                onClick={openModal}
                className="border border-green-150 bg-green-150 rounded-xl text-sm text-white font-medium py-2.5 px-4 transition duration-200"
              >
                Post in Community
              </button>
            </div>
          </div>
          <AnalyticsCards />
          <div className="w-full">
            {/* Tabs Navigation */}
            <div className="flex border border-green-150 rounded-[16px] p-1 bg-white max-w-[204px]">
              <button
                className={`flex-1 py-3 px-4 text-sm font-semibold rounded-[12px] transition-colors duration-200 ${activeTab === 'overview'
                    ? 'bg-green-150 text-white'
                    : 'bg-transparent text-black-350 hover:bg-gray-100'
                  }`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`flex-1 py-3 px-4 text-sm font-semibold rounded-[12px] transition-colors duration-200 ${activeTab === 'my-posts'
                   ? 'bg-green-150 text-white'
                    : 'bg-transparent text-black-350 hover:bg-gray-100'
                  }`}
                onClick={() => setActiveTab('my-posts')}
              >
                My Posts
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4 ">
              {activeTab === 'overview' && (
                <div>
                 <OverviewDashboard />
                </div>
              )}
              {activeTab === 'my-posts' && (
                <div>
                  <Posts />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <CreatePostModal isOpen={isModalOpen} onClose={closeModal} />
      <SetRolesModal isOpen={isRoleModalOpen} onClose={closeRoleModal} />
    </div>
  );
}