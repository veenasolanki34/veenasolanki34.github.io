import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
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
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    // Add reveal animation logic here if needed
  }, []);

  const skills = [
    'React.js',
    'Node.js',
    'MongoDB',
    'JavaScript',
    'Nginx',
    'Digital Ocean',
    'Python',
    'HTML/CSS',
    'Bootstrap',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        {/* <StyledText>
          <div>
            <p>
              Hello! My name is Veena Solanki and I enjoy creating things that live on the internet.
              My interest in web development started back in 2018 when I decided to try editing
              custom Tumblr themes — turns out hacking together a custom reblog button taught me a
              lot about HTML & CSS!
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a href="#" className="inline-link">
                an advertising agency
              </a>
              ,{' '}
              <a href="#" className="inline-link">
                a start-up
              </a>
              ,{' '}
              <a href="#" className="inline-link">
                a huge corporation
              </a>
              , and{' '}
              <a href="#" className="inline-link">
                a student-led design studio
              </a>
              . My main focus these days is building accessible, inclusive products and digital
              experiences at{' '}
              <a href="#" className="inline-link">
                Upstatement
              </a>{' '}
              for a variety of clients.
            </p>

            <p>
              I also recently{' '}
              <a href="#" className="inline-link">
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText> */}
        <StyledText>
          <div>
            <p>
              With hands-on experience in full-stack development, I have worked on enhancing web
              applications and optimizing performance at{' '}
              <a href="https://codehivetech.com/">Codehive Technologies</a> . From implementing
              accessibility features like Text-to-Speech for a news platform with 10,000+ users to
              deploying applications using Nginx on Digital Ocean, my role involves both front-end
              and back-end development.
            </p>

            {/* <p>
              During my tenure at <a href="https://www.amdocs.com">Amdocs</a>, where I served as a
              Software Developer, I had the honor of being selected as one of 16 elite{' '}
              <a href="https://drive.google.com/file/d/16BGu5InZZDGCtoWas560ezwKsgVBKbI9/view?usp=sharing">
                Innovation Agents
              </a>
              .
            </p> */}

            <p>
              My project experience includes enhancing the {' '}
              <a href="https://khulasafirst.com/">KhulasaFirst</a> news website by integrating new
              functionalities and deploying it for high traffic, as well as working on AI Readiness,
              where I contributed to improving data processing and visualization through responsive
              dashboards.
            </p>

            <p>
              Beyond work, I enjoy exploring new technologies, optimizing web applications, and
              continuously learning to enhance my development skills.
            </p>

            <p>My skills are not limited to this list!</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        {/* <StyledPic>
          <div className="wrapper">
            <img
              className="img"
              src="../../images/Profile-photo.jpg"
              alt="Profile"
              width="500"
              height="500"
            />
          </div>
        </StyledPic> */}
      </div>
    </StyledAboutSection>
  );
};

export default About;