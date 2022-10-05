import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubMain from "./Domestic/DomMain";
import Single from "./Domestic/Single";
import About from "./Domestic/About";
import Price from "./Domestic/Price";
import List from "./Domestic/List";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SubMain />} />
          <Route path="/list/:contenttypeid/:keyword" element={<List />} />
          <Route
            path="/single/:contentid/:contenttypeid"
            element={<Single />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/price" element={<Price />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
