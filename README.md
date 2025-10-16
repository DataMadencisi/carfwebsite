# CARF Website Example - Complete Setup Guide for Institutional Website

This is a comprehensive guide for setting up and maintaining an institutional website using Jekyll on GitHub Pages.

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
4. Copy this template:

```markdown
---
title: Project Title Here
year: 2024
organization: Organization Name
category: Category (e.g., Sürdürülebilirlik, Finans)
status: Devam Ediyor or Tamamlandı
featured: true  # Shows on homepage
---

## Proje Özeti

Write your project summary here...

## Hedefler

- Goal 1
- Goal 2
- Goal 3

## Sonuçlar

Describe the results...
```

5. Fill in your content
6. Click **"Commit new file"**

### Editing Board Members

Open `_data/board_members.yml` and edit:

```yaml
- name: Prof. Dr. Name Surname
  position: Position Title
  affiliation: University or Company
  email: email@example.com
  photo: photo-filename.jpg  # Optional
  initials: NS  # Used if no photo
```

### Adding Board Member Photos

See **PHOTO_GUIDE.md** for detailed instructions.

**Quick steps:**
1. Prepare square photos (400x400px minimum)
2. Name them exactly as in `board_members.yml` (e.g., `akgiray.jpg`)
3. Upload to `assets/images/board/` folder
4. Commit changes

### Editing Site Information

Open `_config.yml` to change:

```yaml
# Site title
title: Your New Title

# Contact email
organization:
  email: newemail@example.com

# Statistics on homepage
stats:
  - number: "20"
    label: "New Statistic"

# Navigation menu
navigation:
  - title: Menu Item
    url: /page-url/
```

## 🎨 Customizing Design

### Changing Colors

Open `assets/css/style.css` and find line 8-15:

```css
:root {
    --primary-color: #0d3b66;      /* Main blue color */
    --secondary-color: #1a5490;    /* Lighter blue */
    --text-color: #333;            /* Text color */
    --light-bg: #f5f5f5;          /* Light background */
}
```

Replace with your preferred colors. Try:
- **Green**: `--primary-color: #2e7d32;`
- **Red**: `--primary-color: #c62828;`
- **Purple**: `--primary-color: #7b1fa2;`

Use https://htmlcolorcodes.com/ to find colors.

### Changing Text

All text content is in:
- `index.html` - Homepage sections
- `_projects/*.md` - Individual projects
- `publications.html` - Publications list
- `_data/board_members.yml` - Board member info
- `_config.yml` - Site-wide settings

## 📝 Creating More Pages

### Example: Create "Awards" Page

1. Create `awards.html` in root folder:

```html
---
layout: default
title: Ödüller
---

<div class="container">
    <section class="section">
        <h1>Ödüller</h1>
        <p>CARF tarafından alınan ödüller...</p>
        
        <!-- Your content here -->
    </section>
</div>
```

2. Add to navigation in `_config.yml`:

```yaml
navigation:
  - title: Ödüller
    url: /awards.html
```

## 🔧 Testing Locally (Optional)

### Windows:
```bash
# Install Ruby from https://rubyinstaller.org/
# Open Command Prompt in project folder
gem install bundler jekyll
bundle install
bundle exec jekyll serve

# Open http://localhost:4000/carfwebsite/
```

### Mac/Linux:
```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve

# Open http://localhost:4000/carfwebsite/
```

## 📊 Complete Project List to Add

Based on your documents, you should create these project files:

### Sustainability Projects
- [x] `sut-eylem-plani.md` - Sürdürülebilir Tüketim ve Üretim
- [x] `go-zero.md` - Gıda Sektöründe Sıfır Atık
- [ ] `kentsel-organik-atik.md` - Kentsel Organik Atık Yönetimi
- [ ] `sifir-atik-belgelendirme.md` - Sıfır Atık Belgesi Kriterleri
- [ ] `cevre-etiketi-kozmetik.md` - Kişisel Bakım Ürünleri Çevre Etiketi

### Climate & Energy Projects
- [ ] `cmip6-iklim-modelleri.md` - İklim Modelleri ve Yağış Rejimi
- [ ] `ruzgar-hidrojen-optimizasyon.md` - Rüzgâr ve Hidrojen Hibrit Sistem
- [ ] `yuzey-suyu-kalitesi.md` - Surface Water Quality Modelling
- [ ] `istanbul-yagmur-suyu.md` - Istanbul Stormwater Infrastructure

### Infrastructure Projects
- [ ] `istanbul-metro-sefahoy.md` - Sefaköy-Beylikdüzü Metro
- [ ] `ankara-dikimevi-metro.md` - Ankara Dikimevi Metro
- [ ] `buca-metro.md` - Buca Metro Line
- [ ] `ikitelli-metro.md` - İkitelli Metro Monitoring
- [ ] `canakkale-koprusu.md` - Çanakkale 1915 Bridge
- [ ] `bandirma-yuksek-hizli-tren.md` - Bandırma-Bursa Railway

### Financial Projects
- [x] `emisyon-ticaret-sistemi.md` - Karbon Borsası
- [x] `davranissal-finans.md` - Behavioral Finance Project
- [x] `kobi-sektoru-degerlendirmesi.md` - SME Assessment
- [x] `libor-tlref-gecis.md` - LIBOR to TLREF Transition
- [ ] `emeklilik-urunleri.md` - Yenilikçi Emeklilik Ürünleri
- [ ] `fx-turev-urunler.md` - FX ve Faiz Riski Türevleri
- [ ] `forward-premium-puzzle.md` - Forward Premium Research
- [ ] `equity-risk-premia.md` - Risk Premia Research
- [ ] `ambiguity-asset-prices.md` - Ambiguity Research

## 📖 Publications Management

### Adding New Publications

Edit `publications.html` to add new entries:

```html
<div class="publication-item">
    <p class="publication-authors">Author1, A., & Author2, B.</p>
    <p class="publication-title">"Paper Title Here."</p>
    <p class="publication-journal"><em>Journal Name</em>, Volume(Issue), Pages.</p>
    <p class="publication-link"><a href="https://doi.org/..." target="_blank">DOI Link</a></p>
</div>
```

### Publication Categories

Organize publications by:
- **Year** (2025, 2024, 2023, etc.)
- **Type** (Articles, Books, Book Chapters)
- **Category** (if needed)

## 🆘 Troubleshooting

### Site Not Showing Up

**Problem**: 404 error when visiting site
**Solution**: 
- Check `baseurl` in `_config.yml` matches repo name exactly
- Wait 5 minutes for GitHub to rebuild
- Clear browser cache

### Photos Not Loading

**Problem**: Board photos show initials instead of images
**Solution**:
- Verify files are in `assets/images/board/` folder
- Check filenames match exactly (case-sensitive)
- Ensure files are .jpg or .png format
- Wait for GitHub Pages to rebuild (2-3 minutes)

### CSS Not Loading (Broken Layout)

**Problem**: Site looks plain, no colors or layout
**Solution**:
- Check `assets/css/style.css` exists
- Verify no syntax errors in CSS
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)

### Changes Not Appearing

**Problem**: Edits don't show on website
**Solution**:
- Wait 2-3 minutes for GitHub Pages rebuild
- Check "Actions" tab for build status
- Clear browser cache
- Verify changes were committed successfully

### Build Failing

**Problem**: GitHub Actions shows red X
**Solution**:
- Check "Actions" tab for error message
- Most common: YAML indentation errors (use spaces, not tabs)
- Verify all required files exist
- Check for syntax errors in markdown files

## 📋 Content Checklist

Before launching your site:

- [ ] Update `_config.yml` with your GitHub username
- [ ] Add all project files to `_projects/` folder
- [ ] Update board member information
- [ ] Upload board member photos (optional)
- [ ] Update publications list
- [ ] Test all internal links
- [ ] Check mobile responsiveness
- [ ] Enable GitHub Pages
- [ ] Share site URL with stakeholders

## 🎯 Best Practices

### Writing Projects

**Do:**
- Use clear, descriptive titles
- Include project dates and organizations
- Write in accessible language
- Add relevant categories
- Use proper Turkish characters

**Don't:**
- Make files too long (split if over 5000 words)
- Use special characters in filenames
- Forget to add front matter (the `---` section)
- Use hard-coded URLs

### Organizing Content

- Keep project files under 10MB
- Use consistent naming (lowercase, hyphens)
- Group similar projects by category
- Update statistics regularly
- Archive old projects in subfolder if needed

### Maintaining the Site

**Daily:**
- Monitor for broken links
- Check GitHub Actions for build errors

**Weekly:**
- Review analytics (if added)
- Update news or announcements

**Monthly:**
- Add new publications
- Update project statuses
- Check for content accuracy

**Quarterly:**
- Review and update statistics
- Add new completed projects
- Update board member information if changed

## 📞 Getting Help

### Resources

- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **GitHub Pages Guide**: https://docs.github.com/en/pages
- **Markdown Guide**: https://www.markdownguide.org/
- **Liquid Template Guide**: https://shopify.github.io/liquid/

### Support Channels

1. Check this README first
2. Review DEPLOYMENT.md for setup issues
3. Check PHOTO_GUIDE.md for photo problems
4. Look at example project files for formatting
5. Create an issue in your GitHub repository
6. Contact your web administrator

## 🔒 Security Best Practices

- Never commit passwords or API keys
- Use environment variables for sensitive data
- Keep dependencies updated
- Review pull requests carefully
- Use HTTPS URLs for all external resources

## 📱 Mobile Optimization

The site is fully responsive. Test on:
- Mobile phones (320px - 480px)
- Tablets (768px - 1024px)
- Desktops (1200px+)

Use Chrome DevTools (F12) to test different screen sizes.

## 🌐 SEO Optimization

To improve search engine visibility:

1. Add meta descriptions to pages
2. Use descriptive page titles
3. Include alt text for images
4. Create a sitemap.xml
5. Submit to Google Search Console

## 📊 Analytics (Optional)

To track visitors, add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `_includes/analytics.html`
3. Include in `_layouts/default.html`

## 🔄 Backup Strategy

Regularly backup:
- All content files
- Custom configurations
- Image assets
- Database (if using one later)

GitHub automatically backs up your repository.

## 🚀 Performance Tips

- Optimize images before uploading (use TinyPNG)
- Minimize CSS/JS files
- Enable caching
- Use CDN for large assets
- Compress text files

## 📝 Content Style Guide

### Turkish Language

- Use proper Turkish characters (ç, ğ, ı, ö, ş, ü)
- Be consistent with formal/informal tone
- Use clear, academic language
- Avoid jargon where possible

### Formatting

- Use `**bold**` for emphasis
- Use `*italic*` for titles of works
- Use lists for multiple items
- Use tables for comparisons
- Add links to external resources

## ✅ Pre-Launch Checklist

- [ ] All content reviewed and approved
- [ ] Board member photos added
- [ ] Contact information verified
- [ ] All links tested
- [ ] Mobile version tested
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Spelling and grammar checked
- [ ] Analytics configured (if needed)
- [ ] Site submitted to search engines
- [ ] Team trained on updates

---

**Version**: 1.0  
**Last Updated**: January 2025  
**Maintained By**: CARF IT Team

For technical issues, create an issue at: `https://github.com/YOUR-USERNAME/carfwebsite/issues`
