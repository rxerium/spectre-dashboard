import { Lock } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const CertificateTransparency = () => {
  return (
    <ScanResultPage
      title="Certificate Transparency"
      description="Monitor Certificate Transparency logs"
      icon={Lock}
      fetchFunction={spectreApi.checkCertTransparency}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">CT Log Entries</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default CertificateTransparency;
