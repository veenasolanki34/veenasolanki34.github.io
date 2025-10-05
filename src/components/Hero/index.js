import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    min-height: 80vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 50px;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      transform: translate(-2px, -2px);
      box-shadow: 4px 4px 0 0 var(--green);
    }

    &:after {
      display: none !important;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Your Name.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <>
      <p>
        I'm a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I'm focused on building accessible, human-centered products
        at{' '}
        <a href="https://example.com" target="_blank" rel="noreferrer">
          Company Name
        </a>
        .
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="mailto:your.email@gmail.com"
      target="_blank"
      rel="noreferrer">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {isMounted &&
        items.map((item, i) => (
          <div key={i} style={{ transitionDelay: `${i + 1}00ms` }}>
            {item}
          </div>
        ))}
    </StyledHeroSection>
  );
};

export default Hero;