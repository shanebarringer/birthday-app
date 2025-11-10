# Neon Database Setup Guide

Follow these steps to set up your Neon database for the Friends feature.

## Step 1: Create Neon Account

1. Go to [https://console.neon.tech](https://console.neon.tech)
2. Sign up for a free account (no credit card required)
3. Create a new project called "birthday-hearts"

## Step 2: Get Your Connection String

1. In your Neon dashboard, go to your project
2. Click on "Connection Details"
3. Copy the connection string (it looks like `postgresql://user:password@host/database`)

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in the project root:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your values:
   ```
   DATABASE_URL=your-neon-connection-string-here
   ADMIN_PASSWORD=choose-a-secure-password
   ```

## Step 4: Push Database Schema

Run this command to create the database table:

```bash
pnpm db:push
```

This will create the `friend_messages` table in your Neon database.

## Step 5: Test It Out

Start the dev server:

```bash
pnpm dev
```

Navigate to:
- `/friends/submit` - Friends can submit messages
- `/admin` - You can approve/reject messages (requires password)
- `/friends/messages` - View all approved messages

## Optional: Database Studio

To browse your database visually:

```bash
pnpm db:studio
```

This opens Drizzle Studio in your browser where you can see and edit data.

## Deployment (Vercel)

When deploying to Vercel:

1. Go to your project settings on Vercel
2. Add environment variables:
   - `DATABASE_URL` - your Neon connection string
   - `ADMIN_PASSWORD` - your admin password
3. Redeploy

That's it! Your database is ready to accept friend messages for Stella's birthday! 🎉
