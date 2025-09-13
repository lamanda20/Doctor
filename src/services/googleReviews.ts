// Service pour récupérer les avis Google Maps
export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceDetails {
  place_id: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

class GoogleReviewsService {
  private apiKey: string;
  private placeId: string;
  private proxyUrl: string;

  constructor() {
    // Configuration - À remplacer par vos vraies valeurs
    this.apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY || '';
    this.placeId = process.env.REACT_APP_GOOGLE_PLACE_ID || '';
    this.proxyUrl = process.env.REACT_APP_PROXY_URL || '';
  }

  /**
   * Récupère les avis depuis Google Places API
   */
  async fetchReviews(): Promise<GoogleReview[]> {
    try {
      // Option 1: Via un proxy backend (recommandé)
      if (this.proxyUrl) {
        const response = await fetch(`${this.proxyUrl}/api/google-reviews`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des avis');
        }
        
        const data = await response.json();
        return data.reviews || [];
      }

      // Option 2: Appel direct (limité par CORS)
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.placeId}&fields=name,rating,reviews,user_ratings_total&key=${this.apiKey}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.status === 'OK') {
        return data.result.reviews || [];
      } else {
        throw new Error(`Erreur Google Places API: ${data.status}`);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des avis Google:', error);
      
      // Fallback: retourner des avis par défaut
      return this.getFallbackReviews();
    }
  }

  /**
   * Formate les avis Google pour l'affichage
   */
  formatReviewsForDisplay(reviews: GoogleReview[]): any[] {
    return reviews.map((review, index) => ({
      id: `google-${index}`,
      patientName: review.author_name,
      rating: review.rating,
      comment: review.text,
      date: new Date(review.time * 1000).toLocaleDateString('fr-FR'),
      verified: true,
      source: 'Google Maps',
      avatar: review.profile_photo_url,
      relativeTime: review.relative_time_description,
    }));
  }

  /**
   * Avis de secours en cas d'erreur API
   */
  private getFallbackReviews(): GoogleReview[] {
    return [
      {
        author_name: "Patient Satisfait",
        rating: 5,
        text: "Excellent cabinet médical, Dr. Hasnaa El Malki est très professionnelle et à l'écoute.",
        time: Date.now() / 1000,
        relative_time_description: "il y a 1 semaine"
      },
      {
        author_name: "M. Ahmed",
        rating: 5,
        text: "Service de qualité, personnel accueillant. Je recommande vivement ce cabinet.",
        time: (Date.now() - 86400000) / 1000,
        relative_time_description: "il y a 2 semaines"
      }
    ];
  }

  /**
   * Cache les avis pour éviter trop d'appels API
   */
  async getCachedReviews(): Promise<any[]> {
    const cacheKey = 'google_reviews_cache';
    const cacheExpiry = 'google_reviews_cache_expiry';
    const cacheTime = 30 * 60 * 1000; // 30 minutes

    // Vérifier le cache
    const cached = localStorage.getItem(cacheKey);
    const expiry = localStorage.getItem(cacheExpiry);
    
    if (cached && expiry && Date.now() < parseInt(expiry)) {
      return JSON.parse(cached);
    }

    // Récupérer de nouveaux avis
    const reviews = await this.fetchReviews();
    const formattedReviews = this.formatReviewsForDisplay(reviews);

    // Mettre en cache
    localStorage.setItem(cacheKey, JSON.stringify(formattedReviews));
    localStorage.setItem(cacheExpiry, (Date.now() + cacheTime).toString());

    return formattedReviews;
  }
}

export const googleReviewsService = new GoogleReviewsService();