export interface Course {
  id: string;
  slug: string;
  title: string;
  image: string;
  duration: string;
  level: "beginner" | "intermediate" | "expert";
  instructor: string;
  description: string;
  categories: string[];
  maxStudents: number;
  language: string;
  overview: string[];
  curriculum?: string[];
  careerOpportunities?: string[];
  tools?: string[];
  projects?: string[];
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "agency-setup-training",
    title: "Agency Setup Training",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "expert",
    instructor: "Vikaas Parekh",
    description: "Learn how to set up and run your own digital marketing agency from scratch. Master client acquisition, team management, and scaling strategies.",
    categories: ["Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Agency business model fundamentals",
      "Client acquisition strategies",
      "Team building and management",
      "Pricing and packaging services",
      "Scaling your agency"
    ],
    curriculum: [
      "Week 1: Agency Foundation & Business Model",
      "Week 2: Service Offerings & Pricing Strategy",
      "Week 3: Client Acquisition & Sales Funnel",
      "Week 4: Operations, Team & Scaling"
    ],
    careerOpportunities: [
      "Digital Marketing Agency Owner",
      "Freelance Marketing Consultant",
      "Marketing Director",
      "Business Development Manager"
    ],
    tools: ["HubSpot", "Asana", "Slack", "Canva", "Google Workspace"],
    projects: [
      "Create your agency business plan",
      "Build a client proposal template",
      "Design service packages with pricing"
    ]
  },
  {
    id: "2",
    slug: "website-development-course",
    title: "Website Development Course",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "expert",
    instructor: "Vikaas Parekh",
    description: "Master web development from HTML to advanced CMS platforms. Build professional websites that convert visitors into customers. This comprehensive course covers everything from basic coding to launching fully functional websites.",
    categories: ["Website & E-commerce Development", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "HTML, CSS and JavaScript basics",
      "WordPress development & customization",
      "Responsive design principles",
      "E-commerce website setup with WooCommerce",
      "Website speed optimization",
      "SEO-friendly website structure",
      "Domain & hosting management",
      "Website security best practices"
    ],
    curriculum: [
      "Week 1: HTML & CSS Fundamentals",
      "Week 2: JavaScript & Interactivity",
      "Week 3: WordPress Setup & Theme Customization",
      "Week 4: E-commerce & WooCommerce Integration"
    ],
    careerOpportunities: [
      "Web Developer",
      "WordPress Developer",
      "Freelance Website Designer",
      "E-commerce Specialist",
      "UI/UX Designer"
    ],
    tools: ["WordPress", "Elementor", "WooCommerce", "VS Code", "FileZilla", "cPanel"],
    projects: [
      "Build a personal portfolio website",
      "Create a business website with WordPress",
      "Launch an e-commerce store with payment gateway"
    ]
  },
  {
    id: "3",
    slug: "advance-seo-strategy",
    title: "Advance SEO Strategy",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "expert",
    instructor: "Vikaas Parekh",
    description: "Master advanced techniques in SEO with our Advance SEO Strategy course. Dive into technical SEO, mobile optimization, content gap analysis, and effective link-building strategies.",
    categories: ["SEO (Search Engine Optimization)", "Content & Email Marketing", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Technical SEO mastery",
      "Advanced keyword research",
      "Link building strategies",
      "Content gap analysis",
      "Local SEO optimization"
    ],
    curriculum: [
      "Week 1: Technical SEO & Site Architecture",
      "Week 2: Advanced Keyword Research & Content Strategy",
      "Week 3: Link Building & Authority Development",
      "Week 4: Local SEO & Performance Optimization"
    ],
    careerOpportunities: [
      "SEO Specialist",
      "SEO Manager",
      "Digital Marketing Consultant",
      "Content Strategist",
      "Search Marketing Expert"
    ],
    tools: ["SEMrush", "Ahrefs", "Screaming Frog", "Google Search Console", "Moz Pro"],
    projects: [
      "Complete technical SEO audit for a live website",
      "Build a link building outreach campaign",
      "Create a comprehensive local SEO strategy"
    ]
  },
  {
    id: "4",
    slug: "pay-per-click-ppc",
    title: "Pay Per Click (PPC)",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Learn to create and manage profitable PPC campaigns across Google Ads and other platforms. Master bidding strategies and conversion optimization.",
    categories: ["Advertising & Paid Marketing", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Google Ads fundamentals",
      "Campaign structure and setup",
      "Bidding strategies",
      "Ad copywriting",
      "Conversion tracking"
    ],
    curriculum: [
      "Week 1: Google Ads Fundamentals & Account Setup",
      "Week 2: Campaign Types & Ad Group Structuring",
      "Week 3: Bidding Strategies & Budget Optimization",
      "Week 4: Conversion Tracking & Performance Analysis"
    ],
    careerOpportunities: [
      "PPC Specialist",
      "Google Ads Manager",
      "Paid Search Analyst",
      "Digital Advertising Executive",
      "Performance Marketing Manager"
    ],
    tools: ["Google Ads", "Google Analytics", "Google Tag Manager", "Optmyzr", "SpyFu"],
    projects: [
      "Set up a complete Google Ads campaign",
      "Create A/B tested ad variations",
      "Build conversion tracking with Google Tag Manager"
    ]
  },
  {
    id: "5",
    slug: "search-engine-optimization-seo",
    title: "Search Engine Optimization (SEO)",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Comprehensive SEO training covering on-page, off-page, and technical SEO. Learn to rank websites on the first page of Google.",
    categories: ["SEO (Search Engine Optimization)", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "On-page SEO techniques",
      "Off-page SEO strategies",
      "Technical SEO basics",
      "Keyword research tools",
      "SEO auditing"
    ],
    curriculum: [
      "Week 1: SEO Fundamentals & Keyword Research",
      "Week 2: On-Page SEO & Content Optimization",
      "Week 3: Off-Page SEO & Link Building",
      "Week 4: Technical SEO & Site Auditing"
    ],
    careerOpportunities: [
      "SEO Executive",
      "SEO Analyst",
      "Content Marketing Specialist",
      "Digital Marketing Associate",
      "Freelance SEO Consultant"
    ],
    tools: ["Google Search Console", "SEMrush", "Yoast SEO", "Ubersuggest", "Google Keyword Planner"],
    projects: [
      "Optimize a website for target keywords",
      "Create an SEO content calendar",
      "Perform complete website SEO audit"
    ]
  },
  {
    id: "6",
    slug: "e-commerce-solutions",
    title: "E-commerce Solutions",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Build and scale e-commerce businesses. Learn platform selection, product listing optimization, and sales strategies.",
    categories: ["Website & E-commerce Development", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "E-commerce platform selection",
      "Product listing optimization",
      "Payment gateway integration",
      "Inventory management",
      "E-commerce marketing"
    ],
    curriculum: [
      "Week 1: E-commerce Fundamentals & Platform Setup",
      "Week 2: Product Catalog & Inventory Management",
      "Week 3: Payment Gateways & Shipping Integration",
      "Week 4: Marketing & Sales Optimization"
    ],
    careerOpportunities: [
      "E-commerce Manager",
      "Online Store Owner",
      "E-commerce Consultant",
      "Marketplace Specialist",
      "Product Listing Manager"
    ],
    tools: ["Shopify", "WooCommerce", "Razorpay", "Shiprocket", "Amazon Seller Central"],
    projects: [
      "Launch a complete e-commerce store",
      "Integrate payment gateway and shipping",
      "Create product optimization strategy"
    ]
  },
  {
    id: "7",
    slug: "facebook-pixel",
    title: "Facebook Pixel",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Master Facebook Pixel implementation for advanced tracking and retargeting. Learn to create custom audiences and optimize ad spend.",
    categories: ["Analytics & Tracking", "Advertising & Paid Marketing", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Pixel installation",
      "Event tracking setup",
      "Custom audience creation",
      "Conversion optimization",
      "Retargeting strategies"
    ],
    curriculum: [
      "Week 1: Facebook Pixel Fundamentals & Installation",
      "Week 2: Standard & Custom Event Tracking",
      "Week 3: Custom Audiences & Lookalike Creation",
      "Week 4: Retargeting Campaigns & Optimization"
    ],
    careerOpportunities: [
      "Facebook Ads Specialist",
      "Performance Marketing Analyst",
      "Digital Tracking Expert",
      "Social Media Advertiser",
      "Conversion Optimization Specialist"
    ],
    tools: ["Meta Business Suite", "Facebook Events Manager", "Google Tag Manager", "Meta Pixel Helper"],
    projects: [
      "Install and configure Facebook Pixel",
      "Set up custom conversion events",
      "Build retargeting campaign with custom audiences"
    ]
  },
  {
    id: "8",
    slug: "linkedin-marketing",
    title: "LinkedIn Marketing",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Leverage LinkedIn for B2B marketing and lead generation. Build your personal brand and generate quality business leads.",
    categories: ["Social Media Marketing", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "LinkedIn profile optimization",
      "Content marketing on LinkedIn",
      "LinkedIn Ads",
      "Lead generation techniques",
      "B2B networking strategies"
    ],
    curriculum: [
      "Week 1: LinkedIn Profile & Company Page Optimization",
      "Week 2: Content Strategy & Engagement Tactics",
      "Week 3: LinkedIn Ads & Sponsored Content",
      "Week 4: Lead Generation & B2B Networking"
    ],
    careerOpportunities: [
      "LinkedIn Marketing Specialist",
      "B2B Marketing Manager",
      "Social Selling Expert",
      "Corporate Communications Manager",
      "Lead Generation Specialist"
    ],
    tools: ["LinkedIn Sales Navigator", "LinkedIn Campaign Manager", "Canva", "Hootsuite", "Shield Analytics"],
    projects: [
      "Optimize personal and company LinkedIn profiles",
      "Create and run LinkedIn ad campaign",
      "Build B2B lead generation funnel"
    ]
  },
  {
    id: "9",
    slug: "google-analytics",
    title: "Google Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Master Google Analytics 4 for data-driven marketing decisions. Learn to track, analyze, and report on website performance.",
    categories: ["Analytics & Tracking", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "GA4 setup and configuration",
      "Event tracking",
      "Custom reports and dashboards",
      "Conversion tracking",
      "Data analysis techniques"
    ],
    curriculum: [
      "Week 1: GA4 Setup & Interface Overview",
      "Week 2: Event Tracking & Data Streams",
      "Week 3: Reports, Dashboards & Explorations",
      "Week 4: Conversion Tracking & Attribution"
    ],
    careerOpportunities: [
      "Web Analytics Specialist",
      "Data Analyst",
      "Marketing Analytics Manager",
      "Digital Marketing Analyst",
      "Business Intelligence Associate"
    ],
    tools: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Google Data Studio", "BigQuery"],
    projects: [
      "Set up GA4 for a website from scratch",
      "Create custom event tracking",
      "Build comprehensive analytics dashboard"
    ]
  },
  {
    id: "10",
    slug: "seo-tools",
    title: "SEO Tools",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Master essential SEO tools like SEMrush, Ahrefs, Moz, and more. Learn to conduct competitive analysis and track rankings.",
    categories: ["SEO (Search Engine Optimization)", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "SEMrush mastery",
      "Ahrefs for backlink analysis",
      "Moz for domain authority",
      "Google Search Console",
      "Competitive analysis tools"
    ],
    curriculum: [
      "Week 1: SEMrush Complete Training",
      "Week 2: Ahrefs & Backlink Analysis",
      "Week 3: Moz, Ubersuggest & Other Tools",
      "Week 4: Google Search Console Mastery"
    ],
    careerOpportunities: [
      "SEO Tools Specialist",
      "SEO Analyst",
      "Competitive Research Analyst",
      "Digital Marketing Executive",
      "Freelance SEO Consultant"
    ],
    tools: ["SEMrush", "Ahrefs", "Moz Pro", "Ubersuggest", "Google Search Console", "Screaming Frog"],
    projects: [
      "Complete competitor analysis using SEMrush",
      "Build backlink profile report with Ahrefs",
      "Create monthly SEO performance dashboard"
    ]
  },
  {
    id: "11",
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Learn to leverage influencer partnerships for brand growth. Master influencer identification, outreach, and campaign management.",
    categories: ["Influence & Affiliate Marketing", "Social Media Marketing", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Influencer identification",
      "Outreach strategies",
      "Campaign planning",
      "ROI measurement",
      "Influencer relationship management"
    ],
    curriculum: [
      "Week 1: Influencer Marketing Fundamentals",
      "Week 2: Finding & Vetting Influencers",
      "Week 3: Campaign Planning & Execution",
      "Week 4: ROI Measurement & Relationship Building"
    ],
    careerOpportunities: [
      "Influencer Marketing Manager",
      "Brand Partnerships Coordinator",
      "Social Media Strategist",
      "Talent Relations Manager",
      "Campaign Manager"
    ],
    tools: ["Upfluence", "AspireIQ", "Grin", "Instagram Insights", "TikTok Creator Marketplace"],
    projects: [
      "Identify and vet influencers for a brand",
      "Create influencer outreach campaign",
      "Design influencer contract and brief"
    ]
  },
  {
    id: "12",
    slug: "facebook-meta-sales-funnel",
    title: "Facebook(Meta) Sales Funnel",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Build high-converting sales funnels using Facebook and Instagram. Learn lead generation and conversion optimization.",
    categories: ["Advertising & Paid Marketing", "Social Media Marketing", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Sales funnel fundamentals",
      "Facebook Ads for funnels",
      "Landing page creation",
      "Lead nurturing sequences",
      "Conversion optimization"
    ],
    curriculum: [
      "Week 1: Sales Funnel Strategy & Planning",
      "Week 2: Facebook Ads Campaign Setup",
      "Week 3: Landing Pages & Lead Magnets",
      "Week 4: Retargeting & Conversion Optimization"
    ],
    careerOpportunities: [
      "Funnel Strategist",
      "Facebook Ads Manager",
      "Conversion Rate Optimizer",
      "Growth Marketing Specialist",
      "Performance Marketer"
    ],
    tools: ["Meta Ads Manager", "ClickFunnels", "Leadpages", "Zapier", "ActiveCampaign"],
    projects: [
      "Build complete lead generation funnel",
      "Create landing page with lead magnet",
      "Set up automated email nurture sequence"
    ]
  },
  {
    id: "13",
    slug: "mobile-marketing",
    title: "Mobile Marketing",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Master mobile marketing strategies including SMS marketing, app marketing, and mobile-first advertising campaigns.",
    categories: ["Digital Marketing Courses", "Advertising & Paid Marketing", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Mobile advertising platforms",
      "SMS marketing campaigns",
      "App store optimization",
      "Mobile-first strategies",
      "Push notification marketing"
    ],
    curriculum: [
      "Week 1: Mobile Marketing Fundamentals",
      "Week 2: SMS & WhatsApp Marketing",
      "Week 3: App Store Optimization (ASO)",
      "Week 4: Mobile Ads & Push Notifications"
    ],
    careerOpportunities: [
      "Mobile Marketing Manager",
      "App Marketing Specialist",
      "SMS Marketing Executive",
      "Growth Hacker",
      "Mobile Advertising Specialist"
    ],
    tools: ["Firebase", "AppsFlyer", "CleverTap", "MSG91", "OneSignal"],
    projects: [
      "Create SMS marketing campaign",
      "Optimize app store listing",
      "Design push notification strategy"
    ]
  },
  {
    id: "14",
    slug: "email-marketing",
    title: "Email Marketing",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Create effective email marketing campaigns that convert. Learn list building, automation, and email copywriting.",
    categories: ["Content & Email Marketing", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Email list building",
      "Campaign automation",
      "Email copywriting",
      "A/B testing",
      "Deliverability optimization"
    ],
    curriculum: [
      "Week 1: Email Marketing Fundamentals & List Building",
      "Week 2: Email Copywriting & Design",
      "Week 3: Automation & Drip Campaigns",
      "Week 4: Analytics, Testing & Deliverability"
    ],
    careerOpportunities: [
      "Email Marketing Specialist",
      "Marketing Automation Manager",
      "CRM Marketing Executive",
      "Email Copywriter",
      "Lifecycle Marketing Manager"
    ],
    tools: ["Mailchimp", "ActiveCampaign", "ConvertKit", "Klaviyo", "Sendinblue"],
    projects: [
      "Build email list with lead magnet",
      "Create automated welcome sequence",
      "Design and test email campaign"
    ]
  },
  {
    id: "15",
    slug: "facebook-chatbot",
    title: "Facebook Chatbot",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "15 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Build automated chatbots for Facebook Messenger. Learn to qualify leads and provide customer support automatically.",
    categories: ["Social Media Marketing", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Chatbot platforms",
      "Conversation flow design",
      "Lead qualification bots",
      "Customer service automation",
      "Chatbot analytics"
    ],
    curriculum: [
      "Week 1: Chatbot Fundamentals & Platform Setup",
      "Week 2: Conversation Flow Design & Building"
    ],
    careerOpportunities: [
      "Chatbot Developer",
      "Conversational Marketing Specialist",
      "Customer Experience Automation Expert",
      "Digital Marketing Executive"
    ],
    tools: ["ManyChat", "Chatfuel", "MobileMonkey", "Dialogflow", "Meta Business Suite"],
    projects: [
      "Build lead qualification chatbot",
      "Create FAQ automation bot",
      "Design sales funnel chatbot"
    ]
  },
  {
    id: "16",
    slug: "youtube-marketing",
    title: "YouTube Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "15 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Grow your YouTube channel and monetize your content. Learn video SEO, content strategy, and YouTube advertising.",
    categories: ["Social Media Marketing", "Content & Email Marketing", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "YouTube channel optimization",
      "Video SEO techniques",
      "Content planning",
      "YouTube Ads",
      "Monetization strategies"
    ],
    curriculum: [
      "Week 1: YouTube Channel Setup & Optimization",
      "Week 2: Video SEO & YouTube Ads"
    ],
    careerOpportunities: [
      "YouTube Content Creator",
      "Video Marketing Specialist",
      "YouTube Channel Manager",
      "Video SEO Expert",
      "Content Strategist"
    ],
    tools: ["YouTube Studio", "TubeBuddy", "VidIQ", "Canva", "Adobe Premiere Pro"],
    projects: [
      "Optimize YouTube channel for growth",
      "Create video SEO strategy",
      "Run YouTube advertising campaign"
    ]
  },
  {
    id: "17",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "45 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Comprehensive social media marketing covering all major platforms. Learn content creation, scheduling, and analytics.",
    categories: ["Social Media Marketing", "Digital Marketing Courses", "Online Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Platform-specific strategies",
      "Content creation",
      "Social media scheduling",
      "Community management",
      "Social media analytics"
    ],
    curriculum: [
      "Week 1-2: Facebook & Instagram Marketing",
      "Week 3-4: LinkedIn & Twitter Marketing",
      "Week 5: Content Creation & Scheduling",
      "Week 6: Analytics & Optimization"
    ],
    careerOpportunities: [
      "Social Media Manager",
      "Social Media Strategist",
      "Community Manager",
      "Content Creator",
      "Brand Manager"
    ],
    tools: ["Meta Business Suite", "Hootsuite", "Buffer", "Canva", "Later", "Sprout Social"],
    projects: [
      "Create multi-platform content calendar",
      "Build and manage social media community",
      "Design comprehensive social media strategy"
    ]
  },
  {
    id: "18",
    slug: "business-digital-training-program",
    title: "Business Digital Training Program",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "2 Day",
    level: "beginner",
    instructor: "Vikaas Parekh",
    description: "Quick digital marketing fundamentals for business owners. Get a solid foundation in digital marketing essentials.",
    categories: ["Digital Marketing Courses", "Offline Course"],
    maxStudents: 30,
    language: "Hindi, English",
    overview: [
      "Digital marketing overview",
      "Social media basics",
      "Online advertising intro",
      "Website essentials",
      "Digital strategy planning"
    ],
    curriculum: [
      "Day 1: Digital Marketing Overview & Social Media",
      "Day 2: Advertising, Website & Strategy"
    ],
    careerOpportunities: [
      "Business Owner with Digital Skills",
      "Startup Founder",
      "Marketing-Savvy Entrepreneur",
      "Small Business Manager"
    ],
    tools: ["Google Business Profile", "Facebook Pages", "Canva", "WhatsApp Business"],
    projects: [
      "Create digital marketing plan for your business",
      "Set up social media presence"
    ]
  },
  {
    id: "19",
    slug: "entrepreneur-digital-training-program",
    title: "Entrepreneur Digital Training Program",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "45 Day",
    level: "intermediate",
    instructor: "Vikaas Parekh",
    description: "Complete digital marketing training for entrepreneurs. Learn to market your business effectively online.",
    categories: ["Digital Marketing Courses", "Online Course", "Offline Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Complete digital strategy",
      "Brand building online",
      "Lead generation",
      "Sales funnel creation",
      "Marketing automation"
    ],
    curriculum: [
      "Week 1-2: Digital Strategy & Brand Building",
      "Week 3-4: Lead Generation & Funnels",
      "Week 5-6: Marketing Automation & Scaling"
    ],
    careerOpportunities: [
      "Digital-First Entrepreneur",
      "Startup Founder",
      "Business Growth Consultant",
      "Marketing Strategist",
      "E-commerce Entrepreneur"
    ],
    tools: ["HubSpot", "Mailchimp", "Google Ads", "Meta Ads", "Canva", "WordPress"],
    projects: [
      "Create complete digital marketing strategy",
      "Build lead generation funnel",
      "Launch marketing automation campaign"
    ]
  },
  {
    id: "20",
    slug: "advance-digital-training-program",
    title: "Advance Digital Training Program",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "45 Day",
    level: "expert",
    instructor: "Vikaas Parekh",
    description: "Advanced digital marketing certification covering all aspects of online marketing. Become a complete digital marketing expert.",
    categories: ["Digital Marketing Courses", "Online Course", "Offline Course"],
    maxStudents: 50,
    language: "Hindi, English",
    overview: [
      "Advanced SEO & SEM",
      "Marketing automation",
      "Data analytics",
      "Conversion optimization",
      "Campaign management"
    ],
    curriculum: [
      "Week 1-2: Advanced SEO & SEM Strategies",
      "Week 3-4: Marketing Automation & CRM",
      "Week 5-6: Data Analytics & Conversion Optimization"
    ],
    careerOpportunities: [
      "Digital Marketing Manager",
      "Head of Digital Marketing",
      "Marketing Director",
      "Growth Marketing Lead",
      "Digital Strategy Consultant"
    ],
    tools: ["Google Analytics", "SEMrush", "HubSpot", "Salesforce", "Google Ads", "Meta Ads", "Hotjar"],
    projects: [
      "Create multi-channel marketing campaign",
      "Build comprehensive analytics dashboard",
      "Design conversion optimization strategy"
    ]
  }
];

export const categories = [
  { name: "Advertising & Paid Marketing", count: 6 },
  { name: "Analytics & Tracking", count: 2 },
  { name: "Content & Email Marketing", count: 3 },
  { name: "Digital Marketing Courses", count: 11 },
  { name: "Influence & Affiliate Marketing", count: 1 },
  { name: "Offline Course", count: 3 },
  { name: "Online Course", count: 17 },
  { name: "SEO (Search Engine Optimization)", count: 4 },
  { name: "Social Media Marketing", count: 6 },
  { name: "Website & E-commerce Development", count: 2 }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};
