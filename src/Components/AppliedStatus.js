import React from 'react';

function AppliedStatus({ candidate }) {
  return (
    <div className="status-card applied">
      <h2>{candidate.name}</h2>
      <p>
      <img
          src="https://via.placeholder.com/18x18"
          alt="Custom Icon"
          className="custom-icon"
       />{" "}
      Last Updated: {candidate.last_updated_at}</p>
      <p>Gender: {candidate.gender}</p>
      <p>Location: {candidate.location}</p>
      <p>Status: {candidate.status}</p>
    </div>
  );
}

export default AppliedStatus;
