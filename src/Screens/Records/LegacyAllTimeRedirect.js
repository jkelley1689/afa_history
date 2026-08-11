import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const LegacyAllTimeRedirect = () => {
  const { statType = 'Passing' } = useParams();

  return <Navigate to={`/Records/All-Time/${statType}`} replace />;
};

export default LegacyAllTimeRedirect;
