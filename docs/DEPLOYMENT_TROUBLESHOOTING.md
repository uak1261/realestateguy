# Deployment Troubleshooting Guide

## 🚨 Common Issues and Solutions

### Issue 1: 404 Error After Deployment

**Symptoms**: Site deploys successfully but shows 404 error when visited

**Causes**:
- Missing `index.html` in root directory
- Incorrect `vercel.json` configuration
- Build output in wrong directory

**Solutions**:
1. **Check file structure**:
   ```
   ✅ Correct:
   your-repo/
   ├── index.html          # Must be in root
   ├── package.json
   ├── vercel.json
   └── src/
   
   ❌ Incorrect:
   your-repo/
   ├── package.json
   └── src/
       └── index.html      # Wrong location
   ```

2. **Verify `vercel.json` routes**:
   ```json
   {
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

3. **Check build configuration**:
   - Ensure `vite.config.js` outputs to `dist` directory
   - Verify `package.json` has correct build script

### Issue 2: Build Fails During Deployment

**Symptoms**: Deployment fails with build errors

**Common Errors**:
```
Error: Cannot resolve dependency
Error: Module not found
Error: Build failed
```

**Solutions**:
1. **Check `package.json` dependencies**:
   ```bash
   # Locally test the build
   npm install
   npm run build
   ```

2. **Verify Node.js version**:
   - Add `.nvmrc` file with Node version:
     ```
     18
     ```

3. **Check for missing files**:
   - Ensure all imported files exist
   - Verify file paths are correct
   - Check for case-sensitive file names

### Issue 3: Styles Not Loading

**Symptoms**: Site loads but appears unstyled

**Causes**:
- Tailwind CSS not building properly
- PostCSS configuration issues
- CSS import errors

**Solutions**:
1. **Verify Tailwind configuration**:
   ```javascript
   // tailwind.config.js
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",  // Must include all file types
     ],
     // ...
   }
   ```

2. **Check CSS imports**:
   ```javascript
   // src/main.jsx
   import './index.css'  // Must import CSS
   ```

3. **Verify PostCSS config**:
   ```javascript
   // postcss.config.js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

### Issue 4: Form Submission Not Working

**Symptoms**: Form shows but doesn't submit properly

**Solutions**:
1. **Check form handler**:
   ```javascript
   const handleFormSubmit = (e) => {
     e.preventDefault()  // Prevent default form submission
     // Your form logic here
   }
   ```

2. **Add form validation**:
   ```javascript
   // Add required attributes to inputs
   <input type="email" required />
   ```

3. **Test form locally**:
   ```bash
   npm run dev
   # Test form submission in browser
   ```

### Issue 5: Mobile Layout Issues

**Symptoms**: Site looks broken on mobile devices

**Solutions**:
1. **Check viewport meta tag**:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

2. **Test responsive classes**:
   ```javascript
   // Use responsive Tailwind classes
   <div className="grid md:grid-cols-2 lg:grid-cols-3">
   ```

3. **Verify mobile navigation**:
   ```javascript
   // Ensure mobile menu works
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   ```

## 🔧 Debugging Steps

### Step 1: Local Testing
```bash
# Test everything locally first
npm install
npm run dev      # Test development
npm run build    # Test build process
npm run preview  # Test production build
```

### Step 2: Check Vercel Logs
1. Go to Vercel dashboard
2. Click on your project
3. Go to "Functions" or "Deployments"
4. Check build logs for errors

### Step 3: Browser Developer Tools
1. Open browser dev tools (F12)
2. Check Console for JavaScript errors
3. Check Network tab for failed requests
4. Check Elements tab for missing styles

### Step 4: Clear Caches
```bash
# Clear local caches
rm -rf node_modules package-lock.json
npm install

# Clear browser cache
# Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
```

## 🚀 Deployment Checklist

Before deploying, ensure:

- [ ] All files are in correct locations
- [ ] `package.json` has all required dependencies
- [ ] Build process works locally (`npm run build`)
- [ ] No console errors in browser
- [ ] Mobile layout works properly
- [ ] Forms submit correctly
- [ ] All links and navigation work
- [ ] Images and assets load properly
- [ ] SEO meta tags are present
- [ ] Analytics tracking is configured

## 📞 Getting Help

If you're still experiencing issues:

1. **Check Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Review Build Logs**: Look for specific error messages
3. **Test Locally**: Ensure everything works in development
4. **Check File Permissions**: Ensure all files are readable
5. **Verify Domain Configuration**: Check DNS settings

## 🔄 Redeployment Process

If you need to redeploy:

1. **Fix the issue locally**
2. **Test the fix**: `npm run build && npm run preview`
3. **Commit changes to GitHub**
4. **Vercel auto-deploys**: Or manually trigger deployment
5. **Verify the fix**: Check the live site
6. **Clear browser cache**: Ensure you see the latest version

---

**Remember**: Most deployment issues are caused by missing files or incorrect configurations. Always test locally first!
