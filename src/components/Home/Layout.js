import { Outlet, Link } from "react-router-dom";
import Profdata from "./Profdata";
const Layout = () => {
  return (
    <>
      <section>
        {/* Right Side Mentee Profile */}
        <div className="right_content_area_div">
          <h2>All Mentors</h2>
          <div className="inner_div_right_side">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Career Advice</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* map app users name */}
              {Profdata.map((val, ind) => {
                return (
                  <tr key={ind}>
                    <td className="img_or_name">
                      <img src={val.img} alt="user" />
                      {val.Name}
                    </td>
                    <td>{val.Career}</td>
                    <td>{val.Email}</td>
                    <td className="phone_number_home">{val.Phone}</td>
                    <td>
                      <Link to="/profile">{val.Action}</Link>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        {/* ====================================== */}
        {/* Next Section coding  */}
        {/* ==================================== */}
        {/* <Mentors /> */}

        <Outlet />
      </section>
    </>
  );
};

export default Layout;
