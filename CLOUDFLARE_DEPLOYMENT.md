# Cloudflare Pages Deployment Configuration

## Changes Made

This repository has been configured for Cloudflare Pages deployment with static export.

### 1. Next.js Configuration (`next.config.js`)
- Enabled `output: 'export'` for static HTML export
- Set `images.unoptimized: true` (required for static export)
- Added `trailingSlash: true` for Cloudflare Pages compatibility
- Removed image domain configuration (not needed with unoptimized images)

### 2. API Routes Migration
**From:** Next.js API routes (`app/api/**/route.js`)  
**To:** Cloudflare Pages Functions (`functions/api/*.js`)

#### Created Functions:
- `functions/api/contact.js` - Contact form handler with Turnstile verification
- `functions/api/tweets.js` - Twitter feed fetcher

### 3. Cloudflare Pages Build Settings

Configure these in your Cloudflare Pages dashboard:

**Build Configuration:**
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/` (leave empty)

**Environment Variables:**
Add these in Cloudflare Pages > Settings > Environment variables:

```
# Email Service (Brevo)
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_verified_sender_email
CONTACT_EMAIL=hello@sagarshahinfo.com

# Cloudflare Turnstile (for contact form)
TURNSTILE_SECRET_KEY=your_turnstile_secret_key

# Twitter API (for tweets feed)
TWITTER_BEARER_TOKEN=your_twitter_bearer_token
TWITTER_USERNAME=sagarshah07
```

### 4. How It Works

1. **Build Process:**
   - `npm run build` generates static HTML in the `out/` directory
   - All pages are pre-rendered as static files

2. **API Routes:**
   - `/api/contact` → Handled by `functions/api/contact.js`
   - `/api/tweets` → Handled by `functions/api/tweets.js`
   - Functions run on Cloudflare Workers (serverless)

3. **Deployment:**
   - Push to GitHub
   - Cloudflare Pages automatically builds and deploys
   - Static files served from CDN
   - Functions execute at the edge

### 5. Testing Locally

```bash
# Build the static site
npm run build

# Preview the build (you'll need a static server)
npx serve out

# Or use Wrangler for full Cloudflare Pages simulation
npm install -g wrangler
wrangler pages dev out
```

### 6. Key Differences from Vercel/Next.js Server

- No server-side rendering (SSR) - everything is static
- API routes are now Cloudflare Functions (different syntax)
- Twitter API uses direct fetch instead of `twitter-api-v2` package
- Images are unoptimized (no Next.js Image Optimization API)
- Environment variables are accessed via `context.env` in Functions

### 7. Troubleshooting

**Error: "Output directory 'out' not found"**
- Make sure `output: 'export'` is in `next.config.js`
- Verify no dynamic API routes exist in `app/api/` directory
- Check that build completes successfully

**API routes return 404:**
- Ensure functions are in `functions/api/` directory
- Check environment variables are set in Cloudflare Pages dashboard
- Review function logs in Cloudflare Pages > Functions

**Images not loading:**
- Verify images are in `public/` directory
- Check that `images.unoptimized: true` is set
- Confirm image paths start with `/`

### 8. Next Steps

1. Push changes to GitHub: `git push origin main`
2. Go to Cloudflare Pages dashboard
3. Create new project and connect your GitHub repository
4. Set build settings as described above
5. Add environment variables
6. Deploy!

## Notes

- Static export means no dynamic server-side features
- All data fetching happens client-side or via Functions
- Builds are fast and deploy globally via CDN
- Functions have cold starts but are generally fast (~50-200ms)
