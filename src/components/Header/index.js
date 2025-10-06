import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  &.scrolled {
    height: var(--nav-scroll-height);
    transform: translateY(0px);
    background-color: rgba(10, 25, 47, 0.85);
    box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  }

  &.hidden {
    transform: translateY(calc(var(--nav-scroll-height) * -1));
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: var(--green);
      width: 42px;
      height: 42px;
      border: 2px solid var(--green);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 600;

      &:hover,
      &:focus {
        transform: translate(-4px, -4px);
        background-color: var(--green);
        color: var(--navy);
        box-shadow: 4px 4px 0 0 var(--green);
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-left: 15px;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      transform: translate(-1px, -1px);
      box-shadow: 2px 2px 0 0 var(--green);
    }

    &:after {
      display: none !important;
    }
  }
`;

const Header = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollTop) < 5) {
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScrollTop ? 'down' : 'up');
      setLastScrollTop(scrollY > 0 ? scrollY : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollTop]);

  const navLinks = [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#experience' },
    { name: 'Work', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ];

  return (
    <StyledHeader
      className={`${scrollDirection === 'up' ? 'scrolled' : ''} ${
        scrollDirection === 'down' ? 'hidden' : ''
      }`}>
      <StyledNav>
        <div className="logo" tabIndex="-1">
          <Link to="/" aria-label="home">
            VS
          </Link>
        </div>

        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url}>{name}</Link>
                </li>
              ))}
          </ol>

          <a
            className="resume-button"
            href="/Veena_Solanki_SDE.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;