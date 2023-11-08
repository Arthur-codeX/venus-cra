import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";

function App() {
  const [page, setPage] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(page);
  return (
    <div className="  text-primary-emphasis">
      <NavBar setPage={setPage} />
      {page === "home" ? <Home /> : null}
      {page === "about" ? <About /> : null}
      <button className="btn btn-light">Click ME</button>

      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Dropdown link
        </a>

        {showDropdown ? (
          <ul>
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default App;
