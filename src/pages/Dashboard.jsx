import { useState, useEffect } from 'react';
import ScanCard from '../components/ScanCard';
import {
  Activity,
  Shield,
  Globe,
  Lock,
  Database,
  AlertTriangle,
  Network,
  Search,
  FileText,
  Zap,
  Mail,
  Bug,
} from 'lucide-react';
import spectreApi from '../services/api';

const Dashboard = () => {
  const [statusData, setStatusData] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await spectreApi.getStatus();
        setStatusData(response.data);
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };
    fetchStatus();
  }, []);

  const scanCategories = [
    {
      title: 'Monitoring',
      scans: [
        {
          title: 'Uptime Monitoring',
          description: 'Website availability checks',
          path: '/uptime',
          icon: Zap,
          status: 'success',
          lastRun: '5 min ago',
          stats: [
            { value: '99.9%', label: 'Uptime', color: 'text-green-open' },
            { value: '234ms', label: 'Avg Response', color: 'text-cyan-glow' },
            { value: '0', label: 'Incidents', color: 'text-green-open' },
          ],
        },
        {
          title: 'Performance',
          description: 'Website performance metrics',
          path: '/performance',
          icon: Activity,
          status: 'success',
          lastRun: '10 min ago',
        },
        {
          title: 'CDN Health',
          description: 'CDN performance monitoring',
          path: '/cdn',
          icon: Zap,
          status: 'success',
          lastRun: '15 min ago',
        },
      ],
    },
    {
      title: 'Security Monitoring',
      scans: [
        {
          title: 'SSL/TLS Analysis',
          description: 'Certificate and TLS configuration',
          path: '/ssl',
          icon: Lock,
          status: 'success',
          lastRun: '30 min ago',
        },
        {
          title: 'Malware Detection',
          description: 'Malware and suspicious content',
          path: '/malware',
          icon: Shield,
          status: 'success',
          lastRun: '1 hour ago',
        },
        {
          title: 'Zero-Day Monitor',
          description: 'Zero-day vulnerability tracking',
          path: '/zeroday',
          icon: AlertTriangle,
          status: 'success',
          lastRun: '1 day ago',
        },
        {
          title: 'Blacklist Check',
          description: 'Domain blacklist monitoring',
          path: '/blacklist',
          icon: Shield,
          status: 'success',
          lastRun: '3 hours ago',
        },
      ],
    },
    {
      title: 'Domain Monitoring',
      scans: [
        {
          title: 'DNS Monitoring',
          description: 'DNS record change detection',
          path: '/dns',
          icon: Globe,
          status: 'success',
          lastRun: '20 min ago',
        },
        {
          title: 'Subdomain Enumeration',
          description: 'Discover and monitor subdomains',
          path: '/subdomains',
          icon: Network,
          status: 'idle',
          lastRun: '1 day ago',
        },
        {
          title: 'WHOIS Monitoring',
          description: 'Domain registration changes',
          path: '/whois',
          icon: FileText,
          status: 'success',
          lastRun: '3 hours ago',
        },
        {
          title: 'Domain Expiration',
          description: 'Domain expiration tracking',
          path: '/domain-expiration',
          icon: AlertTriangle,
          status: 'success',
          lastRun: '1 day ago',
        },
        {
          title: 'SSL Expiry',
          description: 'SSL certificate expiration alerts',
          path: '/ssl-expiry',
          icon: Lock,
          status: 'success',
          lastRun: '1 hour ago',
        },
        {
          title: 'Certificate Transparency',
          description: 'SSL certificate monitoring',
          path: '/cert-transparency',
          icon: Lock,
          status: 'success',
          lastRun: '1 hour ago',
        },
        {
          title: 'Email Security',
          description: 'SPF, DKIM, DMARC validation',
          path: '/email-security',
          icon: Mail,
          status: 'success',
          lastRun: '2 hours ago',
        },
        {
          title: 'WHOIS Privacy',
          description: 'Privacy registration status',
          path: '/whois-privacy',
          icon: Shield,
          status: 'success',
          lastRun: '1 week ago',
        },
        {
          title: 'DNS Spoofing Detection',
          description: 'Detect DNS spoofing attacks',
          path: '/dns-spoofing',
          icon: AlertTriangle,
          status: 'success',
          lastRun: '6 hours ago',
        },
      ],
    },
    {
      title: 'Infrastructure',
      scans: [
        {
          title: 'Database Connections',
          description: 'Database health monitoring',
          path: '/database',
          icon: Database,
          status: 'success',
          lastRun: '5 min ago',
        },
        {
          title: 'Dependencies',
          description: 'Outdated package detection',
          path: '/dependencies',
          icon: Bug,
          status: 'warning',
          lastRun: '1 day ago',
          stats: [
            { value: '23', label: 'Total', color: 'text-cyan-glow' },
            { value: '2', label: 'Outdated', color: 'text-amber-warn' },
          ],
        },
        {
          title: 'API Rate Limits',
          description: 'API rate limit usage tracking',
          path: '/api-rate-limits',
          icon: Zap,
          status: 'success',
          lastRun: '1 hour ago',
        },
        {
          title: 'SSL Renewal Tracker',
          description: 'SSL renewal timeline tracking',
          path: '/ssl-renewal',
          icon: Lock,
          status: 'success',
          lastRun: '1 day ago',
        },
        {
          title: 'Uptime Trends',
          description: 'Historical uptime patterns',
          path: '/uptime-trends',
          icon: Activity,
          status: 'success',
          lastRun: '1 day ago',
        },
      ],
    },
    {
      title: 'Special Monitors',
      scans: [
        {
          title: 'Bitcoin Price',
          description: 'BTC price monitoring',
          path: '/btc',
          icon: Activity,
          status: 'success',
          lastRun: '1 hour ago',
        },
        {
          title: 'Website Changes',
          description: 'Monitor website content changes',
          path: '/website',
          icon: Globe,
          status: 'idle',
          lastRun: '1 month ago',
        },
      ],
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 glow-text">
          Security Dashboard
        </h1>
        <p className="text-gray-500">
          Real-time security monitoring and threat detection
        </p>
      </div>

      {statusData && (
        <div className="mb-8 scan-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-cyan-glow">System Status</h2>
              <p className="text-sm text-gray-500 mt-1">
                {statusData.service} - {statusData.status}
              </p>
            </div>
            <div className="px-4 py-2 bg-green-open/20 text-green-open rounded-full text-sm font-bold">
              OPERATIONAL
            </div>
          </div>
        </div>
      )}

      {scanCategories.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-xs text-gray-500 font-bold mb-4">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.scans.map((scan, scanIdx) => (
              <ScanCard key={scanIdx} {...scan} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
