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
