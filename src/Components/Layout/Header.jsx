import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar header  sticky-top navbar-expand-lg bg-light">
    <div className="container">
      <Link className=" nav-link active" aria-current="page" to="home">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fX20XZ9WcCiM-_EINcthKnrldIsA2nNKAi77uAVmuxheapimECkmuEs2xebuUDx24s0&usqp=CAU  " alt="" className="logo w-25 border rounded-5 p-1 rounded  border" />
      </Link>

      <button
        className=" color navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link fs-5 clr" aria-current="page" to="SpreadOperator">
            Spread operator
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link clr fs-5" to="TodosList">
            TodosList
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-5 clr" to="Swap">
            Platform
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 clr" href="#">
            Roadmap
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 clr" href="#">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 clr" href="#">
            Audit Report
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header