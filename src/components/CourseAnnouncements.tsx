"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getActiveCourseAnnouncements } from "@/lib/supabase";
import type { CourseAnnouncement } from "@/types/course-announcement";

export default function CourseAnnouncements() {
  const [announcements, setAnnouncements] = useState<CourseAnnouncement[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        console.log('Fetching announcements...');
        const data = await getActiveCourseAnnouncements();
        console.log('Announcements received:', data);
        setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnnouncements();
  }, []);

  // Auto-scroll through announcements
  useEffect(() => {
    if (announcements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  if (loading) {
    return (
      <div 
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl relative overflow-hidden" 
        style={{ minHeight: '360px', transform: 'translateX(-30px)' }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/img/logo.jpg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%) brightness(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gray-200/30"></div>
        <div className="relative z-10">
          <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
            New Course Announcements
          </h3>
          <p className="text-gray-600">Loading announcements...</p>
        </div>
      </div>
    );
  }

  if (announcements.length === 0) {
    return (
      <div 
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl relative overflow-hidden" 
        style={{ minHeight: '360px', transform: 'translateX(-30px)' }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/img/logo.jpg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%) brightness(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gray-200/30"></div>
        <div className="relative z-10">
          <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
            New Course Announcements
          </h3>
          <p className="text-gray-700">
            Stay updated with our latest dental education courses and exam preparation materials.
          </p>
        </div>
      </div>
    );
  }

  const currentAnnouncement = announcements[currentIndex];

  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl relative overflow-hidden" 
      style={{ minHeight: '360px', transform: 'translateX(-30px)' }}
    >
      {/* Background logo with light gray overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/img/logo.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%) brightness(1.2)',
        }}
      />
      <div className="absolute inset-0 bg-gray-200/30"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
          New Course Announcements
        </h3>
      
        {/* Scrollable container with horizontal scroll */}
        <div className="relative overflow-hidden z-10" style={{ height: '280px' }}>
          <div 
            className="flex h-full"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {announcements.map((announcement, index) => (
              <div 
                key={announcement.id} 
                className="flex-shrink-0 w-full"
                style={{ 
                  minWidth: '100%',
                  maxWidth: '100%'
                }}
              >
                <div className="h-full flex flex-col pr-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">
                    {announcement.title}
                  </h4>
                  {announcement.description && (
                    <p className="text-gray-700 text-sm mb-4 flex-grow">
                      {announcement.description}
                    </p>
                  )}
                  {announcement.course_url && (
                    <Link
                      href={announcement.course_url}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center mt-auto"
                    >
                      Learn more →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        {announcements.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 relative z-10">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to announcement ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

