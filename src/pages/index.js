import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import styled from 'styled-components';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const StyledContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 150px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <StyledContent>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        
      </StyledContent>
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;








// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import { Helmet } from 'react-helmet';

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     background-color: #0a192f;
//     color: #8892b0;
//     font-family: -apple-system, system-ui, sans-serif;
//     line-height: 1.6;
//   }
// `;

// const Container = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   padding: 0 150px;
  
//   @media (max-width: 768px) {
//     padding: 0 50px;
//   }
// `;

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 0;
//   height: 100px;
// `;

// const Logo = styled.div`
//   color: #64ffda;
//   font-size: 24px;
//   font-weight: bold;
//   border: 2px solid #64ffda;
//   padding: 10px 15px;
//   border-radius: 4px;
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 30px;
  
//   a {
//     color: #ccd6f6;
//     text-decoration: none;
//     font-size: 14px;
    
//     &:hover {
//       color: #64ffda;
//     }
//   }
// `;

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   min-height: calc(100vh - 100px);
// `;

// const HeroSection = styled.section`
//   h1 {
//     color: #64ffda;
//     font-size: 16px;
//     font-weight: normal;
//     margin-bottom: 20px;
//   }
  
//   h2 {
//     color: #ccd6f6;
//     font-size: clamp(40px, 8vw, 80px);
//     margin: 0;
//   }
  
//   h3 {
//     color: #8892b0;
//     font-size: clamp(40px, 8vw, 80px);
//     margin-top: 10px;
//   }
  
//   p {
//     max-width: 540px;
//     margin-top: 20px;
//     font-size: 18px;
//   }
// `;

// const Button = styled.a`
//   display: inline-block;
//   color: #64ffda;
//   border: 1px solid #64ffda;
//   padding: 20px 28px;
//   margin-top: 50px;
//   text-decoration: none;
//   border-radius: 4px;
//   font-size: 14px;
//   transition: all 0.25s;
  
//   &:hover {
//     background-color: rgba(100, 255, 218, 0.1);
//     transform: translate(-2px, -2px);
//     box-shadow: 4px 4px 0 0 #64ffda;
//   }
// `;

// const IndexPage = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Veena Solanki - Software Engineer</title>
//         <meta name="description" content="Software Engineer specializing in building exceptional digital experiences." />
//       </Helmet>
      
//       <GlobalStyle />
      
//       <Container>
//         <Header>
//           <Logo>VS</Logo>
//           <Nav>
//             <a href="#about">About</a>
//             <a href="#experience">Experience</a>
//             <a href="#work">Work</a>
//             <a href="#contact">Contact</a>
//           </Nav>
//         </Header>
        
//         <Main>
//           <HeroSection>
//             <h1>Hi, my name is</h1>
//             <h2>Veena Solanki.</h2>
//             <h3>I build things for the web.</h3>
//             <p>
//               I'm a software engineer specializing in building exceptional digital experiences. 
//               Currently, I'm focused on building accessible, human-centered products.
//             </p>
//             <Button href="mailto:veenaglsolanki@gmail.com">Get In Touch</Button>
//           </HeroSection>
//         </Main>
//       </Container>
//     </>
//   );
// };

// export default IndexPage;