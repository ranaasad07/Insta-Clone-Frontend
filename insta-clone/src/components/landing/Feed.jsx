import React from "react";
import "../../App.css"
import ShowPost from "./showPost/ShowPost";
import LeftSidebar from "./sidebar/LeftSidebar";
import RightSidebar from "./Suggestions/RightSidebar";

const Feed = () => {
  return (
    <div className="app">
      <div className="left">
        <LeftSidebar />
      </div>
      <div className="center">
        <ShowPost/>
      </div>
      <div className="right">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Feed;
