import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/experience">Expérience</Link>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
