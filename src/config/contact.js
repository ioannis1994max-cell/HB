const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
const defaultWhatsappMessage = "Hello Hapeshi Brothers Agency, I would like to book a free consultation.";
const whatsappMessage = defaultWhatsappMessage;
const instagramValue = import.meta.env.VITE_INSTAGRAM_URL || import.meta.env.VITE_INSTAGRAM_HANDLE || "";

function buildWhatsAppLink() {
  const cleanNumber = whatsappNumber.replace(/\D/g, "");

  if (!cleanNumber) {
    return "#book-appointment";
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

function buildInstagramLink() {
  const value = instagramValue.trim();

  if (!value) {
    return "#contact";
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://instagram.com/${value.replace(/^@/, "")}`;
}

export const contact = {
  instagram: buildInstagramLink(),
  whatsapp: buildWhatsAppLink(),
};
