// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import Listings from "../components/listings/Listings";

const MainContainer = () => {
  return (
    <Router>
      <div>
        <div className="app-top">
          <Link to="/">
            <span>reddit image</span>
          </Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Listings />} />
          <Route exact path="/comments/:sub/:parentId" element={<Comments />} />
        </Routes>
        <div className="app-bottom"></div>
      </div>
    </Router>
  );
};

export default MainContainer;
