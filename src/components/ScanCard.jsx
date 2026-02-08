import { ArrowRight, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScanCard = ({ title, description, path, icon: Icon, status = 'idle', lastRun, stats }) => {
  const statusConfig = {
    idle: { color: 'text-gray-400', bg: 'bg-gray-400/10', label: 'Idle' },
    running: { color: 'text-cyan-glow', bg: 'bg-cyan-glow/10', label: 'Running' },
    success: { color: 'text-green-open', bg: 'bg-green-open/10', label: 'Healthy' },
    warning: { color: 'text-amber-warn', bg: 'bg-amber-warn/10', label: 'Warning' },
    critical: { color: 'text-pink-critical', bg: 'bg-pink-critical/10', label: 'Critical' },
  };

  const statusInfo = statusConfig[status] || statusConfig.idle;

  return (
    <div className="scan-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-purple-glow/10 rounded-lg">
            <Icon className="text-purple-glow" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${statusInfo.bg} ${statusInfo.color}`}>
          {statusInfo.label}
        </div>
      </div>

      {stats && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`text-2xl font-bold ${stat.color || 'text-cyan-glow'}`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-purple-glow/10">
        {lastRun && (
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Clock size={14} />
            <span>Last run: {lastRun}</span>
          </div>
        )}
        <Link
          to={path}
          className="flex items-center space-x-2 text-cyan-glow hover:text-purple-glow transition-colors duration-200 ml-auto"
        >
          <span className="text-sm font-semibold">View Details</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ScanCard;
