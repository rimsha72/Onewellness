import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile1.png"
import { useState } from "react";
export default function Settings() {
  const navigate = useNavigate();


  return (
    <div>
      <Toaster />
      <div className="max-w-screen-3xl mx-auto font-manrope">
        <div className="lg:mx-4 sm:mx-0 space-y-4">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-2">
            <button className=" cursor-pointer font-bold text-2xl flex items-center gap-4">
              Setting</button>
          </div>
          <div className="flex lg:flex-row flex-col gap-6 w-full mt-6">
            <div className="lg:w-1/5 w-full border border-gray-250 p-4 rounded-[20px]">
              <div className="flex justify-center flex-col items-center w-full border-b border-gray-250">
                <img src={profile} alt='' className="h-[140px] w-[140px]" />
                <h1 className="text-black-150 text-[20px] font-semibold mt-2 text-center">Ameanda M.</h1>
                <p className="text-gray-350 text-sm text-center mt-1 pb-4">Admin</p>
              </div>
              <div className="mt-4 space-y-4 text-sm font-medium">
                <div>
                  <h1 className="text-gray-350">ID</h1>
                  <p className="text-black-150">ID011221</p>
                </div>
                <div>
                  <h1 className="text-gray-350">Email</h1>
                  <p className="text-black-150">Ameanda@mail.com</p>
                </div>
                <div>
                  <h1 className="text-gray-350">Phone Number </h1>
                  <p className="text-black-150">+1 236 4568 123</p>
                </div>
                <div>
                  <h1 className="text-gray-350">Joined</h1>
                  <p className="text-black-150">12 December 2022</p>
                </div>
              </div>
            </div>
            <div className="lg:w-4/5 w-full space-y-6">
              <h1 className="text-black-150 font-bold text-base">Personal Info</h1>
              <div>
                <label className="block text-sm font-medium text-black-150 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-150 mb-1">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-150 mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 236 4568 123"
                  className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                />
              </div>
              <div className="flex gap-4 lg:flex-row flex-col">
                <div className="w-full">
                  <label className="block text-sm font-medium text-black-150 mb-1">New Password</label>
                  <input
                    type="text"
                    placeholder="**********"
                    className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-black-150 mb-1">Confirm new password</label>
                  <input
                    type="text"
                    placeholder="**********"
                    className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                  />
                </div>
              </div>
              <button className="px-5 py-2 bg-green-150 rounded-xl cursor-pointer text-white text-sm font-medium">
                Save changes
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}