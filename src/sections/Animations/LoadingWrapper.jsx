import React, { useState, useEffect } from 'react';
import LoadingAnimation from './Loading';

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return <>{children}</>;
};

export default LoadingWrapper;