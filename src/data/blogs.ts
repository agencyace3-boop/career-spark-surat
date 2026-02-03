export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  externalUrl: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Digital Marketing Expert Surat",
    slug: "digital-marketing-expert-surat",
    excerpt: "Learn from the best digital marketing experts in Surat. Discover strategies and insights to grow your online presence.",
    image: "https://suratdms.com/wp-content/uploads/elementor/thumbs/Digital-Marketing-Expert-Surat-r8rzk9dexisfaq7vuvmf0td3ym5ku53upjcgv3vh5i.jpg",
    category: "Blog",
    date: "July 15, 2025",
    externalUrl: "https://suratdms.com/digital-marketing-expert-surat/"
  },
  {
    id: "2",
    title: "10 Marketing Trends That You Should Be Prepared For in 2022",
    slug: "10-marketing-trends-2022",
    excerpt: "Stay ahead of the curve with these essential marketing trends that will shape the digital landscape.",
    image: "https://suratdms.com/wp-content/uploads/elementor/thumbs/6-qtrfp83hyfrc59ht83yqnfsilsr61u6dc1ps0ft3ti.jpg",
    category: "Marketing",
    date: "July 28, 2022",
    externalUrl: "https://suratdms.com/10-marketing-trends-that-you-should-be-prepared-for-in-2022/"
  },
  {
    id: "3",
    title: "How to Design a Simple, Yet Unique and Memorable Brand Identity",
    slug: "design-unique-brand-identity",
    excerpt: "Create a lasting impression with a brand identity that stands out. Learn the key principles of effective branding.",
    image: "https://suratdms.com/wp-content/uploads/elementor/thumbs/7-qtrfpdqfqubahuu2f814nifalt8jh3xx4i4uhynlza.jpg",
    category: "Branding",
    date: "July 28, 2022",
    externalUrl: "https://suratdms.com/how-to-design-a-simple-yet-unique-and-memorable-brand-identity/"
  },
  {
    id: "4",
    title: "Increasing Engagement with Instagram and Facebook",
    slug: "increasing-engagement-instagram-facebook",
    excerpt: "Boost your social media presence with proven strategies to increase engagement on Instagram and Facebook.",
    image: "https://suratdms.com/wp-content/uploads/elementor/thumbs/8-qtrfpjdgvuj0filviagw2h0264gqrakb5a1rdmf8xy.jpg",
    category: "Social Media",
    date: "July 28, 2022",
    externalUrl: "https://suratdms.com/increasing-engagement-with-instagram-and-facebook/"
  },
  {
    id: "5",
    title: "Engendering a Culture of Professional Development",
    slug: "culture-professional-development",
    excerpt: "Foster growth and learning in your organization with effective professional development strategies.",
    image: "https://suratdms.com/wp-content/uploads/elementor/thumbs/9-qtrfpo2nu0pg1kf1qui0wxtd51tkts2ytxb6s08a2u.jpg",
    category: "Career",
    date: "July 28, 2022",
    externalUrl: "https://suratdms.com/engendering-a-culture-of-professional-development/"
  }
];
