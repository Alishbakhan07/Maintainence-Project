// src/components/PreventiveMaintenanceLog.jsx
import React from "react";

const PreventiveMaintenanceLog = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-3xl font-semibold text-yellow-600 mb-4">Preventive Maintenance Log</h2>
      <ul className="list-disc pl-5 space-y-2">
        {/* Replace this list with actual maintenance data */}
        <li className="text-gray-700">Maintenance Task 1 - Completed on 2024-08-20</li>
        <li className="text-gray-700">Maintenance Task 2 - Scheduled for 2024-08-25</li>
      </ul>
    </div>
  );
};

export default PreventiveMaintenanceLog;
