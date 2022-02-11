import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home <span class="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Home;
