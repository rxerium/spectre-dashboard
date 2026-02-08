import { AlertTriangle } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const ZeroDayMonitor = () => {
  return (
    <ScanResultPage
      title="Zero-Day Monitor"
      description="Track zero-day vulnerabilities and emerging threats"
      icon={AlertTriangle}
      fetchFunction={spectreApi.checkZeroDay}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">Zero-Day Threats</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default ZeroDayMonitor;
