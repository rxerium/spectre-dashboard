import { useState, useEffect } from 'react';
import { RefreshCw, Download } from 'lucide-react';

const ScanResultPage = ({ title, description, icon: Icon, fetchFunction, renderData }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchFunction();
      setData(response.data);
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data || err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleExport = () => {
    if (!data) return;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <Icon className="text-purple-glow" size={32} />
            <h1 className="text-3xl font-bold text-white glow-text">{title}</h1>
          </div>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-glow/20 hover:bg-purple-glow/30 text-purple-glow rounded-lg transition-colors disabled:opacity-50"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            <span>{loading ? 'Loading...' : 'Refresh'}</span>
          </button>
          <button
            onClick={handleExport}
            disabled={!data}
            className="flex items-center space-x-2 px-4 py-2 bg-cyan-glow/20 hover:bg-cyan-glow/30 text-cyan-glow rounded-lg transition-colors disabled:opacity-50"
          >
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="scan-card mb-6 border-l-4 border-pink-critical">
          <h3 className="text-pink-critical font-bold mb-2">Error</h3>
          <pre className="text-sm text-gray-400 overflow-auto">{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}

      {loading && !data && (
        <div className="flex items-center justify-center h-64">
          <RefreshCw className="animate-spin text-cyan-glow" size={48} />
        </div>
      )}

      {data && renderData(data)}
    </div>
  );
};

export default ScanResultPage;
