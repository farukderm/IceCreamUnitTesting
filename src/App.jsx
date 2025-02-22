import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="min-h-screen bg-red-700 py-[30px] text-white xl:py-[89px] 2xl:py-[50px] px-[5%]">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
