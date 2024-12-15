// styles/LoginStyles.js
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #f3f4f6;
  width: 85vw;
  padding: 30px;
`;
export const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 95vh;
  border-radius: 10px;
  background-color: #f3f4f6;
`;

export const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;

  width: 100%;
  //   max-width: 400px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: white;
  color: black;

  // &:focus {
  //   outline: none;
  //   border-color: ${(props) => props.theme.colors.primary};
  // }
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
`;
export const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
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
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
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
`;
export const SidebarWrapper = styled.div`
  display: flex;
  height: 100vh;
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
`;
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  padding: 1rem;
`;
export const Name = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export const Bio = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Sidebar = styled.nav`
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
`;

export const NavMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: none;
  color: #333;

  &.active {
    font-weight: bold;
    color: #007bff;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
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

// export const ResponsiveForm = styled(Form)`
//   @media (min-width: 1280px) {
//     min-width: 30%;
//   }
//   @media (max-width: 767px) {
//     width: 100%;
//   }
//   height: auto;
// `;
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
`;
