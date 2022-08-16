import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={(props.pagenumber==="1") ? <Page1 /> : "" || (props.pagenumber==="2") ? <Page2 /> : "" || (props.pagenumber===null) ? <Page1 /> : ""} />
          <Route path={"/Page2"} element={<Page2 />} />
          <Route path={"/Page1"} element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
