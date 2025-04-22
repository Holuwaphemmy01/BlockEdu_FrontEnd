
import { LineSpinner } from 'ldrs/react'
import React from 'react';
import 'ldrs/react/LineSpinner.css'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-600 ">
      <LineSpinner
        size={60}
        stroke={3}
        speed={1}
        color="black"
      />
    </div>
  );
};

export default Loader;
