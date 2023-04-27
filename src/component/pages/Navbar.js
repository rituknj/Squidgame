import React, { useEffect, useLayoutEffect, useState } from "react";

import { ImCross } from "react-icons/im";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineGlobal, AiOutlineMail, AiOutlineMenu, AiTwotoneMail } from "react-icons/ai";
import {MdMarkEmailRead} from "react-icons/md"
import { FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { BsTwitter, BsYoutube, BsGithub } from "react-icons/bs";
import { SiGitbook } from "react-icons/si";
import Modal from "react-bootstrap/Modal";
import meta from "../Image/meta.png";
import walletconnect from "../Svg/walletconnect.svg";
import "animate.css";

import logo from "../Image/logosqd.png";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // ---------dark---------mode----------------

  useLayoutEffect(() => {
    const data = window.localStorage.getItem("theme");
    if (data === "dark-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }, []);

  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="container-kws">
      <div className="  navbar12  d-f a-i-c j-c-s-b p-y-1 b-d ">
        <div className="p-t-1">
          <ul className="l-s-t-n d-f a-i-c ">
            <li className="m-r-1">
              <a href="/" target="">
                <img
                  src={logo}
                  alt=""
                  className="logo animate__animated animate__rubberBand"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="p-t-1">
          <ul className="l-s-t-n d-f a-i-c list-nav">
            {/* <li className="m-r-1_5 c-p   m-q-b-d-n fo-na c-b">SQUID BOMB </li> */}
            <li>
              <a
                href="#aboutsquid"
                className="m-r-1_5 c-p   m-q-b-d-n fo-na c-b"
              >
                About Squid{" "}
              </a>
            </li>
            <li>
              <a
                href="#tokenomics"
                className="m-r-1_5 c-p   m-q-b-d-n fo-na c-b"
              >
                Tokenomics
              </a>
            </li>
            {/* <li className="m-r-1_5 c-p   m-q-b-d-n fo-na c-b">SWAP</li> */}
            {/* <li>
              <a href="#utility" className="m-r-1_5 c-p   m-q-b-d-n fo-na c-b">
                Utility
              </a>
            </li> */}
            <li>
              <a href="#partners" className="m-r-1_5 c-p   m-q-b-d-n fo-na c-b">
                Partners
              </a>
            </li>
            <li>
              <a href="#roadmap" className="m-r-1_5 c-p   m-q-b-d-n fo-na c-b">
                Roadmap
              </a>
            </li>

            {/* <li className="m-r-2 c-p   m-q-b-d-n">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="b-c-t b-n c-i"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu className="pa-1">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li> */}
          </ul>
        </div>
        <div className=" c-p ">
          <ul className="l-s-t-n d-f a-i-c ">
          <li className="m-l-2 c-p  f-s-1_5 m-q-b-d-n c-b">
            <a href="https://www.squidgme.com/" target="_blank">
              <AiOutlineGlobal  className="c-b icons-nav"/>
            </a>
          </li>
            <li className="m-l-2 c-p  f-s-1_5 m-q-b-d-n c-b"><a href="https://t.me/SquidGMEnews" target="_blank">
              <FaTelegramPlane className="c-b icons-nav" />
        </a>    </li>
            <li className="m-l-2 c-p  f-s-1_5 m-q-b-d-n c-b">
              <a href="https://twitter.com/SquidGMECoin" target="_blank"><BsTwitter className="c-b icons-nav" /></a>
            </li>
            <li className="m-l-2 c-p f-s-1_5  m-q-b-d-n c-b" >
              <a href="mailto:contact@squidgme.com" target="_blank"><MdMarkEmailRead className="c-b icons-nav" /></a>
            </li>
            {/* <li className="m-l-2 c-p f-s-1_5  m-q-b-d-n">
              <BsGithub />
            </li> */}
            {/* <li className="m-l-2 c-p f-s-1_5  m-q-b-d-n">
              <SiGitbook />
            </li> */}
            {/* <li className="m-l-2 c-p f-s-1_5  m-q-b-d-n">
              <FaTiktok />
            </li> */}
            <li className="m-l-2 c-p m-q-a-d-n_600 ">
              <button className="light"> $SquidGME</button>
            </li>
            {/* <li className="m-l-2 c-pq ">
              <span className="" onClick={() => toggleTheme()}>
                {theme === "dark-theme" ? "Light mode" : "Dark mode"}
              </span>
            </li> */}

            <li className="m-l-2  m-q-a-d-n_600">
              {" "}
              <button
                // variant="primary"
                onClick={handleShow2}
                className="light"
              >
                CONNECT
              </button>
            </li>
            <li className="m-l-2 c-p   m-q-a-d-n ">
              {" "}
              <Button
                onClick={handleShow}
                className=" b-c-t c-i b-n pa-0 f-s-2 "
              >
                <AiOutlineMenu />
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------------mobile-navbar---------------------------------- */}

      <Offcanvas show={show} onHide={handleClose} className="pa-1">
        <Offcanvas.Header>
          <Offcanvas.Title>
            {" "}
            <div className="image-dog1">
              <a href="/" target="_blank">
                <img src={logo} alt="" className="" />
              </a>
            </div>
          </Offcanvas.Title>
          <ImCross onClick={handleClose} color="black" className="c-b" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="l-s-t-n">
            <li>
              <a
                href="#aboutsquid"
                className="m-r-1 m-t-2 c-p fo-na c-b f-s-1_5 t-a-c c-p"
              >
                About Squid
              </a>
            </li>
            <li>
              <a
                href="#tokenomics"
                className="m-r-1 m-t-2 c-p fo-na c-b f-s-1_5 t-a-c c-p"
              >
                Tokenomics
              </a>
            </li>
            {/* <li>
              <a
                href="#utility"
                className="m-r-1 m-t-2 c-p fo-na c-b f-s-1_5 t-a-c c-p"
              >
                Utility
              </a>
            </li> */}
            {/* <li className="m-r-1 m-t-2 c-p fo-na c-b f-s-1_5 t-a-c">SWAP</li> */}
            <li>
              <a
                href="#partners"
                className="m-r-1 m-t-2 c-p fo-na c-b f-s-1_5 t-a-c c-p"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="m-r-1 m-t-2 c-p fo-na c-b f-s-1_5 t-a-c c-p"
              >
                Roadmap
              </a>
            </li>
            {/* <li className="m-r-1 m-t-1 c-p">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="b-c-t c-i b-n"
                >
                  Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu className="pa-1">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li> */}
          </ul>
          <ul className="l-s-t-n d-f j-c-s-b m-t-2">
          <li>
              <a href="https://www.squidgme.com/" target="_blank"><AiOutlineGlobal className="f-s-1_5 c-b c-p" /></a>
            </li>
           
            <li>
              <a href="https://t.me/SquidGMEnews" target="_blank"><FaTelegramPlane className="f-s-1_5 c-b c-p" /></a>
            </li>
            <li>
              {" "}
              <a href="https://twitter.com/SquidGMECoin" target="_blank"><BsTwitter className="f-s-1_5 c-b c-p" /></a>
            </li>
            <li>
              {" "}
              <a  href="contact@squidgme.com" target="_blank"><MdMarkEmailRead className="f-s-1_5 c-b c-p" /></a>
            </li>
          </ul>
          <ul className="d-f j-c-s-b l-s-t-n m-t-3">
            <li>
              <button
                // variant="primary"
                onClick={handleShow2}
                className="light c-p"
              >
                SWAP $SQUID
              </button>
            </li>
            <li>
              <button
                // variant="primary"
                onClick={handleShow2}
                className="light c-p"
              >
                CONNECT
              </button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* <Modal show={show2} onHide={handleClose2} className="">
        <div className="">
          <Modal.Header closeButton>
            <Modal.Title className="t-a-c m-a c-i">
              Please Connect Your Wallet
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="walletconnect d-f a-i-c j-c-s-e m-y-2">
              <img src={meta} alt="" className="w-7" />
              <img src={walletconnect} alt="" className="w-5" />
            </div>
          </Modal.Body>
        </div>
      </Modal> */}
    </div>
  );
}

export default Navbar;
