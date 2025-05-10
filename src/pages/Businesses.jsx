import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import CreatePostModal from "../components/CreatePostModal";
import SetRolesModal from "../components/SetRolesModal";
import AnalyticsBusiness from "../components/AnalyticsBusiness";
import BusinessTable from "../components/BusinessTable";
import NewBusinessModal from "../components/NewBusinessModal";
export default function Businesses() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Toaster />
      <div className="max-w-screen-3xl mx-auto font-manrope">
        <div className="lg:mx-4 sm:mx-0 space-y-4">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-2">
            <h1 className="font-bold text-2xl">Manage Businesses</h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3 ">
              <button
                onClick={openModal}
                className="border border-green-150 cursor-pointer bg-green-150 rounded-xl text-sm text-white font-medium py-2.5 px-4 transition duration-200"
              >
                Add Business
              </button>
            </div>
          </div>
          <AnalyticsBusiness />
        <div className="w-full border border-gray-250 rounded-[20px]">
          <BusinessTable />
        </div>
        </div>
      </div>
      <NewBusinessModal isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
}