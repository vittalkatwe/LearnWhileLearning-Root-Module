import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.instagram.com/learnwhilelearning/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          LearnWhileLearning
        </a>
      </section>

      
    </footer>
  );
};

export default Footer;
