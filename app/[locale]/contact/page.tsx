"use client";
import React, { useState } from "react";
import {
  Send,
  Mail,
  User,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "motion/react";
import Connect from "@/components/ConnectBlock";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("ContactPage");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<any>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-message-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          textBody: formData.message,
        }),
      });
      if (response) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-foreground relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            {t("hero_title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("hero_subtext")}
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-card backdrop-blur-sm border border-border rounded-2xl shadow-2xl p-8 md:p-10 animate-slide-up"
          >
            <div className="space-y-8">
              <div className="group">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-card-foreground mb-3 flex items-center gap-2"
                >
                  <User className="w-4 h-4 text-primary" />
                  {t("name_placeholder")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 hover:border-primary text-foreground placeholder-muted-foreground"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-card-foreground mb-3 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  {t("name_placeholder")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 hover:border-primary text-foreground placeholder-muted-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-card-foreground mb-3 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  {t("message_placeholder")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 hover:border-primary text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    {t("sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("send_message")}
                  </>
                )}
              </button>
            </div>
            {submitStatus === "success" && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <p className="text-green-800 dark:text-green-200 font-medium">
                  {t("message_success")}
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <p className="text-red-800 dark:text-red-200 font-medium">
                  {t("message_fail")}
                </p>
              </motion.div>
            )}
          </motion.div>
          <div className="mt-10 flex flex-col gap-8">
            <h2 className="text-muted-foreground text-2xl mb-4 w-max mx-auto">
              {t("you_can_reach")}
            </h2>
            <Connect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
