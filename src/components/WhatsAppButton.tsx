import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919924707478";
  const message = "Hi! I'm interested in learning more about your digital marketing courses.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_71%_45%)] rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
