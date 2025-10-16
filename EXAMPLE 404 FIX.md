# 🔧 Fix 404 Errors - Quick Guide

## Problem

The projects and publications pages are showing 404 errors.

## Solution

The issue is with how Jekyll handles pages. I've updated the files with the correct configuration.

## What Changed

### 1. projects.html
**Added** at the top (line 3):
```yaml
permalink: /projects/
```

### 2. publications.html
**Added** at the top (line 3):
```yaml
permalink: /publications/
```

## How to Fix in Your Repository

### Option 1: Edit Files on GitHub

1. Go to your repository on GitHub
2. Open `projects.html`
3. Click the pencil icon (✏️) to edit
4. Make sure the top looks like this:
```yaml
---
layout: default
title: Projeler
permalink: /projects/
---
```
5. Commit changes
6. Repeat for `publications.html`:
```yaml
---
layout: default
title: Yayınlar
permalink: /publications/
---
```

### Option 2: Replace Files

1. Delete existing `projects.html` and `publications.html`
2. Create new files with the updated content from my artifacts
3. Make sure they include `permalink:` line

## Verification

After making changes:

1. **Wait 2-3 minutes** for GitHub Pages to rebuild
2. **Clear your browser cache** (Ctrl+Shift+Delete)
3. **Test URLs**:
   - `https://YOUR-USERNAME.github.io/carfwebsite/projects/`
   - `https://YOUR-USERNAME.github.io/carfwebsite/publications/`

## Why This Happened

Jekyll needs explicit `permalink` configuration for pages that aren't in the root directory or don't follow certain naming conventions. Adding `permalink: /projects/` tells Jekyll exactly what URL to use.

## If Still Not Working

### Check 1: File Location
Files should be in the **root** of your repository:
```
carfwebsite/
├── projects.html          ← Here (not in a folder)
├── publications.html      ← Here (not in a folder)
├── index.html
└── ...
```

### Check 2: Front Matter Format
The `---` lines are crucial:
```yaml
---                        ← Three dashes
layout: default            ← Required
title: Projeler           ← Required
permalink: /projects/      ← Required (NEW!)
---                        ← Three dashes
```

### Check 3: Build Status
1. Go to your repository
2. Click **"Actions"** tab
3. Check if latest build succeeded (green ✓)
4. If failed (red ✗), click to see error message

### Check 4: GitHub Pages Settings
1. Go to repository **Settings**
2. Click **Pages** (left sidebar)
3. Verify:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**

## Alternative: Rename Files

If permalink still doesn't work, you can rename the files:

1. Rename `projects.html` to `projects/index.html`
2. Rename `publications.html` to `publications/index.html`

This creates the URLs automatically without needing permalink.

Your structure would be:
```
carfwebsite/
├── projects/
│   └── index.html
├── publications/
│   └── index.html
├── index.html
└── ...
```

## Quick Test

After fixing, test these URLs:
- ✅ Homepage: `/carfwebsite/`
- ✅ Projects: `/carfwebsite/projects/`
- ✅ Publications: `/carfwebsite/publications/`
- ✅ Single project: `/carfwebsite/projects/go-zero/`

## Still Having Issues?

1. Check browser console (F12) for errors
2. Verify all files are committed
3. Wait 5 minutes for build
4. Try incognito/private browsing mode
5. Check GitHub Actions for build errors

---

**Quick Fix Checklist:**
- [ ] Add `permalink: /projects/` to projects.html
- [ ] Add `permalink: /publications/` to publications.html
- [ ] Commit changes
- [ ] Wait 3 minutes
- [ ] Clear browser cache
- [ ] Test URLs
