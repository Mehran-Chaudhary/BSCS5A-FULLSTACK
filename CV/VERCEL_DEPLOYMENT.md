# 🚀 Deploy Your CV to Vercel

## Prerequisites

1. **GitHub Account** (free)
2. **Vercel Account** (free) - sign up at [vercel.com](https://vercel.com)

## Step-by-Step Deployment

### 📂 Step 1: Upload to GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"**
3. Name it: `mehran-akhtar-cv`
4. Make it **Public** (so recruiters can see it)
5. Click **"Create repository"**

### 💻 Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. In your new repository, click **"uploading an existing file"**
2. **Drag and drop** your entire `CV` folder contents
3. **Important:** Upload these files:
   - `index.html`
   - `css/` folder (with all 5 CSS files)
   - `images/` folder (with your `profile.jpg`)
   - `vercel.json`
   - `README.md`
4. Write commit message: "Add professional CV"
5. Click **"Commit changes"**

**Option B: Using Git Commands (If you know Git)**

```bash
cd CV
git init
git add .
git commit -m "Add professional CV"
git remote add origin https://github.com/YOUR_USERNAME/mehran-akhtar-cv.git
git push -u origin main
```

### 🌐 Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign up"** and choose **"Continue with GitHub"**
3. Once signed in, click **"New Project"**
4. **Import** your `mehran-akhtar-cv` repository
5. **Deploy settings:**
   - Framework Preset: **Other**
   - Root Directory: **/** (leave default)
   - Build Command: **(leave empty)**
   - Output Directory: **(leave empty)**
6. Click **"Deploy"**

### ✅ Step 4: Get Your Live URL

- After deployment (takes 1-2 minutes), you'll get a URL like:
  - `https://mehran-akhtar-cv.vercel.app`
- **This is your live CV URL!** Share it with anyone!

### 🎯 Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Domains"**
3. Add a custom domain like `mehranakhtar.dev` (requires purchasing domain)

## 📱 Your CV Will Be Live At:

```
https://your-project-name.vercel.app
```

## 🔄 Making Updates

1. **Update files** in your GitHub repository
2. **Vercel automatically redeploys** (takes 1-2 minutes)
3. **Changes go live** immediately

## 📋 Checklist Before Deployment

- [ ] Added your profile photo to `images/profile.jpg`
- [ ] Tested CV locally by opening `index.html`
- [ ] All CSS files are in `css/` folder
- [ ] Updated any personal information in HTML
- [ ] Repository is public on GitHub

## 🎉 After Deployment

Your professional CV will be:

- ✅ **Live on the internet**
- ✅ **Mobile responsive**
- ✅ **Fast loading**
- ✅ **Professional looking**
- ✅ **Shareable with anyone**

## 💡 Pro Tips

1. **Add the URL to your:**

   - LinkedIn profile
   - Email signature
   - Resume/job applications
   - Business cards

2. **Share it with:**
   - Potential employers
   - Networking contacts
   - Freelance clients
   - University career services

## 🆘 Need Help?

If you run into issues:

1. Check that all files are uploaded correctly
2. Make sure `index.html` is in the root directory
3. Verify your photo is named correctly (`profile.jpg`)
4. Contact Vercel support (they're very helpful!)

---

**Your professional CV will be live in under 10 minutes!** 🚀
