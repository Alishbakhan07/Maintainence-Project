// src/components/BreakdownLog.jsx
import React from "react";

const BreakdownLog = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-3xl font-semibold text-red-700 mb-4">Breakdown Log</h2>
      <ul className="list-disc pl-5 space-y-2">
        {/* Replace this list with actual breakdown data */}
        <li className="text-gray-700">Machine 1 - Issue A</li>
        <li className="text-gray-700">Machine 2 - Issue B</li>
      </ul>
    </div>
  );
};

export default BreakdownLog;
