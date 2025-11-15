# Open Graph Images Setup Guide

## Required Images

Create the following Open Graph preview images for each page. These images will be displayed when your website is shared on social media platforms.

### Image Specifications
- **Dimensions**: 1200x630 pixels (recommended)
- **Format**: JPG or PNG
- **File size**: Keep under 8MB (ideally under 1MB)
- **Safe zone**: Keep important content within the center 1200x600 area

### Required Files

1. **og-home.jpg** - Homepage preview
   - Should showcase your main value proposition
   - Include the Zava logo
   - Use a clean, professional hero image

2. **og-about.jpg** - About page preview
   - Could feature team photos or office space
   - Include text: "About Zava"

3. **og-services.jpg** - Services page preview
   - Showcase service offerings visually
   - Include text: "Our Services"

4. **og-portfolio.jpg** - Portfolio page preview
   - Display a grid or collage of best work
   - Include text: "Our Portfolio"

5. **og-contact.jpg** - Contact page preview
   - Could include contact information or a map
   - Include text: "Contact Us"

## Creating Images

### Option 1: Design Tool (Recommended)
Use tools like:
- **Canva**: Use their "Open Graph" template (1200x630)
- **Figma**: Create frames at 1200x630px
- **Photoshop**: Set canvas to 1200x630px

### Option 2: Screenshot + Edit
1. Take full-page screenshots of each page
2. Crop to 1200x630px focusing on key content
3. Add overlay with page title and branding

### Option 3: Stock Photos
1. Use high-quality stock photos from:
   - Unsplash
   - Pexels
   - Unsplash
2. Add text overlay with page title
3. Include Zava logo

## Design Tips
- Use consistent branding across all images
- Include your logo on every image
- Use high-contrast text for readability
- Avoid small text (minimum 40px font size)
- Test how images look as thumbnails

## Uploading Images

Place all OG images in the `/public/` directory:
```
/public/
  ├── og-home.jpg
  ├── og-about.jpg
  ├── og-services.jpg
  ├── og-portfolio.jpg
  └── og-contact.jpg
```

## Testing Previews

After uploading images, test your previews using these tools:

1. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/
   - Enter your URL and click "Scrape Again"

2. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator
   - Enter your URL to preview

3. **LinkedIn Post Inspector**
   - https://www.linkedin.com/post-inspector/
   - Check how posts will appear

4. **Open Graph Debugger**
   - https://www.opengraph.xyz/
   - Test multiple platforms at once

## Troubleshooting

### Images not updating?
- Clear the cache in debugging tools
- Use "Scrape Again" in Facebook debugger
- Add a version query parameter: `og-home.jpg?v=2`

### Images not showing?
- Verify images are publicly accessible
- Check file paths are correct
- Ensure images are under 8MB
- Verify image format (JPG/PNG)

### Wrong preview showing?
- Wait 24-48 hours for caches to clear
- Force refresh in platform debugging tools
- Check that MetaTags component is properly integrated
