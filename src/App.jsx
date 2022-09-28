import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Intro/mainpage/Intro";
import SubMain from "./Domestic/DomMain";
import Blog from "./Domestic/Blog";
import Single from "./Domestic/Single";
import About from "./Domestic/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SubMain" element={<SubMain />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single" element={<Single />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
