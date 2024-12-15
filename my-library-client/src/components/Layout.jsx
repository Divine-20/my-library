import styled from "styled-components";
import { Container } from "../styles/Form";

const Layout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
