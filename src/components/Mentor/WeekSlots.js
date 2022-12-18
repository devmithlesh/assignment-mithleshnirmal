import React from "react";
import WkSlot_data from "./WkSlot_data";

function WeekSlots() {
  return (
    <>
      <div className="weekly_slots_div">
        <h4>Set weekly hours</h4>
        <div className="sun_div">
          <table>
            <tr>
              <th></th>
              <th>SUN</th>
              <th className="dull">Unavailable</th>
            </tr>
            {/* Map All Data */}
            {WkSlot_data.map(function (val, index) {
              return (
                <tr>
                  <td>
                    <label class="switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </td>
                  <td>{val.Day}</td>
                  <td className="strock_img">
                    <span className="time_value">{val.Time}</span>
                    <img src={val.str_img} alt="strok" />
                    <span className="time_value">{val.Time_end}</span>
                    <span className="trash_class">
                      <img src={val.trash_img} alt="trash" />
                    </span>
                  </td>
                  <td>
                    <img src={val.sq_img} alt="pluse" className="pluse_table" />
                  </td>
                </tr>
              );
            })}
            <tfoot>
              <tr>
                <th></th>
                <th>SAT</th>
                <th className="dull">Unavailable</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default WeekSlots;
