# Birthday Hearts App 🎂💕

A special interactive birthday card with 16 reasons why we love you!

## Getting Started

1. **Install dependencies:**
```bash
pnpm install
```

2. **Run the development server:**
```bash
pnpm dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Birthday Hearts App"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and pnpm
   - Click "Deploy" - that's it!

3. **Auto-deployments:**
   - Every push to `main` will automatically deploy
   - Pull requests get preview deployments

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Making Tweaks

- Edit messages: Open `app/page.js` and modify the `messages` array
- Change colors: Update the Tailwind classes in `app/page.js`
- Adjust layout: Modify the grid (currently `grid-cols-4` for 4x4)

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Lucide React (icons)
