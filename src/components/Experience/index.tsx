import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';

const ExperienceContainer = styled.div`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary}33;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  &:nth-child(even) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: 0;
    padding-left: 60px;

    &:nth-child(even) {
      padding-left: 60px;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  right: -6px;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary}33;
  }

  ${TimelineItem}:nth-child(even) & {
    right: auto;
    left: -6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 14px;
    ${TimelineItem}:nth-child(even) & {
      left: 14px;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  width: calc(100% - 40px);
`;

const Role = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Duration = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary}33;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  font-size: 0.9rem;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

const Experience = () => {
  return (
    <ExperienceContainer>
      <Content>
        <Title>Experience</Title>
        <Timeline
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((experience) => (
            <TimelineItem key={experience.id} variants={itemVariants}>
              <TimelineDot />
              <TimelineContent>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <Duration>{experience.duration}</Duration>
                <Description>{experience.description}</Description>
                <TechStack>
                  {experience.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </ExperienceContainer>
  );
};

export default Experience;
