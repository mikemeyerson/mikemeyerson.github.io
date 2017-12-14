import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom right, #667eea, #764ba2);
`;

const HeaderWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  display: inline;
  margin: 0;
`;

const Navigation = styled.li`
  float: right;
  list-style: none;
  margin; 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  margin-right: 1.5rem;

  &:hover {
    text-decoration: underline;
    color: inherit;
  }

  &:visited {
    color: inherit;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <h1>m|m</h1>
    <Navigation>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/work">Work</NavLink>
    </Navigation>
  </HeaderWrapper>
);

const TemplateWrapper = ({ children }) => (
  <Background>
    <Helmet
      title="Michael Meyerson"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 650,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Header />
      {children()}
    </div>
  </Background>
)

export default TemplateWrapper
