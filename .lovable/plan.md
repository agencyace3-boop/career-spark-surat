

## Plan: Rebrand to "Surat Digital Marketing" + Update Logo + Improve SEO

### 1. Replace Logo
- Copy the uploaded logo image to `src/assets/logo.png` (overwrite existing)
- This automatically updates Header, Footer, and all components importing from `@/assets/logo.png`
- Also copy to `public/favicon.png` for the browser tab icon

### 2. Rename Brand Across All Files
Replace every instance of "Surat Digital Marketing School" with "Surat Digital Marketing" in these files:
- `index.html` (title, meta tags, og tags, twitter tags)
- `src/components/Footer.tsx`
- `src/components/AboutSection.tsx`
- `src/components/Testimonials.tsx`
- `src/components/WhyChooseSection.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/pages/CourseDetail.tsx`
- `src/pages/LiveClasses.tsx`
- `src/data/blogs.ts`

### 3. Strengthen SEO for Google & GMB Visibility
- **index.html**: Add structured data (LocalBusiness JSON-LD schema) with name, address, phone, geo coordinates, opening hours, and course offerings
- Add more targeted long-tail keywords in meta tags (e.g., "best digital marketing course in Surat", "digital marketing institute Surat", "SEO training Surat")
- Add canonical URL meta tag
- Improve meta description with location-specific terms
- Add `robots` meta tag for proper indexing
- Add `geo.region`, `geo.placename`, `geo.position` meta tags for local SEO
- Update OG URL and site name properties

### Technical Details
- JSON-LD LocalBusiness schema will include: name, address (structured), telephone, URL, geo coordinates (lat/long for Vesu, Surat), priceRange, image, and sameAs links to social profiles
- Adding `<link rel="canonical">` pointing to the published URL
- Geo meta tags target Surat, Gujarat, India specifically for local search relevance

