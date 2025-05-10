import toast, { Toaster } from "react-hot-toast";
import BusinessCards from "../components/BusinessCards";
import { useNavigate } from "react-router-dom";
import profile6 from "../assets/profile6.png"
import BusinessUsersTable from "../components/BusinessUsersTable";
import { useState } from "react";
export default function BusinessDetails() {
  const navigate = useNavigate();
  

  return (
    <div>
      <Toaster />
      <div className="max-w-screen-3xl mx-auto font-manrope">
        <div className="lg:mx-4 sm:mx-0 space-y-4">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-2">
            <button onClick={() => navigate('/businesses')} className=" cursor-pointer font-bold text-2xl flex items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20" stroke="#24282E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.99997 17C8.99997 17 4.00002 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="#24282E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              Business Details</button>
          </div>
          <div className="flex lg:flex-row flex-col gap-4 w-full mt-6">
            <div className="lg:w-1/5 w-full border border-gray-250 p-4 rounded-[20px]">
              <img src={profile6} alt='' className="h-[210px] w-full" />
              <h1 className="text-black-150 text-[20px] font-semibold mt-5 text-center">John Bushmill</h1>
              <p className="text-gray-350 text-sm text-center mt-2 pb-4 border-b border-gray-250">Laura stuff is lorem ipsum dolor sit amet bla bla lorem ipsum dolor sit amet.</p>
              <div className="mt-4 space-y-6 text-sm font-medium">
                <div>
                  <h1 className="text-gray-350">Email</h1>
                  <p className="text-black-150">John123b@mail.com</p>
                </div>
                <div>
                  <h1 className="text-gray-350">Total Users</h1>
                  <p className="text-black-150">150</p>
                </div>
                <div>
                  <h1 className="text-gray-350">Pricing </h1>
                  <p className="text-black-150">$150 Annually</p>
                </div>
                <div>
                  <h1 className="text-gray-350">Join Date</h1>
                  <p className="text-black-150">12 February 2024</p>
                </div>
                <div>
                  <h1 className="text-gray-350">Upcoming Payment</h1>
                  <p className="text-black-150">12 February 2025</p>
                </div>
                <div>
                  <h1 className="text-gray-350">Phone</h1>
                  <p className="text-black-150">+1 571 569 2356</p>
                </div>
                <div>
                  <button className="w-full border border-green-150 cursor-pointer rounded-2xl text-green-150 font-medium text-sm py-2.5">Send Message</button>
                </div>
              </div>
            </div>
            <div className="lg:w-4/5 w-full ">
            <BusinessCards />
              <div className="border border-gray-250 p-4 rounded-[20px] mt-4">
                <BusinessUsersTable />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}