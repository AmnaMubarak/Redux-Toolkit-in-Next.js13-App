
import Navbar from './navbar'; // Import the Navbar component
import HomePage from './home';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../redux/store';
import authReducer from "../redux/features/auth-slice"

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {

  const username = useAppSelector((state) => state.authReducer.value.username);
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Include the Navbar component */}
        {/* <HomePage /> */}
        {children}
        <h1>Username : {} </h1>
      </body>
    </html>
  );
};

export default RootLayout;
