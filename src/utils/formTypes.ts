// Types pour les formulaires
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Configuration pour react-hook-form
export const getFormConfig = <T>() => ({
  mode: 'onChange' as const,
  defaultValues: {} as T
});
