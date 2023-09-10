import React, { useState, useEffect } from 'react';
import CandidateCard from './Components/CandidateCard';
import AcceptedStatus from './Components/AcceptedStatus';
import AppliedStatus from './Components/AppliedStatus';
import RejectedStatus from './Components/RejectedStatus';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

  function App() {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    // Fetch data from your API and set it in the candidates state
    fetch('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d')
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data);
        setFilteredCandidates(data); // Initially, show all candidates
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
    
  // const [candidates, setCandidates] = useState(hardcodedData.data);
  // const [filteredCandidates, setFilteredCandidates] = useState(hardcodedData.data);
  // const [statusFilter, setStatusFilter] = useState('All');
      
  useEffect(() => {
    if (statusFilter === 'All') {
      setFilteredCandidates(candidates);
    } else {
      const filtered = candidates.filter((candidate) => candidate.status === statusFilter);
      setFilteredCandidates(filtered);
    }
  }, [statusFilter, candidates]);

  return (
    <div className="container">
      <b><h1 className="text-center mt-4">Candidate Dashboard</h1></b>
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn btn-primary mr-2 ${
            statusFilter === 'All' ? 'active' : ''
          }`}
          onClick={() => setStatusFilter('All')}
        >
          All
        </button>
        <button
          className={`btn btn-primary mr-2 ${
            statusFilter === 'Applied' ? 'active' : ''
          }`}
          onClick={() => setStatusFilter('Applied')}
        >
          Applied
        </button>
        <button
          className={`btn btn-primary mr-2 ${
            statusFilter === 'Accepted' ? 'active' : ''
          }`}
          onClick={() => setStatusFilter('Accepted')}
        >
          Accepted
        </button>
        <button
          className={`btn btn-primary ${
            statusFilter === 'Rejected' ? 'active' : ''
          }`}
          onClick={() => setStatusFilter('Rejected')}
        >
          Rejected
        </button>
      </div>
      {filteredCandidates.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {filteredCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className={`col-md-4 mb-3 candidate-card status-${candidate.status}`}
            >
              <div className="card">
                <div className="card-body">
                  <b><h5 className="card-title">{candidate.name}</h5></b>
                  <p className="card-text">
                    <img
                      src="https://via.placeholder.com/18x18"
                      alt="Custom Icon"
                      className="custom-icon"
                    />{' '}
                    {candidate.last_updated_at}
                  </p>
                  <p className="card-text">
                    <img
                      src="https://via.placeholder.com/18x18"
                      alt="Custom Icon"
                      className="custom-icon"
                    />{' '}
                    {candidate.location}
                  </p>
                  <p className="card-text">
                    <img
                      src="https://via.placeholder.com/18x18"
                      alt="Custom Icon"
                      className="custom-icon"
                    />{' '}
                    {candidate.gender}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <br />
      <div className="text-center">
        <b>Made By Harshit with 💗</b>
      </div>
    </div>
  );
}

export default App;

