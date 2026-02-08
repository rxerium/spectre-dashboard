import { Shield } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const BlacklistCheck = () => {
  return (
    <ScanResultPage
      title="Blacklist Check"
      description="Check if domains are blacklisted"
      icon={Shield}
      fetchFunction={spectreApi.checkBlacklist}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">Blacklist Status</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default BlacklistCheck;
