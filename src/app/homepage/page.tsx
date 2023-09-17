// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Create the Home component
const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Website</h1>
 
      <ul>
        <li>
          <Link to="/login ">login</Link>
        </li>
        <li>
          <Link to="/logout">logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
