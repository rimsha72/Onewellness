import { Outlet } from "react-router-dom";
import Sidebar from "./partials/sidebar";
import Header from "./partials/header";
import { useState, useEffect } from "react";

export default function RootLayout({ setIsAuthenticated }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    setIsSidebarVisible(true);
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <div
        className={`fixed top-0 left-0 z-20 h-full transition-transform duration-300 ease-in-out lg:block ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar setIsAuthenticated={setIsAuthenticated} />
      </div>

      <div className="flex-1 flex flex-col lg:ml-[268px] m-3 border border-gray-250 rounded-3xl">
          <Header />

        <main className="flex-1 p-4 sm:p-6 overflow-y-auto ">
          <div
            className={`transition-opacity duration-1000 ease-in-out ${
              isSidebarVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}