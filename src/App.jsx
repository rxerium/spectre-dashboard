import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-space-black overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            {/* Monitoring */}
            <Route path="/uptime" element={<ComingSoon title="Uptime Monitoring" />} />
            <Route path="/performance" element={<ComingSoon title="Performance Monitoring" />} />
            <Route path="/cdn" element={<ComingSoon title="CDN Health" />} />

            {/* Security */}
            <Route path="/ssl" element={<ComingSoon title="SSL/TLS Analysis" />} />
            <Route path="/malware" element={<ComingSoon title="Malware Detection" />} />
            <Route path="/zeroday" element={<ComingSoon title="Zero-Day Monitor" />} />
            <Route path="/blacklist" element={<ComingSoon title="Blacklist Check" />} />

            {/* Domain */}
            <Route path="/dns" element={<ComingSoon title="DNS Monitoring" />} />
            <Route path="/subdomains" element={<ComingSoon title="Subdomain Enumeration" />} />
            <Route path="/whois" element={<ComingSoon title="WHOIS Monitoring" />} />
            <Route path="/domain-expiration" element={<ComingSoon title="Domain Expiration" />} />
            <Route path="/email-security" element={<ComingSoon title="Email Security" />} />
            <Route path="/cert-transparency" element={<ComingSoon title="Certificate Transparency" />} />
            <Route path="/ssl-expiry" element={<ComingSoon title="SSL Expiry Monitoring" />} />
            <Route path="/whois-privacy" element={<ComingSoon title="WHOIS Privacy" />} />
            <Route path="/dns-spoofing" element={<ComingSoon title="DNS Spoofing Detection" />} />
            <Route path="/tls-config" element={<ComingSoon title="TLS Configuration" />} />

            {/* Infrastructure */}
            <Route path="/database" element={<ComingSoon title="Database Connections" />} />
            <Route path="/dependencies" element={<ComingSoon title="Dependencies" />} />
            <Route path="/api-rate-limits" element={<ComingSoon title="API Rate Limits" />} />
            <Route path="/uptime-trends" element={<ComingSoon title="Uptime Trends" />} />
            <Route path="/ssl-renewal" element={<ComingSoon title="SSL Renewal Tracker" />} />

            {/* Special */}
            <Route path="/btc" element={<ComingSoon title="Bitcoin Price Monitor" />} />
            <Route path="/website" element={<ComingSoon title="Website Monitor" />} />
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
      <p className="text-gray-500">API endpoint ready - UI coming soon</p>
    </div>
  </div>
);

export default App;
