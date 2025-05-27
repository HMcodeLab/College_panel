import React, { useState } from "react";
import Header from "@/layouts/header";
import MobileHeader from "@/layouts/header/mobile";
import Footer from "@/layouts/footer";
import Sidebar from "./sidebar";
import TopProducts from "@/sections/top-products";
import TopCategories from "@/sections/top-categories";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* Header with search functionality */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Mobile Header with Sidebar toggle */}
      <MobileHeader
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } fixed top-10 md:top-[80px] left-0 z-50 w-full h-[calc(100vh-80px)] shadow pt-10 md:block md:w-70 md:h-[calc(100vh-80px)] md:overflow-y-auto`}
      >
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex mt-[80px]">
        <div className="flex-1 md:ml-60 pl-4">
          <main>
            <TopProducts searchTerm={searchTerm} />
            <TopCategories />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
