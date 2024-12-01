import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 2px solid transparent;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 2px solid transparent;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  return (
    <ContactContainer>
      <Content>
        <Title>Get in Touch</Title>
        <ContactGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactInfo>
            <motion.div variants={itemVariants}>
              <InfoItem>
                <FaEnvelope />
                <p>{personalInfo.contact.email}</p>
              </InfoItem>
            </motion.div>
            <motion.div variants={itemVariants}>
              <InfoItem>
                <FaMapMarkerAlt />
                <p>{personalInfo.contact.location}</p>
              </InfoItem>
            </motion.div>
            {personalInfo.contact.phone && (
              <motion.div variants={itemVariants}>
                <InfoItem>
                  <FaPhone />
                  <p>{personalInfo.contact.phone}</p>
                </InfoItem>
              </motion.div>
            )}
          </ContactInfo>
          <Form onSubmit={handleSubmit}>
            <motion.div variants={itemVariants}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TextArea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </motion.div>
          </Form>
        </ContactGrid>
      </Content>
    </ContactContainer>
  );
};

export default Contact;
