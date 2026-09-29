import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import VerifiedBanner from './components/VerifiedBanner';
import CandidateCard from './components/CandidateCard';
import ResultsTable from './components/ResultsTable';
import Footer from './components/Footer';
import { fetchCertificateData } from './services/api';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setLoading(true);
        const result = await fetchCertificateData();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        {loading && (
          <div className="state-container">
            <div className="spinner" />
            <p>Loading certificate verification...</p>
          </div>
        )}

        {error && !loading && (
          <div className="state-container error">
            <p>Error retrieving certificate: {error}</p>
          </div>
        )}

        {!loading && data && (
          <>
            <a href="#" className="back-to-home" onClick={(e) => e.preventDefault()}>
              ← Back to Home
            </a>
            <VerifiedBanner message={data.verificationMessage} />
            <CandidateCard candidate={data.candidate} />
            <ResultsTable results={data.results} />
          </>
        )}
      </main>

      <Footer copyright={data?.issuer?.copyright} />
    </div>
  );
}
