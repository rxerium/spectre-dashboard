import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import UptimeMonitoring from './pages/UptimeMonitoring';
import PerformanceMonitoring from './pages/PerformanceMonitoring';
import CDNHealth from './pages/CDNHealth';
import SSLAnalysis from './pages/SSLAnalysis';
import MalwareDetection from './pages/MalwareDetection';
import ZeroDayMonitor from './pages/ZeroDayMonitor';
import BlacklistCheck from './pages/BlacklistCheck';
import DNSMonitoring from './pages/DNSMonitoring';
import SubdomainEnumeration from './pages/SubdomainEnumeration';
import WHOISMonitoring from './pages/WHOISMonitoring';
import DomainExpiration from './pages/DomainExpiration';
import EmailSecurity from './pages/EmailSecurity';
import CertificateTransparency from './pages/CertificateTransparency';
import SSLExpiry from './pages/SSLExpiry';
import WHOISPrivacy from './pages/WHOISPrivacy';
import DNSSpoofing from './pages/DNSSpoofing';
import TLSConfig from './pages/TLSConfig';
import DatabaseConnections from './pages/DatabaseConnections';
import Dependencies from './pages/Dependencies';
import APIRateLimits from './pages/APIRateLimits';
import UptimeTrends from './pages/UptimeTrends';
import SSLRenewal from './pages/SSLRenewal';
import BTCMonitor from './pages/BTCMonitor';
import WebsiteMonitor from './pages/WebsiteMonitor';
import APITest from "./pages/APITest";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-space-black overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/api-test" element={<APITest />} />

            {/* Monitoring */}
            <Route path="/uptime" element={<UptimeMonitoring />} />
            <Route path="/performance" element={<PerformanceMonitoring />} />
            <Route path="/cdn" element={<CDNHealth />} />

            {/* Security */}
            <Route path="/ssl" element={<SSLAnalysis />} />
            <Route path="/malware" element={<MalwareDetection />} />
            <Route path="/zeroday" element={<ZeroDayMonitor />} />
            <Route path="/blacklist" element={<BlacklistCheck />} />

            {/* Domain */}
            <Route path="/dns" element={<DNSMonitoring />} />
            <Route path="/subdomains" element={<SubdomainEnumeration />} />
            <Route path="/whois" element={<WHOISMonitoring />} />
            <Route path="/domain-expiration" element={<DomainExpiration />} />
            <Route path="/email-security" element={<EmailSecurity />} />
            <Route path="/cert-transparency" element={<CertificateTransparency />} />
            <Route path="/ssl-expiry" element={<SSLExpiry />} />
            <Route path="/whois-privacy" element={<WHOISPrivacy />} />
            <Route path="/dns-spoofing" element={<DNSSpoofing />} />
            <Route path="/tls-config" element={<TLSConfig />} />

            {/* Infrastructure */}
            <Route path="/database" element={<DatabaseConnections />} />
            <Route path="/dependencies" element={<Dependencies />} />
            <Route path="/api-rate-limits" element={<APIRateLimits />} />
            <Route path="/uptime-trends" element={<UptimeTrends />} />
            <Route path="/ssl-renewal" element={<SSLRenewal />} />

            {/* Special */}
            <Route path="/btc" element={<BTCMonitor />} />
            <Route path="/website" element={<WebsiteMonitor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
