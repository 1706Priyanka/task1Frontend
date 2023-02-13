import "./App.css";
import EventPage from "./components/EventPage";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./authContext/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<EventPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
