import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

const isConfigured = Boolean(serviceId && templateId && publicKey);

export const sendEmail = async (data) => {
  if (!isConfigured) {
    throw new Error("Contact email is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to the deployment environment.");
  }

  return emailjs.send(serviceId, templateId, data, publicKey);
};