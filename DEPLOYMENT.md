# Deployment Guide - Hide N Seek Child Care Website

Your website is ready to be deployed to Vercel! Follow one of the methods below.

## Prerequisites

- A GitHub account
- A Vercel account (free tier available at https://vercel.com)
- Node.js installed locally (optional, for testing)

## Method 1: Auto-Deploy via Vercel (Recommended)

This is the easiest method and automatically deploys whenever you push code to GitHub.

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Set up Next.js project for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com and sign in with your GitHub account
2. Click "Add New Project" (or "+ New Project")
3. Select "Import Git Repository"
4. Search for and select your "HideNSeek" repository
5. Click "Import"

### Step 3: Configure Project

Vercel will automatically detect this is a Next.js project. Review the settings:
- **Framework**: Next.js (auto-detected)
- **Root Directory**: `.` (default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)

### Step 4: Deploy

Click "Deploy" and wait for the build to complete (usually 2-3 minutes).

Once deployed, you'll receive a live URL like: `https://yourproject.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

Run in your project directory:

```bash
vercel
```

Follow the prompts:
- Link to existing Project? → Choose your project or create new
- Deploy? → Yes

### Step 3: Access Your Site

After deployment, you'll get a URL to your live website.

## Method 3: Deploy without Git (Drag & Drop)

This is useful if you don't have GitHub set up yet:

1. Go to https://vercel.com/new
2. Select "Other" under "Choose a template"
3. Drag and drop your project folder, or click to browse
4. Vercel will auto-detect the configuration
5. Click "Deploy"

## Post-Deployment

### Custom Domain (Optional)

To use your own domain instead of the vercel.app domain:

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions provided by Vercel

### Environment Variables (If Needed)

To add environment variables:

1. In Vercel Dashboard, go to "Settings" → "Environment Variables"
2. Add your variables and their values
3. Redeploy your project

### Monitoring & Analytics

Vercel provides automatic:
- Performance analytics
- Core Web Vitals monitoring
- Build logs and deployment history

All available in your project's dashboard.

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript errors: run `npm run build` locally first

### Site Looks Different
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 5 minutes after deployment
- Check if CSS is loading (check browser dev tools Network tab)

### Need to Rollback
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find the previous working deployment
4. Click "..." → "Redeploy"

## Local Testing Before Deployment

To test your site locally before deploying:

```bash
npm install  # Install dependencies
npm run dev  # Start dev server
```

Visit http://localhost:3000

To test the production build locally:

```bash
npm run build
npm start
```

This simulates exactly what Vercel will deploy.

## Continuous Deployment

With Vercel + GitHub connected:
- Every `git push` to main branch automatically deploys
- Pull requests get preview deployments
- Automatic rollback if deployment fails

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Community Help: https://github.com/vercel/next.js/discussions

---

**Your site is production-ready and fully configured for Vercel!** 🚀
