# MIRABO Biotechnology - Deployment Guide

## Cloudflare Pages Deployment

### Prerequisites
- GitHub/GitLab account with repository access
- Cloudflare account

### Step 1: Push to Git Repository

```bash
git push origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages** section
3. Click **Create a project**
4. Select **Connect to Git**
5. Choose your repository: `mirabobio-homepage-mvp`
6. Configure build settings:
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
   - **Root directory:** (leave empty)

### Step 3: Deploy

1. Click **Save and Deploy**
2. Wait for deployment (usually 1-2 minutes)
3. Your site will be live at: `https://mirabobio-homepage-mvp.pages.dev`

### Step 4: Custom Domain Setup

1. In Cloudflare Pages project settings
2. Go to **Custom domains**
3. Click **Set up a custom domain**
4. Enter: `www.mirabobio.com`
5. Follow DNS configuration instructions
6. SSL certificate will be automatically provisioned

### Step 5: Post-Deployment

1. **Submit to Google Search Console**
   - Add property: `https://www.mirabobio.com`
   - Submit sitemap: `https://www.mirabobio.com/sitemap.xml`

2. **Verify SEO**
   - Test Open Graph: [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Test Twitter Card: [Twitter Card Validator](https://cards-dev.twitter.com/validator)

3. **Performance Check**
   - Run Lighthouse audit
   - Target: 95+ all categories

## Environment Variables

No environment variables required for this static site.

## Rollback

To rollback to a previous version:
1. Go to Cloudflare Pages project
2. Click **Deployments**
3. Find the previous successful deployment
4. Click **Rollback to this deployment**

## Monitoring

- **Analytics:** Cloudflare Web Analytics (automatic)
- **Uptime:** Cloudflare monitors automatically
- **Errors:** Check Cloudflare Pages logs

## Support

For deployment issues, contact: info@mirabobio.com
