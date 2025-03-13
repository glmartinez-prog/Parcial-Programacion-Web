import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "login": {
          "title": "Login",
          "placeholder": "Password",
          "button": "Sign In",
          "error": "Password must be 6-8 characters",
          "success": "Login successful!"
        },
        "home": {
          "title": "Home",
          "welcome": "Welcome to the homepage"
        },
        "detail": {
          "title": "Detail",
          "gallery": "Image Gallery"
        }
      }
    },
    es: {
      translation: {
        "login": {
          "title": "Inicio de Sesión",
          "placeholder": "Contraseña",
          "button": "Ingresar",
          "error": "La contraseña debe tener entre 6 y 8 caracteres",
          "success": "¡Inicio de sesión exitoso!"
        },
        "home": {
          "title": "Inicio",
          "welcome": "Bienvenido a la página principal"
        },
        "detail": {
          "title": "Detalle",
          "gallery": "Galería de Imágenes"
        }
      }
    }
  },
  lng: 'es',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;