import { Route, Routes } from "react-router-dom";
import Exercise5 from "./components/exercise5/Exercise5";
import Exercise6 from "./components/Exercise6/Exercise6";
import Exercise7 from "./components/Exercise7/Exercise7";
import Exercise8 from "./components/Exercise8/Exercise8";
import Layout from "./components/Layout";
import "./App.css"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="exercise5" element={<Exercise5></Exercise5>} />
        <Route path="exercise6" element={<Exercise6></Exercise6>} />
        <Route path="exercise7" element={<Exercise7></Exercise7>} />
        <Route path="exercise8" element={<Exercise8></Exercise8>} />
      </Route>
    </Routes>
  );
};

export default App;
