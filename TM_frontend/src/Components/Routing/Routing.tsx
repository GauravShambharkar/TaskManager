import { Route, Routes } from "react-router-dom";
import DashBoard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import CreateTask from "../createTask/CreateTask";
import GetStarted from "../getStarted/GetStarted";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/get-started" element={<GetStarted />}>
          getstarted
        </Route>
        <Route path="/dashboard" element={<DashBoard />}>
          Dashboard
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
