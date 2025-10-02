import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus("⚠️ Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        "service_w2rbq6g", // your service id
        "template_irmbqlo", // your template id
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "layanavm4691@gmail.com",
        },
        "WObmzt97CDejlwtnE" // your public key
      );

      setSubmitStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-lg mx-auto px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Fill out the form and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 text-white font-medium rounded-lg transition ${
                isSubmitting
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus && (
              <div
                className={`text-center mt-3 p-2 rounded-lg text-sm ${
                  submitStatus.includes("✅")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
