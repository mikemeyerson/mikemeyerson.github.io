import React from 'react';
import styled from 'styled-components';
import { FaLinkedinSquare, FaGithub, FaInbox } from 'react-icons/lib/fa';

const PageTitle = styled.h1`
  font-size: 4rem;
`;

const Container = styled.div`
  height: 400px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

const Link = styled.a`
  color: whitesmoke;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: inherit;
    opacity: 0.8;
  }
`;

const IndexPage = () => (
  <Container>
    <PageTitle>Hi, I'm Michael.</PageTitle>
    <p>I make websites. Or try to.</p>
    <ContactWrapper>
      <Link href="https://www.linkedin.com/in/michael-meyerson"><FaLinkedinSquare size={30} /></Link>
      <Link href="https://github.com/mikemeyerson"><FaGithub size={30} /></Link>
      <Link href="mailto:mikemey@umich.edu?Subject=Let%27s%20work%20together!"><FaInbox size={30} /></Link>
    </ContactWrapper>
  </Container>
)

export default IndexPage;
