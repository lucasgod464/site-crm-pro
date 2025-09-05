import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import arsenalLogo from "@assets/Sem título (11)_1757098339013.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { href: "#features", label: "Recursos" },
    { href: "#integrations", label: "Integrações" },
    { href: "#testimonials", label: "Casos" },
    { href: "#free-trial", label: "Teste Grátis" },
    { href: "#contact", label: "Contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src={arsenalLogo} 
              alt="ArsenalCache CRM Pro" 
              className="h-10 w-auto"
              data-testid="logo-image"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              className="gradient-bg text-primary-foreground hover:opacity-90 transition-all transform hover:scale-105"
              data-testid="button-demo-nav"
              onClick={() => scrollToSection("#free-trial")}
            >
              Teste Grátis
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                {navigationLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                    data-testid={`nav-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                ))}
                <Button 
                  className="gradient-bg text-primary-foreground w-full"
                  onClick={() => scrollToSection("#free-trial")}
                  data-testid="button-demo-mobile"
                >
                  Teste Grátis
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
