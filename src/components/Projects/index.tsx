import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 8rem ${({ theme }) => theme.spacing.xl} 4rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary}33;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects = () => {
  return (
    <ProjectsContainer>
      <Content>
        <Title>My Projects</Title>
        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} variants={cardVariants}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </ProjectLink>
                  <ProjectLink
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Content>
    </ProjectsContainer>
  );
};

export default Projects;
