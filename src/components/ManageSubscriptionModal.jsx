import React from 'react';

const ManageSubscriptionModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black-150/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-[750px] p-4 sm:p-6 md:p-8 relative overflow-y-auto h-screen sm:h-auto max-h-[90vh] sm:max-h-[80vh]">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-medium text-gray-800">Manage Subscription</h2>
                    <button onClick={onClose} className="text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Subscription Items */}
                <div className="mb-6 border border-gray-250 rounded-[20px] p-6">
                    <h3 className="text-sm font-medium text-black-150 mb-4">Subscription Items</h3>
                    <div className="flex flex-wrap gap-4 justify-between">
                        <div className="flex items-center gap-3 ">
                            <span className="w-9 h-9 bg-green-150 rounded-full flex items-center justify-center text-white font-medium">1</span>
                            <div>
                                <p className="text-sm font-medium text-[#153C35]">AI Wellness Partner</p>
                                <p className="text-xs text-green-150 mt-1">Wellness concerns</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <span className="w-9 h-9 bg-green-150 rounded-full flex items-center justify-center text-white font-medium">1</span>
                            <div>
                                <p className="text-sm font-medium text-[#153C35]">Problem-Solving Tool</p>
                                <p className="text-xs text-green-150 mt-1">Wellness concerns</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <span className="w-9 h-9 bg-green-150 rounded-full flex items-center justify-center text-white font-medium">1</span>
                            <div>
                                <p className="text-sm font-medium text-[#153C35]">Resolve issues</p>
                                <p className="text-xs text-green-150 mt-1">Connection with others</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Select Pricing */}
                <div className="mb-6 border border-gray-250 rounded-[20px] p-4">
                    <h3 className="text-sm font-medium text-gray-600 mb-4">Select Pricing</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* For Premium Mobile Users */}
                        <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm font-medium text-gray-800">For Premium Mobile Users</h4>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-150"></div>
                                    <div className="absolute w-5 h-5 bg-white rounded-full left-0.5 top-0.5 transition peer-checked:translate-x-5"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-gray-600">Monthly</p>
                            </div>
                            <div className="py-3">
                                <p className="text-base font-medium text-black-150">Pricing</p>
                                <input
                                    type="text"
                                    placeholder="$30"
                                    className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                                />
                            </div>
                        </div>

                        {/* For Businesses */}
                        <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm font-medium text-gray-800">For Businesses</h4>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-150"></div>
                                    <div className="absolute w-5 h-5 bg-white rounded-full left-0.5 top-0.5 transition peer-checked:translate-x-5"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-gray-600">Yearly</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Proceed Button */}
                <div className="flex justify-end">
                    <button className="bg-green-150 text-white cursor-pointer py-2 px-6 rounded-lg flex items-center gap-2 transition duration-200">
                        Save
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageSubscriptionModal;