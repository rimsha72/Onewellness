import React from 'react';

const CreatePostModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black-150/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-[950px] p-4 sm:p-6 md:p-6 relative overflow-y-auto h-screen sm:h-auto max-h-[90vh] sm:max-h-[80vh]">
                <div className="flex justify-between items-center mb-4 w-full border-b border-gray-250 pb-4">
                    <h2 className="text-base sm:text-lg font-medium text-black-150 w-full">Create Post</h2>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="space-y-4 border border-gray-250 rounded-[20px] p-6">
                    <div>
                        <label className="block text-[20px] font-medium text-black-150 mb-1">Post as Admin</label>
                    </div>
                    <div>
                        <label className="block text-lg text-black-150 mb-1">Title</label>
                        <input
                            type="text"
                            placeholder="Title goes here"
                            className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150"
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                        <div className="relative">
                            <textarea
                                placeholder="Write your text here"
                                className="w-full p-3 border border-gray-250 rounded-xl text-sm text-gray-350 font-medium focus:outline-none focus:ring-1 focus:ring-green-150 h-[231px] resize-none pr-20"
                            />
                            <button className="flex items-center gap-2 text-sm text-black bg-green-450 rounded-[9px] px-4 py-3 font-medium absolute left-4 bottom-6">
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.51752 20.4723H14.0495C18.6596 20.4723 20.5036 18.6283 20.5036 14.0183V8.48627C20.5036 3.87624 18.6596 2.03223 14.0495 2.03223H8.51752C3.90749 2.03223 2.06348 3.87624 2.06348 8.48627V14.0183C2.06348 18.6283 3.90749 20.4723 8.51752 20.4723Z" stroke="#292D32" stroke-width="1.38301" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.51784 9.40824C9.53626 9.40824 10.3619 8.58265 10.3619 7.56423C10.3619 6.54581 9.53626 5.72021 8.51784 5.72021C7.49942 5.72021 6.67383 6.54581 6.67383 7.56423C6.67383 8.58265 7.49942 9.40824 8.51784 9.40824Z" stroke="#292D32" stroke-width="1.38301" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.68164 17.6602L7.22713 14.6084C7.95551 14.1197 9.0066 14.1751 9.66122 14.7375L9.96548 15.0049C10.6846 15.6226 11.8464 15.6226 12.5655 15.0049L16.4011 11.7133C17.1202 11.0956 18.282 11.0956 19.0011 11.7133L20.504 13.0041" stroke="#292D32" stroke-width="1.38301" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                Add media
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="bg-green-150 text-white text-sm font-medium py-3 px-4 rounded-xl hover:bg-green-150/80 transition duration-200"
                    >
                        Post in Community
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;