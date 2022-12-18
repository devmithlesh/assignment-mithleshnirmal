import React from "react";
import "./BookingM.css";
import { Outlet, Link } from "react-router-dom";
import Upcodata from "./Upcodata";

function UpComing() {
  return (
    <>
      <div className="main_div_upcoming_pro">
        <div className="menu_div_inside_booking">
          <ul>
            <li>
              <Link to="/profile/WeekSlots/Upcoming" className="active_color">
                Upcoming Calls
              </Link>
            </li>
            <li>
              <Link to="/profile/WeekSlots/Upcoming/PastCall2">Past Calls</Link>
            </li>
          </ul>
        </div>
        {/* map data */}
        <div className="card_div_main_Upcoming_in">
          {Upcodata.map(function (vals, index) {
            return (
              <div className="profile_div_of_user_upcom">
                <img src={vals.img_pr} alt="user" />
                <div className="profile_inside_upcom_div">
                  <h3>{vals.Name}</h3>
                  <p>{vals.Email}</p>
                  <div>
                    <span>{vals.Date}</span>
                    <span>{vals.Time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default UpComing;
