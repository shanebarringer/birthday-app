'use client';

import { useState } from 'react';
import { Card, CardBody, CardHeader, Input, Textarea, Button } from '@heroui/react';
import { Heart, Send, CheckCircle2 } from 'lucide-react';
import NavigationBar from '../../components/Navbar';

export default function FriendsSubmitPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/messages/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit message');
      }

      setSubmitted(true);
      setName('');
      setMessage('');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-sakura-50/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15c-4 0-7 2-8 5 0-3-3-5-7-5s-7 2-7 5c0 4 4 8 14 14 10-6 14-10 14-14 0-3-3-5-7-5z' fill='%23FFB7C5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <NavigationBar />

      <main className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-sakura-300 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-400 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
            </div>
            <Heart className="w-8 h-8 text-sakura-500 fill-sakura-500" />
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-400 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-300 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">
            Send Birthday Wishes
            <br />
            <span className="text-sakura-600">to Stella</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Share a message for Stella's Sweet 16! Your message will appear immediately on her special birthday page.
          </p>
        </div>

        {/* Submission Form */}
        {submitted ? (
          <Card className="border-2 border-sakura-200 shadow-xl">
            <CardBody className="text-center py-16 px-8">
              <CheckCircle2 className="w-16 h-16 text-sakura-500 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                Message Sent! 🎉
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for your birthday wishes! Your message is now live on Stella's birthday page.
              </p>
              <Button
                color="default"
                variant="flat"
                className="bg-sakura-100 text-sakura-700 font-semibold"
                onPress={() => setSubmitted(false)}
              >
                Send Another Message
              </Button>
            </CardBody>
          </Card>
        ) : (
          <Card className="border-2 border-sakura-200 shadow-xl">
            <CardHeader className="flex-col items-start px-6 pt-6 pb-4 border-b-2 border-sakura-100">
              <h2 className="text-xl font-serif font-bold text-gray-800">Your Birthday Message</h2>
              <p className="text-sm text-gray-500">Fill out the form below to send your wishes</p>
            </CardHeader>
            <CardBody className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    value={name}
                    onValueChange={setName}
                    required
                    size="lg"
                    classNames={{
                      input: "text-base px-3",
                      inputWrapper: "border-2 border-gray-200 hover:border-sakura-300 focus-within:!border-sakura-500"
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Write a heartfelt birthday message for Stella..."
                    value={message}
                    onValueChange={setMessage}
                    required
                    minRows={6}
                    size="lg"
                    classNames={{
                      input: "text-base p-3",
                      inputWrapper: "border-2 border-gray-200 hover:border-sakura-300 focus-within:!border-sakura-500 rounded-lg",
                      base: "w-full",
                      innerWrapper: "pb-0"
                    }}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  color="default"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full bg-sakura-500 text-white font-semibold text-base hover:bg-sakura-600"
                  startContent={!isSubmitting && <Send className="w-5 h-5" />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Birthday Message'}
                </Button>
              </form>
            </CardBody>
          </Card>
        )}

        {/* Info Box */}
        <div className="mt-8 bg-white rounded-xl border-2 border-sakura-100 p-6 shadow-md">
          <h3 className="font-serif font-bold text-gray-800 mb-2">💝 A few notes:</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Your message will appear immediately on Stella's birthday page</li>
            <li>• Please keep messages positive and heartfelt</li>
            <li>• You can submit multiple messages if you'd like!</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
