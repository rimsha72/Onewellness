import React from 'react';
import ReactDOM from 'react-dom';

const NewBusinessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black-150/20 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-[950px] p-4 sm:p-6 md:p-6 relative overflow-y-auto h-screen sm:h-auto max-h-[90vh] sm:max-h-[80vh]">
        <div className="flex justify-between items-center mb-4 w-full border-b border-gray-250 pb-4">
            <h2 className="text-base sm:text-lg font-medium text-black-150 w-full">Add New Business</h2>
            <button
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={onClose}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <div className="space-y-4 border border-gray-250 rounded-[20px] p-6">
            <div>
                <label className="block text-[20px] font-medium text-black-150 mb-1">Business Onboarding</label>
            </div>
            <div>
                <label className="block text-sm font-medium text-black-150 mb-1">Business Name </label>
                <input
                    type="text"
                    placeholder="Title goes here"
                    className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                />
            </div>
            <div className="relative">
                <label className="block text-sm font-medium text-black-150 mb-1">Email</label>
                <input
                    type="text"
                    placeholder="Email goes here"
                    className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                />
            </div>
            <div className="relative">
                <label className="block text-sm font-medium text-black-150 mb-1">Password</label>
                <input
                    type="text"
                    placeholder="Password goes here"
                    className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                />
            </div>
        </div>
        <div className="flex justify-end mt-6">
            <button
                onClick={onClose}
                className="bg-green-150 text-white text-sm font-medium cursor-pointer py-3 px-4 rounded-xl hover:bg-green-150/80 transition duration-200"
            >
               Add Business
            </button>
        </div>
    </div>
</div>,
    document.body
  );
};

export default NewBusinessModal;