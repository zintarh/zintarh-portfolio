# SEO Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Replace `https://yourdomain.com` with your actual domain name.

## SEO Features Implemented

### 1. **Comprehensive Metadata**
- Optimized title tags targeting key search terms
- Rich meta descriptions
- Targeted keywords for Nigeria/Africa market
- Open Graph tags for social sharing
- Twitter Card metadata

### 2. **Structured Data (JSON-LD)**
- Person schema with professional information
- Service offerings
- Awards and achievements
- Work history
- Skills and expertise

### 3. **Sitemap**
- Automatically generated at `/sitemap.xml`
- Includes all major pages with priorities
- Updated change frequencies

### 4. **Robots.txt**
- Configured at `/robots.txt`
- Allows all search engines
- Points to sitemap

### 5. **Page-Specific SEO**
- Projects page: Optimized for project portfolio searches
- Opensource page: Targets open source contribution searches
- Contact page: Targets hiring/contact searches

## Target Keywords

The site is optimized for:
- "best frontend engineer in Nigeria"
- "best frontend engineer in Africa"
- "best web3 engineer in Nigeria"
- "best web3 engineer in Africa"
- "frontend engineer to hire"
- "hire frontend engineer Nigeria"
- "React developer Nigeria"
- "Next.js developer Africa"
- "Starknet developer"
- "Ethereum developer"

## Next Steps for Maximum SEO

1. **Create an Open Graph Image**
   - Add `/public/og-image.jpg` (1200x630px)
   - Should showcase your brand/portfolio

2. **Submit to Search Engines**
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

3. **Build Backlinks**
   - Share on LinkedIn, Twitter
   - Contribute to tech blogs
   - Get featured in developer communities

4. **Content Strategy**
   - Add a blog section with technical articles
   - Write about Web3, AI, Frontend development
   - Share case studies of your projects

5. **Performance Optimization**
   - Ensure fast page load times
   - Optimize images
   - Use Next.js Image component

6. **Local SEO**
   - Add location-specific content
   - Mention Nigeria/Africa in content naturally
   - Get listed in developer directories

## Monitoring

- Use Google Analytics to track traffic
- Monitor Search Console for search performance
- Track keyword rankings
- Analyze user behavior

