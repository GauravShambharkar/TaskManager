import { Route, Routes } from "react-router-dom";
import DashBoard from "../Dashboard/DashBoard";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={""}>
          Home
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
