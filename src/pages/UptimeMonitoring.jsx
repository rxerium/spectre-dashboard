import { useState, useEffect } from 'react';
import { Zap, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import spectreApi from '../services/api';

const UptimeMonitoring = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await spectreApi.checkUptime();
      setData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const avgResponseTime = data?.uptime_checks?.reduce((acc, check) => acc + check.responseTime, 0) / (data?.uptime_checks?.length || 1);
  const allOnline = data?.uptime_checks?.every(check => check.online);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <Zap className="text-cyan-glow" size={32} />
            <h1 className="text-3xl font-bold text-white glow-text">Uptime Monitoring</h1>
          </div>
          <p className="text-gray-500">Real-time website availability checks</p>
        </div>
        <button
          onClick={fetchData}
          disabled={loading}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-glow/20 hover:bg-purple-glow/30 text-purple-glow rounded-lg transition-colors disabled:opacity-50"
        >
          <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          <span>Refresh</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="scan-card">
          <div className={`text-3xl font-bold ${allOnline ? 'text-green-open' : 'text-pink-critical'}`}>
            {data?.uptime_checks?.filter(c => c.online).length || 0}/{data?.uptime_checks?.length || 0}
          </div>
          <div className="text-xs text-gray-500 mt-1">Sites Online</div>
        </div>
        <div className="scan-card">
          <div className="text-3xl font-bold text-cyan-glow">
            {avgResponseTime ? Math.round(avgResponseTime) : 0}ms
          </div>
          <div className="text-xs text-gray-500 mt-1">Avg Response Time</div>
        </div>
        <div className="scan-card">
          <div className={`text-3xl font-bold ${allOnline ? 'text-green-open' : 'text-pink-critical'}`}>
            {allOnline ? 'OPERATIONAL' : 'ISSUES'}
          </div>
          <div className="text-xs text-gray-500 mt-1">Status</div>
        </div>
      </div>

      <div className="scan-card">
        <h2 className="text-xl font-bold text-white mb-4">Monitored Sites</h2>
        <div className="space-y-3">
          {data?.uptime_checks?.map((check, idx) => (
            <div
              key={idx}
              className="p-4 bg-space-black/50 rounded-lg flex items-center justify-between hover:bg-space-black transition-colors"
            >
              <div className="flex items-center space-x-4">
                {check.online ? (
                  <CheckCircle className="text-green-open" size={24} />
                ) : (
                  <XCircle className="text-pink-critical" size={24} />
                )}
                <div>
                  <h3 className="text-white font-semibold">{check.site}</h3>
                  <p className="text-sm text-gray-500">Status Code: {check.status}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-cyan-glow font-bold">{check.responseTime}ms</div>
                <div className="text-xs text-gray-500">Response Time</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UptimeMonitoring;
