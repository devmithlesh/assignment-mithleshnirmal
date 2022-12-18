import React from "react";
import { Link } from "react-router-dom";
import admin_img from "../../assets/admin.jpg";
import circle_tick from "../../assets/tick-circle.png";
import white_img from "../../assets/user-tag-w.png";
import blue_img from "../../assets/user-tag.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="main_section_div_part">
        <nav className="left_navbar_div">
          <div className="admin_plue_content">
            <img src={admin_img} alt="admin_image" />
            <div>
              <h3>Admin</h3>
              <p>View Profile</p>
            </div>
          </div>
          <ul className="navbar_ul_list">
            <li>
              <img src={white_img} alt="white_img" />
              <Link to="/allcalls">All Calls</Link>
            </li>
            <li>
              <img src={blue_img} alt="blue_img" />
              <Link to="/" className="active_color">
                Mentee Profile
              </Link>
            </li>
            <li>
              <img src={circle_tick} alt="Mentors" />
              <Link to="/mentors">Mentors Request</Link>
            </li>
            <li>
              <img src={circle_tick} alt="Call" />
              <Link to="/details">All Call Details</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
