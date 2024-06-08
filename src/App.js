import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Home from "./pages/Home";
import Proposals from "./pages/Proposals";
import Events from "./pages/Events";
import Createevent from "./components/Createevent";
import Createproposal from "./components/Createproposal";
import Changeprofile from "./components/Changeprofile";
import Profilepage from "./pages/Profilepage";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Page5 />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/events" element={<Events />} />
        <Route path="/createevents" element={<Createevent />} />
        <Route path="/createproposals" element={<Createproposal />} />
        <Route path="/changeprofile" element={<Changeprofile />} />
        <Route path="/profilepage" element={<Profilepage />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);