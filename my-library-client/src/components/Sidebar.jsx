import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  MainContent,
  MenuItem,
  NavMenu,
  Sidebar,
  SidebarWrapper,
} from "../styles/Form";
import { logout } from "../api/auth";
import AppLogo from "./logo";

const SidebarLayout = () => {
  return (
    <SidebarWrapper>
      <Sidebar>
        <AppLogo />
        <NavMenu>
          <NavLink to="/authors" end>
            <MenuItem>Authors</MenuItem>
          </NavLink>
          <NavLink to="/books" end>
            <MenuItem>Books</MenuItem>
          </NavLink>
          <NavLink onClick={() => logout()} end>
            <MenuItem>Logout</MenuItem>
          </NavLink>
        </NavMenu>
      </Sidebar>

      <MainContent>
        <Outlet />
      </MainContent>
    </SidebarWrapper>
  );
};

export default SidebarLayout;
