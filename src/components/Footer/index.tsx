import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  text-align: center;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  svg {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          Made with <FaHeart /> by Om Dubey © {currentYear}
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
