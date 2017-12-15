import React from 'react';
import styled from 'styled-components';
import myReads from './my-reads.png';
import forum from './forum.png';

const projects = [
  {
    title: 'Forum',
    imgSrc: forum,
    description: 'A content & comment board implemented with React-Redux.',
  }, {
    title: 'My Reads',
    imgSrc: myReads,
    description: 'A reading wish list created with React.',
  }, {
    title: 'Mobile Flashcards',
    imgSrc: null,
    description: 'A flashcard-style studying app built with React Native.',
  }
];

const Project = ({ imgSrc, title, description }) => (
  <ProjectWrapper>
    <img style={{ margin: '0 1rem 0 0' }} src={imgSrc} width={300} alt={title}/ >
    <ProjectInfo>
      <h3>{title}</h3>
      <p>{description}</p>
    </ProjectInfo>
  </ProjectWrapper>
);


export default () => (
  <div>
    <Title>Projects</Title>
    <ProjectList>
      {projects.map((p) => <Project {...p} />)}
    </ProjectList>
  </div>
);

const ProjectList = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const ProjectWrapper = styled.div`
  background-color: rgba(245, 245, 245, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
`;

const ProjectInfo = styled.div`
  align-self: flex-start;
`;
