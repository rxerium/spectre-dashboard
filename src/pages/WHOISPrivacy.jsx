import { Shield } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const WHOISPrivacy = () => {
  return (
    <ScanResultPage
      title="WHOIS Privacy"
      description="Verify WHOIS privacy registration status"
      icon={Shield}
      fetchFunction={spectreApi.checkWhoisPrivacy}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">WHOIS Privacy Status</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default WHOISPrivacy;
