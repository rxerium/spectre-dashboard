import { Globe } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const WebsiteMonitor = () => {
  return (
    <ScanResultPage
      title="Website Monitor"
      description="Monitor website content changes"
      icon={Globe}
      fetchFunction={spectreApi.checkWebsite}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">Website Change Detection</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default WebsiteMonitor;
