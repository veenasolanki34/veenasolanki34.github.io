// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Helmet } from 'react-helmet';
// import GlobalStyle from '../../styles/GlobalStyle';
// import Header from '../Header';

// const StyledContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// const Layout = ({ children, location }) => {
//   return (
//     <>
//       <Helmet>
//         <html lang="en" />
//         <title>Veena Solanki - Software Engineer</title>
//         <link rel="canonical" href="https://veenasolanki34.github.io" />
//         <meta name="description" content="Software Engineer specializing in building exceptional digital experiences." />
//         <meta name="keywords" content="software engineer, frontend developer, javascript, react" />
//         <meta property="og:title" content="Veena Solanki - Software Engineer" />
//         <meta property="og:description" content="Software Engineer specializing in building exceptional digital experiences." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://veenasolanki34.github.io" />
//         <meta property="og:site_name" content="Veena Solanki" />
//         <meta property="og:image" content="https://veenasolanki34.github.io/og.png" />
//         <meta property="og:image:width" content="1280" />
//         <meta property="og:image:height" content="640" />
//         <meta property="og:image:type" content="image/png" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:url" content="https://veenasolanki34.github.io" />
//         <meta name="twitter:title" content="Veena Solanki - Software Engineer" />
//         <meta name="twitter:description" content="Software Engineer specializing in building exceptional digital experiences." />
//         <meta name="twitter:image" content="https://veenasolanki34.github.io/og.png" />
//         <meta name="twitter:creator" content="@yourusername" />
//         <meta name="google-site-verification" content="DCl7VAf9tcw6odeLp1WXvFMhEOLXKgqGVnz2CGQ4RBY" />
//       </Helmet>

//       <GlobalStyle />
      
//       <a className="skip-to-content" href="#content">
//         Skip to Content
//       </a>

//       <StyledContent>
//         <Header location={location} />
//         <div id="content">
//           {children}
//         </div>
//       </StyledContent>
//     </>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   location: PropTypes.object.isRequired,
// };

// export default Layout;


import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../Header';

// Define GlobalStyle directly in this file
const GlobalStyle = createGlobalStyle`
  :root {
    --navy: #0a192f;
    --light-navy: #172a45;
    --lightest-navy: #303C55;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: 20px;
    line-height: 1.3;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px 0;
    width: 100%;
    font-size: clamp(26px, 5vw, 32px);
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(16px, 3vw, 20px);
      font-weight: 400;
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    
    &:hover {
      color: var(--green);
    }
  }

  .inline-link {
    color: var(--green);
    
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  p {
    margin: 0 0 15px 0;

    &:last-child {
      margin: 0;
    }
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: 13px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: 14px;
        line-height: 12px;
      }
    }
  }
`;

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
        <title>Veena Solanki - Software Engineer</title>
        <link rel="canonical" href="https://veenasolanki34.github.io" />
        <meta name="description" content="Software Engineer specializing in building exceptional digital experiences." />
        <meta name="keywords" content="software engineer, frontend developer, javascript, react, Veena Solanki" />
        <meta property="og:title" content="Veena Solanki - Software Engineer" />
        <meta property="og:description" content="Software Engineer specializing in building exceptional digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://veenasolanki34.github.io" />
        <meta property="og:site_name" content="Veena Solanki" />
        <meta property="og:image" content="https://veenasolanki34.github.io/og.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://veenasolanki34.github.io" />
        <meta name="twitter:title" content="Veena Solanki - Software Engineer" />
        <meta name="twitter:description" content="Software Engineer specializing in building exceptional digital experiences." />
        <meta name="twitter:image" content="https://veenasolanki34.github.io/og.png" />
        <meta name="twitter:creator" content="@veenaneev" />
      </Helmet>

      <GlobalStyle />

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