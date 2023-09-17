// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Create the Home component
const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>This is the home page of my website.</p>

      <ul>
        <li>
          <Link to="/logi ">login</Link>
        </li>
        <li>
          <Link to="/logout">logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
