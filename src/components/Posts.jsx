
import post from "../assets/post.png"
export default function Posts() {

    return (
        <div>
            <div className="border border-gray-250 rounded-[20px] py-4 px-6">
                <h2 className="text-[20px] font-semibold text-black-250 mb-8">Posts</h2>
                <div className="space-y-4">
                    <div className="w-full rounded-lg border-gray-250 border-b pb-4 ">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <img className="w-[37px] h-10 rounded-full bg-gray-200" src={post} />
                                <div>
                                    <p className="text-xs font-bold text-black-450">You</p>
                                    <p className="text-xs text-gray-550 font-medium mt-2">20 min ago</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z" stroke="black" stroke-width="1.5" />
                                </svg>

                            </button>
                        </div>

                        <p className=" text-black-550 text-xs font-medium mb-3">
                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                        </p>

                        <div className="flex items-center space-x-4 text-xs text-gray-650 font-semibold">
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9537 9.204C18.207 9.55925 18.3337 9.73692 18.3337 9.99984C18.3337 10.2628 18.207 10.4404 17.9537 10.7957C16.8152 12.392 13.908 15.8332 10.0003 15.8332C6.09264 15.8332 3.18541 12.392 2.04703 10.7957C1.79367 10.4404 1.66699 10.2628 1.66699 9.99984C1.66699 9.73692 1.79367 9.55925 2.04703 9.204C3.18541 7.6077 6.09264 4.1665 10.0003 4.1665C13.908 4.1665 16.8152 7.6077 17.9537 9.204Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z" stroke="#98ABA8" stroke-width="1.5" />
                                </svg>
                                <span>2K Views</span>
                            </div>
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5394 2.54427C15.7244 0.589631 2.07174 5.37783 2.08301 7.12599C2.0958 9.10841 7.41475 9.71824 8.88901 10.1319C9.77559 10.3806 10.013 10.6356 10.2174 11.5652C11.1433 15.7756 11.6081 17.8697 12.6675 17.9165C14.3562 17.9912 19.3108 4.45183 17.5394 2.54427Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M9.58301 10.4167L12.4997 7.5" stroke="#98ABA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span>100 Shares</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border-gray-250 border-b pb-4 ">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <img className="w-[37px] h-10 rounded-full bg-gray-200" src={post} />
                                <div>
                                    <p className="text-xs font-bold text-black-450">You</p>
                                    <p className="text-xs text-gray-550 font-medium mt-2">20 min ago</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z" stroke="black" stroke-width="1.5" />
                                </svg>

                            </button>
                        </div>

                        <p className=" text-black-550 text-xs font-medium mb-3">
                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                        </p>

                        <div className="flex items-center space-x-4 text-xs text-gray-650 font-semibold">
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9537 9.204C18.207 9.55925 18.3337 9.73692 18.3337 9.99984C18.3337 10.2628 18.207 10.4404 17.9537 10.7957C16.8152 12.392 13.908 15.8332 10.0003 15.8332C6.09264 15.8332 3.18541 12.392 2.04703 10.7957C1.79367 10.4404 1.66699 10.2628 1.66699 9.99984C1.66699 9.73692 1.79367 9.55925 2.04703 9.204C3.18541 7.6077 6.09264 4.1665 10.0003 4.1665C13.908 4.1665 16.8152 7.6077 17.9537 9.204Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z" stroke="#98ABA8" stroke-width="1.5" />
                                </svg>
                                <span>2K Views</span>
                            </div>
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5394 2.54427C15.7244 0.589631 2.07174 5.37783 2.08301 7.12599C2.0958 9.10841 7.41475 9.71824 8.88901 10.1319C9.77559 10.3806 10.013 10.6356 10.2174 11.5652C11.1433 15.7756 11.6081 17.8697 12.6675 17.9165C14.3562 17.9912 19.3108 4.45183 17.5394 2.54427Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M9.58301 10.4167L12.4997 7.5" stroke="#98ABA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span>100 Shares</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border-gray-250 border-b pb-4 ">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <img className="w-[37px] h-10 rounded-full bg-gray-200" src={post} />
                                <div>
                                    <p className="text-xs font-bold text-black-450">You</p>
                                    <p className="text-xs text-gray-550 font-medium mt-2">20 min ago</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z" stroke="black" stroke-width="1.5" />
                                </svg>

                            </button>
                        </div>

                        <p className=" text-black-550 text-xs font-medium mb-3">
                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                        </p>

                        <div className="flex items-center space-x-4 text-xs text-gray-650 font-semibold">
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9537 9.204C18.207 9.55925 18.3337 9.73692 18.3337 9.99984C18.3337 10.2628 18.207 10.4404 17.9537 10.7957C16.8152 12.392 13.908 15.8332 10.0003 15.8332C6.09264 15.8332 3.18541 12.392 2.04703 10.7957C1.79367 10.4404 1.66699 10.2628 1.66699 9.99984C1.66699 9.73692 1.79367 9.55925 2.04703 9.204C3.18541 7.6077 6.09264 4.1665 10.0003 4.1665C13.908 4.1665 16.8152 7.6077 17.9537 9.204Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z" stroke="#98ABA8" stroke-width="1.5" />
                                </svg>
                                <span>2K Views</span>
                            </div>
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5394 2.54427C15.7244 0.589631 2.07174 5.37783 2.08301 7.12599C2.0958 9.10841 7.41475 9.71824 8.88901 10.1319C9.77559 10.3806 10.013 10.6356 10.2174 11.5652C11.1433 15.7756 11.6081 17.8697 12.6675 17.9165C14.3562 17.9912 19.3108 4.45183 17.5394 2.54427Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M9.58301 10.4167L12.4997 7.5" stroke="#98ABA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span>100 Shares</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border-gray-250 border-b pb-4 ">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <img className="w-[37px] h-10 rounded-full bg-gray-200" src={post} />
                                <div>
                                    <p className="text-xs font-bold text-black-450">You</p>
                                    <p className="text-xs text-gray-550 font-medium mt-2">20 min ago</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z" stroke="black" stroke-width="1.5" />
                                </svg>

                            </button>
                        </div>

                        <p className=" text-black-550 text-xs font-medium mb-3">
                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                        </p>

                        <div className="flex items-center space-x-4 text-xs text-gray-650 font-semibold">
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9537 9.204C18.207 9.55925 18.3337 9.73692 18.3337 9.99984C18.3337 10.2628 18.207 10.4404 17.9537 10.7957C16.8152 12.392 13.908 15.8332 10.0003 15.8332C6.09264 15.8332 3.18541 12.392 2.04703 10.7957C1.79367 10.4404 1.66699 10.2628 1.66699 9.99984C1.66699 9.73692 1.79367 9.55925 2.04703 9.204C3.18541 7.6077 6.09264 4.1665 10.0003 4.1665C13.908 4.1665 16.8152 7.6077 17.9537 9.204Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z" stroke="#98ABA8" stroke-width="1.5" />
                                </svg>
                                <span>2K Views</span>
                            </div>
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5394 2.54427C15.7244 0.589631 2.07174 5.37783 2.08301 7.12599C2.0958 9.10841 7.41475 9.71824 8.88901 10.1319C9.77559 10.3806 10.013 10.6356 10.2174 11.5652C11.1433 15.7756 11.6081 17.8697 12.6675 17.9165C14.3562 17.9912 19.3108 4.45183 17.5394 2.54427Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M9.58301 10.4167L12.4997 7.5" stroke="#98ABA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span>100 Shares</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border-gray-250 border-b pb-4 ">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <img className="w-[37px] h-10 rounded-full bg-gray-200" src={post} />
                                <div>
                                    <p className="text-xs font-bold text-black-450">You</p>
                                    <p className="text-xs text-gray-550 font-medium mt-2">20 min ago</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="black" stroke-width="1.5" />
                                    <path d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z" stroke="black" stroke-width="1.5" />
                                </svg>

                            </button>
                        </div>

                        <p className=" text-black-550 text-xs font-medium mb-3">
                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                        </p>

                        <div className="flex items-center space-x-4 text-xs text-gray-650 font-semibold">
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9537 9.204C18.207 9.55925 18.3337 9.73692 18.3337 9.99984C18.3337 10.2628 18.207 10.4404 17.9537 10.7957C16.8152 12.392 13.908 15.8332 10.0003 15.8332C6.09264 15.8332 3.18541 12.392 2.04703 10.7957C1.79367 10.4404 1.66699 10.2628 1.66699 9.99984C1.66699 9.73692 1.79367 9.55925 2.04703 9.204C3.18541 7.6077 6.09264 4.1665 10.0003 4.1665C13.908 4.1665 16.8152 7.6077 17.9537 9.204Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z" stroke="#98ABA8" stroke-width="1.5" />
                                </svg>
                                <span>2K Views</span>
                            </div>
                            <div className="flex items-center space-x-1 border border-gray-650 rounded-xl px-4 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5394 2.54427C15.7244 0.589631 2.07174 5.37783 2.08301 7.12599C2.0958 9.10841 7.41475 9.71824 8.88901 10.1319C9.77559 10.3806 10.013 10.6356 10.2174 11.5652C11.1433 15.7756 11.6081 17.8697 12.6675 17.9165C14.3562 17.9912 19.3108 4.45183 17.5394 2.54427Z" stroke="#98ABA8" stroke-width="1.5" />
                                    <path d="M9.58301 10.4167L12.4997 7.5" stroke="#98ABA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span>100 Shares</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}