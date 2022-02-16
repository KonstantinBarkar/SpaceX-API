import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;