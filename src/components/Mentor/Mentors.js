import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Mentors.css";
import imgs1 from "../../assets/user2.png";
import imgs2 from "../../assets/Send.png";
import imgs3 from "../../assets/timer.png";
import imgs4 from "../../assets/device-message.png";
import imgs5 from "../../assets/call.png";
import imgs6 from "../../assets/briefcase.png";
import imgs7 from "../../assets/Group.png";

function Mentors() {
  return (
    <>
      <section>
        <div className="mentor_profile_div_main">
          <h2>
            All Mentors / <span>Mentor Profile</span>
          </h2>
          <div className="mentor_profile_div_inside_div">
            <div className="pro_file_img_div">
              <img src={imgs1} alt="mentor" />
              <div>
                <h3>
                  Subhro Bhattacharya
                  <Link to="https://google.com/">
                    Linkedin <img src={imgs2} alt="linkedin" />
                  </Link>
                </h3>
                <p>Director, KPMG in India</p>
              </div>
            </div>
            <div className="menu_bar_mentor_profile">
              <ul>
                <li>
                  <Link to="/profile" className="active_color">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link to="/profile/WeekSlots">Weekly Slots</Link>
                </li>
                <li>
                  <Link to="/profile/WeekSlots/Upcoming">Bookings</Link>
                </li>
                <li>
                  <Link to="/profile/WeekSlots/feedback">Mentee Feedback</Link>
                </li>
              </ul>
              {/* border div */}
              <div className="border_div"></div>
              {/* personal details */}
              <div className="personal_details_subhro ">
                <h3>Personal Details</h3>
                <div className="details_inside">
                  <div className="card_div_details">
                    <img src={imgs4} alt="user" />
                    <div>
                      <span>Email</span>
                      <p>Subhro Bhattacharya@gmail.com</p>
                    </div>
                  </div>
                  <div className="card_div_details">
                    <img src={imgs5} alt="phone" />
                    <div>
                      <span>Phone Number</span>
                      <p>+91 96589-63216</p>
                    </div>
                  </div>
                </div>
                {/* border div */}
                <div className="border_div2"></div>

                <h3>Professional Details</h3>

                <div className="details_inside details_inside2">
                  <div className="card_div_details">
                    <img src={imgs6} alt="circle" />
                    <div>
                      <span>Professional interest</span>
                      <p>Finance & Accounting</p>
                    </div>
                  </div>
                  <div className="card_div_details">
                    <img src={imgs7} alt="group" />
                    <div>
                      <span>Mentor On</span>
                      <p>Finance & Accounting</p>
                    </div>
                  </div>
                  <div className="card_div_details">
                    <img src={imgs3} alt="timer" />
                    <div>
                      <span>Years of Experience</span>
                      <p>5 years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
}

export default Mentors;
