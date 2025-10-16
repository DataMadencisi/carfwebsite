# CARF Website Project - Jekyll Setup Guide

This is a how to document for setting up your modular  website using Jekyll. You can change CARF with your institution. 

## 📁 File Structure

Create this exact folder structure in your repository:

```
carfwebsite/
├── _config.yml                 (Main configuration)
├── Gemfile                     (Ruby dependencies)
├── index.html                  (Homepage)
├── projects.html               (Projects listing page)
├── _layouts/
│   ├── default.html           (Main page template)
│   └── project.html           (Single project template)
├── _data/
│   └── board_members.yml      (Board members data)
├── _projects/
│   ├── sut-eylem-plani.md    (Sample project - add more here!)
│   └── go-zero.md             (Add more projects as .md files)
├── assets/
│   ├── css/
│   │   └── style.css          (All styles)
│   └── js/
│       └── main.js            (JavaScript)
└── README.md                   (This file)
```

## 🚀 Quick Start (GitHub Pages)

### Step 1: Update _config.yml
Open `_config.yml` and change this line:
```yaml
url: "https://YOUR-USERNAME.github.io"
```
Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"

Your site will be live at: `https://YOUR-USERNAME.github.io/carfwebsite/`

## ✏️ How to Edit Content (No Coding Required!)

### Adding a New Project

1. Create a new file in `_projects/` folder
2. Name it like: `my-project-name.md`
3. Copy this template:

```markdown
---
title: Project Title Here
year: 2024
organization: Organization Name
category: Category Name
status: Devam Ediyor
---

## Project Description

Write your project description here...

## Goals

- Goal 1
- Goal 2

## Results

Describe the results...
```

### Editing Board Members

Open `_data/board_members.yml` and edit directly:

```yaml
- name: Prof. Dr. Name Surname
  position: Position Title
  affiliation: University or Company
  email: email@example.com
```

### Changing Site Information

Open `_config.yml` and edit these sections:

```yaml
# Change site title
title: Your New Title

# Change email
organization:
  email: newemail@example.com

# Change statistics
stats:
  - number: "20"
    label: "New Statistic"
```

## 🎨 Customizing Design

### Changing Colors

Open `assets/css/style.css` and find:
```css
/* Primary color - Change #0d3b66 to any color you want */
.header {
    background: #0d3b66;
}
```

Use a color picker website like: https://htmlcolorcodes.com/

### Changing Text

All text content is in:
- `index.html` - Homepage content
- `_projects/` - Individual project pages
- `_data/board_members.yml` - Board member information
- `_config.yml` - Site-wide settings

## 📝 Adding More Pages

To add a new page (e.g., "Publications"):

1. Create `publications.html` in root folder:
```html
---
layout: default
title: Publications
---

<div class="container">
    <h1>Publications</h1>
    <p>Your content here...</p>
</div>
```

2. Add to navigation in `_config.yml`:
```yaml
navigation:
  - title: Yayınlar
    url: /publications/
```

## 🔧 Testing Locally (Optional)

If you want to preview changes before publishing:

### On Windows:
1. Install Ruby from: https://rubyinstaller.org/
2. Open Command Prompt in your project folder
3. Run: `gem install bundler jekyll`
4. Run: `bundle install`
5. Run: `bundle exec jekyll serve`
6. Open: http://localhost:4000/carfwebsite/

### On Mac:
1. Open Terminal in your project folder
2. Run: `gem install bundler jekyll`
3. Run: `bundle install`
4. Run: `bundle exec jekyll serve`
5. Open: http://localhost:4000/carfwebsite/

## 🆘 Common Issues

### Issue: Site shows 404 error
**Solution**: Make sure `baseurl` in `_config.yml` matches your repo name exactly.

### Issue: Changes don't appear
**Solution**: Wait 2-3 minutes for GitHub Pages to rebuild. Clear browser cache.

### Issue: CSS not loading
**Solution**: Check that `assets/css/style.css` exists and path is correct.

## 📚 Where to Get Help

- Jekyll Documentation: https://jekyllrb.com/docs/
- GitHub Pages Guide: https://docs.github.com/en/pages
- Ask in GitHub Issues: Create an issue in your repository

## 🎯 Next Steps

1. ✅ Update `_config.yml` with your GitHub username
2. ✅ Add more projects in `_projects/` folder
3. ✅ Update board members in `_data/board_members.yml`
4. ✅ Customize colors in `assets/css/style.css`
5. ✅ Enable GitHub Pages in repository settings

## 💡 Tips for Non-Coders

- **YAML files** (`.yml`): Use spaces, not tabs. Be careful with indentation.
- **Markdown files** (`.md`): Easy text formatting. `#` = heading, `**text**` = bold
- **HTML files** (`.html`): Can mix HTML with Liquid tags `{% %}`
- Always commit changes with descriptive messages
- Test locally before pushing to avoid breaking the site

## 📞 Need More Help?

Comment on any file in GitHub and tag collaborators, or create an issue in your repository with specific questions!
