import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const quickLinks2 = [
  { label: "Online Course", href: "/online-course" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/surat_digital_marketing_school", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/Suratdigitalmarketingschool", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@suratdigitalmarketingschoo9342", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/42753366", label: "LinkedIn" },
  { icon: () => (
    <svg viewBox="0 0 192 192" fill="currentColor" className="h-5 w-5">
      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.751 121.563 140.908 128.381 132.296C133.559 125.765 136.834 117.287 138.28 106.599C144.217 109.917 148.617 114.254 151.047 119.574C155.179 128.424 155.42 143.794 143.706 155.508C133.373 165.842 120.676 170.349 96.999 170.549C70.6454 170.324 51.1828 162.106 38.5821 145.746C26.637 130.279 20.4628 107.576 20.2259 78.4999C20.4628 49.4242 26.637 26.7206 38.5821 11.2532C51.1828 -5.10668 70.6454 -13.3249 96.999 -13.5494C123.606 -13.3213 143.36 -5.04612 156.254 11.4272C162.583 19.5963 167.205 29.7051 170.062 41.5633L186.679 37.0867C183.132 22.427 177.113 9.74651 168.421 -0.657806C152.074 -20.576 128.036 -30.4328 97.0686 -30.6565L96.9306 -30.6572C66.0962 -30.4334 42.2294 -20.5765 26.0671 -0.500803C12.076 17.0697 4.93521 42.9142 4.68854 78.4332L4.68701 78.5001L4.68854 78.5669C4.93521 114.086 12.076 139.93 26.0671 157.5C42.2294 177.576 66.0962 187.433 96.9306 187.657L97.0686 187.657C127.062 187.424 145.282 180.651 159.828 166.106C179.994 145.939 179.244 120.839 172.614 106.386C167.458 95.2735 157.031 86.7177 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.076 108.662 128.93 98.4405 129.507Z"/>
    </svg>
  ), href: "https://www.threads.com/@surat_digital_marketing_school", label: "Threads" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="Surat Digital Marketing School" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
            
            <h4 className="font-semibold mb-4">Follow us on social media</h4>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks2.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-bold mb-4">GET IN TOUCH</h4>
            <div className="space-y-3">
              <a
                href="tel:+919558866993"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(+91) 95588 66993</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>142, Green Signature, opp. THE LEGEND, behind Prime Shoppers, Vesu, Surat, Gujarat 395007</span>
              </div>
              <a
                href="mailto:Vikasparekh@live.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>Vikasparekh@live.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>
            © Copyright {new Date().getFullYear()} Surat Digital Marketing School, All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
