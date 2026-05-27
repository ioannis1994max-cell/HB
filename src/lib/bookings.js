import { isSupabaseConfigured, supabase } from "./supabase";

export async function submitBookingRequest(formData) {
  if (formData.get("company")) {
    return { offline: true, payload: null };
  }

  const payload = {
    name: formData.get("name")?.toString().trim(),
    phone: formData.get("phone")?.toString().trim(),
    email: formData.get("email")?.toString().trim(),
    service: formData.get("service")?.toString(),
    preferred_date: formData.get("date")?.toString() || null,
    preferred_time: formData.get("time")?.toString() || null,
    message: formData.get("message")?.toString().trim() || null,
    source: "website",
  };

  const missingField = ["name", "phone", "email", "service"].find((field) => !payload[field]);

  if (missingField) {
    throw new Error("Please complete your name, phone, email, and service.");
  }

  if (!isSupabaseConfigured) {
    return { offline: true, payload };
  }

  const { error } = await supabase.from("booking_requests").insert(payload);

  if (error) {
    throw new Error(error.message || "Could not send your request. Please try again.");
  }

  return { offline: false, payload };
}
