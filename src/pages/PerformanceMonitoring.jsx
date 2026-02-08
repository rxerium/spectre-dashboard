import { Activity } from 'lucide-react';
import ScanResultPage from '../components/ScanResultPage';
import spectreApi from '../services/api';

const PerformanceMonitoring = () => {
  return (
    <ScanResultPage
      title="Performance Monitoring"
      description="Website performance metrics and analysis"
      icon={Activity}
      fetchFunction={spectreApi.checkPerformance}
      renderData={(data) => (
        <div className="scan-card">
          <h2 className="text-xl font-bold text-white mb-4">Performance Metrics</h2>
          <pre className="text-sm text-gray-300 overflow-auto bg-space-black/50 p-4 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />
  );
};

export default PerformanceMonitoring;
