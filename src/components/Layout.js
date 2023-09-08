import React from "react";
import { Link } from "gatsby";
import LogoImage from "../images/codezone-white.png";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={LogoImage} alt="Code Zone Logo" className="h-8 mr-2" />
          Code Zone
        </Link>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="container mx-auto">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Code Zone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto mt-4 p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
