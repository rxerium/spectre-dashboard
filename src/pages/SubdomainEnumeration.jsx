import { Network } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const SubdomainEnumeration = () => {
  return (
    <ScanResultPage
      title="Subdomain Enumeration"
      description="Discover and monitor subdomains"
      icon={Network}
      fetchFunction={spectreApi.checkSubdomains}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">Discovered Subdomains</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default SubdomainEnumeration;
