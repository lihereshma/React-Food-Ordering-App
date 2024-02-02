import React from 'react';
import ReactDOM from 'react-dom/client';

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">React 2024</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);