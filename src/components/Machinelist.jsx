// src/components/MachineList.jsx
import React from "react";

const MachineList = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Machine List</h2>
      <ul className="list-disc pl-5 space-y-2">
        {/* Replace this list with actual machine data */}
        <li className="text-gray-700">Machine 1</li>
        <li className="text-gray-700">Machine 2</li>
        <li className="text-gray-700">Machine 3</li>
      </ul>
    </div>
  );
};

export default MachineList;
