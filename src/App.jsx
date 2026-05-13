import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { Fishes } from "./Fishes";
import { Fish } from "./Fish";
import { NewFish } from "./NewFish";
import { Fooldal } from "./Fooldal";
import './App.css';

export const App=()=> {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/halak'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Halak</span>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={'/ujhal'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új hal</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<Fooldal />} />
        <Route path="/halak" exact element={<Fishes />} />
        <Route path="/hal/:Id" exact element={<Fish />} />
        <Route path="/ujhal" exact element={<NewFish />} />
      </Routes>
    </Router>
  );
}
