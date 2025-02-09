import './App.css';

import React from 'react';

const Homepage = () => {
  return (
    <div className="app">
      <main className="main-content">
        <h1>GitHub Actions Demo</h1>
        <div className="card">
          <p className="highlight">
            This website is automatically deployed using GitHub Actions! 🚀
          </p>
          
          <div className="info-section">
            <h2>Part of the DevOps Tutorial Series</h2>
            <div className="features">
              <h3>Learn how to:</h3>
              <ul>
                <li>Set up GitHub Actions for automated deployment</li>
                <li>Configure AWS S3 for static website hosting</li>
                <li>Implement CI/CD pipeline for your React projects</li>
                <li>Manage AWS credentials securely</li>
              </ul>
            </div>
          </div>

          <div className="button-group">
            <a href="https://medium.com/your-profile" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="button primary">
              Read the Tutorial
            </a>
            <a href="https://github.com/your-username/your-repo" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="button secondary">
              View Source
            </a>
          </div>
        </div>

        <footer>
          <p>Created as part of a tutorial demonstrating automated deployment using GitHub Actions to AWS S3</p>
        </footer>
      </main>
    </div>
  );
};

export default Homepage;