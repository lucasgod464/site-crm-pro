import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Check } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeatures = () => {
    const element = document.querySelector("#features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/20 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-slow"></span>
              Sistema ArsenalCache | White Label
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tenha seu próprio sistema de 
              <span className="text-gradient block">CRM completo</span>
              para gestão de clientes
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sem limites de usuários e contatos, para gerenciar relacionamentos, automações e vendas no modelo SAAS com sua própria marca.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg"
                className="gradient-bg text-primary-foreground px-8 py-4 text-lg transition-all transform hover:scale-105 hover:shadow-xl"
                onClick={scrollToContact}
                data-testid="button-demo-hero"
              >
                Solicitar Demonstração
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border bg-card text-foreground px-8 py-4 text-lg transition-all hover:bg-accent/10 hover:border-primary"
                onClick={scrollToFeatures}
                data-testid="button-features-hero"
              >
                Ver Funcionalidades
              </Button>
            </div>
            
            <div className="flex items-center flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Instalação Pela Nosso Equipe
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Suporte técnico dedicado
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                7 dias grátis
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl transform rotate-6"></div>
              <div className="relative bg-card border border-border rounded-2xl p-1 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                  <div className="aspect-video rounded-xl overflow-hidden" data-testid="video-demo">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/BSCEediVdsg"
                      title="ArsenalCache CRM Pro - Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
