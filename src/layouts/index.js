import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components';
import './index.css';

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
  padding: 0px 3px 0px;

  &:hover {
    color: inherit;
    opacity: 0.8;
  }

  &:visited {
    color: inherit;
  }
`;

const active = { borderBottom: '2px solid whitesmoke' };

const Header = () => (
  <HeaderWrapper>
    <h1>m|m</h1>
    <Navigation>
      <NavLink exact to="/" activeStyle={active}>Home</NavLink>
      <NavLink to="/work" activeStyle={active}>Work</NavLink>
    </Navigation>
  </HeaderWrapper>
);

const TemplateWrapper = ({ children }) => (
  <div>
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
        maxWidth: 800,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Header />
      {children()}
    </div>
  </div>
);

export default TemplateWrapper;
