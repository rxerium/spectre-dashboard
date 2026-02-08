const PortList = ({ ports = [] }) => {
  const getPortColor = (port) => {
    if (port <= 100) return 'text-cyan-glow';
    if (port <= 1000) return 'text-green-open';
    if (port <= 8000) return 'text-amber-warn';
    return 'text-purple-glow';
  };

  return (
    <div className="scan-card">
      <h3 className="text-lg font-semibold text-white mb-4">
        OPEN PORTS ({ports.length})
      </h3>
      <div className="space-y-2">
        {ports.length === 0 ? (
          <p className="text-gray-500 text-sm">No open ports detected</p>
        ) : (
          ports.map((port, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-space-black/50 rounded-lg hover:bg-space-black transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className={`text-xl font-bold ${getPortColor(port.port)}`}>
                  {port.port}
                </span>
                <span className="text-gray-400">{port.service || 'unknown'}</span>
                {port.version && (
                  <span className="text-xs text-gray-600">{port.version}</span>
                )}
              </div>
              <span className="text-green-open text-sm font-bold">open</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PortList;
