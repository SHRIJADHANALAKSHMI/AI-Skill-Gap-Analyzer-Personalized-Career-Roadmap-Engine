import { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

export default function App() {
  const [data, setData] = useState({ skills: [] });

  return <Dashboard data={data} setData={setData} />;
}
