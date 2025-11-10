'use client';

import React, { useState } from 'react';
import { Heart, Mail } from 'lucide-react';
import { Card, CardBody } from '@heroui/react';
import NavigationBar from './components/Navbar';

const messages = [
  "I love your taste in music - from Sufjan to Radiohead to Conan Gray, you're far beyond your years.",
  "I love that you're an avid reader and that your poetry has incredible depth.",
  "I love our conversations and the questions you ask - I look forward to these times.",
  "You're fully present at every movie and concert we see together - you're my favorite person to share these moments with.",
  "You're a fantastic communicator, and our adult friends don't just see you as our kid - they consider you a friend.",
  "I learn from you all the time - you've taught me about etiquette, pop culture, music, and so many other things over the years.",
  "You're a truly wonderful daughter, and I appreciate who you are and who you're becoming.",
  "I appreciate your curiosity and thoughtfulness.",
  "You're a good friend to those in your life - you've done this in every city and continue to maintain good friendships.",
  "You're incredibly adaptable - especially with this last move to Denver, you haven't just weathered it, you've thrived.",
  "You've helped us make some of our best friends just by being yourself.",
  "You have a bright future in whatever you choose to do - and I think it will become apparent over time.",
  "I'm grateful for all the fun moments we've shared over the years.",
  "Your resilience and grace through Hurricane Helene - you stayed yourself through it all.",
  "I'm proud of the person you're becoming.",
  "I love your interest in Japanese culture - from anime to sushi to everything in between, I love watching you dive deep."
];

const EnvelopeCard = ({ number, message, isOpen, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full aspect-square cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpen}
    >
      {/* Envelope */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-0 scale-90 rotate-6' : 'opacity-100 scale-100 rotate-0'
        }`}
      >
        <Card
          className={`w-full h-full transition-all duration-300 ${
            isHovered ? 'shadow-lg scale-[1.02]' : 'shadow-sm'
          }`}
          style={{
            borderColor: isHovered ? '#FFB7C5' : '#F5F5F5',
            borderWidth: '2px',
          }}
        >
          <CardBody className="flex flex-col items-center justify-center p-6">
            {/* Cherry blossom decoration */}
            <div className="absolute top-2 right-2 text-sakura-300 opacity-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59L12 4L13.41 2.59C13 2.19 12.5 2 12 2M16.95 5.54C16.5 5.77 16 6.13 15.54 6.59L17 8.05L18.46 6.59C18 6.13 17.5 5.77 17.05 5.54M7.05 5.54C6.5 5.77 6 6.13 5.54 6.59L7 8.05L8.46 6.59C8 6.13 7.5 5.77 7.05 5.54M12 22C11.5 22 11 21.81 10.59 21.41L12 20L13.41 21.41C13 21.81 12.5 22 12 22M16.95 18.46C16.5 18.23 16 17.87 15.54 17.41L17 15.95L18.46 17.41C18 17.87 17.5 18.23 17.05 18.46M7.05 18.46C6.5 18.23 6 17.87 5.54 17.41L7 15.95L8.46 17.41C8 17.87 7.5 18.23 7.05 18.46M22 12C22 11.5 21.81 11 21.41 10.59L20 12L21.41 13.41C21.81 13 22 12.5 22 12M2 12C2 11.5 2.19 11 2.59 10.59L4 12L2.59 13.41C2.19 13 2 12.5 2 12Z" />
              </svg>
            </div>

            <Mail
              className={`w-10 h-10 mb-3 transition-colors duration-300 ${
                isHovered ? 'text-sakura-500' : 'text-gray-400'
              }`}
            />
            <span className={`text-2xl font-serif font-semibold transition-colors duration-300 ${
              isHovered ? 'text-sakura-600' : 'text-gray-700'
            }`}>
              {number}
            </span>
          </CardBody>
        </Card>
      </div>

      {/* Heart with message */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-6'
        }`}
      >
        <Card className="w-full h-full bg-sakura-500 shadow-xl">
          <CardBody className="flex items-center justify-center p-6 relative">
            <Heart className="absolute top-3 right-3 w-5 h-5 text-white/70 fill-white/70" />

            {/* Cherry blossom decoration on heart card */}
            <div className="absolute top-3 left-3 text-white/30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59L12 4L13.41 2.59C13 2.19 12.5 2 12 2M16.95 5.54C16.5 5.77 16 6.13 15.54 6.59L17 8.05L18.46 6.59C18 6.13 17.5 5.77 17.05 5.54M7.05 5.54C6.5 5.77 6 6.13 5.54 6.59L7 8.05L8.46 6.59C8 6.13 7.5 5.77 7.05 5.54M12 22C11.5 22 11 21.81 10.59 21.41L12 20L13.41 21.41C13 21.81 12.5 22 12 22M16.95 18.46C16.5 18.23 16 17.87 15.54 17.41L17 15.95L18.46 17.41C18 17.87 17.5 18.23 17.05 18.46M7.05 18.46C6.5 18.23 6 17.87 5.54 17.41L7 15.95L8.46 17.41C8 17.87 7.5 18.23 7.05 18.46M22 12C22 11.5 21.81 11 21.41 10.59L20 12L21.41 13.41C21.81 13 22 12.5 22 12M2 12C2 11.5 2.19 11 2.59 10.59L4 12L2.59 13.41C2.19 13 2 12.5 2 12Z" />
              </svg>
            </div>

            <p className="text-white text-sm leading-relaxed text-center font-normal px-2">
              {message}
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default function BirthdayHearts() {
  const [openCards, setOpenCards] = useState(new Set());
  const [showTitle, setShowTitle] = useState(true);

  const handleCardOpen = (index) => {
    setOpenCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
    setShowTitle(false);
  };

  const allOpened = openCards.size === 16;

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-px bg-sakura-300"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-sakura-400">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59L12 4L13.41 2.59C13 2.19 12.5 2 12 2M16.95 5.54C16.5 5.77 16 6.13 15.54 6.59L17 8.05L18.46 6.59C18 6.13 17.5 5.77 17.05 5.54M7.05 5.54C6.5 5.77 6 6.13 5.54 6.59L7 8.05L8.46 6.59C8 6.13 7.5 5.77 7.05 5.54M12 22C11.5 22 11 21.81 10.59 21.41L12 20L13.41 21.41C13 21.81 12.5 22 12 22M16.95 18.46C16.5 18.23 16 17.87 15.54 17.41L17 15.95L18.46 17.41C18 17.87 17.5 18.23 17.05 18.46M7.05 18.46C6.5 18.23 6 17.87 5.54 17.41L7 15.95L8.46 17.41C8 17.87 7.5 18.23 7.05 18.46M22 12C22 11.5 21.81 11 21.41 10.59L20 12L21.41 13.41C21.81 13 22 12.5 22 12M2 12C2 11.5 2.19 11 2.59 10.59L4 12L2.59 13.41C2.19 13 2 12.5 2 12Z" />
              </svg>
              <div className="w-12 h-px bg-sakura-300"></div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-gray-800 mb-3">
              Happy 16th Birthday
            </h1>
          </div>

          {showTitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click each envelope to reveal a message
            </p>
          )}

          {allOpened && (
            <div className="mt-6 animate-pulse">
              <p className="text-2xl text-sakura-600 font-serif font-semibold">
                We love you so much ♡
              </p>
            </div>
          )}
        </div>

        {/* Grid of envelopes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {messages.map((message, index) => (
            <EnvelopeCard
              key={index}
              number={index + 1}
              message={message}
              isOpen={openCards.has(index)}
              onOpen={() => handleCardOpen(index)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-medium">
            {openCards.size} of 16 messages opened
          </p>
        </div>
      </main>
    </div>
  );
}
