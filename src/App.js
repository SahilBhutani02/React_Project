import "./App.css";
import Routers from "./components/Router/BrowserRouter/Routers";
import About from "./components/Counter/About";
import Routing from "./components/Router/CreateBrowserRouter/Routing";
import StopWatch from "./components/StopWatch/StopWatch";
import Debouncing from "./components/Debouncing/Debouncing";
import News from "./components/News/NewsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // console.log(process.env.API_BASE_UEL);
  return (
    <div className="App">
      {/* <Routing /> */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Routers />} />
          <Route path="/counter" element={<About />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/debouncing" element={<Debouncing />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
