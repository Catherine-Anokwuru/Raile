import React from "react";
import Banner from "./Banner";
import Recommended from "./Recommended";
import WatchList from "./Watchlist";
import Watching from "./Watching";
import Navbar from "components/Navbar";

const Dashboard: React.FC = () => {
  return (
    <div style={{ background: "#161616" }}>
      <Navbar />
      <Banner />
      <Recommended />
      <Watching />
      <WatchList />
    </div>
  );
};
export default Dashboard;
