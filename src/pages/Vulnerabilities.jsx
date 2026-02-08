import { useState, useEffect } from 'react';
import { AlertTriangle, RefreshCw, Download, ExternalLink } from 'lucide-react';
import spectreApi from '../services/api';

const Vulnerabilities = () => {
  const [loading, setLoading] = useState(false);
  const [cveQuery, setCveQuery] = useState('');
  const [cveData, setCveData] = useState(null);

  // Mock vulnerability data
  const mockVulnerabilities = [
    {
      id: 'CVE-2024-1234',
      severity: 'critical',
      title: 'Remote Code Execution in Apache Tomcat',
      cvss: 9.8,
      published: '2024-01-15',
      affected: 'Apache Tomcat 9.0.0 - 9.0.82',
    },
    {
      id: 'CVE-2024-5678',
      severity: 'high',
      title: 'Authentication Bypass in OpenSSH',
      cvss: 7.5,
      published: '2024-02-01',
      affected: 'OpenSSH 8.0 - 8.4',
    },
    {
      id: 'CVE-2023-9012',
      severity: 'medium',
      title: 'Cross-Site Scripting in nginx',
      cvss: 5.4,
      published: '2023-12-20',
      affected: 'nginx 1.20.0 - 1.20.2',
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'text-pink-critical bg-pink-critical/20 border-pink-critical';
      case 'high':
        return 'text-amber-warn bg-amber-warn/20 border-amber-warn';
      case 'medium':
        return 'text-amber-warn bg-amber-warn/10 border-amber-warn/50';
      case 'low':
        return 'text-green-open bg-green-open/10 border-green-open/50';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400';
    }
  };

  const handleCVEQuery = async () => {
    if (!cveQuery.trim()) return;
    setLoading(true);
    try {
      const response = await spectreApi.getCVE(cveQuery);
      setCveData(response.data);
    } catch (error) {
      console.error('Error fetching CVE:', error);
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <AlertTriangle className="text-pink-critical" size={32} />
            <h1 className="text-3xl font-bold text-white glow-text">
              Vulnerability Scanner
            </h1>
          </div>
          <p className="text-gray-500">CVE monitoring and threat intelligence</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-glow/20 hover:bg-cyan-glow/30 text-cyan-glow rounded-lg transition-colors">
          <Download size={18} />
          <span>Export Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="scan-card">
          <div className="text-3xl font-bold text-pink-critical">
            {mockVulnerabilities.filter((v) => v.severity === 'critical').length}
          </div>
          <div className="text-xs text-gray-500 mt-1">Critical</div>
        </div>
        <div className="scan-card">
          <div className="text-3xl font-bold text-amber-warn">
            {mockVulnerabilities.filter((v) => v.severity === 'high').length}
          </div>
          <div className="text-xs text-gray-500 mt-1">High</div>
        </div>
        <div className="scan-card">
          <div className="text-3xl font-bold text-cyan-glow">
            {mockVulnerabilities.length}
          </div>
          <div className="text-xs text-gray-500 mt-1">Total Vulnerabilities</div>
        </div>
      </div>

      <div className="scan-card mb-6">
        <h2 className="text-xl font-bold text-white mb-4">CVE Lookup</h2>
        <div className="flex space-x-3">
          <input
            type="text"
            value={cveQuery}
            onChange={(e) => setCveQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleCVEQuery()}
            placeholder="Enter CVE ID (e.g., CVE-2025-54253)"
            className="flex-1 bg-space-black/50 border border-purple-glow/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-glow transition-colors"
          />
          <button
            onClick={handleCVEQuery}
            disabled={loading}
            className="px-6 py-3 bg-purple-glow/20 hover:bg-purple-glow/30 text-purple-glow rounded-lg transition-colors disabled:opacity-50 flex items-center space-x-2"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            <span>Query</span>
          </button>
        </div>
        {cveData && (
          <div className="mt-4 p-4 bg-space-black/50 rounded-lg">
            <pre className="text-xs text-gray-300 overflow-auto">
              {JSON.stringify(cveData, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <div className="scan-card">
        <h2 className="text-xl font-bold text-white mb-4">Detected Vulnerabilities</h2>
        <div className="space-y-3">
          {mockVulnerabilities.map((vuln, idx) => (
            <div
              key={idx}
              className="p-4 bg-space-black/50 rounded-lg border-l-4 hover:bg-space-black transition-colors"
              style={{
                borderLeftColor:
                  vuln.severity === 'critical'
                    ? '#ff4d6d'
                    : vuln.severity === 'high'
                    ? '#fbbf24'
                    : '#00d9ff',
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${getSeverityColor(
                        vuln.severity
                      )}`}
                    >
                      {vuln.severity.toUpperCase()}
                    </span>
                    <span className="text-sm text-cyan-glow font-mono">{vuln.id}</span>
                    <span className="text-sm text-gray-500">
                      CVSS: <span className="text-white font-bold">{vuln.cvss}</span>
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{vuln.title}</h3>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Published: {vuln.published}</span>
                    <span>Affected: {vuln.affected}</span>
                  </div>
                </div>
                <button className="text-cyan-glow hover:text-purple-glow transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vulnerabilities;
