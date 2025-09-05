import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export function Comparison() {
  const otherSystemsFeatures = [
    "Você fica na mão de um servidor externo",
    "Funções e integrações limitadas",
    "Fica mais caro de acordo com a quantidade de conexões",
    "Sem flexibilidade de ajustes no front",
  ];

  const otherSystemsPricing = [
    { plan: "Plano de 25 conexões", price: "R$ 10.800 / ano" },
    { plan: "Plano de 50 conexões", price: "R$ 13.200 / ano" },
    { plan: "Plano de 100 conexões", price: "R$ 18.000 / ano" },
  ];

  const arsenalFeatures = [
    "Nossa equipe instala o sistema na infraestrutura ArsenalCache",
    "Sistema estável com atualizações frequentes",
    "Módulo SAAS para gestão e revenda de múltiplas contas",
    "Suporte técnico de segunda à sexta",
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Você não precisa se preocupar com 
            <span className="text-gradient block">limitações de plano</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Você terá acesso ilimitado adquirindo uma licença única
          </p>
        </div>
        
        <div className="flex justify-center max-w-5xl mx-auto">
          {/* ArsenalCache CRM Pro */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="gradient-bg text-white px-6 py-2 text-sm font-medium">
                RECOMENDADO
              </Badge>
            </div>
            
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gradient">ArsenalCache CRM Pro</h3>
              <div className="space-y-4 mb-8">
                {arsenalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 mb-8">
                <Card className="text-center p-6 bg-card border border-primary/20">
                  <CardContent className="p-0">
                    <div className="text-sm text-muted-foreground mb-2">Plano único, sem limites</div>
                    <div className="text-4xl font-bold text-gradient mb-2" data-testid="price-arsenal">R$ 649,90</div>
                    <div className="text-muted-foreground">/ano</div>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                size="lg"
                className="w-full gradient-bg text-primary-foreground py-4 text-lg transition-all transform hover:scale-105 hover:shadow-xl"
                onClick={scrollToContact}
                data-testid="button-start-comparison"
              >
                Quero Começar Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
