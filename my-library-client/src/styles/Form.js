// styles/LoginStyles.js
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #1b433210;
  width: 85vw;
  padding: 30px;
  max-height: 95vh;
  overflow-y: scroll;

  @media (max-width: 1280px) {
    width: 70vw;
    padding: 20px;
  }

  @media (max-width: 1024px) {
    width: 60vw;
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 90vw;
    padding: 10px;
  }
`;

export const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 95vh;
  border-radius: 10px;
  background-color: #1b433210;
  overflow-y: scroll;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: white;
  color: black;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Author = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
`;

export const ISBN = styled.p`
  font-family: monospace;
  color: #666;
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: white;
  color: black;
  margin-bottom: 2em;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  min-height: 150px;
  resize: vertical;
  color: black;
  background-color: white;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const AddButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: #059669;
  background-color: rgba(5, 150, 105, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  width: 10vw;
  border: none;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-right: 2em;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background: ${(props) =>
    props.active ? props.theme.colors.primary : "white"};
  color: ${(props) => (props.active ? "white" : props.theme.colors.primary)};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items-center;
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.nav`
  width: 280px;
  background-color: #1b433210;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    display: inline-block;
    margin-bottom: 10px;
  }

  @media (min-width: 769px) {
    flex-direction: column;
  }
`;
export const MenuItem = styled.li`
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #1b4332;
    color: white;
  }

  &.active {
    background-color: #1b4332;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
 

  &.active {
    .${MenuItem} {
      background-color: #1b4332;
      color: white;
    }

    &:hover {
      background-color: #1b4332;
    }
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const SideBarContent = styled.div`
  padding: 0.5rem;
`;

export const Name = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Bio = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.8;
  z-index: 0;
`;

export const BooksCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
