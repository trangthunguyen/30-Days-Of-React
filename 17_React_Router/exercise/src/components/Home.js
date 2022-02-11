import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to my portfolio !</h1>
      <nav
        style={{
          borderBottom: "1px solid",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | {""}
        <Link to="about">About</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Home;
