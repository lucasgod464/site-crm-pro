import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, PlayCircle } from "lucide-react";

export function FreeTrial() {

  const benefits = [
    "Acesso completo por 30 dias",
    "Sem limitação de recursos",
    "Suporte técnico incluído",
    "Configuração gratuita",
  ];

  return (
    <section id="free-trial" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/20 mb-6">
              <PlayCircle className="w-4 h-4 mr-2" />
              Teste Grátis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experimente o ArsenalCache CRM Pro
              <span className="text-gradient block">gratuitamente</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Teste todas as funcionalidades do sistema por 30 dias sem compromisso. 
              Veja na prática como podemos transformar seu atendimento.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold mb-4">
                Comece Seu Teste 
                <span className="text-gradient block">Gratuito Agora</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                Acesse toda a plataforma por 30 dias sem compromisso e veja na prática como transformar seu atendimento.
              </p>
              
              <Button 
                size="lg"
                className="gradient-bg text-primary-foreground px-12 py-6 text-xl font-semibold transition-all transform hover:scale-105 hover:shadow-2xl"
                data-testid="button-start-trial"
              >
                <PlayCircle className="w-6 h-6 mr-3" />
                Iniciar Teste Grátis
              </Button>
              
              <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Cancelamento gratuito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}