# Deployment Documentation

## Infrastructure
- **Server**: [Enter Server Info, e.g., Apache/Nginx Proxied]
- **Process Manager**: PM2

## Build Process
1. `npm run build`
2. `pm2 restart [app-name]`

## Environment Configuration
- `.env` file should contain all necessary secrets and API keys.

## Recent Deployment Notes
- Ensure PM2 is running in the correct working directory.
- Verify asset path case-sensitivity on Linux production servers.
