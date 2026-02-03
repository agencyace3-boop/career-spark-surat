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
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V11.5h3.957v.574c0 2.898.61 5.127 1.812 6.621 1.1 1.369 2.779 2.093 4.861 2.093h.056c2.082 0 3.761-.724 4.861-2.093 1.202-1.494 1.812-3.723 1.812-6.621V11.5h3.957v.568c0 3.518-.85 6.372-2.495 8.423-1.85 2.304-4.603 3.485-8.184 3.509h-.007l.056.001zM5.457 9.964V5.179c0-1.136.245-2.033.727-2.666.572-.749 1.464-1.13 2.652-1.13 1.188 0 2.08.381 2.652 1.13.482.633.727 1.53.727 2.666v4.785h3.957V5.179c0-2.19-.631-3.913-1.876-5.12C13.051.353 11.393 0 9.107 0h-.214C6.607 0 4.949.353 3.704 1.06 2.459 2.266 1.5 3.989 1.5 5.179v4.785h3.957z"/>
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
