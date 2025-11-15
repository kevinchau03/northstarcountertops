"use client";

import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import Link from 'next/link';

interface GoogleReview {
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  relativeTimeDescription: string;
  text: string;
}

interface ReviewsData {
  rating: number;
  count: number;
  mapsUrl: string;
  reviews: GoogleReview[];
}

export default function Testimonials() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          const errorMessage = errorData?.error || `HTTP ${response.status}: ${response.statusText}`;
          throw new Error(errorMessage);
        }
        
        const data = await response.json();
        
        // Check if the API returned an error
        if (!data.ok && data.error) {
          throw new Error(data.error);
        }
        
        setReviewsData(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to load reviews';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-br from-surface to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !reviewsData) {
    return (
      <section className="py-16 bg-gradient-to-br from-surface to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              What Our Customers Say
            </h2>
            {error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-red-700 font-medium mb-2">Unable to Load Reviews</p>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            ) : (
              <p className="text-gray-600">
                We&apos;re working to load our latest reviews. Please check back soon!
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  const { rating, count, mapsUrl, reviews } = reviewsData;

  return (
    <section className="py-16 bg-gradient-to-br from-surface to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide mb-6">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Don&apos;t just take our word for it. See what our satisfied customers have to say about their experience with Northstar Countertops.
          </p>
          
          {/* Overall Rating Display */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-primary">{rating?.toFixed(1) || '5.0'}</div>
              <div className="flex flex-col">
                <div className="flex text-2xl">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < Math.round(rating || 5) ? "text-yellow-400" : "text-gray-300"}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  Based on {count || '100+'} Google reviews
                </p>
              </div>
            </div>
            
            {/* View on Google Button */}
            {mapsUrl && (
              <Link 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-500">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                View all reviews on Google
              </Link>
            )}
          </div>
        </div>

        {/* Reviews Grid */}
        {reviews && reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <TestimonialCard
                key={index}
                authorName={review.authorName}
                authorPhotoUrl={review.authorPhotoUrl}
                rating={review.rating}
                relativeTimeDescription={review.relativeTimeDescription}
                text={review.text}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No reviews available at the moment.</p>
            {mapsUrl && (
              <Link 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-600 font-semibold underline"
              >
                Check out our Google reviews
              </Link>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-border/20">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Ready to Join Our Satisfied Customers?
          </h3>
          <p className="text-gray-600 mb-6">
            Experience the quality and service that our customers rave about. Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/gallery"
              className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
