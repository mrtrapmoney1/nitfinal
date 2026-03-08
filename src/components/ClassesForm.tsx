'use client';

import { useState } from 'react';

interface FieldErrors {
  name?: string;
  contact?: string;
  form?: string;
}

export default function ClassesForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): FieldErrors => {
    const errs: FieldErrors = {};
    if (!name.trim()) errs.name = 'Name is required.';
    if (!contact.trim()) errs.contact = 'Please provide a phone number or email address.';
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
      const res = await fetch('/api/classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), contact: contact.trim(), message: message.trim() }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setErrors({ form: 'Something went wrong. Please try again or call us at (402) 466-9090.' });
      }
    } catch {
      setErrors({ form: 'Network error. Please try again or call us at (402) 466-9090.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="form-success" role="status">
        <strong>You&apos;re signed up.</strong> We&apos;ll reach out to confirm the next available session.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="signup-name">Name <span aria-hidden="true">*</span></label>
        <input
          type="text"
          id="signup-name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'invalid' : ''}
        />
        {errors.name && <p className="error-msg">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="signup-contact">
          Best way to reach you — phone or email <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="signup-contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className={errors.contact ? 'invalid' : ''}
        />
        {errors.contact && <p className="error-msg">{errors.contact}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="signup-message">
          Questions or appliance details <span className="optional">(optional)</span>
        </label>
        <textarea
          id="signup-message"
          rows={4}
          placeholder="e.g. 'I have a front-load washer that won't spin' or 'Not sure if my appliance qualifies'"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {errors.form && <p className="error-msg" style={{ marginBottom: '1rem' }}>{errors.form}</p>}

      <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
        {submitting ? 'Sending...' : 'Sign Me Up'}
      </button>
    </form>
  );
}
