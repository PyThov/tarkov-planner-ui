import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import TaskPlan from "./pages/TaskPlan";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task_plan/:id" element={<TaskPlan />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
