"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FF6B6B] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-script text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
            Dentalprep<span className="text-white/90">.ca</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors">
              Home
            </Link>
            <Link href="/courses-nbde-afk-acj" className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors">
              Courses
            </Link>
            <Link href="/about-us" className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors">
              About
            </Link>
            <Link href="/dental-sample-lecture" className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors">
              Sample Lectures
            </Link>
            <Link href="/dental-exam-practice-questions" className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors">
              Practice Questions
            </Link>
            <Link href="/what-our-students-say-about-us" className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors">
              Testimonials
            </Link>
            <Link href="/dentzine-dental-magzine" className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors italic">
              Dentzine
            </Link>
            <Link href="/contact-us" className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/courses-nbde-afk-acj"
                className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/about-us"
                className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/dental-sample-lecture"
                className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sample Lectures
              </Link>
              <Link
                href="/dental-exam-practice-questions"
                className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Practice Questions
              </Link>
              <Link
                href="/what-our-students-say-about-us"
                className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/dentzine-dental-magzine"
                className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors italic"
                onClick={() => setIsOpen(false)}
              >
                Dentzine
              </Link>
              <Link
                href="/contact-us"
                className="text-white hover:text-white/80 font-sans font-bold uppercase tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

