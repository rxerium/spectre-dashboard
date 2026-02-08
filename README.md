# Spectre Security Dashboard

A beautiful, dark-themed security monitoring dashboard for the Spectre Security Monitoring API.

## Features

- 🔍 **Port Scanning** - Discover open ports and running services
- 🛡️ **Vulnerability Scanner** - CVE monitoring and threat intelligence
- 🌐 **DNS Monitoring** - Track DNS changes and detect spoofing
- 🔐 **SSL/TLS Analysis** - Certificate monitoring and configuration checks
- 📧 **Email Security** - SPF, DKIM, DMARC validation
- 🔗 **Subdomain Enumeration** - Discover and monitor subdomains
- 💾 **Infrastructure Monitoring** - Database, CDN, and dependency tracking
- 🦠 **Malware Detection** - Scan for malicious content
- 📊 **Performance Metrics** - Real-time performance monitoring

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - API client
- **Lucide React** - Icons

## Color Scheme

The dashboard features a cyberpunk-inspired dark theme:
- Space Black (#0a0e1a) - Primary background
- Space Navy (#0f1419) - Secondary background
- Space Blue (#1a1f2e) - Card backgrounds
- Cyan Glow (#00d9ff) - Primary accent
- Purple Glow (#a78bfa) - Secondary accent
- Pink Critical (#ff4d6d) - Critical alerts
- Green Open (#00ff88) - Success states
- Amber Warn (#fbbf24) - Warnings

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## API Configuration

The dashboard connects to the Spectre Security Monitoring API at `https://spectre.rxerium.workers.dev`.

API key is configured in `src/services/api.js`.

## Available Scans

### Monitoring
- Uptime monitoring with availability checks
- Performance metrics and response times
- CDN health monitoring

### Security
- Port scanning and service detection
- Vulnerability scanning (CVE database)
- SSL/TLS configuration analysis
- Malware detection
- IP reputation checks

### Domain
- DNS monitoring and change detection
- Subdomain enumeration
- WHOIS monitoring
- Certificate transparency logs
- Email security (SPF/DKIM/DMARC)

### Infrastructure
- Database connection monitoring
- Dependency version checking
- API rate limit tracking

## License

MIT
