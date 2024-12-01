import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 6rem ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Greeting = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const Name = styled(motion.h2)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled(motion.h3)`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Description = styled(motion.p)`
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greeting variants={itemVariants}>Hi, I'm</Greeting>
          <Name variants={itemVariants}>{personalInfo.name}</Name>
          <Title variants={itemVariants}>{personalInfo.title}</Title>
          <Description variants={itemVariants}>
            {personalInfo.about}
          </Description>
          <SocialLinks variants={itemVariants}>
            <SocialLink 
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode />
            </SocialLink>
          </SocialLinks>
        </motion.div>
      </Content>
    </HomeContainer>
  );
};

export default Home;
