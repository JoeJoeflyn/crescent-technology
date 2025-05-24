import { cn } from "@/lib/utils";
import { validateForm } from "@/lib/validate";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    details: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for field on change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("");
      return;
    }

    setStatus("Sending...");
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", company: "", email: "", details: "" });
        setErrors({});
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className={cn("block text-sm font-medium text-primary")}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={cn(
            "mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-primary",
            errors.name ? "border-red-500" : "border-gray-300"
          )}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className={cn("mt-1 text-sm text-red-600")}>{errors.name}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className={cn("block text-sm font-medium text-primary")}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={cn(
            "mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-primary",
            errors.email ? "border-red-500" : "border-gray-300"
          )}
          placeholder="Your email address"
        />
        {errors.email && (
          <p className={cn("mt-1 text-sm text-red-600")}>{errors.email}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="company"
          className={cn("block text-sm font-medium text-primary")}
        >
          Company (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={cn(
            "mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-primary",
            errors.company ? "border-red-500" : "border-gray-300"
          )}
          placeholder="Your company name"
        />
        {errors.company && (
          <p className={cn("mt-1 text-sm text-red-600")}>{errors.company}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="details"
          className={cn("block text-sm font-medium text-primary")}
        >
          Details
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
          rows={5}
          className={cn(
            "mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-primary",
            errors.details ? "border-red-500" : "border-gray-300"
          )}
          placeholder="Tell us about your inquiry"
        ></textarea>
        {errors.details && (
          <p className={cn("mt-1 text-sm text-red-600")}>{errors.details}</p>
        )}
      </div>
      {status && (
        <p
          className={cn(
            "mt-6 text-center text-sm font-medium",
            status.includes("successfully") ? "text-green-600" : "text-red-600"
          )}
        >
          {status}
        </p>
      )}
      <button
        type="submit"
        className={cn(
          "w-full p-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors cursor-pointer"
        )}
      >
        Send Message
      </button>
    </form>
  );
}
