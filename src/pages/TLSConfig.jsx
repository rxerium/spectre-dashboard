import { Lock } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const TLSConfig = () => {
  return (
    <ScanResultPage
      title="TLS Configuration"
      description="Analyze TLS/SSL configuration"
      icon={Lock}
      fetchFunction={spectreApi.checkTLSConfig}
      supportsDomain={true}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">TLS Configuration Details</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default TLSConfig;
