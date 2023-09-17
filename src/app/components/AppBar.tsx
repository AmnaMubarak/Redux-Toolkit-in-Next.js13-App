// components/RootLayout.tsx

import Navbar from './navbar'; // Import the Navbar component
import home from './home'; // Import the Home component
import HomePage from './home';
interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Include the Navbar component */}
        <HomePage />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
