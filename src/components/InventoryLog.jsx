// src/components/InventoryLog.jsx
import React from "react";

const InventoryLog = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">Inventory Log</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-left">Item</th>
            <th className="py-2 text-left">Quantity</th>
            <th className="py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace this with actual inventory data */}
          <tr>
            <td className="py-2">Item 1</td>
            <td className="py-2">10</td>
            <td className="py-2">2024-08-21</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryLog;
