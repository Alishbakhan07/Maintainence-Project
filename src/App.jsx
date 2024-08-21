import React from "react";
import "./App.css"; // Import the App.css file
import Guidelines from "./components/Guidelines";
import MachineList from "./components/Machinelist";
import InventoryLog from "./components/InventoryLog";
import BreakdownLog from "./components/BreakdownLog";
import PreventiveMaintenanceLog from "./components/PreventiveMaintenanceLog";
import Validation from "./components/Validation";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Guidelines />
      <MachineList />
      <InventoryLog />
      <BreakdownLog />
      <PreventiveMaintenanceLog />
      <Validation />
      <Dashboard />
    </div>
  );
};

export default App;
