'use client';

import { useState, useRef } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  form?: string;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): FieldErrors => {
    const errs: FieldErrors = {};
    if (!fields.name.trim()) errs.name = 'Name is required.';
    if (!fields.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (fields.phone && !/^[\d\s\-+()]{7,}$/.test(fields.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!fields.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setErrors({ form: 'Something went wrong. Please try again or email us directly.' });
      }
    } catch {
      setErrors({ form: 'Network error. Please try again or email us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="form-success">
        <h3>Message Sent</h3>
        <p>Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
        <input
          type="text"
          id="name"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
          className={errors.name ? 'invalid' : ''}
        />
        {errors.name && <p className="error-msg">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
          className={errors.email ? 'invalid' : ''}
        />
        {errors.email && <p className="error-msg">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          autoComplete="tel"
          value={fields.phone}
          onChange={(e) => setFields((f) => ({ ...f, phone: e.target.value }))}
          className={errors.phone ? 'invalid' : ''}
        />
        {errors.phone && <p className="error-msg">{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
        <textarea
          id="message"
          rows={5}
          value={fields.message}
          onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
          className={errors.message ? 'invalid' : ''}
        />
        {errors.message && <p className="error-msg">{errors.message}</p>}
      </div>

      {errors.form && <p className="error-msg" style={{ marginBottom: '1rem' }}>{errors.form}</p>}

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
