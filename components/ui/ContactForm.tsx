"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  NEXT_PUBLIC_PUBLIC_KEY,
  NEXT_PUBLIC_SERVICE_ID,
  NEXT_PUBLIC_TEMPLATE_ID,
} from "@/conifg";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const [inputs, setInputs] = useState<FormInputs>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [inlineMessage, setInlineMessage] = useState("");

  const data = {
    user_id: NEXT_PUBLIC_PUBLIC_KEY,
    service_id: NEXT_PUBLIC_SERVICE_ID,
    template_id: NEXT_PUBLIC_TEMPLATE_ID,
    template_params: {
      from_name: inputs.name,
      from_email: inputs.email,
      to_name: "Rahul Soni",
      message: inputs.message,
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!inputs.name.trim() || !inputs.email.trim() || !inputs.message.trim()) {
      setStatus("error");
      setInlineMessage("Please fill in all fields before sending.");
      return;
    }
    if (!inputs.email.includes("@")) {
      setStatus("error");
      setInlineMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setInlineMessage("");

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
        headers: { "Content-Type": "application/json" },
      });
      setStatus("success");
      setInlineMessage("✅ Message sent! I'll get back to you soon.");
      setInputs({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setInlineMessage("❌ Something went wrong. Please try again.");
    }
  };

  const inputBaseStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid var(--border-subtle)",
    color: "var(--text-primary)",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex flex-col gap-1">
          <label
            className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: "var(--text-muted)" }}
            htmlFor="contact-name"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={inputs.name}
            placeholder="Your name"
            aria-label="Your name"
            required
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            style={inputBaseStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "var(--border-accent)";
              (e.target as HTMLInputElement).style.boxShadow = "var(--glow-accent)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "var(--border-subtle)";
              (e.target as HTMLInputElement).style.boxShadow = "none";
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label
            className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: "var(--text-muted)" }}
            htmlFor="contact-email"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={inputs.email}
            placeholder="your@email.com"
            aria-label="Your email address"
            required
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            style={inputBaseStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "var(--border-accent)";
              (e.target as HTMLInputElement).style.boxShadow = "var(--glow-accent)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "var(--border-subtle)";
              (e.target as HTMLInputElement).style.boxShadow = "none";
            }}
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label
          className="text-xs font-semibold tracking-wide uppercase"
          style={{ color: "var(--text-muted)" }}
          htmlFor="contact-message"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          value={inputs.message}
          placeholder="Tell me about your project or idea..."
          aria-label="Your message"
          required
          rows={5}
          onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
          style={{ ...inputBaseStyle, resize: "vertical", minHeight: "120px" }}
          onFocus={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor = "var(--border-accent)";
            (e.target as HTMLTextAreaElement).style.boxShadow = "var(--glow-accent)";
          }}
          onBlur={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor = "var(--border-subtle)";
            (e.target as HTMLTextAreaElement).style.boxShadow = "none";
          }}
        />
      </div>

      {/* Inline feedback */}
      {inlineMessage && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm px-3 py-2 rounded-lg"
          style={{
            color: status === "success" ? "#4ade80" : "#f87171",
            background: status === "success" ? "rgba(74,222,128,0.08)" : "rgba(248,113,113,0.08)",
            border: `1px solid ${status === "success" ? "rgba(74,222,128,0.2)" : "rgba(248,113,113,0.2)"}`,
          }}
          role="alert"
          aria-live="polite"
        >
          {inlineMessage}
        </motion.p>
      )}

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.03, boxShadow: "var(--glow-accent)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        aria-label="Send message"
        className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
        style={{
          background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
          opacity: status === "loading" ? 0.7 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
        }}
      >
        {status === "loading" ? (
          <>
            <div
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
              role="status"
              aria-label="Sending message"
            />
            Sending...
          </>
        ) : (
          "Send Message →"
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;
