import React, { useState } from 'react';

function WebsiteStatusChecker() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const checkStatus = async () => {
    setStatus(null);
    setError(null);

    try {
      const response = await fetch(url, { method: 'GET' });
      setStatus(`Status Code: ${response.status}`);
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Website Status Checker</h2>
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: '300px', padding: '8px' }}
      />
      <button onClick={checkStatus} style={{ marginLeft: '10px', padding: '8px 16px' }}>
        Check Status
      </button>
      <div style={{ marginTop: '20px' }}>
        {status && <p>{status}</p>}
        {error && <p style={{ color: 'red' }}>{error} from {url}</p>}
      </div>
    </div>
  );
}

export default WebsiteStatusChecker;
