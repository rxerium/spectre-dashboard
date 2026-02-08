import { useState, useEffect } from 'react';
import { RefreshCw, Download, Search } from 'lucide-react';

const ScanResultPage = ({
  title,
  description,
  icon: Icon,
  fetchFunction,
  renderData,
  supportsDomain = false,
  defaultDomain = ''
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [domain, setDomain] = useState(defaultDomain);

  const fetchData = async (domainOverride = null) => {
    setLoading(true);
    setError(null);
    try {
      const domainToUse = domainOverride !== null ? domainOverride : domain;
      const response = await fetchFunction(domainToUse);
      setData(response.data);
    } catch (err) {
      console.error('Error:', err);
      const errorMessage = err.response?.data?.message || err.response?.data || err.message;
      setError({
        message: errorMessage,
        status: err.response?.status,
        fullError: err
      });
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

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(domain);
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
            onClick={() => fetchData()}
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

      {supportsDomain && (
        <form onSubmit={handleSearch} className="scan-card mb-6">
          <label className="block text-sm text-gray-400 mb-2">
            Domain (optional - leave empty to scan all)
          </label>
          <div className="flex space-x-3">
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="example.com"
              className="flex-1 bg-space-black/50 border border-purple-glow/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-glow transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-2 px-6 py-3 bg-cyan-glow/20 hover:bg-cyan-glow/30 text-cyan-glow rounded-lg transition-colors disabled:opacity-50"
            >
              <Search size={18} />
              <span>Scan</span>
            </button>
          </div>
        </form>
      )}

      {error && (
        <div className="scan-card mb-6 border-l-4 border-pink-critical">
          <h3 className="text-pink-critical font-bold mb-2">Error</h3>
          {error.status && <p className="text-sm text-gray-400 mb-2">Status: {error.status}</p>}
          <p className="text-sm text-gray-300">{error.message}</p>
          {error.status === undefined && (
            <p className="text-xs text-gray-500 mt-2">
              Network error - check if API is accessible or CORS is configured
            </p>
          )}
        </div>
      )}

      {loading && !data && (
        <div className="flex items-center justify-center h-64">
          <RefreshCw className="animate-spin text-cyan-glow" size={48} />
        </div>
      )}

      {data && !loading && renderData(data)}

      {!data && !loading && !error && (
        <div className="scan-card text-center text-gray-500">
          Click Refresh to load data
        </div>
      )}
    </div>
  );
};

export default ScanResultPage;
