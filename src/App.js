import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Allcalls from "./components/MenuList/Allcalls";
import Details from "./components/MenuList/Details";
import Requet from "./components/MenuList/Requet";
import Layout from "./components/Home/Layout";
import Mentors from "./components/Mentor/Mentors";
import WeekSlots from "./components/Mentor/WeekSlots";
import Upcoming from "./components/Mentor/Booking/UpComing";
import Feedback from "./components/Mentor/Booking/PastCall";
import PastCall2 from "./components/Mentor/Booking/PastCall2";
import NoMatch from "./components/NoMatch";
function App() {
  return (
    <>
      {/* Header file */}
      <Header />
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/allcalls" element={<Allcalls />} />
          <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<Mentors />}>
              <Route path="/profile/WeekSlots" element={<WeekSlots />} />
              <Route path="/profile/WeekSlots/Upcoming" element={<Upcoming />}>
                <Route
                  path="/profile/WeekSlots/Upcoming/PastCall2"
                  element={<PastCall2 />}
                />
              </Route>
              <Route
                path="/profile/WeekSlots/feedback"
                element={<Feedback />}
              />
            </Route>
          </Route>
          <Route path="/mentors" element={<Requet />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
