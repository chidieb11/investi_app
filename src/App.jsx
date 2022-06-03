import React from "react";
import Home from "./components/Home";
import Location from "./components/Location";
import Pin from "./components/Pin";
import ResetPassword from "./components/ResetPassword";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignUpTwo from "./components/SignUpTwo";
import Start from "./components/Start";
import Successful from "./components/Successful";
import UploadPics from "./components/UploadPics";
import Verify from "./components/Verify";
import Splash from "./components/Splash";
import Profile from "./components/Profile";
import EditProfiile from "./components/EditProfile";
import UploadDoc from "./components/UploadDoc";
import Company from "./components/Company";
import Portfolio from "./components/Portfolio";
import Explore from "./components/Explore";
import AddCash from "./components/AddCash";
import Notification from "./components/Notification";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route path="start" element={<Start />} />
        <Route path="home" element={<Home />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signup2" element={<SignUpTwo />} />
        <Route path="location" element={<Location />} />
        <Route path="verify" element={<Verify />} />
        <Route path="uploadprofilepicture" element={<UploadPics />} />
        <Route path="pin" element={<Pin />} />
        <Route path="successful" element={<Successful />} />

        {/* <Profile />
      <EditProfiile />
      <UploadDoc />
      <Company />
      <Portfolio />
      <Explore />
      <AddCash />
      <Notification />. */}
      </Routes>
    </div>
  );
};

export default App;
