import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function Support() {
  const supportFeatures = [
    "Instalação gratuita no seu servidor",
    "Suporte por ticket e WhatsApp",
    "Atualizações regulares incluídas",
    "Consultoria para otimização",
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/20 mb-6">
              Helpdesk exclusivo com time de especialistas
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Suporte técnico dedicado 
              <span className="text-gradient block">sempre que precisar</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende sua instalação, tire dúvidas, reporte incidentes e sugira melhorias. De segunda à sexta, das 08h às 18h.
            </p>
            
            <div className="space-y-4 mb-8">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="gradient-bg text-primary-foreground px-8 py-4 text-lg transition-all transform hover:scale-105 hover:shadow-xl"
              onClick={scrollToContact}
              data-testid="button-support"
            >
              Falar com Suporte
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Customer support team" 
              className="relative rounded-2xl shadow-2xl w-full" 
              data-testid="img-support-team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
