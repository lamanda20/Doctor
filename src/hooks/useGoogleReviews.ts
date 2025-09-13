import { useState, useEffect, useCallback } from 'react';
import { googlePlacesApi, type GoogleReview } from '../services/googlePlacesApi';

interface UseGoogleReviewsState {
  reviews: GoogleReview[];
  loading: boolean;
  error: string | null;
  placeStats: { rating: number; totalReviews: number } | null;
}

interface UseGoogleReviewsReturn extends UseGoogleReviewsState {
  refreshReviews: () => Promise<void>;
  isConfigured: boolean;
}

/**
 * Hook pour gérer les avis Google Places
 * Fournit les avis, l'état de chargement, et les fonctions de rafraîchissement
 */
export const useGoogleReviews = (): UseGoogleReviewsReturn => {
  const [state, setState] = useState<UseGoogleReviewsState>({
    reviews: [],
    loading: true,
    error: null,
    placeStats: null,
  });

  // Vérifier si l'API est configurée
  const isConfigured = Boolean(
    import.meta.env.VITE_GOOGLE_PLACES_API_KEY && 
    import.meta.env.VITE_GOOGLE_PLACE_ID
  );

  /**
   * Charge les avis depuis l'API Google Places
   */
  const loadReviews = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      // Charger les avis et les statistiques en parallèle
      const [reviews, placeStats] = await Promise.all([
        googlePlacesApi.getReviews(),
        googlePlacesApi.getPlaceStats(),
      ]);

      setState({
        reviews,
        placeStats,
        loading: false,
        error: null,
      });

    } catch (error) {
      console.error('Erreur lors du chargement des avis Google:', error);
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue',
      }));
    }
  }, []);

  /**
   * Force le rafraîchissement des avis
   */
  const refreshReviews = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const [reviews, placeStats] = await Promise.all([
        googlePlacesApi.refreshReviews(),
        googlePlacesApi.getPlaceStats(),
      ]);

      setState({
        reviews,
        placeStats,
        loading: false,
        error: null,
      });

    } catch (error) {
      console.error('Erreur lors du rafraîchissement des avis:', error);
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Erreur de rafraîchissement',
      }));
    }
  }, []);

  // Charger les avis au montage du composant
  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  // Rafraîchir automatiquement toutes les 30 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      if (!state.loading) {
        loadReviews();
      }
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, [loadReviews, state.loading]);

  return {
    ...state,
    refreshReviews,
    isConfigured,
  };
};