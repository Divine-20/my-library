import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Button,
  Content,
  MainContent,
  MenuItem,
  NavMenu,
  SideBarContent,
  Sidebar,
  SidebarWrapper,
} from "../styles/Form";
import { logout } from "../api/auth";
import AppLogo from "./logo";
import { BsPeople } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const SidebarLayout = () => {
  return (
    <SidebarWrapper>
      <Sidebar>
        <AppLogo />
        <NavMenu>
          <NavLink
            to="/authors"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MenuItem>
              <SideBarContent style={{ display: "flex", gap: "10px" }}>
                <BsPeople style={{ fontSize: "23px" }} />
                Authors
              </SideBarContent>
            </MenuItem>
          </NavLink>
          <NavLink
            to="/books"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MenuItem>
              <SideBarContent style={{ display: "flex", gap: "10px" }}>
                <MdOutlineLibraryBooks style={{ fontSize: "23px" }} />
                Books
              </SideBarContent>
            </MenuItem>
          </NavLink>
          <button
            style={{
              backgroundColor: "#FF000005",
              color: "#FF0000",
              border: "none",
              outline: "none",
            }}
            onClick={() => logout()}
          >
            <SideBarContent style={{ display: "flex", gap: "10px" }}>
              <IoLogOutOutline style={{ fontSize: "23px" }} />
              Logout
            </SideBarContent>
          </button>
        </NavMenu>
      </Sidebar>

      <MainContent>
        <Outlet />
      </MainContent>
    </SidebarWrapper>
  );
};

export default SidebarLayout;
