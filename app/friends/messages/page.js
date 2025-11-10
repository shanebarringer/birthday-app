'use client';

import { useState, useEffect } from 'react';
import { Card, CardBody, Spinner, Chip } from '@heroui/react';
import { Heart, Users } from 'lucide-react';
import NavigationBar from '../../components/Navbar';

export default function FriendsMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch('/api/messages/approved', {
          cache: 'no-store'
        });
        if (response.ok) {
          const data = await response.json();
          setMessages(data.messages || []);
        }
      } catch (error) {
        console.error('Error loading messages:', error);
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  return (
    <div className="min-h-screen bg-sakura-50/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15c-4 0-7 2-8 5 0-3-3-5-7-5s-7 2-7 5c0 4 4 8 14 14 10-6 14-10 14-14 0-3-3-5-7-5z' fill='%23FFB7C5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <NavigationBar />

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-sakura-300 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-400 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
            </div>
            <Users className="w-8 h-8 text-sakura-500" />
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-400 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-300 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">
            Birthday Wishes
            <br />
            <span className="text-sakura-600">From Friends</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Messages from friends who love and celebrate you, Stella!
          </p>

          {!loading && messages.length > 0 && (
            <div className="mt-6">
              <Chip
                size="lg"
                variant="flat"
                classNames={{
                  base: "bg-sakura-100 border-2 border-sakura-200",
                  content: "text-sakura-700 font-semibold"
                }}
              >
                {messages.length} {messages.length === 1 ? 'Message' : 'Messages'}
              </Chip>
            </div>
          )}
        </div>

        {/* Messages Grid */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Spinner size="lg" color="default" />
          </div>
        ) : messages.length === 0 ? (
          <Card className="border-2 border-sakura-200 shadow-lg">
            <CardBody className="text-center py-16 px-8">
              <Heart className="w-16 h-16 text-sakura-300 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                No Messages Yet
              </h2>
              <p className="text-gray-600 mb-6">
                Be the first to send a birthday wish to Stella!
              </p>
              <a
                href="/friends/submit"
                className="inline-block px-6 py-3 bg-sakura-500 text-white rounded-lg font-semibold hover:bg-sakura-600 transition-colors"
              >
                Send a Message
              </a>
            </CardBody>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {messages.map((msg) => (
              <Card
                key={msg.id}
                className="border-2 border-sakura-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardBody className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sakura-500 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-lg text-gray-800 truncate">
                        {msg.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {new Date(msg.createdAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {msg.message}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

