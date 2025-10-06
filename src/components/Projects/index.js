import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
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
    margin-top: 80px;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      transform: translate(-1px, -1px);
      box-shadow: 2px 2px 0 0 var(--green);
    }
  }
`

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px 0;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      color: var(--green);
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`

const Projects = () => {
  const [showMore, setShowMore] = useState(false)
  const revealTitle = useRef(null)
  const revealArchiveLink = useRef(null)
  const revealProjects = useRef([])

  useEffect(() => {
    // Add reveal animations here if needed
  }, [])

  const GRID_LIMIT = 6
  const projects = [
    {
      title: "Treendify",
      description:
        "A news web application built using the MERN stack that delivers real-time updates, trending articles, and personalized news recommendations. Includes text-to-speech functionality for enhanced accessibility and user engagement.",
      tech: ["React", "Node.js", "Express", "MongoDB", "DigitalOcean", "Nginx"],
      github: "", // Add if available
      external: "https://treendify.netlify.app/",
    },
    {
      title: "KhulasaFirst",
      description:
        "An improved and feature-rich news website with integrated Text-to-Speech functionality, optimized performance, and an enhanced UI/UX. Deployed on DigitalOcean using Nginx, handling 50,000+ monthly visitors efficiently.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Nginx", "DigitalOcean"],
      github: "", // Add if available
      external: "https://khulasafirst.com/",
    },
    {
      title: "ERP System (Confidential Client)",
      description:
        "Developed responsive frontend for an enterprise ERP system to streamline internal workflows and improve operational efficiency. Focused on creating user-friendly interfaces and ensuring high responsiveness across devices.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "REST APIs"],
      github: "", // Confidential project
      external: "", // Confidential project
    },
    {
      title: "Depto (Confidential)",
      description:
        "Contributed to building secure and scalable frontend modules for a confidential platform aimed at improving organizational data processes and visualization. Focused on performance optimization and user experience.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "", // Confidential project
      external: "", // Confidential project
    },

    // Add more projects as needed
  ]

  const firstSix = projects.slice(0, GRID_LIMIT)
  const projectsToShow = showMore ? projects : firstSix

  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>Projects | Certifications</h2>

      {/* <a
        className="inline-link archive-link"
        href="/archive"
        ref={revealArchiveLink}
      >
        view the archive
      </a> */}

      <ul className="projects-grid">
        {projectsToShow &&
          projectsToShow.map(
            ({ title, description, tech, github, external }, i) => (
              <StyledProject
                key={i}
                ref={el => (revealProjects.current[i] = el)}
              >
                <div className="project-inner">
                  <header>
                    <div className="project-top">
                      <div className="folder">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="project-links">
                        {github && (
                          <a href={github} aria-label="GitHub Link">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        )}
                        {external && (
                          <a
                            href={external}
                            aria-label="External Link"
                            className="external"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15,3 21,3 21,9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div className="project-description">
                      <p>{description}</p>
                    </div>
                  </header>

                  <footer>
                    {tech && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}
                  </footer>
                </div>
              </StyledProject>
            )
          )}
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? "Less" : "More"}
      </button>
    </StyledProjectsSection>
  )
}

export default Projects
