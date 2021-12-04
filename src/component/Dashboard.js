import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'


function Dashboard() {
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
        
        <span class="dashboard">Dashboard</span>
      </div>
    </nav>

    <div class="home-content">
      <div class="overview-boxes">
        <div class="box">
        <div class="right-side">
            <div class="box-topic">Todays Orders</div>
            <div class="number">64</div>
        </div>
          
        </div>
        <div class="box">
        <div class="right-side">
            <div class="box-topic">Pending Orders</div>
            <div class="number">7</div>
        </div>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Completed Orders</div>
            <div class="number">45</div>
          </div>
        </div>
        </div>
    </div>
    
    
  </section>


  

        </>
    )
}


export default Dashboard