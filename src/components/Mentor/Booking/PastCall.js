import React from "react";
import "./BookingM.css";
import Upcodata from "./Upcodata";
function PastCall() {
  return (
    <>
      <div className="main_div_upcoming_pro">
        {/* map data */}
        <div className="card_div_main_Upcoming_in">
          <div className="card_past_all_upcoming">
            {Upcodata.map(function (vals, index) {
              return (
                <div className="profile_div_of_user_upcom2">
                  <div className="profile_inside_div_pss">
                    <img src={vals.img_pr} alt="user" />
                    <div className="innner_left_content">
                      <h3>{vals.Name}</h3>
                      <p>{vals.Email}</p>
                      <div>
                        <span>{vals.Date}</span>
                        <span>{vals.Time}</span>
                      </div>
                    </div>
                  </div>

                  <button>View Feedback</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PastCall;
