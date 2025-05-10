import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import SetRolesModal2 from "../components/SetRolesModal2";
import EditRole from "../components/EditRole";
import DeleteRole from "../components/DeleteRole";

export default function Roles() {
  const [roles] = useState([
    { id: 1, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
    { id: 2, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
    { id: 3, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
    { id: 4, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
    { id: 5, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
    { id: 6, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
    { id: 7, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
    { id: 8, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
    { id: 9, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
    { id: 10, name: "John Bushmill", email: "john123@email.com", role: "Manager" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditsModal = () => setIsEditModalOpen(false);

  
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <div>
      <Toaster />
      <div className="max-w-screen-3xl mx-auto font-manrope">
        <div className="lg:mx-4 sm:mx-0 space-y-4">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-2">
            <h1 className="font-bold text-2xl">Manage Roles</h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3 ">
              <button
                onClick={openModal}
                className="border border-green-150 bg-green-150 cursor-pointer rounded-xl text-sm text-white font-medium py-2.5 px-4 transition duration-200"
              >
                Add New Role
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className="flex items-center justify-between px-4 py-5 border border-gray-250 rounded-[20px] hover:bg-gray-50"
              >
                <div className="flex-1">
                  <p className="text-base font-medium text-black-150">{role.name}</p>
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium text-gray-350">{role.email}</p>
                </div>
                <div className="text-base font-medium text-black-150 flex-1">{role.role}</div>
                <div className="flex gap-3 items-center">
                  <button onClick={openEditModal} className="hover:text-green-150 cursor-pointer hover:scale-101 hover:bg-green-150 hover:p-1 rounded-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4249 4.60509L17.4149 3.6151C18.2351 2.79497 19.5648 2.79497 20.3849 3.6151C21.205 4.43524 21.205 5.76493 20.3849 6.58507L19.3949 7.57506M16.4249 4.60509L9.76558 11.2644C9.25807 11.772 8.89804 12.4078 8.72397 13.1041L8 16L10.8959 15.276C11.5922 15.102 12.228 14.7419 12.7356 14.2344L19.3949 7.57506M16.4249 4.60509L19.3949 7.57506" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                      <path d="M18.9999 13.5C18.9999 16.7875 18.9999 18.4312 18.092 19.5376C17.9258 19.7401 17.7401 19.9258 17.5375 20.092C16.4312 21 14.7874 21 11.4999 21H11C7.22876 21 5.34316 21 4.17159 19.8284C3.00003 18.6569 3 16.7712 3 13V12.5C3 9.21252 3 7.56879 3.90794 6.46244C4.07417 6.2599 4.2599 6.07417 4.46244 5.90794C5.56879 5 7.21252 5 10.5 5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <button onClick={openDeleteModal} className="hover:text-green-150 cursor-pointer hover:scale-101 hover:bg-green-150 hover:p-1 rounded-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M9.5 16.5V10.5" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M14.5 16.5V10.5" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                  </button>
                  <button className="text-white bg-green-150 hover:scale-101 transition duration-200 flex items-center px-4 py-3 rounded-xl font-medium"   onClick={openModal}>
                    <span className="text-sm">View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SetRolesModal2 isOpen={isModalOpen} onClose={closeModal} />
      <EditRole isOpen={isEditModalOpen} onClose={closeEditsModal} />
      <DeleteRole isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />
    </div>
  );
}