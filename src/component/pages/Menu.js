import React from 'react'
import { Link } from 'react-router-dom'

function Menu(props) {
    return (
        <>
    <div class="sidebar">
    <div class="logo-details">      
      <span class="logo_name">Foodie</span>
    </div>
      <ul class="nav-links">
        <li>
            <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
            <Link to="/Menu">Menu</Link>                      
        </li>
        <li>                     
            <Link to="/Orderstatus">Order Status</Link>          
        </li>
        <li class="log_out">
          <a href="#">
            <span>Log out</span>
          </a>
        </li>
      </ul>
  </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        
        <span class="dashboard">Menu</span>
      </div>
    </nav>    
    <div>hello</div>
  </section>    
        </>
    )
}

export default Menu;
