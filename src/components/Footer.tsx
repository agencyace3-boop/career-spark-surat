import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
];

const quickLinks2 = [
  { label: "Our Services", href: "#business" },
  { label: "Reserve Your Spot", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const categories = [
  { label: "All Courses", href: "#courses" },
  { label: "Online Courses", href: "#courses" },
  { label: "Offline Courses", href: "#courses" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/surat_digital_marketing_school", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/Suratdigitalmarketingschool", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/42753366", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">Surat</span>
              <span className="text-2xl font-bold text-secondary">DMS</span>
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
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
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
                <span>A-1, 504 Subham Residency, Bh L P Savani School, New Pal Road, Adajan Surat.</span>
              </div>
              <a
                href="mailto:info@suratdms.in"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@suratdms.in</span>
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

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=919558866993"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-secondary-foreground" />
      </a>
    </footer>
  );
};

export default Footer;
