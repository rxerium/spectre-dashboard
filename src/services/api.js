import axios from 'axios';

const API_BASE_URL = 'https://spectre.rxerium.workers.dev';
const API_KEY = 're_HZjx1asQ_nG3uXUjRn6GmUtCbn71HWxry';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const spectreApi = {
  // Public endpoints
  getStatus: () => apiClient.get('/'),
  getHealth: () => apiClient.get('/health'),
  getDocs: () => apiClient.get('/docs'),
  getCVE: (cveId) => apiClient.get(`/cve?cve=${cveId}`),

  // Security checks
  checkUptime: () => apiClient.get('/checks/uptime'),
  checkDNS: () => apiClient.get('/checks/dns'),
  checkPerformance: () => apiClient.get('/checks/performance'),
  checkSSL: () => apiClient.get('/checks/ssl'),
  checkBTC: () => apiClient.get('/checks/btc'),
  checkWebsite: () => apiClient.get('/checks/website'),
  checkZeroDay: () => apiClient.get('/checks/zeroday'),

  // Domain monitoring
  checkDomainExpiration: (domain = '') =>
    apiClient.get('/checks/domain-expiration' + (domain ? `?domain=${domain}` : '')),
  checkSSLExpiry: (domain = '') =>
    apiClient.get('/checks/ssl-expiry' + (domain ? `?domain=${domain}` : '')),
  checkDNSChanges: (domain = '') =>
    apiClient.get('/checks/dns-changes' + (domain ? `?domain=${domain}` : '')),
  checkBlacklist: (domain = '') =>
    apiClient.get('/checks/blacklist' + (domain ? `?domain=${domain}` : '')),
  checkSubdomains: (domain = '') =>
    apiClient.get('/checks/subdomains' + (domain ? `?domain=${domain}` : '')),
  checkWhois: (domain = '') =>
    apiClient.get('/checks/whois' + (domain ? `?domain=${domain}` : '')),

  // Security scans
  checkPorts: () => apiClient.get('/checks/ports'),
  checkVulnerabilities: () => apiClient.get('/checks/vulnerabilities'),
  checkGoogle: (test = false) =>
    apiClient.get('/checks/google' + (test ? '?test=true' : '')),
  checkIPReputation: () => apiClient.get('/checks/ip-reputation'),
  checkCertTransparency: (domain = '') =>
    apiClient.get('/checks/cert-transparency' + (domain ? `?domain=${domain}` : '')),
  checkWhoisPrivacy: (domain = '') =>
    apiClient.get('/checks/whois-privacy' + (domain ? `?domain=${domain}` : '')),
  checkTLSConfig: (domain = '') =>
    apiClient.get('/checks/tls-config' + (domain ? `?domain=${domain}` : '')),
  checkDNSSpoofing: (domain = '') =>
    apiClient.get('/checks/dns-spoofing' + (domain ? `?domain=${domain}` : '')),
  checkEmailSecurity: (domain = '') =>
    apiClient.get('/checks/email-security' + (domain ? `?domain=${domain}` : '')),

  // Infrastructure monitoring
  checkCDNHealth: () => apiClient.get('/checks/cdn-health'),
  checkAPIRateLimits: () => apiClient.get('/checks/api-rate-limits'),
  checkDatabaseConnections: () => apiClient.get('/checks/database-connections'),
  checkDependencies: () => apiClient.get('/checks/dependencies'),
  checkUptimeTrends: () => apiClient.get('/checks/uptime-trends'),
  checkSSLRenewal: () => apiClient.get('/checks/ssl-renewal'),
  checkMalwareDetection: () => apiClient.get('/checks/malware-detection'),
};

export default spectreApi;
