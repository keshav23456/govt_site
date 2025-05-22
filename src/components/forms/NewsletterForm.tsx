import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      if (email && email.includes('@')) {
        setIsSuccess(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      {isSuccess ? (
        <div className="bg-primary-100 text-primary-800 p-3 rounded-md">
          Thank you for subscribing to our newsletter!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              className="btn-primary sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;