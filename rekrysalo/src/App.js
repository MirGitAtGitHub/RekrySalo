import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from './pages/Page6';
import NoPage from "./pages/NoPage";
import TestPage from './pages/TestPage';

//import Check from './pages/Check';



function App(props) {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={(props.pagenumber==="1") ? <Page1 /> : "" || (props.pagenumber==="2") ? <Page2 /> : "" || (props.pagenumber==="0") ? <Home /> : "" || (props.pagenumber===null) ? <Home /> : "" || (props.pagenumber==="3") ? <Page3 /> : "" || (props.pagenumber==="4") ? <Page4 /> : "" || (props.pagenumber==="5") ? <Page5 /> : "" || (props.pagenumber==="6") ? <Page6 /> : ""} />
          <Route path={"/Page6"} element={<Page6 />} />
          <Route path={"/Page5"} element={<Page5 />} />
          <Route path={"/Page4"} element={<Page4 />} />
          <Route path={"/Page3"} element={<Page3 />} />
          <Route path={"/Page2"} element={<Page2 />} />
          <Route path={"/Page1"} element={<Page1 />} />
          <Route path={"*"} element={<NoPage />} />
          <Route path={"/TestPage"} element={<TestPage />} />
          <Route path={"/Home"} element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
