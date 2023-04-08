import React from 'react';
import { StyledNavLinks } from './navLinks.styles';

type props = {
  children: React.ReactNode;
  className?: string;
};
const NavLinks: React.FC<props> = ({ children, className }) => {
  return <StyledNavLinks className={className}>{children}</StyledNavLinks>;
};

export default NavLinks;
