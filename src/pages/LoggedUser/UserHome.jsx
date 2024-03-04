import React from "react";
import Sidebar from "../../components/Sidebar";
import GuideLine from "./GuideLine";
import FreqQuestions from "../FreqQuestions";

function UserHome() {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="w-100" style={{ overflowY:"scroll", height:"100vh" }}>
        <GuideLine />
        {/* <FreqQuestions /> */}
      </div>
    </div>
  );
}

export default UserHome;
