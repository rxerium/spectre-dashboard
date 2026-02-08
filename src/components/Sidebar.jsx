import { Link, useLocation } from 'react-router-dom';
import {
  Activity,
  Shield,
  Globe,
  Lock,
  Database,
  AlertTriangle,
  Network,
  FileText,
  Zap,
  Mail,
  TrendingUp,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navGroups = [
    {
      title: 'MONITORING',
      items: [
        { path: '/', label: 'Dashboard', icon: Activity },
        { path: '/uptime', label: 'Uptime', icon: Zap },
        { path: '/performance', label: 'Performance', icon: Activity },
        { path: '/cdn', label: 'CDN Health', icon: Zap },
      ],
    },
    {
      title: 'SECURITY',
      items: [
        { path: '/ssl', label: 'SSL/TLS', icon: Lock },
        { path: '/malware', label: 'Malware', icon: Shield },
        { path: '/zeroday', label: 'Zero-Day', icon: AlertTriangle },
        { path: '/blacklist', label: 'Blacklist', icon: Shield },
      ],
    },
    {
      title: 'DOMAIN',
      items: [
        { path: '/dns', label: 'DNS', icon: Globe },
        { path: '/subdomains', label: 'Subdomains', icon: Network },
        { path: '/whois', label: 'WHOIS', icon: FileText },
        { path: '/domain-expiration', label: 'Expiration', icon: AlertTriangle },
        { path: '/email-security', label: 'Email', icon: Mail },
        { path: '/cert-transparency', label: 'Certificates', icon: Lock },
      ],
    },
    {
      title: 'INFRASTRUCTURE',
      items: [
        { path: '/database', label: 'Database', icon: Database },
        { path: '/dependencies', label: 'Dependencies', icon: FileText },
        { path: '/api-rate-limits', label: 'Rate Limits', icon: Zap },
        { path: '/uptime-trends', label: 'Trends', icon: TrendingUp },
      ],
    },
  ];

  return (
    <div className="w-64 bg-space-navy border-r border-purple-glow/20 h-screen overflow-y-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-cyan-glow glow-text">SPECTRE</h1>
        <p className="text-xs text-gray-500 mt-1">Security Monitoring</p>
      </div>

      {navGroups.map((group) => (
        <div key={group.title} className="mb-6">
          <h3 className="text-xs text-gray-500 font-bold mb-3">{group.title}</h3>
          <div className="space-y-1">
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-glow/20 text-cyan-glow border-l-2 border-cyan-glow'
                      : 'text-gray-400 hover:text-cyan-glow hover:bg-space-blue'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
