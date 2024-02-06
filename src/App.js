import Topbar from "./components/topbar/topbar";
import Register from "./pages/Register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route } from "react-router-dom";

// thisis global

function App() {
  const user = false;
  return (
    <>
      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/Settings" element={user ? <Settings /> : <Register />} />
        <Route path="/Post/:postId" element={<Single />} />
        <Route path="/Write" element={user ? <Write /> : <Register />} />
      </Routes>
    </>
  );
}

export default App;
