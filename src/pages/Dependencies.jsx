import { FileText } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const Dependencies = () => {
  return (
    <ScanResultPage
      title="Dependencies"
      description="Check for outdated dependencies"
      icon={FileText}
      fetchFunction={spectreApi.checkDependencies}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">Dependency Status</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default Dependencies;
