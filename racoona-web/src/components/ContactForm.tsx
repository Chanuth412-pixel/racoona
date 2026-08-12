import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'software',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const interestParam = params.get('interest');
      if (interestParam) {
        setFormData((prev) => ({ ...prev, interest: interestParam }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        interest: 'software',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 rounded-2xl border border-slate-200 bg-white shadow-md">
      <h2 className="text-xl font-bold font-sans text-slate-900 mb-6">Send a Message</h2>

      {status === 'success' ? (
        <div className="p-4 rounded-xl border border-slate-300 bg-slate-100 text-slate-800 text-sm font-sans">
          Inquiry received. Our team will review your submission and contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm transition-colors"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm transition-colors"
              placeholder="corporate@company.com"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Division Interest</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm transition-colors"
            >
              <option value="software">Software Engineering (AI & Cloud)</option>
              <option value="it-services">IT Operations (Managed Infrastructure)</option>
              <option value="hospitality">Hospitality Asset Operations</option>
              <option value="general">General Corporate Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm transition-colors resize-none"
              placeholder="Describe your initiative..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-sans font-bold text-sm hover:bg-black disabled:opacity-50 transition-colors shadow-sm"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
}
