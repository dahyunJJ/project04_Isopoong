import { Route, Routes, useLocation } from "react-router-dom";

import "./css/my_reset.css";
import "./css/App.css";

import Header from "./pages/Header";
import Main from "./pages/Main";
import Facility from "./pages/Facility";
import Visit from "./pages/Visit";
import Detail from "./pages/Detail";

function App() {
  let urlname = useLocation().pathname;
  // console.log(urlname);

  return (
    <div className="App">
      <Header urlname={urlname} />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/facility" element={<Facility />}></Route>
        <Route path="/visit" element={<Visit />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
