import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../../styles/GlobalStyle';
import Header from '../Header';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Your Name - Software Engineer</title>
        <link rel="canonical" href="https://yourusername.github.io" />
        <meta name="description" content="Software Engineer specializing in building exceptional digital experiences." />
        <meta name="keywords" content="software engineer, frontend developer, javascript, react" />
        <meta property="og:title" content="Your Name - Software Engineer" />
        <meta property="og:description" content="Software Engineer specializing in building exceptional digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourusername.github.io" />
        <meta property="og:site_name" content="Your Name" />
        <meta property="og:image" content="https://yourusername.github.io/og.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yourusername.github.io" />
        <meta name="twitter:title" content="Your Name - Software Engineer" />
        <meta name="twitter:description" content="Software Engineer specializing in building exceptional digital experiences." />
        <meta name="twitter:image" content="https://yourusername.github.io/og.png" />
        <meta name="twitter:creator" content="@yourusername" />
        <meta name="google-site-verification" content="DCl7VAf9tcw6odeLp1WXvFMhEOLXKgqGVnz2CGQ4RBY" />
      </Helmet>

      <GlobalStyle />
      
      <a className="skip-to-content" href="#content">
        Skip to Content
      </a>

      <StyledContent>
        <Header location={location} />
        <div id="content">
          {children}
        </div>
      </StyledContent>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;