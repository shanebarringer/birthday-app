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
  "You're a truly wonderful daughter, and I appreciate who you are in this moment.",
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
          className={`w-full h-full transition-all duration-300 border-2 ${
            isHovered
              ? 'shadow-xl shadow-sakura-200/50 scale-[1.05] border-sakura-300'
              : 'shadow-md border-sakura-100'
          }`}
        >
          <CardBody className="flex flex-col items-center justify-center p-6 bg-white relative overflow-hidden">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
              <svg viewBox="0 0 100 100" className="text-sakura-400">
                <circle cx="80" cy="20" r="40" fill="currentColor" />
              </svg>
            </div>

            {/* Cherry blossom decoration */}
            <div className={`absolute top-3 right-3 transition-all duration-300 ${
              isHovered ? 'text-sakura-500 opacity-80 scale-110' : 'text-sakura-300 opacity-50'
            }`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59L12 4L13.41 2.59C13 2.19 12.5 2 12 2M16.95 5.54C16.5 5.77 16 6.13 15.54 6.59L17 8.05L18.46 6.59C18 6.13 17.5 5.77 17.05 5.54M7.05 5.54C6.5 5.77 6 6.13 5.54 6.59L7 8.05L8.46 6.59C8 6.13 7.5 5.77 7.05 5.54M12 22C11.5 22 11 21.81 10.59 21.41L12 20L13.41 21.41C13 21.81 12.5 22 12 22M16.95 18.46C16.5 18.23 16 17.87 15.54 17.41L17 15.95L18.46 17.41C18 17.87 17.5 18.23 17.05 18.46M7.05 18.46C6.5 18.23 6 17.87 5.54 17.41L7 15.95L8.46 17.41C8 17.87 7.5 18.23 7.05 18.46M22 12C22 11.5 21.81 11 21.41 10.59L20 12L21.41 13.41C21.81 13 22 12.5 22 12M2 12C2 11.5 2.19 11 2.59 10.59L4 12L2.59 13.41C2.19 13 2 12.5 2 12Z" />
              </svg>
            </div>

            {/* Number badge */}
            <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              isHovered
                ? 'bg-sakura-500 text-white scale-110'
                : 'bg-sakura-100 text-sakura-700'
            }`}>
              {number}
            </div>

            <Mail
              className={`w-12 h-12 mb-2 transition-all duration-300 ${
                isHovered ? 'text-sakura-500 scale-110' : 'text-gray-400'
              }`}
            />
            <p className="text-xs text-gray-500 font-medium">Click to open</p>
          </CardBody>
        </Card>
      </div>

      {/* Heart with message */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-6'
        }`}
      >
        <Card className="w-full h-full bg-sakura-500 shadow-2xl border-2 border-sakura-600">
          <CardBody className="flex items-center justify-center p-5 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute top-0 right-0 w-20 h-20 text-white" viewBox="0 0 100 100">
                <circle cx="70" cy="30" r="40" fill="currentColor" />
              </svg>
              <svg className="absolute bottom-0 left-0 w-24 h-24 text-white" viewBox="0 0 100 100">
                <circle cx="30" cy="70" r="45" fill="currentColor" />
              </svg>
            </div>

            <Heart className="absolute top-4 right-4 md:top-5 md:right-5 w-6 h-6 md:w-7 md:h-7 text-white/80 fill-white/80 animate-pulse" />

            {/* Cherry blossom decoration on heart card */}
            <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 text-white/40">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="md:w-6 md:h-6">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59L12 4L13.41 2.59C13 2.19 12.5 2 12 2M16.95 5.54C16.5 5.77 16 6.13 15.54 6.59L17 8.05L18.46 6.59C18 6.13 17.5 5.77 17.05 5.54M7.05 5.54C6.5 5.77 6 6.13 5.54 6.59L7 8.05L8.46 6.59C8 6.13 7.5 5.77 7.05 5.54M12 22C11.5 22 11 21.81 10.59 21.41L12 20L13.41 21.41C13 21.81 12.5 22 12 22M16.95 18.46C16.5 18.23 16 17.87 15.54 17.41L17 15.95L18.46 17.41C18 17.87 17.5 18.23 17.05 18.46M7.05 18.46C6.5 18.23 6 17.87 5.54 17.41L7 15.95L8.46 17.41C8 17.87 7.5 18.23 7.05 18.46M22 12C22 11.5 21.81 11 21.41 10.59L20 12L21.41 13.41C21.81 13 22 12.5 22 12M2 12C2 11.5 2.19 11 2.59 10.59L4 12L2.59 13.41C2.19 13 2 12.5 2 12Z" />
              </svg>
            </div>

            {/* Number badge on heart */}
            <div className="absolute top-4 left-4 md:top-5 md:left-5 w-7 h-7 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-xs md:text-sm font-bold text-white">{number}</span>
            </div>

            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center font-normal relative z-10 px-2 sm:px-3 md:px-4 pt-2">
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
    <div className="min-h-screen bg-sakura-50/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15c-4 0-7 2-8 5 0-3-3-5-7-5s-7 2-7 5c0 4 4 8 14 14 10-6 14-10 14-14 0-3-3-5-7-5z' fill='%23FFB7C5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <NavigationBar />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Decorative top elements */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-sakura-300 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-400 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
            </div>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-sakura-400">
              <path d="M12 2C11.5 2 11 2.19 10.59 2.59L12 4L13.41 2.59C13 2.19 12.5 2 12 2M16.95 5.54C16.5 5.77 16 6.13 15.54 6.59L17 8.05L18.46 6.59C18 6.13 17.5 5.77 17.05 5.54M7.05 5.54C6.5 5.77 6 6.13 5.54 6.59L7 8.05L8.46 6.59C8 6.13 7.5 5.77 7.05 5.54M12 22C11.5 22 11 21.81 10.59 21.41L12 20L13.41 21.41C13 21.81 12.5 22 12 22M16.95 18.46C16.5 18.23 16 17.87 15.54 17.41L17 15.95L18.46 17.41C18 17.87 17.5 18.23 17.05 18.46M7.05 18.46C6.5 18.23 6 17.87 5.54 17.41L7 15.95L8.46 17.41C8 17.87 7.5 18.23 7.05 18.46M22 12C22 11.5 21.81 11 21.41 10.59L20 12L21.41 13.41C21.81 13 22 12.5 22 12M2 12C2 11.5 2.19 11 2.59 10.59L4 12L2.59 13.41C2.19 13 2 12.5 2 12Z" />
            </svg>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-400 rounded-full"></div>
              <div className="w-2 h-2 bg-sakura-300 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-2 border-sakura-100 p-8 sm:p-10 max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-gray-800 mb-4">
              16 Reasons Why
              <br />
              <span className="text-sakura-600">I Love You</span>
            </h1>

            {showTitle ? (
              <p className="text-base sm:text-xl text-gray-600 max-w-xl mx-auto mb-6">
                Each envelope contains a heartfelt message just for you.
                Click to open them and feel the love ♡
              </p>
            ) : allOpened ? (
              <div className="space-y-3">
                <div className="inline-block px-6 py-3 bg-sakura-500 text-white rounded-full font-semibold text-lg shadow-md">
                  All messages unlocked! 🎉
                </div>
                <p className="text-xl text-sakura-600 font-sans font-semibold">
                  We love you so much, Stella ♡
                </p>
              </div>
            ) : null}

            {/* Visual progress bar */}
            {!allOpened && openCards.size > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Progress</span>
                  <span className="text-sm font-bold text-sakura-600">{openCards.size}/16</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-sakura-500 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(openCards.size / 16) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Grid of envelopes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 pb-12">
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
      </main>
    </div>
  );
}
