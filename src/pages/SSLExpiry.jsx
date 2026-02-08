import { Lock } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const SSLExpiry = () => {
  return (
    <ScanResultPage
      title="SSL Expiry Monitoring"
      description="Track SSL certificate expiration dates"
      icon={Lock}
      fetchFunction={spectreApi.checkSSLExpiry}
      supportsDomain={true}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">SSL Certificate Expiration</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default SSLExpiry;
