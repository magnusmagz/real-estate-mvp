# Git Setup Instructions

## 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `real-estate-mvp` (or any name you prefer)
4. Keep it Public (for easy Vercel deployment)
5. DON'T initialize with README (we already have one)
6. Click "Create repository"

## 2. Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/real-estate-mvp.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 3. Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your `real-estate-mvp` repository
5. Click "Deploy"
6. Wait 1-2 minutes... Done! 🎉

### Option B: Via Command Line
```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? real-estate-mvp
# - In which directory is your code located? ./
# - Want to override the settings? No
```

## 4. Your Site is Live!

After deployment, Vercel will give you a URL like:
- `https://real-estate-mvp.vercel.app`
- `https://real-estate-mvp-yourname.vercel.app`

## 5. Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically deploy your changes!

## 6. Custom Domain (Optional)

In Vercel dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions

## Need Help?

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)