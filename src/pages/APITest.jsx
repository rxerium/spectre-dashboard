import { useState } from 'react';
import { Activity } from 'lucide-react';
import spectreApi from '../services/api';

const APITest = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const response = await spectreApi.checkUptime();
      setResult('SUCCESS:\n' + JSON.stringify(response.data, null, 2));
    } catch (error) {
      setResult('ERROR:\n' + 
        'Message: ' + error.message + '\n' +
        'Response: ' + JSON.stringify(error.response?.data, null, 2) + '\n' +
        'Status: ' + error.response?.status + '\n' +
        'Full Error: ' + JSON.stringify(error, null, 2));
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <div className="scan-card">
        <h1 className="text-2xl font-bold text-white mb-4">API Connection Test</h1>
        <button
          onClick={testAPI}
          disabled={loading}
          className="px-4 py-2 bg-cyan-glow/20 hover:bg-cyan-glow/30 text-cyan-glow rounded-lg"
        >
          {loading ? 'Testing...' : 'Test API'}
        </button>
        {result && (
          <pre className="mt-4 p-4 bg-space-black/50 rounded-lg text-sm text-gray-300 overflow-auto">
            {result}
          </pre>
        )}
      </div>
    </div>
  );
};

export default APITest;
