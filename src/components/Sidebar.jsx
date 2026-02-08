import { Link, useLocation } from 'react-router-dom';
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
      ],
    },
    {
      title: 'SECURITY',
      items: [
        { path: '/ports', label: 'Port Scanning', icon: Network },
        { path: '/vulnerabilities', label: 'Vulnerabilities', icon: AlertTriangle },
        { path: '/ssl', label: 'SSL/TLS', icon: Lock },
        { path: '/malware', label: 'Malware Detection', icon: Shield },
        { path: '/ip-reputation', label: 'IP Reputation', icon: Search },
      ],
    },
    {
      title: 'DOMAIN',
      items: [
        { path: '/dns', label: 'DNS', icon: Globe },
        { path: '/subdomains', label: 'Subdomains', icon: Network },
        { path: '/whois', label: 'WHOIS', icon: FileText },
        { path: '/cert-transparency', label: 'Cert Transparency', icon: Lock },
        { path: '/email-security', label: 'Email Security', icon: Shield },
      ],
    },
    {
      title: 'INFRASTRUCTURE',
      items: [
        { path: '/cdn', label: 'CDN Health', icon: Zap },
        { path: '/database', label: 'Database', icon: Database },
        { path: '/dependencies', label: 'Dependencies', icon: FileText },
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
