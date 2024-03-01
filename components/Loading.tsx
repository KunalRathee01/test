
import React from 'react';

import './styles.css';

// Your component
const Loader: React.FC = () => {
  return (
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 animate-spin"></div>
  );
};

export default Loader;
