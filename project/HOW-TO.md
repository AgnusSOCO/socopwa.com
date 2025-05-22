# SOCO PWA Deployment Guide

This guide explains how to deploy the SOCO PWA website to a production environment.

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- A web server (e.g., Nginx, Apache)
- SSL certificate for HTTPS

## Build Process

1. Install dependencies:
```bash
npm install
```

2. Create production build:
```bash
npm run build
```

This will create a `dist` directory containing the optimized production files.

## Server Configuration

### Nginx Configuration

1. Install Nginx:
```bash
sudo apt update
sudo apt install nginx
```

2. Create Nginx configuration file:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;

    # SSL configuration
    ssl_certificate /path/to/your/certificate.crt;
    ssl_certificate_key /path/to/your/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Root directory
    root /var/www/socopwa/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache control
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # SPA configuration
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';";
}
```

### Apache Configuration

If using Apache, create a `.htaccess` file in the `dist` directory:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]

# Cache Control
<FilesMatch "\.(jpg|jpeg|png|gif|ico|svg|js|css)$">
    Header set Cache-Control "max-age=2592000, public"
</FilesMatch>

# Security Headers
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set X-Content-Type-Options "nosniff"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';"
```

## Deployment Steps

1. Build the project locally:
```bash
npm run build
```

2. Transfer files to server:
```bash
rsync -avz --delete dist/ user@your-server:/var/www/socopwa/dist/
```

3. Set proper permissions:
```bash
sudo chown -R www-data:www-data /var/www/socopwa
sudo chmod -R 755 /var/www/socopwa
```

4. Test the configuration:
```bash
# For Nginx
sudo nginx -t

# For Apache
sudo apachectl configtest
```

5. Restart web server:
```bash
# For Nginx
sudo systemctl restart nginx

# For Apache
sudo systemctl restart apache2
```

## Environment Variables

Create a `.env` file in the project root with the following variables:
```env
VITE_API_URL=https://api.your-domain.com
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

## Monitoring

1. Set up monitoring using your preferred service (e.g., UptimeRobot, Pingdom)
2. Configure alerts for downtime
3. Monitor server resources and logs

## Backup

1. Set up regular backups of:
   - Website files
   - Configuration files
   - SSL certificates
   - Environment variables

## Security Checklist

- [ ] SSL certificate installed and configured
- [ ] Security headers implemented
- [ ] Regular security updates for server
- [ ] Firewall configured
- [ ] DDoS protection enabled
- [ ] Regular security scans
- [ ] Backup system tested

## Troubleshooting

### Common Issues

1. **404 Errors on Routes**
   - Ensure server configuration properly handles SPA routing
   - Check `.htaccess` or Nginx configuration

2. **SSL Certificate Issues**
   - Verify certificate installation
   - Check certificate expiration
   - Ensure proper chain of trust

3. **Performance Issues**
   - Enable compression
   - Verify caching headers
   - Check server resources

## Contact

For deployment support, contact our DevOps team:
- Email: devops@socopwa.com
- Emergency: +1 (555) 123-4567