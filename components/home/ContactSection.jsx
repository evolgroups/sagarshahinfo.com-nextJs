'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Contact Section with Form
 * Protected by Cloudflare Turnstile + Honeypot
 * Sends emails via Brevo (Sendinblue) API
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [formLoadTime] = useState(Date.now());
  const turnstileRef = useRef(null);

  // Reset Turnstile widget after submission
  const resetTurnstile = () => {
    if (window.turnstile && turnstileRef.current) {
      window.turnstile.reset(turnstileRef.current);
    }
    setTurnstileToken('');
  };

  // Listen for Turnstile success callback
  useEffect(() => {
    const handleTurnstileSuccess = (e) => {
      setTurnstileToken(e.detail);
    };

    window.addEventListener('turnstile-success', handleTurnstileSuccess);
    return () => {
      window.removeEventListener('turnstile-success', handleTurnstileSuccess);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Check if Turnstile token exists
    if (!turnstileToken) {
      setError('Please complete the security verification.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
          formLoadTime,
          // Honeypot field - should be empty
          website: e.target.website?.value || '',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      resetTurnstile();

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-padding bg-neutral-200/50">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's discuss how we can work together to achieve your business goals"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedSection animation="slide-in-left" className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-800">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-neutral-600">
                Whether you&apos;re looking for business consulting, investment opportunities,
                or strategic partnerships, I&apos;m here to help you take the next step.
              </p>

              <div className="space-y-4 pt-4">
                <ContactInfo
                  icon={Mail}
                  label="Email"
                  value={SITE_CONFIG.email}
                  href={`mailto:${SITE_CONFIG.email}`}
                />
                <ContactInfo
                  icon={MapPin}
                  label="Locations"
                  value="Australia, India, UAE"
                />
              </div>

              {/* CTA for strategy call */}
              <div className="bg-primary-500 rounded-2xl p-6 text-white mt-8">
                <h4 className="text-lg font-bold mb-2">Book a Free Strategy Call</h4>
                <p className="text-sm text-primary-100 mb-4">
                  30 minutes to explore how I can help grow your business
                </p>
                <Button
                  href={`mailto:${SITE_CONFIG.email}?subject=Strategy Call Request`}
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-primary-500"
                >
                  Schedule Now
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-in-right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-neutral-600">
                    Thank you for reaching out. I&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  {/* Honeypot field - hidden from users, bots will fill it */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Cloudflare Turnstile Widget */}
                  <div className="mt-6">
                    <div
                      ref={turnstileRef}
                      className="cf-turnstile"
                      data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                      data-callback="onTurnstileSuccess"
                      data-theme="light"
                    />
                    <Script
                      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                      async
                      defer
                    />
                    <Script id="turnstile-callback">
                      {`window.onTurnstileSuccess = function(token) {
                        window.dispatchEvent(new CustomEvent('turnstile-success', { detail: token }));
                      };`}
                    </Script>
                  </div>

                  {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="mt-6">
                    <Button
                      type="submit"
                      size="sm"
                      disabled={isSubmitting || !turnstileToken}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary-500" />
      </div>
      <div>
        <p className="text-sm text-neutral-500">{label}</p>
        <p className="text-neutral-800 font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}

function FormInput({ label, name, type = 'text', value, onChange, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
      />
    </div>
  );
}
