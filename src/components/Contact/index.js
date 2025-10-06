import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: #64ffda; /* You can change this to your theme green */
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #8892b0; /* slate color */
    line-height: 1.5;
  }

  .email-link {
    display: inline-block;
    margin-top: 50px;
    padding: 1rem 1.75rem;
    font-size: 16px;
    color: #0a192f;
    background-color: #64ffda;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background-color: #52e0c4;
      transform: translateY(-2px);
    }
  }
`;

const Contact = () => {
    const revealContainer = useRef(null);
  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <span className="numbered-heading overline">What’s Next?</span>
      <h2 className="title">Get In Touch</h2>
      <div className="inner">
        <p>
        My inbox is open if you have any questions or just want to say hello! 
        Let's get in touch if you have any relevant roles for me.
      </p>
      <a className="email-link" href="mailto:veenaglsolanki@gmail.com">
        Mail Me!
      </a>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
