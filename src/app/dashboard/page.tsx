import React from "react";
import Banner from "./Banner";
// import WatchList from "./Watchlist";
// import Watching from "./Watching";
import Navbar from "components/Navbar";
import TrendingMovie from "./TrendingMovie";
// import Recommended from "./Recommended";
import Popular from "./Popular";
import TopRated from "./TopRated";

const Dashboard: React.FC = () => {
  return (
    <div style={{ background: "#15141F" }}>
      <Navbar />
      <Banner />
      <TrendingMovie />
      {/* <Watching /> */}
      {/* <Recommended /> */}
      {/* <WatchList /> */}
      <TopRated />
      <Popular />
    </div>
  );
};
export default Dashboard;
