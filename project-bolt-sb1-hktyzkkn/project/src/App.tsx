import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./components/App.css"; // Updated import path to match actual file location

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;