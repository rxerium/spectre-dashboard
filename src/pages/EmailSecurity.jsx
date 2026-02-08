import { Mail } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const EmailSecurity = () => {
  return (
    <ScanResultPage
      title="Email Security"
      description="SPF, DKIM, and DMARC record validation"
      icon={Mail}
      fetchFunction={spectreApi.checkEmailSecurity}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">Email Security Records</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default EmailSecurity;
