import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ProfileInfor from "./components/ProfileInfor";
import ProfileSkills from "./components/ProfileSkills";
import SkillDetail from "./components/SkillDetail";
import AllSkills from "./components/AllSkills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route index element={<ProfileInfor />} />
          <Route path="skills" element={<ProfileSkills />}>
            <Route index element={<AllSkills />} />
            <Route path=":skill" element={<SkillDetail />} />
          </Route>
          <Route path="infor" element={<ProfileInfor />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
