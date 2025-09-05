import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium">Este site usa cookies</span> para melhorar sua experiência de navegação. 
                Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como você interage conosco.
              </p>
              <a 
                href="#" 
                className="text-xs text-primary hover:underline mt-1 inline-block"
                onClick={(e) => e.preventDefault()}
              >
                Saiba mais sobre nossa política de cookies
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              onClick={rejectCookies}
              className="text-sm"
              data-testid="button-reject-cookies"
            >
              Rejeitar
            </Button>
            <Button 
              size="sm"
              onClick={acceptCookies}
              className="gradient-bg text-white text-sm"
              data-testid="button-accept-cookies"
            >
              Aceitar
            </Button>
            <button
              onClick={rejectCookies}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
              aria-label="Fechar banner de cookies"
              data-testid="button-close-cookies"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}