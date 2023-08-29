import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignupForm from "./SignupForm/SignupForm";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
