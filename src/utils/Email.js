import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

export const sendEmail = async (data) => {
  if ([serviceId, templateId, publicKey].some((value) => value.includes("YOUR_"))) {
    throw new Error("EmailJS is not configured yet. Set VITE_EMAILJS_* values in your environment.");
  }

  return emailjs.send(serviceId, templateId, data, publicKey);
};