// components/WhatsAppFloatingButton.tsx

import { Phone } from "lucide-react";
import Link from "next/link";

export function WhatsAppFloatingButton() {
  const phoneNumber = "557181335749";
  const message = "Olá! Vim pelo seu site, podemos conversar?";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      aria-label="Conversar no WhatsApp">
      <Phone size={24} />
    </Link>
  );
}
