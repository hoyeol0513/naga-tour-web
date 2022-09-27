import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import Main from "./Intro/mainpage/Intro";
import SubMain from "./Domestic/DomMain";
import Blog from "./Domestic/Blog";
import Single from "./Domestic/Single";

function App() {
  return (
    <>
      {/* 이게 6버전 */}
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SubMain" element={<SubMain />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single" element={<Single />}></Route>
        </Routes>
        <ScrollTop />
      </Router>
    </>
  );
}

export default App;
