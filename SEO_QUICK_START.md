# SEO Quick Reference - What to Update

## 🔴 CRITICAL - Update These Immediately

---

## 🟡 OPTIONAL - Enhance When Ready

### 5. Custom Domain (when you get one)
**Search and replace in ALL files:**
- Old: `https://chauffeur-grooming.up.railway.app`
- New: `https://yourdomain.com`

**Files to update:**
- `/src/app/layout.jsx`
- `/src/app/page.jsx`
- `/src/app/about-us/page.jsx`
- `/src/app/contact/page.jsx`
- `/public/sitemap.xml`
- `/public/robots.txt`

---

### 6. Social Preview Image
**Create:** 1200x630px image with your logo and tagline
**Save as:** `/public/social-preview.jpg`

**Then update in `/src/app/layout.jsx`:**
- Change `url: '/logo-outline.svg'` to `url: '/social-preview.jpg'`
- Do this in both `openGraph` and `twitter` sections

---

### 7. Google Search Console
**After setting up Search Console:**

**Update:** `/src/app/layout.jsx`
```javascript
// Uncomment and add your code:
verification: {
  google: 'paste-your-verification-code-here',
}
```

---

## 📝 Sitemap Updates

**When to update `/public/sitemap.xml`:**
- Adding new pages
- Major content changes
- Monthly update the `<lastmod>` dates

---

## ✅ Already Configured

These are done and working:
- ✅ Sitemap.xml
- ✅ Robots.txt  
- ✅ Page titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data
- ✅ Image alt text
- ✅ H1 tags on all pages
- ✅ Canonical URLs
- ✅ Favicon
- ✅ Mobile-friendly design

---

## 🔍 How to Search for TODOs

Run this command in your terminal:
```bash
grep -r "TODO" /home/dgtutv/grooming-app/src/app/
```

Or search for:
- `TODO`
- `+1-XXX-XXX-XXXX`
- `your-google-verification-code`
- `49.0504` (placeholder coordinates)

---

## 🚀 After You Update

1. **Test locally:** `npm run dev`
2. **Check in browser:**
   - View page source (Ctrl+U)
   - Look for your updates in `<meta>` tags and JSON-LD
3. **Deploy to Railway**
4. **Test live site:** https://chauffeur-grooming.up.railway.app
5. **Submit sitemap to Google Search Console**

---

## Questions?

See `SEO_GUIDE.md` for full documentation.
