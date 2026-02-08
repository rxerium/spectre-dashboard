import { Activity } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const BTCMonitor = () => {
  return (
    <ScanResultPage
      title="Bitcoin Price Monitor"
      description="Track Bitcoin price with alerts"
      icon={Activity}
      fetchFunction={spectreApi.checkBTC}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">BTC Price Data</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default BTCMonitor;
