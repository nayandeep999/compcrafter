// /pages/404.js or /pages/404.tsx

import React from "react";
import Sidebar from "../(shared)/Sidebar"; // Adjust the path as needed

const NotFound = () => {
  return (
    <div className="container flex justify-center items-center w-full mx-auto">
      <div className="flex w-full py-4 mt-16">
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex justify-center mx-auto">
          <div className="flex items-center">
            <h4 className="text-2xl font-normal mr-1">404</h4>
            <span className="text-4xl font-serif">|</span>
            <span className="ml-1 text-sm font-light">
              This page could not be found.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
