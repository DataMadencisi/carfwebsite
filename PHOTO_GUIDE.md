# 📸 Board Member Photos Guide

## Overview

Your website supports board member photos with automatic fallback to styled initials if photos are not available.

## 📁 Folder Structure

Create this folder structure in your repository:

```
carfwebsite/
├── assets/
│   └── images/
│       └── board/
│           ├── akgiray.jpg
│           ├── coskun.jpg
│           ├── avci.jpg
│           ├── ciliz.jpg
│           ├── ozbas.jpg
│           ├── bayraktar.jpg
│           ├── onuk.jpg
│           ├── uzun.jpg
│           └── ozcelik.jpg
```

## 🖼️ Photo Requirements

### Technical Specifications

- **Format**: JPG or PNG
- **Size**: 400x400 pixels (minimum)
- **Aspect Ratio**: 1:1 (square)
- **File Size**: Under 500KB per image
- **Background**: Solid color or professional setting
- **Quality**: High resolution, professional headshot

### Photo Guidelines

1. **Professional appearance**: Business formal or smart casual
2. **Good lighting**: Even, natural-looking lighting
3. **Clear face**: Face should take up 60-70% of the frame
4. **Neutral background**: Avoid busy or distracting backgrounds
5. **Recent photo**: Taken within the last 2 years

## 📤 How to Upload Photos

### Method 1: Via GitHub Web Interface

1. Go to your repository on GitHub
2. Navigate to `assets/images/board/` folder (create if needed)
3. Click **"Add file"** → **"Upload files"**
4. Drag and drop all photos or click to browse
5. **Important**: Name files exactly as shown in the data file:
   - `akgiray.jpg` for Prof. Dr. Ahmet Vedat Akgiray
   - `coskun.jpg` for Prof. Dr. Ali Çoşkun
   - etc.
6. Add commit message: "Add board member photos"
7. Click **"Commit changes"**

### Method 2: Via Git Command Line

```bash
# Navigate to your repository
cd carfwebsite

# Create folders
mkdir -p assets/images/board

# Copy photos to the folder
cp /path/to/photos/*.jpg assets/images/board/

# Add, commit, and push
git add assets/images/board/
git commit -m "Add board member photos"
git push origin main
```

## 📝 Photo Naming Convention

Match the filename in `_data/board_members.yml`:

| Board Member | Filename | Field in Data File |
|--------------|----------|-------------------|
| Prof. Dr. Ahmet Vedat Akgiray | `akgiray.jpg` | `photo: akgiray.jpg` |
| Prof. Dr. Ali Çoşkun | `coskun.jpg` | `photo: coskun.jpg` |
| Prof. Dr. Bekir Cem Avcı | `avci.jpg` | `photo: avci.jpg` |
| Prof. Dr. Nilgün Kıran Cılız | `ciliz.jpg` | `photo: ciliz.jpg` |
| Prof. Dr. Oğuzhan Özbaş | `ozbas.jpg` | `photo: ozbas.jpg` |
| Lütfü Haluk Bayraktar | `bayraktar.jpg` | `photo: bayraktar.jpg` |
| Murat Onuk | `onuk.jpg` | `photo: onuk.jpg` |
| Sadullah Uzun | `uzun.jpg` | `photo: uzun.jpg` |
| Hasan Özçelik | `ozcelik.jpg` | `photo: ozcelik.jpg` |

## 🎨 Photo Optimization (Optional but Recommended)

To optimize photos before uploading:

### Using Online Tools

1. **TinyPNG** (https://tinypng.com/)
   - Drag and drop images
   - Download optimized versions

2. **Squoosh** (https://squoosh.app/)
   - More control over compression
   - Can resize to exact dimensions

### Using Command Line (ImageMagick)

```bash
# Resize and optimize
convert input.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 85 output.jpg

# Batch process all images
for img in *.jpg; do
  convert "$img" -resize 400x400^ -gravity center -extent 400x400 -quality 85 "optimized_$img"
done
```

## 🔄 What Happens Without Photos?

If a photo file doesn't exist, the website automatically displays:

- A circular gradient background (blue)
- The person's initials in white
- Same size and styling as photo version
- Professional appearance maintained

Example without photo:
```
┌─────────┐
│         │
│   AVA   │  ← Initials for Ahmet Vedat Akgiray
│         │
└─────────┘
```

## ✅ Testing Photos

After uploading:

1. Wait 2-3 minutes for GitHub Pages to rebuild
2. Clear your browser cache (Ctrl+Shift+Delete)
3. Visit your website
4. Scroll to "Yönetim Kurulu" section
5. Verify all photos display correctly

### Troubleshooting

**Photo not showing?**

1. Check filename matches exactly (case-sensitive)
2. Verify file is in `assets/images/board/` folder
3. Check file format is JPG or PNG
4. Clear browser cache
5. Wait a few more minutes for build

**Photo appears distorted?**

1. Verify image is square (1:1 aspect ratio)
2. Re-crop image to 400x400 pixels
3. Re-upload

**File too large?**

1. Use TinyPNG or similar to compress
2. Aim for under 200KB per image
3. Reduce quality to 80-85%

## 🎯 Best Practices

### Do's ✅

- Use professional headshots
- Ensure good lighting and clarity
- Maintain consistent style across all photos
- Use high-quality images
- Keep file sizes reasonable
- Name files consistently

### Don'ts ❌

- Don't use casual photos
- Avoid dark or blurry images
- Don't use different aspect ratios
- Avoid very large file sizes (>1MB)
- Don't use special characters in filenames
- Avoid inconsistent photo styles

## 📋 Quick Checklist

Before uploading, verify:

- [ ] All photos are square (1:1 ratio)
- [ ] All photos are at least 400x400 pixels
- [ ] File sizes are under 500KB each
- [ ] Filenames match the data file exactly
- [ ] Photos are professional quality
- [ ] All 9 photos are ready
- [ ] Folder structure is correct

## 🆘 Need Help?

If you encounter issues:

1. Check this guide again
2. Verify file paths and names
3. Look at browser console for errors (F12)
4. Check GitHub Actions for build errors
5. Contact your web administrator

## 📞 Example Commit Message

When uploading photos, use clear commit messages:

```
Good messages:
- "Add board member photos"
- "Update Akgiray photo"
- "Add missing board photos"

Bad messages:
- "Update"
- "Photos"
- "asdf"
```

---

**Remember**: The website will work perfectly fine without photos! The initials placeholder looks professional and maintains the design.
