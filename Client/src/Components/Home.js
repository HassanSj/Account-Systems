import "../assets/Style/home.css";
import React, { useEffect } from "react";
import decode from "jwt-decode";
import img from "../assets/images/white-logo.png";
import { validEmail, validPassword } from "./Regex.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const style = {
  design: {
    color: "#5f6368",
  },
  setting: {
    marginLeft: "10px",
    marginLeft: "-703px",
    marginTop: "320px",
  },
  scrollingwordscontainer: {
    marginTop: "251px",
    marginLeft: "703px",
  },
  scrollingwordsbox: {
    marginTop: "1px",
    marginLeft: "-203px",
  },
  bglight: {
    backgroundColor: "#cad8e5",
  },
};
function Home() {
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  function handleResponse(response) {
    console.log("Encoded token is" + response.credential);
    var data = decode(response.credential);
    setUser(data);
    console.log(data);
  }
  function logout() {
    Navigate("/");
  }
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ width: "1333px", marginTop: "-300px" }}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src={img}
                style={{ height: "57px" }}
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <a class="text-reset me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>

            <div class="dropdown">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div
        class="scrolling-words-container"
        style={style.scrollingwordscontainer}
      >
        <div class="scrolling-words-box" style={style.scrollingwordsbox}>
          <ul>
            <li style={{ color: "#ea4335" }}>Code</li>
            <li style={{ color: "#4285f4" }}>Build</li>
            <li style={{ color: "#34a853" }}>Create</li>
            <li style={{ color: "#fbbc04" }}>Design</li>
            <li style={{ color: "#ea4335" }}>Code</li>
          </ul>
        </div>
        <span className="design" style={style.design}>
          <span className="setting" style={style.setting}>
            for everyone
          </span>
        </span>
      </div>
      <button onClick={logout}>Logout</button>
      <div id="google" style={{ marginLeft: "28px", marginTop: "-16px" }}>
        <h1>{setUser.data}</h1>
      </div>
    </>
  );
}
export default Home;
