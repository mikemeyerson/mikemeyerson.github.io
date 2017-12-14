import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { FaLinkedinSquare, FaGithubSquare } from 'react-icons/lib/fa';
import { MdEmail } from 'react-icons/lib/md';

const Container = styled.div`
  height: 400px;
  flex-direction: column;
  justify-content: space-around;
  display: flex;
`;

const ContactMethodWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const Text = styled.h3`
  margin: 0 0 0 1.5rem;
`;

const ContactMethod = ({ icon: Icon, size, text }) => (
  <ContactMethodWrapper>
    <Icon size={size} />
    <Text>{text}</Text>
  </ContactMethodWrapper>
);

const ContactPage = () => (
  <Container>
    <h1>Contact</h1>
    <ContactMethod icon={FaLinkedinSquare} size={40} text="LinkedIn" />
    <ContactMethod icon={FaGithubSquare} size={40} text="GitHub" />
    <ContactMethod icon={MdEmail} size={40} text="Email" />
  </Container>
)

export default ContactPage;
