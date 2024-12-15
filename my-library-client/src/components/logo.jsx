import React from "react";
import Logo from "../assets/MyLibrary.svg";
import { Content } from "../styles/Form";

function AppLogo() {
  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "10vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </Content>
  );
}

export default AppLogo;
