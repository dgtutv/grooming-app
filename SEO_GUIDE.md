# SEO Implementation Guide for Chauffeur Grooming

## Overview
This document explains the SEO (Search Engine Optimization) implementation for your mobile pet grooming website.

---

## ✅ What's Been Implemented

### 1. **Sitemap.xml** (`/public/sitemap.xml`)
- Lists all pages for search engines to crawl
- **TODO**: Update `lastmod` dates when you make significant changes to pages
- Location: `https://chauffeur-grooming.up.railway.app/sitemap.xml`

### 2. **Robots.txt** (`/public/robots.txt`)
- Tells search engines which pages they can crawl
- Currently allows all pages
- **TODO**: If you add admin pages or private sections, exclude them here

### 3. **Page Metadata** (Title, Description, OG Tags)
Each page now has:
- **Title tags** - Appear in browser tabs and search results
- **Meta descriptions** - Preview text in search results
- **Open Graph tags** - Control how links appear when shared on social media
- **Canonical URLs** - Prevent duplicate content issues

### 4. **JSON-LD Structured Data**
Machine-readable data that helps Google understand your business:
- **LocalBusiness schema** (Homepage) - Business info, location, services
- **Organization schema** (About Us) - Team member details
- **Service schema** (Services) - Pricing and service offerings
- **ContactPage schema** (Contact) - Contact information

### 5. **Image Alt Text**
All images now have descriptive alt text for:
- Screen readers (accessibility)
- Search engines (image SEO)
- Fallback text if images fail to load

### 6. **Semantic HTML Structure**
- One `<h1>` tag per page (main heading)
- Proper heading hierarchy (h1 → h2 → h3)
- Maintains visual appearance with CSS

### 7. **Favicon & Social Preview**
- Already configured with your logo
- **TODO**: Create a social preview image (1200x630px) for better social sharing

---

## 🔧 What You Need to Customize

### Priority Tasks (Update These First):

#### 1. **Business Phone Number**
**Files to update:**
- `/src/app/page.jsx` - Line with `"telephone": "+1-XXX-XXX-XXXX"`
- `/src/app/contact/page.jsx` - Line with `"telephone": "+1-XXX-XXX-XXXX"`

Replace `+1-XXX-XXX-XXXX` with your actual business phone in format: `+1-604-555-1234`

#### 2. **Business Hours**
**File:** `/src/app/page.jsx` - `openingHoursSpecification` section

Update the days and times you're available:
```javascript
"openingHoursSpecification": [
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",  // Change to your opening time
        "closes": "17:00"  // Change to your closing time
    }
]
```

#### 3. **Exact Business Location**
**Files to update:**
- `/src/app/page.jsx` - `geo` coordinates section

Get your exact coordinates:
1. Go to Google Maps
2. Right-click your business location
3. Click the coordinates to copy them
4. Update these values:
```javascript
"latitude": "49.0504",   // Replace with your latitude
"longitude": "-122.3045"  // Replace with your longitude
```

#### 4. **Social Media Links**
**File:** `/src/app/page.jsx` - `sameAs` section

Replace example URLs with your actual social media pages:
```javascript
"sameAs": [
    "https://www.facebook.com/chauffeurgrooming",    // Your actual Facebook
    "https://www.instagram.com/chauffeurgrooming",   // Your actual Instagram
    "https://www.tiktok.com/@chauffeurgrooming"      // Your actual TikTok
]
```

#### 5. **Email Address** (if different)
**File:** `/src/app/page.jsx` and `/src/app/contact/page.jsx`

Currently set to: `chauffeurgrooming@gmail.com`
- Update if you use a different email address

---

### Optional Enhancements:

#### 1. **Custom Domain**
**When you get a custom domain (e.g., `chauffeurgrooming.com`):**

Update in these files:
- `/src/app/layout.jsx` - Line: `metadataBase: new URL('https://chauffeur-grooming.up.railway.app')`
- `/src/app/page.jsx` - All URLs in JSON-LD
- `/src/app/about-us/page.jsx` - JSON-LD URLs
- `/src/app/contact/page.jsx` - JSON-LD URLs
- `/public/sitemap.xml` - All `<loc>` tags
- `/public/robots.txt` - Sitemap URL

#### 2. **Social Preview Image**
Create a professional image (1200x630px) showing:
- Your logo
- Business name
- Brief tagline
- Save as `/public/social-preview.jpg`

Then update these files:
- `/src/app/layout.jsx` - Line: `url: '/logo-outline.svg'` → `url: '/social-preview.jpg'`
- Also update `twitter` card images

#### 3. **Search Console Verification**
Once you set up Google Search Console:

**File:** `/src/app/layout.jsx` - Uncomment verification section:
```javascript
verification: {
  google: 'your-verification-code-here',
}
```

---

## 📊 How to Monitor SEO Performance

### 1. **Google Search Console**
- Go to: https://search.google.com/search-console
- Add your website
- Monitor clicks, impressions, and search rankings
- Check for indexing issues

### 2. **Google Business Profile**
- Create/claim your Google Business listing
- Appears in Google Maps and local search results
- Add photos, hours, services
- Get customer reviews

### 3. **Key Metrics to Track**
- Organic traffic (Google Analytics)
- Search rankings for keywords like:
  - "mobile pet grooming Fraser Valley"
  - "dog groomer Abbotsford"
  - "mobile cat grooming BC"
- Page load speed (Google PageSpeed Insights)
- Mobile usability

---

## 🎯 SEO Best Practices Moving Forward

### Content Updates:
1. **Add a blog** (optional) - Pet care tips, grooming advice
2. **Customer testimonials** - Add reviews to homepage
3. **Before/after photos** - Showcase your work (with permission)
4. **FAQ section** - Answer common grooming questions

### Technical:
1. **Keep sitemap updated** - When adding new pages
2. **Optimize images** - Compress before uploading
3. **Fast loading** - Monitor site speed
4. **Mobile-first** - Always test on phones

### Local SEO:
1. **Get reviews** - Ask satisfied customers
2. **Local directories** - Yelp, Yellow Pages, local pet directories
3. **Location keywords** - Use "Fraser Valley", "Abbotsford" naturally in content
4. **Service area pages** - Consider pages for each city you serve

---

## 🚀 Quick Start Checklist

- [x] Add your phone number to all locations marked with TODO
- [x] Update business hours in homepage JSON-LD
- [x] Add exact GPS coordinates for your location
- [x] Link your social media accounts
- [ ] Create and upload social-preview.jpg (1200x630px)
- [ ] Set up Google Search Console
- [ ] Create Google Business Profile
- [ ] Submit sitemap to Google Search Console
- [x] Test all pages on mobile devices
- [ ] Check page speed with Google PageSpeed Insights

---

## 📞 Need Help?

Common issues:
- **Not showing in Google**: Can take 2-4 weeks for new sites
- **Wrong preview on social**: Use Facebook Sharing Debugger
- **Images not loading**: Check file paths and public folder

Tools to use:
- Google Search Console: https://search.google.com/search-console
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Schema.org validator: https://validator.schema.org/

---

## Current Status

✅ Implemented:
- Sitemap.xml
- Robots.txt
- Page metadata (all pages)
- JSON-LD structured data (all pages)
- Image alt text
- Semantic HTML (h1 tags)
- Canonical URLs
- Open Graph tags
- Twitter Cards

⏳ Pending Your Action:
- Phone number
- Business hours
- Exact coordinates
- Social media URLs
- Social preview image
- Search Console setup
- Google Business Profile
