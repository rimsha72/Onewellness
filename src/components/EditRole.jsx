import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const EditRole = ({ isOpen, onClose }) => {
    const [permissions, setPermissions] = useState({
        subscriptions: false,
        helpSupport: false,
        analytics: false,
        manageBusinesses: false,
        manageRoles: false,
        sendMessage: false,
    });

    const togglePermission = (key) => {
        setPermissions((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black-150/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-[950px] p-4 sm:p-6 md:p-8 relative overflow-y-auto h-screen sm:h-auto max-h-[90vh] sm:max-h-[80vh]">
                <button
                    className="absolute top-6 cursor-pointer right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <h2 className="text-base sm:text-lg font-medium text-black-150 mb-2 sm:mb-4 border-b border-gray-250 pb-2 sm:pb-4">Set Roles</h2>
                <div className="space-y-6 border border-gray-250 rounded-[20px] p-6">
                    {/* Add New Role Section */}
                    <div>
                        <h3 className="text-[20px] font-medium text-black-150 mb-3">Edit Roles</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-black-150 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Bushmill"
                                    className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black-150 mb-1">Email</label>
                                <input
                                    type="text"
                                    placeholder="John123b@mail.com"
                                    className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black-150 mb-1">Password</label>
                                <input
                                    type="text"
                                    placeholder="****************"
                                    className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-y-6 border border-gray-250 rounded-[20px] p-6 mt-6'>
                    <h3 className="text-[20px] font-medium text-black-150 mb-3">Selection Sections</h3>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <div className="flex items-center justify-between p-4 border border-gray-250 rounded-[20px]">
                            <div>
                                <p className="text-lg font-medium text-black-150 mb-2">Subscriptions</p>
                                <p className="text-sm text-gray-650">Can Manage All Subscriptions</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={permissions.subscriptions}
                                    onChange={() => togglePermission('subscriptions')}
                                    className="sr-only peer"
                                />
                                <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-green-150 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-250 rounded-[20px]">
                            <div>
                                <p className="text-lg font-medium text-black-150 mb-2">Help and Support</p>
                                <p className="text-sm text-gray-650">Can manage all Messages</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox1"
                                    checked={permissions.subscriptions}
                                    onChange={() => togglePermission('subscriptions')}
                                    className="sr-only peer"
                                />
                                <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-green-150 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-250 rounded-[20px]">
                            <div>
                                <p className="text-lg font-medium text-black-150 mb-2">Analytics</p>
                                <p className="text-sm text-gray-650">Can manage all Analytics</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox2"
                                    checked={permissions.subscriptions}
                                    onChange={() => togglePermission('subscriptions')}
                                    className="sr-only peer"
                                />
                                <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-green-150 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-250 rounded-[20px]">
                            <div>
                                <p className="text-lg font-medium text-black-150 mb-2">Manage Roles</p>
                                <p className="text-sm text-gray-650">Can manage all Roles</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox3"
                                    checked={permissions.subscriptions}
                                    onChange={() => togglePermission('subscriptions')}
                                    className="sr-only peer"
                                />
                                <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-green-150 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-250 rounded-[20px]">
                            <div>
                                <p className="text-lg font-medium text-black-150 mb-2">Send Message</p>
                                <p className="text-sm text-gray-650">Can manage all Messages</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox4"
                                    checked={permissions.subscriptions}
                                    onChange={() => togglePermission('subscriptions')}
                                    className="sr-only peer"
                                />
                                <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-green-150 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-250 rounded-[20px]">
                            <div>
                                <p className="text-lg font-medium text-black-150 mb-2">Analytics</p>
                                <p className="text-sm text-gray-650">Can manage all Analytics</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox5"
                                    checked={permissions.subscriptions}
                                    onChange={() => togglePermission('subscriptions')}
                                    className="sr-only peer"
                                />
                                <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-green-150 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="bg-green-150 cursor-pointer text-white text-sm font-medium py-3 px-4 rounded-xl hover:bg-green-150/80 transition duration-200"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default EditRole;