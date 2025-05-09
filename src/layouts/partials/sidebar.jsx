import { RiCloseFill } from 'react-icons/ri';
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import toast, { Toaster } from "react-hot-toast";
import logo from "../../assets/logo.png";
import home from "../../assets/home.png";
import home1 from "../../assets/home1.png";
import role1 from "../../assets/role1.png";
import role from "../../assets/role.png";
import business1 from "../../assets/business1.png";
import business from "../../assets/business.png";
import analytics1 from "../../assets/analytics1.png";
import analytics from "../../assets/analytics.png";
import subscription1 from "../../assets/subscription1.png";
import subscription from "../../assets/subscription.png";
import research from "../../assets/research.png";
import research1 from "../../assets/research1.png";
import msg from "../../assets/msg.png";
import button from "../../assets/graybutton.png";
import support1 from "../../assets/support1.png";
import support from "../../assets/support.png";
import NewMessageModal from '../../components/NewMessageModal';

export default function Sidebar({ setIsAuthenticated }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(true);
        setIsCollapsed(false);
      } else {
        setShowMenu(false);
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(4px); }
            75% { transform: translateX(-4px); }
          }
          @keyframes bounceVertical {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(-3px); }
            75% { transform: translateY(3px); }
          }
          .animate-bounce-hover:hover {
            animation: bounce 0.25s ease-in-out 2;
          }
          .animate-bounce-vertical-hover:hover {
            animation: bounceVertical 0.25s ease-in-out 2;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div className="lg:hidden fixed top-7 left-4 z-50">
        <button
          type="button"
          onClick={() => setShowMenu(true)}
          className="flex items-center p-2 border-0 text-sm rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 animate-bounce-hover"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6 transition-transform duration-200 hover:rotate-90"
            aria-hidden="true"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        className={`fixed top-0 left-0 z-50 h-screen bg-white rounded-r-[10px] transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-24' : 'w-[268px]'} 
          ${showMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          lg:translate-x-0 lg:opacity-1004 lg:rounded-[10px]
          overflow-y-auto no-scrollbar`}
        aria-label="Sidebar"
      >
        <div className="h-full font-sans relative flex flex-col min-h-screen">
          <div className="flex-none">
            <button
              className="lg:hidden absolute right-4 top-4 text-xl text-black transition-all duration-200 hover:scale-125 hover:text-gray-800 animate-bounce-vertical-hover"
              onClick={() => setShowMenu(false)}
            >
              <RiCloseFill />
            </button>
            <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-between'} w-full items-center py-6 px-6`}>
              {!isCollapsed && (
                <Link to="/">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-[26px] h-[54px] transition-transform duration-300 hover:scale-102"
                  />
                </Link>
              )}
              <button onClick={toggleSidebar} className="lg:block hidden">
                <img
                  src={button}
                  alt="Toggle Sidebar"
                  className="transition-transform duration-300 hover:scale-101"
                />
              </button>
            </div>
          </div>

          <div className="flex-grow px-4 pb-6">
            <ul className="space-y-2 text-sm font-medium font-manrope text-gray-450">
              <h1 className={`font-bold text-gray-350 mb-3 ${isCollapsed ? 'hidden' : 'block'}`}>MAIN MENU</h1>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center p-4 rounded-xl transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover ${isActive ? 'bg-green-150/20 text-green-150' : 'text-gray-450'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
                      <img
                        src={isActive ? home : home1}
                        alt="Dashboard Icon"
                        className="h-5 w-5 transition-transform duration-100 hover:scale-110 animate-bounce-hover"
                      />
                      {!isCollapsed && (
                        <span className="flex-1 ml-3 whitespace-nowrap transition-colors duration-100 hover:text-gray-800">
                          Dashboard
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/roles"
                  className={({ isActive }) =>
                    `flex items-center p-4 rounded-xl transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover ${isActive ? 'bg-green-150/20 text-green-150' : 'text-black-250'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
                      <img
                        src={isActive ? role : role1}
                        alt="Roles Icon"
                        className="h-5 w-5 transition-transform duration-100 hover:scale-110 animate-bounce-hover"
                      />
                      {!isCollapsed && (
                        <span className="flex-1 ml-3 whitespace-nowrap transition-colors duration-100 hover:text-gray-800">
                          Manage Roles
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/trades"
                  className={({ isActive }) =>
                    `flex items-center p-4 rounded-xl transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover ${isActive ? 'bg-green-150/20 text-green-150' : 'text-black-250'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
                      <img
                        src={isActive ? business : business1}
                        alt="Businesses Icon"
                        className="h-5 w-5 transition-transform duration-100 hover:scale-110 animate-bounce-hover"
                      />
                      {!isCollapsed && (
                        <span className="flex-1 ml-3 whitespace-nowrap transition-colors duration-100 hover:text-gray-800">
                          Manage Businesses
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collectibles"
                  className={({ isActive }) =>
                    `flex items-center p-4 rounded-xl transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover ${isActive ? 'bg-green-150/20 text-green-150' : 'text-black-250'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
                      <img
                        src={isActive ? analytics : analytics1}
                        alt="Analytics Icon"
                        className="h-5 w-5 transition-transform duration-100 hover:scale-110 animate-bounce-hover"
                      />
                      {!isCollapsed && (
                        <span className="flex-1 ml-3 whitespace-nowrap transition-colors duration-100 hover:text-gray-800">
                          Analytics
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    `flex items-center p-4 rounded-xl transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover ${isActive ? 'bg-green-150/20 text-green-150' : 'text-black-250'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
                      <img
                        src={isActive ? subscription : subscription1}
                        alt="Subscriptions Icon"
                        className="h-5 w-5 transition-transform duration-100 hover:scale-110 animate-bounce-hover"
                      />
                      {!isCollapsed && (
                        <span className="flex-1 ml-3 whitespace-nowrap transition-colors duration-100 hover:text-gray-800">
                          Subscriptions
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    `flex items-center p-4 rounded-xl transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover ${isActive ? 'bg-green-150/20 text-green-150' : 'text-black-250'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
                      <img
                        src={isActive ? research : research1}
                        alt="Research Icon"
                        className="h-5 w-5 transition-transform duration-100 hover:scale-110 animate-bounce-hover"
                      />
                      {!isCollapsed && (
                        <span className="flex-1 ml-3 whitespace-nowrap transition-colors duration-100 hover:text-gray-800">
                          Research
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex-none px-4 pb-8">
            <div className={`mb-3 ${isCollapsed ? 'hidden' : 'block'}`}>
              <div className="bg-green-250 border border-green-250 p-4 rounded-xl space-y-3">
                <img src={msg} alt="Message Icon" />
                <h1 className="font-bold text-green-150 text-base">Send Message</h1>
                <p className="text-gray-350 text-sm font-medium">
                  You can now send a broadcast message to your users.
                </p>
                <button
                  type="button"
                  onClick={openModal}
                  className="bg-green-150 cursor-pointer w-full rounded-[12px] py-2 text-white font-medium text-sm text-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  New message
                </button>
              </div>
            </div>
            <button className="w-full text-sm">
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `flex items-center rounded-xl transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover ${isActive ? 'bg-green-150/20 text-green-150' : 'text-black-250'
                  }`
                }
              >
                {({ isActive }) => (
                  <div className={`flex items-center py-3 px-4 ${isCollapsed ? 'justify-center w-full' : ''}`}>
                    <img
                      src={isActive ? support : support1}
                      alt="Support Icon"
                      className="h-5 w-5 transition-transform duration-100 hover:scale-110 animate-bounce-hover"
                    />
                    {!isCollapsed && (
                      <span className="flex-1 ml-3 whitespace-nowrap transition-colors text-sm duration-100 hover:text-gray-800">
                        Help & Support
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            </button>
            <button className="w-full text-sm">
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  `flex items-center rounded-xl transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover ${isActive ? 'bg-green-150/20 text-green-150' : 'text-black-250'
                  }`
                }
              >
                {({ isActive }) => (
                  <div className={`flex items-center py-3 px-4 ${isCollapsed ? 'justify-center w-full' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.1665 2.5L8.61434 2.69487C6.4654 3.45333 5.3909 3.83257 4.7787 4.69785C4.1665 5.56313 4.1665 6.70258 4.1665 8.9815V11.0185C4.1665 13.2974 4.1665 14.4368 4.7787 15.3022C5.3909 16.1674 6.4654 16.5467 8.61434 17.3052L9.1665 17.5"
                        stroke="#7A7A7A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17.4998 9.99984H9.1665M17.4998 9.99984C17.4998 9.41634 15.8379 8.32611 15.4165 7.9165M17.4998 9.99984C17.4998 10.5833 15.8379 11.6736 15.4165 12.0832"
                        stroke="#7A7A7A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {!isCollapsed && (
                      <span className="flex-1 ml-3 whitespace-nowrap transition-colors text-sm duration-100 hover:text-gray-800">
                        Logout
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            </button>
          </div>
        </div>
      </aside>
      {showMenu && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setShowMenu(false)}
        />
      )}
       <NewMessageModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}