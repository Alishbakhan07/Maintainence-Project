// src/components/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-3xl font-semibold text-teal-700 mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Replace these divs with actual dashboard data */}
        <div className="bg-teal-100 p-4 rounded-lg">
          <h3 className="text-xl font-medium">Total Machines</h3>
          <p className="text-2xl font-bold">10</p>
        </div>
        <div className="bg-teal-100 p-4 rounded-lg">
          <h3 className="text-xl font-medium">Pending Issues</h3>
          <p className="text-2xl font-bold">2</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
