# Plesk Node.js Deployment Guide for Mella Website

## Prerequisites
- Plesk panel with Node.js support enabled
- Access to your domain's file manager or FTP
- SSH access (optional but recommended)

## Step 1: Prepare Your Files

Your project is already built and ready! The `out` folder contains all static files.

## Step 2: Upload Files to Plesk

### Option A: Using Plesk File Manager
1. Log into your Plesk control panel
2. Go to **Files** → **File Manager**
3. Navigate to your domain's document root (usually `httpdocs` or `public_html`)
4. Upload the entire project folder OR just the contents

### Option B: Using FTP/SFTP
```bash
# Upload the entire project to your server
# Make sure to upload:
# - package.json
# - server.js
# - out/ folder (contains all static files)
# - node_modules/ (or run npm install on server)
```

## Step 3: Configure Node.js in Plesk

1. In Plesk, go to **Websites & Domains**
2. Click on your domain
3. Go to **Node.js**
4. Click **Enable Node.js**
5. Configure the following settings:

### Node.js Settings:
- **Node.js version**: Choose the latest stable version (18.x or 20.x)
- **Document root**: `/httpdocs` (or your domain's root)
- **Application root**: `/httpdocs` (same as document root)
- **Application startup file**: `server.js`
- **Application mode**: `production`

## Step 4: Install Dependencies

1. In the Node.js section, click **NPM Install**
2. Or use the terminal if available:
```bash
npm install
```

## Step 5: Environment Variables (Optional)

If you need environment variables:
1. In Plesk Node.js settings, go to **Environment Variables**
2. Add any required variables:
   - `NODE_ENV=production`
   - **Important**: Do NOT set a custom PORT variable - let Plesk assign the port automatically

## Step 6: Start the Application

1. In Plesk Node.js section, click **Restart App**
2. Or use the **Enable/Disable** toggle

## Step 7: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Test all pages:
   - Home: `https://yourdomain.com`
   - About: `https://yourdomain.com/about`
   - Services: `https://yourdomain.com/services`
   - Contact: `https://yourdomain.com/contact`

## Alternative: Static File Deployment

If you prefer to deploy as static files only (no Node.js server):

1. Upload only the contents of the `out` folder to your `httpdocs` directory
2. No Node.js configuration needed
3. Your site will work as a static website

## Troubleshooting

### Common Issues:

1. **Port already in use (EADDRINUSE)**:
   - This is normal in Plesk - the server will automatically find an available port
   - Do NOT set a custom PORT environment variable
   - Plesk manages port assignment automatically

2. **App won't start**:
   - Check that `server.js` is in the application root
   - Verify Node.js version compatibility
   - Check error logs in Plesk

3. **404 errors on routes**:
   - Ensure the server.js handles routing correctly
   - Check that all files in `out` folder are uploaded

3. **Static files not loading**:
   - Verify the `out` folder is in the correct location
   - Check file permissions

### Logs Location:
- Check Plesk logs: **Logs** → **Web Server Error Logs**
- Node.js logs: Available in the Node.js section

## File Structure on Server:
```
httpdocs/
├── server.js
├── package.json
├── out/
│   ├── index.html
│   ├── about/
│   ├── contact/
│   ├── services/
│   ├── _next/
│   └── [all static assets]
└── node_modules/ (after npm install)
```

## Performance Tips:
1. Enable **Gzip compression** in Plesk
2. Set up **browser caching** for static assets
3. Consider using a **CDN** for better performance

## Security:
- Ensure your `.env` files are not in the public directory
- Keep your Node.js version updated
- Regularly update dependencies

Your Mella mental health website should now be live and accessible!