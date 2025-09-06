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
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group cursor-pointer" data-testid="video-demo">
                    {/* Dashboard interface preview */}
                    <div className="absolute inset-4 bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                      <div className="h-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="ml-4 text-xs text-gray-500">ArsenalCache CRM Dashboard</div>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="h-4 bg-primary/20 rounded w-32"></div>
                          <div className="h-6 bg-primary rounded w-16"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-12 bg-primary/10 rounded"></div>
                          <div className="h-12 bg-accent/10 rounded"></div>
                          <div className="h-12 bg-primary/10 rounded"></div>
                        </div>
                        <div className="h-24 bg-gradient-to-r from-primary/5 to-accent/5 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all">
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
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
