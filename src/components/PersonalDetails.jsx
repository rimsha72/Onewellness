import React, { useState } from 'react';

const PersonalDetails = () => {
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

    return (
        <div>
            <div className="space-y-6 border border-gray-250 rounded-[20px] p-6">
                {/* Add New Role Section */}
                <div>
                    <h3 className="text-sm font-bold text-black-150 mb-3">Info Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs text-black-150 font-medium sm:text-sm w-full">
                            <div>
                                <p className="font-medium text-gray-350 mb-1">Name</p>
                                <p>John Bushmill</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-350 mb-1">Email</p>
                                <p>John123b@mail.com</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-350 mb-1">Role</p>
                                <p>Manager</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="space-y-6 border border-gray-250 rounded-[20px] p-6 mt-6">
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
                                type="checkbox"
                                checked={permissions.helpSupport}
                                onChange={() => togglePermission('helpSupport')}
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
                                type="checkbox"
                                checked={permissions.analytics}
                                onChange={() => togglePermission('analytics')}
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
                                type="checkbox"
                                checked={permissions.manageRoles}
                                onChange={() => togglePermission('manageRoles')}
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
                                type="checkbox"
                                checked={permissions.sendMessage}
                                onChange={() => togglePermission('sendMessage')}
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
                                type="checkbox"
                                checked={permissions.analytics}
                                onChange={() => togglePermission('analytics')}
                                className="sr-only peer"
                            />
                            <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-green-150 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;