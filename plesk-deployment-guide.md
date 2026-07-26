# Plesk Deployment Guide for Mella Website

## Prerequisites
- Plesk panel access
- Access to your domain's file manager or FTP
- SSH access (optional but recommended)

## Recommended: Static File Deployment (No Node.js Required)

Since this project uses Next.js static export, you can deploy without Node.js on the server. This avoids Node.js configuration issues and provides better performance.

### Step 1: Build Locally
```bash
cd mella-v6.1
npm run build
```

### Step 2: Upload Static Files
Upload only the contents of the `out/` folder to your Plesk `httpdocs` directory:
- `out/index.html` → `httpdocs/index.html`
- `out/about/` → `httpdocs/about/`
- `out/contact/` → `httpdocs/contact/`
- `out/services/` → `httpdocs/services/`
- `out/_next/` → `httpdocs/_next/`
- All other static assets

### Step 3: Configure Web Server
No additional configuration needed - Apache/Nginx will serve the static files directly.

### Step 4: Test
Visit your domain and test all routes.

## Alternative: Node.js Deployment (If Required)

If you need to use Node.js on Plesk, you must fix the Node.js path issue first.

### Fix Node.js Path Issue
The error `nodenv: node: command not found` occurs because Node.js isn't in the system PATH.

**Solution:**
1. In Plesk, go to **Websites & Domains** → **Node.js**
2. Ensure Node.js is enabled and the correct version (20 or 22) is selected
3. Check that the Node.js path is properly configured
4. If issues persist, contact your hosting provider to fix the Node.js installation

### Node.js Deployment Steps
1. Upload these files to `httpdocs`:
   - `package.json`
   - `server.js`
   - `out/` folder (static files)

2. **Important:** Do NOT upload `node_modules` - install on server

3. Configure Node.js in Plesk:
   - Document root: `/httpdocs`
   - Application root: `/httpdocs`
   - Startup file: `server.js`
   - Application mode: `production`

4. Run `npm install --production` (skip dev dependencies to avoid Tailwind build issues)

5. Start the application

## Troubleshooting

### Common Issues:

1. **Node command not found (Error 127)**:
   - This is a Plesk Node.js configuration issue
   - Use static deployment instead (recommended)
   - Or contact hosting provider to fix Node.js PATH

2. **Tailwind CSS build errors on server**:
   - Build locally, deploy static files only
   - Don't run `npm install` on production for static sites
   - Tailwind CSS v4 requires Node.js for build process

3. **Port already in use (EADDRINUSE)**:
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