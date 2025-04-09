import React from "react";
import BurgerMenu from "./BurgerMenu";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <BurgerMenu />
      <main>{children}</main>
    </div>
  );
};

export default Layout;