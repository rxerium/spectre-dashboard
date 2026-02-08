import { Zap } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const APIRateLimits = () => {
  return (
    <ScanResultPage
      title="API Rate Limits"
      description="Monitor API rate limit usage"
      icon={Zap}
      fetchFunction={spectreApi.checkAPIRateLimits}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">Rate Limit Status</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default APIRateLimits;
