import { useState, useEffect } from 'react';
import { Network, RefreshCw, Download } from 'lucide-react';
import PortList from '../components/PortList';
import TagsInput from '../components/TagsInput';
import Notes from '../components/Notes';
import spectreApi from '../services/api';

const PortScanning = () => {
  const [loading, setLoading] = useState(false);
  const [scanData, setScanData] = useState(null);
  const [tags, setTags] = useState(['Network', 'Infrastructure']);
  const [notes, setNotes] = useState('');

  // Mock data for demonstration (replace with API call when available)
  const mockPorts = [
    { port: 22, service: 'ssh', version: 'OpenSSH 8.4p1 Debian 5+deb11u5' },
    { port: 53, service: 'domain', version: 'dnsmasq UNKNOWN' },
    { port: 80, service: 'http', version: 'nginx' },
    { port: 443, service: 'https', version: 'nginx' },
    { port: 7443, service: 'oraclea-https' },
    { port: 8080, service: 'http', version: 'Apache Tomcat' },
    { port: 8880, service: 'http' },
  ];

  const handleScan = async () => {
    setLoading(true);
    try {
      const response = await spectreApi.checkPorts();
      setScanData(response.data);
    } catch (error) {
      console.error('Error fetching port scan:', error);
      // Use mock data on error
      setTimeout(() => {
        setScanData({ ports: mockPorts, lastScan: new Date().toISOString() });
        setLoading(false);
      }, 1500);
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
    // Initial load
    setScanData({ ports: mockPorts, lastScan: new Date().toISOString() });
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <Network className="text-purple-glow" size={32} />
            <h1 className="text-3xl font-bold text-white glow-text">Port Scanning</h1>
          </div>
          <p className="text-gray-500">Discover open ports and running services</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleScan}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-glow/20 hover:bg-purple-glow/30 text-purple-glow rounded-lg transition-colors disabled:opacity-50"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            <span>{loading ? 'Scanning...' : 'Scan Now'}</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-glow/20 hover:bg-cyan-glow/30 text-cyan-glow rounded-lg transition-colors">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="scan-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Scan Results</h2>
              {scanData && (
                <span className="text-sm text-gray-500">
                  Last scan: {new Date(scanData.lastScan).toLocaleString()}
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-space-black/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-cyan-glow">
                  {scanData?.ports?.length || 0}
                </div>
                <div className="text-xs text-gray-500 mt-1">Open Ports</div>
              </div>
              <div className="bg-space-black/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-open">
                  {scanData?.ports?.filter(p => p.service).length || 0}
                </div>
                <div className="text-xs text-gray-500 mt-1">Identified Services</div>
              </div>
              <div className="bg-space-black/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-amber-warn">0</div>
                <div className="text-xs text-gray-500 mt-1">Critical Issues</div>
              </div>
            </div>
          </div>

          <PortList ports={scanData?.ports || []} />
        </div>

        <div className="space-y-6">
          <div className="scan-card">
            <h3 className="text-xs text-gray-500 font-bold mb-3">STATUS</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Scan Mode</span>
                <span className="text-sm text-cyan-glow font-bold">FULL</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Duration</span>
                <span className="text-sm text-white">2.3s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Ports Scanned</span>
                <span className="text-sm text-white">65,535</span>
              </div>
            </div>
          </div>

          <TagsInput tags={tags} onTagsChange={setTags} />
          <Notes notes={notes} onNotesChange={setNotes} />

          <div className="scan-card">
            <h3 className="text-xs text-gray-500 font-bold mb-3">ACTIONS</h3>
            <button className="w-full px-4 py-3 bg-green-open/20 hover:bg-green-open/30 text-green-open rounded-lg transition-colors flex items-center justify-center space-x-2">
              <Network size={18} />
              <span>Deep Scan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortScanning;
