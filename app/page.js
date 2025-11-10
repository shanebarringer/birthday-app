'use client';

import React, { useState } from 'react';
import { Heart, Mail } from 'lucide-react';

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
      className="relative w-full aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpen}
    >
      {/* Envelope */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
        }`}
      >
        <div className={`w-full h-full bg-white border-2 rounded-xl flex flex-col items-center justify-center transition-all duration-300 shadow-md ${
          isHovered ? 'border-pink-400 shadow-xl shadow-pink-200/50 scale-105' : 'border-gray-200'
        }`}>
          <Mail className={`w-12 h-12 mb-2 transition-colors duration-300 ${
            isHovered ? 'text-pink-500' : 'text-gray-600'
          }`} />
          <span className={`text-2xl font-bold transition-colors duration-300 ${
            isHovered ? 'text-pink-500' : 'text-gray-800'
          }`}>{number}</span>
        </div>
      </div>

      {/* Heart with message */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      >
        <div className="relative w-full h-full bg-pink-500 rounded-xl flex items-center justify-center p-4 shadow-xl">
          <Heart className="absolute top-2 right-2 w-6 h-6 text-white/80 fill-white/80" />
          <p className="text-white text-sm leading-relaxed text-center font-medium drop-shadow-sm">
            {message}
          </p>
        </div>
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
    <div className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Happy 16th Birthday!
          </h1>
          {showTitle && (
            <p className="text-xl text-gray-700">Click each envelope to reveal why we love you</p>
          )}
          {allOpened && (
            <p className="text-2xl text-pink-500 font-semibold mt-4 animate-pulse">
              We love you so much! ♡
            </p>
          )}
        </div>

        {/* Grid of envelopes */}
        <div className="grid grid-cols-4 gap-6 mb-8">
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
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 font-medium">
            {openCards.size} of 16 opened
          </p>
        </div>
      </div>
    </div>
  );
}
