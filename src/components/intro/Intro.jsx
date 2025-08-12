import React, { useContext } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../img/ai-network.json';
import './intro.css';
import { ThemeContext } from '../../context';

const titles = [
  "Web3 Developer",
  "Metaverse Architect",
  "AI Researcher",
  "Digital Health Innovator",
  "Blockchain Analyst",
  "Machine Learning Engineer",
  "Artificial Intelligence Strategist",
];

const Intro = () => {
  const { state: { darkMode } } = useContext(ThemeContext);

  return (
    <section className={`intro ${darkMode ? 'dark' : 'light'}`} aria-label="Introduction section">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello, my name is</h2>
          <h1 className="intro-name">Michel Navarro</h1>

          <div className="intro-title" aria-live="polite" aria-atomic="true" aria-relevant="additions">
            <div className="intro-title-wrapper" role="list">
              {[...titles, ...titles].map((title, i) => (
                <div key={i} className="intro-title-item" role="listitem" tabIndex={-1}>
                  {title}
                </div>
              ))}
            </div>
          </div>

          <p className="intro-desc">
            I design and develop scalable applications with a strong focus on AI-powered solutions,
            specializing in web services and advanced data analysis to extract actionable insights.
            I leverage machine learning and statistical techniques to uncover meaningful patterns in complex data sets.
            Currently, I build internal applications for AFS and also provide freelance WordPress development,
            blending technical excellence with versatile project delivery.
          </p>
        </div>

        <ScrollIcon />
      </div>

      <div className="intro-right" aria-label="AI Network animation">
        <Player
          autoplay
          loop
          src={animationData}
          className="lottie-player"
          style={{ borderRadius: '20px' }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

const ScrollIcon = () => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    stroke="currentColor"
    className="scroll-icon"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Scroll down indicator"
  >
    <g id="scroll">
      <path d="M40.5 15L34.5 9L28.5 15" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.5 24L34.5 30L40.5 24" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 37.5H60" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34.5 27V9" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.89 60 45.11 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.11 9 29.89 9 27Z" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default Intro;
