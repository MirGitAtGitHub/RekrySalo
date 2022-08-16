import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import NoPage from "./pages/NoPage";
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={(props.pagenumber==="1") ? <Page1 /> : "" || (props.pagenumber==="2") ? <Page2 /> : "" || (props.pagenumber===null) ? <Page1 /> : "" || (props.pagenumber==="3") ? <Page3 /> : ""} />
          <Route path={"/Page3"} element={<Page3 />} />
          <Route path={"/Page2"} element={<Page2 />} />
          <Route path={"/Page1"} element={<Page1 />} />
          <Route path={"*"} element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
