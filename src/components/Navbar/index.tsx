import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1rem ${({ theme }) => theme.spacing.xl};
  backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ $isActive }) => $isActive ? '600' : '400'};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $isActive }) => $isActive ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Om Dubey</Logo>
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" $isActive={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/projects" $isActive={location.pathname === "/projects"}>
            Projects
          </NavLink>
          <NavLink to="/experience" $isActive={location.pathname === "/experience"}>
            Experience
          </NavLink>
          <NavLink to="/contact" $isActive={location.pathname === "/contact"}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
