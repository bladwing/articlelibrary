import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Assets/responsive.css";
import "./Assets/app.css";

import Logo from "./Components/logo/Logo";
import Menu from "./Components/Menu";
import SocMedia from "./Components/SocMedia";
import Search from "./Components/Search";
import ArticleList from "./Components/ArticleList";
import Create from "./Components/create/Create";
import Detail from "./Components/Detail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="tm-header" id="tm-header">
          <div className="tm-header-wrapper">
            <Logo />
            <Menu />
            <SocMedia />
          </div>
        </header>
        <div className="container-fluid">
          <main className="tm-main">
            <Search />
            <Routes>
              <Route path="/*" element={<ArticleList />} />
              <Route path="/create" element={<Create />} />
              <Route path="/article/:id" element={<Detail />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
