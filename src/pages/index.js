import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      {/* Other sections will be added here */}
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;