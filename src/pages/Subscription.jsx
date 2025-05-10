import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import SubscriptionCards from "../components/SubscriptionCards";
import PremiumUsersSubscription from "../components/PremiumUsersSubscription";
import ManageSubscriptionModal from "../components/ManageSubscriptionModal";
export default function Subscription() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Toaster />
      <div className="max-w-screen-3xl mx-auto font-manrope">
        <div className="lg:mx-4 sm:mx-0 space-y-4">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-2">
            <h1 className="font-bold text-2xl">Subscription</h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3 ">
              
              <button
                onClick={openModal}
                className="border border-green-150 cursor-pointer bg-green-150 rounded-xl text-sm text-white font-medium py-2.5 px-4 transition duration-200"
              >
                Manage Subscription
              </button>
            </div>
          </div>
          <SubscriptionCards />
        <div>
          <div className="border border-gray-250 rounded-[20px] py-4">
          <PremiumUsersSubscription /> 

          </div>
        </div>
        </div>
      </div>
      <ManageSubscriptionModal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
}