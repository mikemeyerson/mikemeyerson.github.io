import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

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

const IndexPage = () => (
  <Container>
    <PageTitle>Hi, I'm Michael.</PageTitle>
    <p>I live in Brooklyn. I make websites.</p>
  </Container>
)

export default IndexPage;
