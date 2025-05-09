import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import UserTable from "./UserTable";
import PremiumUsers from "./PremiumUsers";

export default function OverviewDashboard() {

    return (
        <div>
            <div className="border border-gray-250 rounded-[20px] py-4">
                <UserTable />
            </div>
            <div className="border border-gray-250 rounded-[20px] py-4 mt-10">
                <PremiumUsers />
            </div>

        </div>
    );
}