import React from "react";
import "./Header.css";
import img1 from "../assets/GetPrepped.png";
import img3 from "../assets/admin.jpg";
import img2 from "../assets/down_arrow.png";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header_div_main">
            <img src={img1} alt="admin" />
            <div className="img_right_round_arrow">
              <img src={img3} alt="admin" className="admin_right_img" />
              <img src={img2} alt="down_arrow" className="down_arrow" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
