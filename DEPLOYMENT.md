# 🚀 Simple Deployment Guide for CARF Website

## Step-by-Step Instructions (No Coding Experience Needed!)

### ✅ Step 1: Prepare Your GitHub Repository

1. Go to your GitHub repository: `https://github.com/YOUR-USERNAME/carfwebsite`
2. Make sure you have these files in the **root** of your repository:
   - `_config.yml`
   - `Gemfile`
   - `index.html`
   - `projects.html`
   - `README.md`

### ✅ Step 2: Create Folders

Create these folders in your repository (click "Add file" → "Create new file"):

**To create a folder**, type the folder name followed by `/` and then a filename. For example:
- Type: `_layouts/default.html` (this creates the `_layouts` folder)
- Type: `_data/board_members.yml` (this creates the `_data` folder)
- Type: `_projects/sample.md` (this creates the `_projects` folder)
- Type: `assets/css/style.css` (this creates both `assets` and `css` folders)

### ✅ Step 3: Upload All Files

Copy the content from each artifact I created and paste into the correct files:

#### Main Configuration
- `_config.yml` ✓
- `Gemfile` ✓

#### Pages
- `index.html` ✓
- `projects.html` ✓

#### Layouts (in `_layouts/` folder)
- `_layouts/default.html` ✓
- `_layouts/project.html` ✓

#### Data (in `_data/` folder)
- `_data/board_members.yml` ✓

#### Projects (in `_projects/` folder)
- `_projects/sut-eylem-plani.md` ✓
- `_projects/go-zero.md` ✓

#### Assets (in `assets/` folder)
- `assets/css/style.css` ✓
- `assets/js/main.js` ✓

### ✅ Step 4: Update Configuration

**IMPORTANT**: Open `_config.yml` and change this line:

```yaml
url: "https://YOUR-USERNAME.github.io"
```

Replace `YOUR-USERNAME` with your **actual GitHub username**.

For example, if your username is `johndoe`:
```yaml
url: "https://johndoe.github.io"
```

### ✅ Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Source"**:
   - Select **"Deploy from a branch"**
   - Choose **"main"** branch
   - Select **"/ (root)"** folder
5. Click **"Save"**

### ✅ Step 6: Wait for Build

- GitHub will start building your site (takes 2-5 minutes)
- You'll see a message: "Your site is ready to be published at..."
- Once ready, the message changes to: "Your site is live at..."

### ✅ Step 7: Visit Your Website!

Your website will be available at:
```
https://YOUR-USERNAME.github.io/carfwebsite/
```

## 🎨 Quick Customizations

### Change the Primary Color

1. Open `assets/css/style.css`
2. Find line 8:
```css
--primary-color: #0d3b66;
```
3. Change `#0d3b66` to any color you want
4. Try these:
   - Blue: `#1976d2`
   - Green: `#2e7d32`
   - Red: `#c62828`
   - Purple: `#7b1fa2`

### Add a New Project

1. Go to `_projects/` folder
2. Click "Add file" → "Create new file"
3. Name it: `my-new-project.md`
4. Copy this template:

```markdown
---
title: My New Project Title
year: 2024
organization: Organization Name
category: Research
status: Ongoing
---

## About This Project

Write about your project here...

## Goals

- First goal
- Second goal

## Results

Describe results...
```

5. Click "Commit changes"

### Edit Board Members

1. Open `_data/board_members.yml`
2. Add a new member:

```yaml
- name: Prof. Dr. New Member
  position: Position Title
  affiliation: University Name
  email: email@example.com
```

## 🔍 Troubleshooting

### Problem: Site shows 404 error
**Solution**: 
- Check that `baseurl: "/carfwebsite"` in `_config.yml` matches your repository name exactly
- Wait 5 minutes and refresh

### Problem: CSS not loading (site looks broken)
**Solution**:
- Make sure `assets/css/style.css` exists
- Check that the file path is correct (no extra folders)
- Clear your browser cache (Ctrl+Shift+Delete)

### Problem: Changes not showing
**Solution**:
- Wait 2-3 minutes for GitHub to rebuild
- Check "Actions" tab in your repository for build status
- Clear browser cache

### Problem: Build failing
**Solution**:
- Check "Actions" tab for error messages
- Most common: YAML indentation errors (use spaces, not tabs)
- Make sure all required files exist

## 📝 Daily Workflow

### To Add Content:
1. Go to GitHub repository
2. Navigate to correct folder
3. Click "Add file" or edit existing file
4. Make changes
5. Commit with a message like "Add new project" or "Update board members"
6. Wait 2-3 minutes
7. Refresh your website

### To Edit Content:
1. Click on the file in GitHub
2. Click the pencil icon (✏️) to edit
3. Make changes
4. Scroll down and click "Commit changes"
5. Wait 2-3 minutes
6. Refresh your website

## 🆘 Need Help?

- Read `README.md` for detailed documentation
- Check Jekyll docs: https://jekyllrb.com
- Create an issue in your repository with your question
- Ask a colleague to review your changes

## ✨ Next Steps

- [ ] Add more projects to `_projects/` folder
- [ ] Customize colors in `assets/css/style.css`
- [ ] Update board members in `_data/board_members.yml`
- [ ] Add your university logo
- [ ] Create a publications page
- [ ] Add photos to projects

Remember: **Commit often, test locally when possible, and don't worry about making mistakes!** You can always revert changes in GitHub.
