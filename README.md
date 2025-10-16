# CARF Website - Complete Setup Guide

This is a comprehensive guide for setting up and maintaining the institutional website using Jekyll on GitHub Pages.

## 📁 Complete File Structure

Your repository should have this structure:

```
carfwebsite/
├── _config.yml                 # Main site configuration
├── Gemfile                     # Ruby dependencies
├── index.html                  # Homepage
├── projects.html               # Projects listing page
├── publications.html           # Publications page
├── README.md                   # This file
├── DEPLOYMENT.md               # Deployment instructions
├── PHOTO_GUIDE.md              # Guide for adding photos
├── _layouts/
│   ├── default.html           # Main page template
│   └── project.html           # Single project template
├── _data/
│   └── board_members.yml      # Board members information
├── _projects/                  # Individual project files
│   ├── sut-eylem-plani.md
│   ├── go-zero.md
│   ├── emisyon-ticaret-sistemi.md
│   ├── davranissal-finans.md
│   ├── kobi-sektoru-degerlendirmesi.md
│   ├── libor-tlref-gecis.md
│   └── [add more projects here]
├── assets/
│   ├── css/
│   │   └── style.css          # All styling
│   ├── js/
│   │   └── main.js            # JavaScript
│   └── images/
│       └── board/             # Board member photos
│           ├── akgiray.jpg
│           ├── coskun.jpg
│           └── [other photos]
```

## 🚀 Quick Start (GitHub Pages)

### Step 1: Update Configuration

Open `_config.yml` and change this line:
```yaml
url: "https://YOUR-USERNAME.github.io"
```
Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"**
3. Click **"Pages"** in the left sidebar
4. Under **"Source"**, select **"main"** branch and **"/ (root)"**
5. Click **"Save"**

Your site will be live at: `https://YOUR-USERNAME.github.io/carfwebsite/`

## ✏️ Adding Content (No Coding Required!)

### Adding a New Project

1. Go to `_projects/` folder in GitHub
2. Click **"Add file"** → **"Create new file"**
3. Name it: `my-project-name.md`
4. Copy
