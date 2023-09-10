import React from 'react';

function AcceptedStatus({ candidate }) {
  return (
    <div className="status-card accepted">
      <h2>{candidate.name}</h2>
      <p>Last Updated: {candidate.last_updated_at}</p>
      <p>Gender: {candidate.gender}</p>
      <p>Location: {candidate.location}</p>
      <p>Status: {candidate.status}</p>
    </div>
  );
}

export default AcceptedStatus;
