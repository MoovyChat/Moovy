import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
interface NavBarProps {
  isHovered: boolean;
}
export const StyledAdminLayout = styled.div<NavBarProps>`
  background-image: radial-gradient(
      at 51% 52%,
      rgba(31, 38, 46, 0.5) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, rgba(0, 58, 117, 0.3) 0px, transparent 50%),
    radial-gradient(at 0% 95%, rgba(0, 58, 117, 0.5) 0px, transparent 50%),
    radial-gradient(at 0% 5%, rgba(0, 58, 117, 0.5) 0px, transparent 35%),
    radial-gradient(at 93% 85%, rgba(0, 58, 117, 0.3) 0px, transparent 50%);
  display: flex;
  min-height: 100dvh;
  overflow: hidden;
  .admin-left {
    width: ${props => (props.isHovered ? '200px' : '50px')};
    transition: width 0.3s;
    box-sizing: border-box;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
  }
  .admin-container {
    flex-grow: 1;
  }
`;

export const StyledLeftNavBar = styled.div<NavBarProps>`
  background-color: rgba(0, 58, 117, 0.5);
  .nav-link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: rgba(0, 58, 117, 0.5);
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-basis: ${props => (props.isHovered ? '30%' : '100%')};
    }

    .text {
      flex-basis: 70%;
      font-size: 14px;
      display: ${props => (props.isHovered ? 'flex' : 'none')};
    }
  }
`;
export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .admin-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    .logo {
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0;
      > img {
        width: 40px;
        height: 40px;
      }
    }
    .heading-text {
      flex-basis: 100%;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      height: 60px;
      justify-content: center;
      align-items: center;
    }
  }
`;

// Define styled components
export const NavBar = styled.nav`
  background-color: rgb(33 66 82);
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 100vh;
  padding: 20px 0;
  transition: width 0.3s ease;

  &:hover {
    width: 200px;
  }
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  .icon {
    transition: all 0.5s ease;
  }

  &:visited {
    color: white;
  }

  .text {
    color: #fff;
    transition: all 0.5s ease;
  }

  &:hover {
    color: #09f3ff;
    .icon {
    }
    .text {
      color: #09f3ff;
    }
  }
`;
