import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const franchiseSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(40),
  city: z.string().trim().min(1).max(120),
  business_background: z.string().trim().max(2000).optional().or(z.literal("")),
  investment_range: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const submitFranchiseInquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => franchiseSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("franchise_inquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      business_background: data.business_background || null,
      investment_range: data.investment_range || null,
      message: data.message || null,
    });
    if (error) {
      console.error("franchise insert failed", error);
      throw new Error("Could not submit inquiry");
    }
    return { ok: true };
  });

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
    });
    if (error) {
      console.error("contact insert failed", error);
      throw new Error("Could not send message");
    }
    return { ok: true };
  });
