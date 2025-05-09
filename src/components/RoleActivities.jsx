import React, { useState } from 'react';
import profile from "../assets/profile.png"

const RoleActivities = () => {
    const [activeTab, setActiveTab] = useState('Help & Support');

    const renderContent = () => {
        if (activeTab === 'Help & Support') {
            return (
                <>
                    {/* In Progress Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-black-150 mb-4 flex items-center">
                            In Progress <span className="ml-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-green-150 border border-green-150 bg-green-150/20 rounded-full">2</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-green-250 rounded-xl p-4 ">
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <img src={profile} alt="User" className="w-8 h-8 rounded-full mr-3" />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-black-150">Cynthia Cox</p>
                                        </div>
                                    </div>
                                    <p className='text-xs text-gray-750'>11 min</p>
                                </div>
                                <div className='mt-4'>
                                    <p className="text-sm font-semibold uppercase text-[#153C35] pb-3 border-b border-white">Late night thoughts</p>
                                    <p className="text-sm text-gray-650 pt-3 font-medium">Status: <span className='text-green-150'> In Progress</span></p>
                                </div>
                            </div>

                            <div className="bg-green-250 rounded-xl p-4 ">
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <img src={profile} alt="User" className="w-8 h-8 rounded-full mr-3" />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-black-150">Cynthia Cox</p>
                                        </div>
                                    </div>
                                    <p className='text-xs text-gray-750'>11 min</p>
                                </div>
                                <div className='mt-4'>
                                    <p className="text-sm font-semibold uppercase text-[#153C35] pb-3 border-b border-white">Late night thoughts</p>
                                    <p className="text-sm text-gray-650 pt-3 font-medium">Status: <span className='text-green-150'> In Progress</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Closed Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-black-150 mb-4 flex items-center">
                            Closed <span className="ml-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-green-150 border border-green-150 bg-green-150/20 rounded-full">2</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-green-250 rounded-xl p-4 ">
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <img src={profile} alt="User" className="w-8 h-8 rounded-full mr-3" />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-black-150">Cynthia Cox</p>
                                        </div>
                                    </div>
                                    <p className='text-xs text-gray-750'>11 min</p>
                                </div>
                                <div className='mt-4'>
                                    <p className="text-sm font-semibold uppercase text-[#153C35] pb-3 border-b border-white">Late night thoughts</p>
                                    <p className="text-sm text-gray-650 pt-3 font-medium">Status: <span className='text-red-600'>Closed</span></p>
                                </div>
                            </div>
                            <div className="bg-green-250 rounded-xl p-4 ">
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <img src={profile} alt="User" className="w-8 h-8 rounded-full mr-3" />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-black-150">Cynthia Cox</p>
                                        </div>
                                    </div>
                                    <p className='text-xs text-gray-750'>11 min</p>
                                </div>
                                <div className='mt-4'>
                                    <p className="text-sm font-semibold uppercase text-[#153C35] pb-3 border-b border-white">Late night thoughts</p>
                                    <p className="text-sm text-gray-650 pt-3 font-medium">Status: <span className='text-red-600'>Closed</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else if (activeTab === 'Send Message') {
            return <p className="text-gray-600">No activities to display for Send Message.</p>;
        } else if (activeTab === 'Subscriptions') {
            return <p className="text-gray-600">No activities to display for Subscriptions.</p>;
        } else if (activeTab === 'Manage Businesses') {
            return <p className="text-gray-600">No activities to display for Manage Businesses.</p>;
        } else if (activeTab === 'Manage Roles') {
            return <p className="text-gray-600">No activities to display for Manage Roles.</p>;
        }
        return null;
    };

    return (
        <div className="">
            <div className="border border-gray-250 rounded-[20px] p-6">
                <h3 className="text-sm font-bold text-black-150 mb-6">Role Activities</h3>
                {/* Tabs Section */}
                <div className="flex space-x-4 pb-2 mb-6">
                    <button
                        className={`text-sm font-medium pb-4 ${activeTab === 'Help & Support' ? 'text-green-150 border-b-2 border-green-150' : 'text-gray-350'}`}
                        onClick={() => setActiveTab('Help & Support')}
                    >
                        Help & Support
                    </button>
                    <button
                        className={`text-sm font-medium pb-4 ${activeTab === 'Send Message' ? 'text-green-150 border-b-2 border-green-150' : 'text-gray-350'}`}
                        onClick={() => setActiveTab('Send Message')}
                    >
                        Send Message
                    </button>
                    <button
                        className={`text-sm font-medium pb-4 ${activeTab === 'Subscriptions' ? 'text-green-150 border-b-2 border-green-150' : 'text-gray-350'}`}
                        onClick={() => setActiveTab('Subscriptions')}
                    >
                        Subscriptions
                    </button>
                    <button
                        className={`text-sm font-medium pb-4 ${activeTab === 'Manage Businesses' ? 'text-green-150 border-b-2 border-green-150' : 'text-gray-350'}`}
                        onClick={() => setActiveTab('Manage Businesses')}
                    >
                        Manage Businesses
                    </button>
                    <button
                        className={`text-sm font-medium pb-4 ${activeTab === 'Manage Roles' ? 'text-green-150 border-b-2 border-green-150' : 'text-gray-350'}`}
                        onClick={() => setActiveTab('Manage Roles')}
                    >
                        Manage Roles
                    </button>
                </div>

                {/* Render Content Based on Active Tab */}
                {renderContent()}
            </div>
        </div>
    );
};

export default RoleActivities;