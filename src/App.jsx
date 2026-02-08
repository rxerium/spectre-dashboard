import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PortScanning from './pages/PortScanning';
import Vulnerabilities from './pages/Vulnerabilities';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-space-black overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ports" element={<PortScanning />} />
            <Route path="/vulnerabilities" element={<Vulnerabilities />} />
            <Route path="/uptime" element={<ComingSoon title="Uptime Monitoring" />} />
            <Route path="/performance" element={<ComingSoon title="Performance" />} />
            <Route path="/ssl" element={<ComingSoon title="SSL/TLS Analysis" />} />
            <Route path="/malware" element={<ComingSoon title="Malware Detection" />} />
            <Route path="/ip-reputation" element={<ComingSoon title="IP Reputation" />} />
            <Route path="/dns" element={<ComingSoon title="DNS Monitoring" />} />
            <Route path="/subdomains" element={<ComingSoon title="Subdomain Enumeration" />} />
            <Route path="/whois" element={<ComingSoon title="WHOIS Monitoring" />} />
            <Route
              path="/cert-transparency"
              element={<ComingSoon title="Certificate Transparency" />}
            />
            <Route path="/email-security" element={<ComingSoon title="Email Security" />} />
            <Route path="/cdn" element={<ComingSoon title="CDN Health" />} />
            <Route path="/database" element={<ComingSoon title="Database Connections" />} />
            <Route path="/dependencies" element={<ComingSoon title="Dependencies" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const ComingSoon = ({ title }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cyan-glow glow-text mb-4">{title}</h1>
      <p className="text-gray-500">Coming soon...</p>
    </div>
  </div>
);

export default App;
